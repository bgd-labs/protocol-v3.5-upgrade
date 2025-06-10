# Aave V3.4 Upgrade Process

This document outlines the technical process for upgrading the Aave V3 protocol from version 3.3 to version 3.4 across various networks.

The upgrade is executed via specialized `UpgradePayload` contracts deployed on each network. A specific version, `UpgradePayloadMainnet`, handles additional steps required for the Ethereum Mainnet due to the GHO token migration.

## Core Components of the Upgrade

1.  **New Implementations:** New implementations for the `Pool`, `PoolConfigurator`, `AToken`, `VariableDebtToken`, and `PoolDataProvider` contracts are deployed. These incorporate the v3.4 features and optimizations.
2.  **Custom Initializers:** Special logic (`CustomInitialize.sol`) is embedded within the new `Pool` implementations (`PoolInstanceWithCustomInitialize`, `L2PoolInstanceWithCustomInitialize`) to handle storage slot migrations during the upgrade. A custom `PoolConfigurator` (`PoolConfiguratorWithCustomInitialize`) is used to capture state before the main pool upgrade.
3.  **GHO Specific Contracts (Mainnet):** Custom implementations for `aGHO` (`ATokenMainnetInstanceGHO`) and `vGHO` (`VariableDebtTokenMainnetInstanceGHO`) are used during the Mainnet upgrade to facilitate the GHO facilitator migration and clean up deprecated storage slots. A new `GhoDirectMinter` contract is deployed to take over GHO facilitation from the old `aGHO`.
4.  **Upgrade Payloads:** `UpgradePayload` (for most networks) and `UpgradePayloadMainnet` (for Ethereum Mainnet) contain the sequenced steps to orchestrate the upgrade.
5.  **Deployment Scripts:** Forge scripts (`Deploy.s.sol`) are used to deterministically deploy all necessary new implementation contracts and the corresponding upgrade payload contract for each network.

## Key Migration and Initialization Steps

Several changes in v3.4 require specific actions during the upgrade process:

1.  **Storage Slot Migration (`virtualUnderlyingBalance`):**

    - In v3.3, reserves had an `unbacked` storage slot that was unused. In v3.4, this feature is removed.
    - The `virtualUnderlyingBalance` slot (previously `__deprecatedVirtualUnderlyingBalance`) is moved into the storage slot formerly occupied by `unbacked` for gas optimization.
    - **Action:** The `initialize` function within the new `Pool` implementations (`PoolInstanceWithCustomInitialize`, `L2PoolInstanceWithCustomInitialize`), using the `CustomInitialize._initialize` library function, iterates through all reserves upon the first initialization after the upgrade. It copies the value from the old `__deprecatedVirtualUnderlyingBalance` slot to the new `virtualUnderlyingBalance` slot and zeroes out the old slot.

2.  **Flash Loan Premium Capture:**

    - The `FLASHLOAN_PREMIUM_TO_PROTOCOL` becomes a constant (`100_00`) in the v3.4 `Pool` implementation.
    - **Action:** The `PoolConfiguratorWithCustomInitialize` implementation, which is set _before_ the Pool is upgraded, reads the _old_ dynamic value from the v3.3 `Pool` via `_pool.FLASHLOAN_PREMIUM_TO_PROTOCOL()` during its `initialize` function. It emits an event (`FlashloanPremiumToProtocolUpdated`) if this value differs from the new constant value. This ensures the old value is recorded before it becomes inaccessible.

3.  **Deprecated Storage Cleanup (GHO Tokens on Mainnet):**
    - The v3.3 `aGHO` and `vGHO` contracts contained specific storage variables (`ghoVariableDebtToken`, `ghoTreasury` in aToken; `ghoAToken`, `discountToken`, `discountRateStrategy` in vToken) that are not present in standard tokens or the v3.4 GHO tokens.
    - **Action:**
      - The custom `ATokenMainnetInstanceGHO` implementation's `resolveFacilitator` function (called during the GHO migration) explicitly deletes the deprecated aToken storage slots.
      - The custom `VariableDebtTokenMainnetInstanceGHO` implementation's `initialize` function explicitly deletes the deprecated vToken storage slots.
      - This cleanup prevents potential storage collisions if future Aave versions add new variables at these storage slots for standard tokens.

