// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {ITransparentProxyFactory} from
  "solidity-utils/contracts/transparent-proxy/interfaces/ITransparentProxyFactory.sol";

import {IERC20Metadata} from "openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";
import {IncentivizedERC20} from "aave-v3-origin/contracts/protocol/tokenization/base/IncentivizedERC20.sol";

import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {MiscEthereum} from "aave-address-book/MiscEthereum.sol";
import {GovernanceV3Ethereum} from "aave-address-book/GovernanceV3Ethereum.sol";
import {GhoEthereum} from "aave-address-book/GhoEthereum.sol";

import {IGhoDirectMinter} from "gho-direct-minter/interfaces/IGhoDirectMinter.sol";
import {GhoDirectMinter} from "gho-direct-minter/GhoDirectMinter.sol";
import {IGhoToken} from "gho-direct-minter/interfaces/IGhoToken.sol";

import {IDelegationToken} from "./interfaces/IDelegationToken.sol";
import {IDelegationAwareAToken} from "./interfaces/IDelegationAwareAToken.sol";
import {IATokenMainnetInstanceGHO} from "./interfaces/IATokenMainnetInstanceGHO.sol";
import {IOldATokenMainnetInstanceGHO} from "./interfaces/IOldATokenMainnetInstanceGHO.sol";
import {IVariableDebtTokenMainnetInstanceGHO} from "./interfaces/IVariableDebtTokenMainnetInstanceGHO.sol";
import {IGhoBucketSteward} from "./interfaces/IGhoBucketSteward.sol";

import {UpgradePayload} from "./UpgradePayload.sol";

/**
 * @title UpgradePayloadMainnet
 * @notice Upgrade payload for the ETH Mainnet network to upgrade the Aave v3.3 to v3.4
 * @author BGD Labs
 */
