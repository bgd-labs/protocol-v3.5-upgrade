// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";
import {
  IDefaultInterestRateStrategyV2,
  DefaultReserveInterestRateStrategyV2
} from "aave-v3-origin/contracts/misc/DefaultReserveInterestRateStrategyV2.sol";
import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {MiscEthereum} from "aave-address-book/MiscEthereum.sol";
import {
  ITransparentProxyFactory,
  ProxyAdmin
} from "solidity-utils/contracts/transparent-proxy/interfaces/ITransparentProxyFactory.sol";
import {IAccessControl} from "openzeppelin-contracts/contracts/access/IAccessControl.sol";
import {GhoDirectMinter} from "gho-direct-minter/GhoDirectMinter.sol";
import {IGhoToken} from "gho-direct-minter/interfaces/IGhoToken.sol";
import {ATokenInstance} from "./ATokenInstance.sol";

contract UpgradePayload3_4 {
  IPool public immutable POOL_IMPL;
  address public immutable A_TOKEN_IMPL;
  address public immutable V_TOKEN_IMPL;
  address public immutable COUNCIL;

  constructor(IPool poolImpl, address aTokenImpl, address vTokenImpl) {
    POOL_IMPL = poolImpl;
    A_TOKEN_IMPL = aTokenImpl;
    V_TOKEN_IMPL = vTokenImpl;
    COUNCIL = address(100);
  }

  function execute() external {
    // Create new facilitator
    address facilitatorImpl = address(
      new GhoDirectMinter(
        AaveV3Ethereum.POOL_ADDRESSES_PROVIDER, address(AaveV3Ethereum.COLLECTOR), AaveV3EthereumAssets.GHO_UNDERLYING
      )
    );
    address facilitator = ITransparentProxyFactory(MiscEthereum.TRANSPARENT_PROXY_FACTORY).create(
      facilitatorImpl,
      ProxyAdmin(MiscEthereum.PROXY_ADMIN),
      abi.encodeWithSelector(GhoDirectMinter.initialize.selector, address(this), COUNCIL)
    );
    // give risk admin role to avoid cap limits
    IAccessControl(address(AaveV3Ethereum.ACL_MANAGER)).grantRole(
      AaveV3Ethereum.ACL_MANAGER.RISK_ADMIN_ROLE(), facilitator
    );
    // clone existing facilitator config
    (uint256 capacity, uint256 level) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).addFacilitator(
      facilitator, "ProtoGhoDirectMinter", uint128(capacity)
    );

    // upgrade the aToken, so that supply is allowed
    ConfiguratorInputTypes.UpdateATokenInput memory aTokenUpdate = ConfiguratorInputTypes.UpdateATokenInput({
      asset: AaveV3EthereumAssets.GHO_UNDERLYING,
      treasury: address(AaveV3Ethereum.COLLECTOR),
      incentivesController: AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER,
      implementation: A_TOKEN_IMPL,
      params: "",
      name: "hello",
      symbol: "yay"
    });
    AaveV3Ethereum.POOL_CONFIGURATOR.updateAToken(aTokenUpdate);

    // supply the appropriate amount of aGHO
    GhoDirectMinter(facilitator).mintAndSupply(level);
    // burn the underlying GHO via the existing facilitator
    ATokenInstance(AaveV3EthereumAssets.GHO_A_TOKEN).resolveFacilitator(level);
    // remove the existing facilitator
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).removeFacilitator(AaveV3EthereumAssets.GHO_A_TOKEN);

    // update pool impl. Enables virtual accounting on GHO
    AaveV3Ethereum.POOL_ADDRESSES_PROVIDER.setPoolImpl(address(POOL_IMPL));

    // set reserve factor to 100% so all fee is accrued to treasury and index stays at 1
    AaveV3Ethereum.POOL_CONFIGURATOR.setReserveFactor(AaveV3EthereumAssets.GHO_UNDERLYING, 100_00);

    // set a supply cap so noone can supply, as 0 currently is unlimited
    AaveV3Ethereum.POOL_CONFIGURATOR.setSupplyCap(AaveV3EthereumAssets.GHO_UNDERLYING, 1);

    ConfiguratorInputTypes.UpdateDebtTokenInput memory vTokenUpdate = ConfiguratorInputTypes.UpdateDebtTokenInput({
      asset: AaveV3EthereumAssets.GHO_UNDERLYING,
      incentivesController: AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER,
      implementation: V_TOKEN_IMPL,
      params: "",
      name: "hello",
      symbol: "yay"
    });
    AaveV3Ethereum.POOL_CONFIGURATOR.updateVariableDebtToken(vTokenUpdate);
  }
}