## General Upgrade Sequence (via `UpgradePayload`)

This sequence applies to most networks (Polygon, Optimism, Arbitrum, etc.).

1.  **Upgrade PoolConfigurator Implementation:** The `PoolConfigurator` contract is updated to the new `PoolConfiguratorWithCustomInitialize` implementation. This is done first to ensure compatibility with v3.4 interfaces and the logic needed for subsequent steps (like token updates). The `initialize` function of this new configurator captures the old flash loan premium.
2.  **Upgrade Pool Implementation:** The `Pool` contract is updated to the new `PoolInstanceWithCustomInitialize` implementation (or `L2PoolInstanceWithCustomInitialize` on L2 networks). The `initialize` function of this new pool handles the `virtualUnderlyingBalance` storage migration.
3.  **Set New PoolDataProvider:** The `PoolAddressesProvider` is updated to point to the new `AaveProtocolDataProvider` implementation.
4.  **Update AToken/VariableDebtToken Implementations:** The payload iterates through all reserves listed in the `Pool`:
    - For each reserve, it calls `POOL_CONFIGURATOR.updateAToken` to upgrade the reserve's AToken proxy to the new standard `ATokenInstance` implementation (`A_TOKEN_IMPL`).
    - It then calls `POOL_CONFIGURATOR.updateVariableDebtToken` to upgrade the reserve's VariableDebtToken proxy to the new standard `VariableDebtTokenInstance` implementation (`V_TOKEN_IMPL`).

## Ethereum Mainnet Upgrade Sequence (via `UpgradePayloadMainnet`)

This sequence includes the general steps plus specific GHO migration steps, executed in a precise order after the `UpgradePayloadMainnet` contract is deployed.

**Pre-Execution Step (Payload Constructor):**

- **Deploy and Initialize New Facilitator:** The new `GhoDirectMinter` proxy contract (`FACILITATOR`) is deployed and initialized using the `TransparentProxyFactory` within the `constructor` of the `UpgradePayloadMainnet` contract. Its implementation, admin, owner (Executor LVL 1), and council are set during this deployment process.

**Execution Steps (Inside `execute()` function):**

0. **Cover existing GHO deficit:** Existing `GHO` deficit is covered via the deficit steward.
1. **Update Deficit Steward Allowance:** The payload checks for any allowance of the underlying `GHO` token granted to the `DEFICIT_OFFSET_CLINIC_STEWARD`. If an allowance exists, it is revoked for the underlying `GHO`, and a new approval for the same amount is granted for the `GHO AToken` (`aGHO`). This adapts the deficit coverage mechanism to utilize aTokens instead of the underlying GHO.
2. **Grant Facilitator Risk Admin:** The `ACL_MANAGER` grants the `RISK_ADMIN` role to the `GhoDirectMinter` contract (`FACILITATOR`). This allows `FACILITATOR` to call `setSupplyCap`.
3. **Add New Facilitator to GhoToken:**
   - The current GHO bucket capacity and level of the old `aGHO` facilitator are fetched from the `GhoToken`.
   - The new `GhoDirectMinter` (`FACILITATOR`) is added as a GHO facilitator to the `GhoToken` contract (`IGhoToken(...).addFacilitator(...)`) using the fetched capacity.
