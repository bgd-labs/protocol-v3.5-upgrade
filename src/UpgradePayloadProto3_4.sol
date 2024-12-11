// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {ConfiguratorInputTypes as ConfiguratorInputTypesv3_3} from
  "v3.3/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";
import {IPoolConfigurator as IPoolConfiguratorv3_3} from "v3.3/contracts/interfaces/IPoolConfigurator.sol";

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
import {ATokenInstanceGHO} from "./ATokenInstanceGHO.sol";

/**
 * @title UpgradePayloadProto3_4
 * @notice This contract is used to upgrade the protocol to version 3.4.
 * @author BGD Labs
 */
contract UpgradePayloadProto3_4 {
  IPool public immutable POOL_IMPL;
  address public immutable POOL_CONFIGURATOR_IMPL;
  address public immutable A_TOKEN_IMPL;
  address public immutable V_TOKEN_IMPL;
  address public immutable FACILITATOR;

  // TODO: refactor to use struct
  constructor(
    IPool poolImpl,
    address poolConfiguratorImpl,
    address aTokenImpl,
    address vTokenImpl,
    address ghoFacilitator
  ) {
    POOL_IMPL = poolImpl;
    POOL_CONFIGURATOR_IMPL = poolConfiguratorImpl;
    A_TOKEN_IMPL = aTokenImpl;
    V_TOKEN_IMPL = vTokenImpl;
    FACILITATOR = ghoFacilitator;
  }

  function execute() external {
    // 1. upgrade the aToken implementation with a custom function that allows, supplying & burning GHO
    ConfiguratorInputTypesv3_3.UpdateATokenInput memory aTokenUpdate = ConfiguratorInputTypesv3_3.UpdateATokenInput({
      asset: AaveV3EthereumAssets.GHO_UNDERLYING,
      implementation: A_TOKEN_IMPL,
      treasury: address(AaveV3Ethereum.COLLECTOR),
      incentivesController: AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER,
      params: "",
      name: "Aave Ethereum GHO",
      symbol: "aEthGHO"
    });
    IPoolConfiguratorv3_3(address(AaveV3Ethereum.POOL_CONFIGURATOR)).updateAToken(aTokenUpdate);

    // 2. Initialize new facilitator with levels of previous facilitator & give risk admin role
    IAccessControl(address(AaveV3Ethereum.ACL_MANAGER)).grantRole(
      AaveV3Ethereum.ACL_MANAGER.RISK_ADMIN_ROLE(), FACILITATOR
    );
    (uint256 capacity, uint256 level) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).addFacilitator(
      FACILITATOR, "ProtoGhoDirectMinter", uint128(capacity)
    );
    // 3. mint and supply GHO to the pool
    GhoDirectMinter(FACILITATOR).mintAndSupply(level);

    // 4. call the `resolveFacilitator` function on the aToken to burn the underlying GHO, in turn reducing level to 0
    ATokenInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).resolveFacilitator(level);
    // 5. remove the old facilitator
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).removeFacilitator(AaveV3EthereumAssets.GHO_A_TOKEN);

    /**
     *  Until this point vAcc is disabled on GHO, so virtualBalance is 0, while the aToken supply is equal to the level
     */

    // 6. upgrade to v3.4
    // activates virtual accounting for GHO
    AaveV3Ethereum.POOL_ADDRESSES_PROVIDER.setPoolImpl(address(POOL_IMPL));
    AaveV3Ethereum.POOL_ADDRESSES_PROVIDER.setPoolConfiguratorImpl(POOL_CONFIGURATOR_IMPL);

    // 7. set reserve factor to 100% so all fee is accrued to treasury and index stays at 1
    AaveV3Ethereum.POOL_CONFIGURATOR.setReserveFactor(AaveV3EthereumAssets.GHO_UNDERLYING, 100_00);

    // 8. set a supply cap so noone can supply, as 0 currently is unlimited
    AaveV3Ethereum.POOL_CONFIGURATOR.setSupplyCap(AaveV3EthereumAssets.GHO_UNDERLYING, 1);

    // 9. upgrade the variable debt token to the default implementation (+ noop hook)
    ConfiguratorInputTypes.UpdateDebtTokenInput memory vTokenUpdate = ConfiguratorInputTypes.UpdateDebtTokenInput({
      asset: AaveV3EthereumAssets.GHO_UNDERLYING,
      implementation: V_TOKEN_IMPL,
      params: "",
      name: "Aave Ethereum Variable Debt GHO",
      symbol: "variableDebtEthGHO"
    });
    AaveV3Ethereum.POOL_CONFIGURATOR.updateVariableDebtToken(vTokenUpdate);

    // TODO: for taking the full potential of the new v3.4 features, all a and v tokens should be upgraded to the new implementation
  }
}