contract UpgradePayloadMainnet is UpgradePayload {
  struct ConstructorMainnetParams {
    IPoolAddressesProvider poolAddressesProvider;
    address poolDataProvider;
    address poolImpl;
    address poolConfiguratorImpl;
    address aTokenImpl;
    address vTokenImpl;
    address aTokenGhoImpl;
    address vTokenGhoImpl;
    address aTokenWithDelegationImpl;
    address ghoFacilitatorImpl;
    address council;
  }

  address public immutable A_TOKEN_GHO_IMPL;
  address public immutable V_TOKEN_GHO_IMPL;

  address public immutable A_TOKEN_WITH_DELEGATION_IMPL;

  address public immutable FACILITATOR;

  constructor(ConstructorMainnetParams memory params)
    UpgradePayload(
      ConstructorParams({
        poolAddressesProvider: params.poolAddressesProvider,
        poolDataProvider: params.poolDataProvider,
        poolImpl: params.poolImpl,
        poolConfiguratorImpl: params.poolConfiguratorImpl,
        aTokenImpl: params.aTokenImpl,
        vTokenImpl: params.vTokenImpl
      })
    )
  {
    IPool pool = IPool(params.poolAddressesProvider.getPool());

    // @note There is no `POOL` function in the IAToken interface
    if (
      IncentivizedERC20(params.aTokenGhoImpl).POOL() != pool || IncentivizedERC20(params.vTokenGhoImpl).POOL() != pool
        || IncentivizedERC20(params.aTokenWithDelegationImpl).POOL() != pool
    ) {
      revert WrongAddresses();
    }
    A_TOKEN_GHO_IMPL = params.aTokenGhoImpl;
    V_TOKEN_GHO_IMPL = params.vTokenGhoImpl;
    A_TOKEN_WITH_DELEGATION_IMPL = params.aTokenWithDelegationImpl;

    if (
      IGhoDirectMinter(params.ghoFacilitatorImpl).POOL() != pool
        || address(IGhoDirectMinter(params.ghoFacilitatorImpl).POOL_CONFIGURATOR())
          != params.poolAddressesProvider.getPoolConfigurator()
    ) {
      revert WrongAddresses();
    }
    FACILITATOR = ITransparentProxyFactory(MiscEthereum.TRANSPARENT_PROXY_FACTORY).create(
      params.ghoFacilitatorImpl,
      MiscEthereum.PROXY_ADMIN,
      abi.encodeWithSelector(GhoDirectMinter.initialize.selector, GovernanceV3Ethereum.EXECUTOR_LVL_1, params.council)
    );
  }

  function execute() external override {
    // 1. Give risk admin role to the new facilitator for accessing
    // the `setSupplyCap` function in the `PoolConfigurator` contract
    AaveV3Ethereum.ACL_MANAGER.addRiskAdmin(FACILITATOR);

    // 2. Initialize the new facilitator with levels of the previous facilitator
    (uint256 capacity, uint256 level) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).addFacilitator(FACILITATOR, "CoreGhoDirectMinter", uint128(capacity));

    // Right now there is the total supply of the `GHO_A_TOKEN` equals to zero
    // and also there is some GHO minted tokens by this aToken (variable `level`).
    //
    // We need to take into an account that there are some GHO tokens that the aToken contract
    // holds on its balance. Need to call the `distributeFeesToTreasury` function of the the old GHO aToken
    // to transfer this balance to the treasury. After this operation, the `GHO_A_TOKEN` will have
    // zero GHO balance.

    // 3. Transfer the current balance of the `GHO_A_TOKEN` to the treasury
    IOldATokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).distributeFeesToTreasury();

    // 4. Upgrade the POOL_CONFIGURATOR to the new version in order to be able to upgrade
    // the aToken (the initialize function for the v3.4 aToken is different from the v3.3)
    POOL_ADDRESSES_PROVIDER.setPoolConfiguratorImpl(POOL_CONFIGURATOR_IMPL);

    // 5. Upgrade the aToken of the GHO token to the new version in order to be able to
    // mint aTokens to the `GhoDirectMinter` contract
    POOL_CONFIGURATOR.updateAToken(
      ConfiguratorInputTypes.UpdateATokenInput({
        asset: AaveV3EthereumAssets.GHO_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.GHO_A_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.GHO_A_TOKEN).symbol(),
        implementation: A_TOKEN_GHO_IMPL,
        params: ""
      })
    );

    // 6. Mint and supply GHO to the pool
    // Need to do this before the v3.4 upgrade in order not to change the `virtualUnderlyingBalance` variable
    // in the Pool contract. Right now it equals to zero.
    IGhoDirectMinter(FACILITATOR).mintAndSupply(level);

    // 7. call the `resolveFacilitator` function on the aToken to burn the underlying GHO, in turn reducing level to 0
    IATokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).resolveFacilitator(level);

    // 8. remove the old facilitator
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).removeFacilitator(AaveV3EthereumAssets.GHO_A_TOKEN);

    // 9. set reserve factor to 100% so all fee is accrued to treasury and index stays at 1
    POOL_CONFIGURATOR.setReserveFactor(AaveV3EthereumAssets.GHO_UNDERLYING, 100_00);

    // 10. set a supply cap so noone can supply, as 0 currently is unlimited
    POOL_CONFIGURATOR.setSupplyCap(AaveV3EthereumAssets.GHO_UNDERLYING, 1);

    // 11. Check if the UNI AToken delegated his votes or not. If voted then remove it.
    if (IDelegationToken(AaveV3EthereumAssets.UNI_UNDERLYING).delegates(AaveV3EthereumAssets.UNI_A_TOKEN) != address(0))
    {
      // this must be done by user with the role "Pool Admin" in the ACL
      IDelegationAwareAToken(AaveV3EthereumAssets.UNI_A_TOKEN).delegateUnderlyingTo(address(0));
    }

    // 12. Make the normal v3.4 upgrade
    _defaultUpgrade();

    // 13. Upgrade the vToken of the GHO token to the new version
    POOL_CONFIGURATOR.updateVariableDebtToken(
      ConfiguratorInputTypes.UpdateDebtTokenInput({
        asset: AaveV3EthereumAssets.GHO_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.GHO_V_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.GHO_V_TOKEN).symbol(),
        implementation: V_TOKEN_GHO_IMPL,
        params: ""
      })
    );

    // 14. Upgrade the aToken of the AAVE token to the new version
    POOL_CONFIGURATOR.updateAToken(
      ConfiguratorInputTypes.UpdateATokenInput({
        asset: AaveV3EthereumAssets.AAVE_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.AAVE_A_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.AAVE_A_TOKEN).symbol(),
        implementation: A_TOKEN_WITH_DELEGATION_IMPL,
        params: ""
      })
    );

    // 15. Upgrade the vToken of the AAVE token to the new version
    POOL_CONFIGURATOR.updateVariableDebtToken(
      ConfiguratorInputTypes.UpdateDebtTokenInput({
        asset: AaveV3EthereumAssets.AAVE_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.AAVE_V_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.AAVE_V_TOKEN).symbol(),
        implementation: V_TOKEN_IMPL,
        params: ""
      })
    );

    // 16. Enable flashloans for GHO
    POOL_CONFIGURATOR.setReserveFlashLoaning({asset: AaveV3EthereumAssets.GHO_UNDERLYING, enabled: true});

    // 17. Mint supply on the instance
    if (capacity > level) {
      IGhoDirectMinter(FACILITATOR).mintAndSupply(capacity - level);
    }

    // 18. Allow risk council to control the bucket capacity
    address[] memory vaults = new address[](1);
    vaults[0] = FACILITATOR;
    IGhoBucketSteward(GhoEthereum.GHO_BUCKET_STEWARD).setControlledFacilitator(vaults, true);
    vaults[0] = AaveV3EthereumAssets.GHO_A_TOKEN;
    IGhoBucketSteward(GhoEthereum.GHO_BUCKET_STEWARD).setControlledFacilitator(vaults, false);
  }

  function _needToUpdateReserve(address reserve) internal view virtual override returns (bool) {
    if (reserve == AaveV3EthereumAssets.GHO_UNDERLYING || reserve == AaveV3EthereumAssets.AAVE_UNDERLYING) {
      return false;
    }

    return true;
  }
}