4. **Distribute Old aGHO Fees:** `IOldATokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).distributeFeesToTreasury()` is called to send any accumulated GHO fees in the old aToken contract to the treasury. This is a required step to make the balance of the `GHO_A_TOKEN` equal to zero.
5. **Upgrade PoolConfigurator Implementation:** The `PoolConfigurator` contract is updated to the new `PoolConfiguratorWithCustomInitialize` implementation.
6. **Upgrade aGHO to Custom Intermediate Implementation:** `POOL_CONFIGURATOR.updateAToken` is called for the GHO asset, setting its implementation to the custom `ATokenMainnetInstanceGHO` (`A_TOKEN_GHO_IMPL`). This implementation includes the `resolveFacilitator` function and storage cleanup logic.
7. **Mint and Supply by New Facilitator:** The `mintAndSupply` function of the new `GhoDirectMinter` (`FACILITATOR`) is called, minting GHO equal to the old `aGHO` facilitator's `level` and supplying it to the Aave pool, receiving `aGHO` tokens in return.
8. **Resolve Old Facilitator:** `IATokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_A_TOKEN).resolveFacilitator(level)` is called. This function on the _custom_ `aGHO` implementation burns the underlying GHO token amount equal to `level` (balancing the mint in step 6) and clears the deprecated storage slots within the `aGHO` contract proxy's storage.
9. **Remove Old Facilitator:** `IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).removeFacilitator(AaveV3EthereumAssets.GHO_A_TOKEN)` is called. Since its level is now 0 (due to the burn in step 7), the old `aGHO` contract is successfully removed as a facilitator from the `GhoToken`.
10. **Set GHO Reserve Factor:** `POOL_CONFIGURATOR.setReserveFactor` sets GHO's reserve factor to 100% (`10000`).
11. **Set GHO Supply Cap:** `POOL_CONFIGURATOR.setSupplyCap` sets GHO's supply cap to 1 wei, effectively preventing user GHO deposits.
12. **Execute Default Upgrade Steps:** The `_defaultUpgrade()` function is called, performing steps 2, 3, and 4 from the "General Upgrade Sequence" above (Upgrade Pool Implementation, Set New PoolDataProvider, Update AToken/VariableDebtToken Implementations for standard tokens), skipping GHO and AAVE tokens as specified by the overridden `_needToUpdateReserve` function.
13. **Upgrade vGHO to Custom Implementation:** `POOL_CONFIGURATOR.updateVariableDebtToken` is called for GHO, setting its implementation to the custom `VariableDebtTokenMainnetInstanceGHO` (`V_TOKEN_GHO_IMPL`). This version includes storage cleanup and a no-op `updateDiscountDistribution` function for compatibility.
14. **Upgrade aAAVE Implementation:** `POOL_CONFIGURATOR.updateAToken` updates the AAVE AToken to the `ATokenWithDelegationInstance` (`A_TOKEN_WITH_DELEGATION_IMPL`).
15. **Upgrade vAAVE Implementation:** `POOL_CONFIGURATOR.updateVariableDebtToken` updates the AAVE VariableDebtToken to the standard `VariableDebtTokenInstance` (`V_TOKEN_IMPL`).
16. **Enable GHO Flash Loans:** `POOL_CONFIGURATOR.setReserveFlashLoaning` is called to enable flash loans for the GHO reserve.
17. **Mint GHO to the Pool:** The `mintAndSupply` function is called once again to mint the remaining (non-borrowed) capacity as supply to the pool.
18. **Add Steward Permissions:** `setControlledFacilitator` is called on the bucket facilitator to migrate permissions to the new facilitator.

### Libraries

For non-zksync networks, the following libraries are used:

`FOUNDRY_LIBRARIES=src/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x5047AD5e603Ec4a2AB58aaE2321C07D8f4De6a8a,src/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0x6E2aFD57a161d12f34f416c29619BFeAcAC8AA18,src/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0x7fcE69A2bA3e78EeB36798cde2c94C70f3A043af,src/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0x4fDB5d360f946CFD25b14F346f748204c0C6a2F4,src/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x5934b283f7120500253f277CCcF4521528aE34D6,src/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0x564c42578A1b270EaE16c25Da39d901245881d1F,src/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x1eF34B91afC368174F579067D1DB94325cDC7946`
