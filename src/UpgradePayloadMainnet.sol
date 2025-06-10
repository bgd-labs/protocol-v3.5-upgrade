// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {ITransparentProxyFactory} from
  "solidity-utils/contracts/transparent-proxy/interfaces/ITransparentProxyFactory.sol";

import {IERC20Metadata} from "openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";
import {IncentivizedERC20} from "aave-v3-origin/contracts/protocol/tokenization/base/IncentivizedERC20.sol";

import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {MiscEthereum} from "aave-address-book/MiscEthereum.sol";
import {GovernanceV3Ethereum} from "aave-address-book/GovernanceV3Ethereum.sol";
import {GhoEthereum} from "aave-address-book/GhoEthereum.sol";
import {UmbrellaEthereum} from "aave-address-book/UmbrellaEthereum.sol";

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

interface IDeficitSteward {
  /**
   * @notice Pulls funds to resolve `deficitOffset` on the maximum possible amount.
   * @dev If current allowance or treasury balance is less than the `deficitOffsetToCover` the function will revert.
   * @param reserve Reserve address
   * @return The amount of `deficitOffset` eliminated
   */
  function coverDeficitOffset(address reserve) external returns (uint256);

  function grantRole(bytes32 role, address account) external;
}

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

  bytes32 public constant FINANCE_COMMITTEE_ROLE = keccak256("FINANCE_COMITTEE_ROLE");

  address public immutable A_TOKEN_GHO_IMPL;
  address public immutable V_TOKEN_GHO_IMPL;

  address public immutable A_TOKEN_WITH_DELEGATION_IMPL;

  address public immutable FACILITATOR; // New GhoDirectMinter instance

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
    // 0. cover the existing reserve deficit for GHO
    uint256 currentDeficitGHO = AaveV3Ethereum.POOL.getReserveDeficit(AaveV3EthereumAssets.GHO_UNDERLYING);
    if (currentDeficitGHO != 0) {
      // granting the FINANCE_COMITTEE_ROLE to the short executor (this), as it's required to cover the deficit
      // the role is not revoked, as generally it makes sense that the short executor can use the steward
      IDeficitSteward(UmbrellaEthereum.DEFICIT_OFFSET_CLINIC_STEWARD).grantRole(FINANCE_COMMITTEE_ROLE, address(this));
      IDeficitSteward(UmbrellaEthereum.DEFICIT_OFFSET_CLINIC_STEWARD).coverDeficitOffset(
        AaveV3EthereumAssets.GHO_UNDERLYING
      );
      require(AaveV3Ethereum.POOL.getReserveDeficit(AaveV3EthereumAssets.GHO_UNDERLYING) == 0, "Deficit not covered");
    }

    // 1. Approve the Deficit Offset Clinic Steward to spend GHO ATokens instead of underlying
    uint256 allowanceToDeficitOffsetClinicSteward = IERC20(AaveV3EthereumAssets.GHO_UNDERLYING).allowance(
      address(this), UmbrellaEthereum.DEFICIT_OFFSET_CLINIC_STEWARD
    );
    if (allowanceToDeficitOffsetClinicSteward > 0) {
      IERC20(AaveV3EthereumAssets.GHO_UNDERLYING).approve(UmbrellaEthereum.DEFICIT_OFFSET_CLINIC_STEWARD, 0);

      IERC20(AaveV3EthereumAssets.GHO_A_TOKEN).approve(
        UmbrellaEthereum.DEFICIT_OFFSET_CLINIC_STEWARD, allowanceToDeficitOffsetClinicSteward
      );
    }

    // Initial GHO State:
    // - Scaled total supply of GHO AToken: 0
    // - GHO reserve's `virtualUnderlyingBalance`: 0
    // - GHO balance of the `GHO_A_TOKEN` contract: Some initial balance.

    // 2. Grant the `RISK_ADMIN` role to the new facilitator (`FACILITATOR`) to allow it to call
    //    the `setSupplyCap` function on the `PoolConfigurator`.
    AaveV3Ethereum.ACL_MANAGER.addRiskAdmin(FACILITATOR);

    // 3. Add the new `GhoDirectMinter` (`FACILITATOR`) as a GHO facilitator, initializing it with the bucket capacity
    //    of the previous facilitator (the GHO AToken).
    (uint256 capacityFromOldFacilitator, uint256 levelFromOldFacilitator) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).addFacilitator(
      FACILITATOR, "CoreGhoDirectMinter", uint128(capacityFromOldFacilitator)
    );

    // The `levelFromOldFacilitator` represents the GHO principal the old GHO AToken facilitator minted.
    // Any GHO held directly by the GHO_A_TOKEN contract needs to be swept to the treasury.
    // This ensures the GHO_A_TOKEN contract has a zero GHO balance.

    // 4. Transfer the GHO balance held by the old `GHO_A_TOKEN` contract to the treasury.
    IOldATokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).distributeFeesToTreasury();
    // GHO State After Step 3:
    // - Scaled total supply of GHO AToken: 0.
    // - GHO reserve's `virtualUnderlyingBalance`: 0.
    // - GHO balance of the `GHO_A_TOKEN` contract: 0.

    // 5. Upgrade the `PoolConfigurator` to its new implementation. This is required to correctly upgrade
    //    the GHO AToken in the next step, as its `initialize` function might differ between v3.3 and v3.4.
    POOL_ADDRESSES_PROVIDER.setPoolConfiguratorImpl(POOL_CONFIGURATOR_IMPL);

    // 6. Upgrade the GHO AToken (`GHO_A_TOKEN`) to its new custom implementation (`A_TOKEN_GHO_IMPL` - ATokenMainnetInstanceGHO).
    //    Its `initialize` function (called by `updateAToken`) cleans its specific deprecated storage slots.
    POOL_CONFIGURATOR.updateAToken(
      ConfiguratorInputTypes.UpdateATokenInput({
        asset: AaveV3EthereumAssets.GHO_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.GHO_A_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.GHO_A_TOKEN).symbol(),
        implementation: A_TOKEN_GHO_IMPL,
        params: ""
      })
    );

    // 7. The new `GhoDirectMinter` (`FACILITATOR`) mints GHO (amount equal to `levelFromOldFacilitator`) to itself
    //    and then supplies this GHO to the (still v3.3) Aave Pool. In return, an equivalent amount of new GHO ATokens (aGHO)
    //    are minted to `FACILITATOR`. This supply operation transfers GHO to the `GHO_A_TOKEN` contract.
    //    The v3.3 Pool's internal GHO liquidity mechanisms are affected, but this does not change
    //    the `virtualUnderlyingBalance` slot.
    IGhoDirectMinter(FACILITATOR).mintAndSupply(levelFromOldFacilitator);
    // GHO State After Step 6:
    // - Scaled total supply of GHO AToken: `levelFromOldFacilitator`.
    // - GHO reserve's `virtualUnderlyingBalance`: 0.
    // - GHO balance of the `GHO_A_TOKEN` contract: `levelFromOldFacilitator`.

    // 8. Call `resolveFacilitator` on the custom GHO AToken (`A_TOKEN_GHO_IMPL` instance at `GHO_A_TOKEN` address).
    //    This burns underlying GHO (amount equal to `levelFromOldFacilitator`) from the `GHO_A_TOKEN` contract's balance.
    //    This balances the GHO total supply (from GhoToken's perspective) against the earlier mint by FACILITATOR
    //    and sets the GHO AToken's effective GHO backing to zero in its `GhoToken` facilitator record.
    IATokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).resolveFacilitator(levelFromOldFacilitator);
    // GHO State After Step 7:
    // - Scaled total supply of GHO AToken: `levelFromOldFacilitator`.
    // - GHO reserve's `virtualUnderlyingBalance`: 0.
    // - GHO balance of the `GHO_A_TOKEN` contract: 0.

    // 9. Remove the GHO AToken (as the old facilitator) from `GhoToken`'s facilitator list. Its `level` in `GhoToken` is now zero.
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).removeFacilitator(AaveV3EthereumAssets.GHO_A_TOKEN);

    // 10. Set GHO's reserve factor to 100% so all GHO interest income is accrued to the treasury.
    POOL_CONFIGURATOR.setReserveFactor(AaveV3EthereumAssets.GHO_UNDERLYING, 100_00);

    // 11. Set GHO's supply cap to 1 wei. This effectively prevents direct user deposits of GHO, as a cap of 0 previously signified 'unlimited'.
    POOL_CONFIGURATOR.setSupplyCap(AaveV3EthereumAssets.GHO_UNDERLYING, 1);

    // 12. Check if the UNI AToken has delegated its underlying UNI voting power. If so, reset the delegation to address(0).
    if (IDelegationToken(AaveV3EthereumAssets.UNI_UNDERLYING).delegates(AaveV3EthereumAssets.UNI_A_TOKEN) != address(0))
    {
      // This action requires the caller to have the "Pool Admin" role in the ACL.
      IDelegationAwareAToken(AaveV3EthereumAssets.UNI_A_TOKEN).delegateUnderlyingTo(address(0));
    }

    // 13. Execute the default v3.4 upgrade steps (updates Pool to `PoolInstanceWithCustomInitialize`, PoolDataProvider,
    //     and standard AToken/VariableDebtToken implementations).
    //     Inside `PoolInstanceWithCustomInitialize.initialize()`:
    //       - GHO-specific logic sets `accruedToTreasury` and `virtualAccActive=true`.
    //       - GHO reserve's `virtualUnderlyingBalance` is NOT explicitly set by this GHO-specific logic.
    _defaultUpgrade();
    // GHO State After Step 12:
    // - Scaled total supply of GHO AToken: `levelFromOldFacilitator`.
    // - GHO reserve's `virtualUnderlyingBalance`: 0.
    // - GHO balance of the `GHO_A_TOKEN` contract: 0.

    // 14. Upgrade the GHO VariableDebtToken (`GHO_V_TOKEN`) to its new custom implementation (`V_TOKEN_GHO_IMPL`).
    POOL_CONFIGURATOR.updateVariableDebtToken(
      ConfiguratorInputTypes.UpdateDebtTokenInput({
        asset: AaveV3EthereumAssets.GHO_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.GHO_V_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.GHO_V_TOKEN).symbol(),
        implementation: V_TOKEN_GHO_IMPL,
        params: ""
      })
    );

    // 15. Upgrade the AAVE AToken (`AAVE_A_TOKEN`) to the `ATokenWithDelegation` implementation (`A_TOKEN_WITH_DELEGATION_IMPL`).
    POOL_CONFIGURATOR.updateAToken(
      ConfiguratorInputTypes.UpdateATokenInput({
        asset: AaveV3EthereumAssets.AAVE_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.AAVE_A_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.AAVE_A_TOKEN).symbol(),
        implementation: A_TOKEN_WITH_DELEGATION_IMPL,
        params: ""
      })
    );

    // 16. Upgrade the AAVE VariableDebtToken (`AAVE_V_TOKEN`) to the standard `VariableDebtToken` implementation (`V_TOKEN_IMPL`).
    POOL_CONFIGURATOR.updateVariableDebtToken(
      ConfiguratorInputTypes.UpdateDebtTokenInput({
        asset: AaveV3EthereumAssets.AAVE_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.AAVE_V_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.AAVE_V_TOKEN).symbol(),
        implementation: V_TOKEN_IMPL,
        params: ""
      })
    );

    // 17. Enable flash loans for the GHO reserve.
    POOL_CONFIGURATOR.setReserveFlashLoaning({asset: AaveV3EthereumAssets.GHO_UNDERLYING, enabled: true});

    // 18. The new `GhoDirectMinter` (`FACILITATOR`) mints and supplies any remaining GHO bucket capacity (capacity - level) to the pool.
    if (capacityFromOldFacilitator > levelFromOldFacilitator) {
      IGhoDirectMinter(FACILITATOR).mintAndSupply(capacityFromOldFacilitator - levelFromOldFacilitator);
    }
    // GHO State After Step 17:
    // - Scaled total supply of GHO AToken: `capacityFromOldFacilitator`.
    // - GHO reserve's `virtualUnderlyingBalance`: `capacityFromOldFacilitator - levelFromOldFacilitator`.
    // - GHO balance of the `GHO_A_TOKEN` contract: `capacityFromOldFacilitator - levelFromOldFacilitator`.

    // 19. Migrate steward permissions for GHO bucket control.
    address[] memory vaults = new address[](1);
    vaults[0] = FACILITATOR;
    IGhoBucketSteward(GhoEthereum.GHO_BUCKET_STEWARD).setControlledFacilitator(vaults, true);
    vaults[0] = AaveV3EthereumAssets.GHO_A_TOKEN;
    IGhoBucketSteward(GhoEthereum.GHO_BUCKET_STEWARD).setControlledFacilitator(vaults, false);
  }

  function _needToUpdateReserve(address reserve) internal view virtual override returns (bool) {
    if (reserve == AaveV3EthereumAssets.GHO_UNDERLYING || reserve == AaveV3EthereumAssets.AAVE_UNDERLYING) {
      // GHO and AAVE tokens are handled by specific upgrade steps in this payload due to custom logic.
      return false;
    }
    return true;
  }
}
