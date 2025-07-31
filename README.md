# Aave V3.5 Upgrade Process

This document outlines the technical process for upgrading the Aave V3 protocol from version 3.4 to version 3.5 across various networks.

The upgrade is executed via specialized `UpgradePayload` contracts deployed on each network. A specific version, `UpgradePayloadMainnetCore`, handles additional steps required for the Ethereum Mainnet to manage the custom functionalities of GHO and AAVE tokens.

## Core Components of the Upgrade

1.  **New Implementations:** New implementations for the `Pool`, `AToken`, and `VariableDebtToken` contracts are deployed. These incorporate the v3.5 features and optimizations.
2.  **Upgrade Payloads:** `UpgradePayload` (for most networks) and `UpgradePayloadMainnetCore` (for Ethereum Mainnet) contain the sequenced steps to orchestrate the upgrade.
3.  **Deployment Scripts:** Forge scripts (`Deploy.s.sol`) are used to deterministically deploy all necessary new implementation contracts and the corresponding upgrade payload contract for each network.

## Key Migration and Initialization Steps

The Aave v3.5 upgrade is primarily a logic upgrade. Unlike the v3.4 transition, it does not involve complex data migrations or storage slot cleanups. The core changes, such as improved rounding and accounting, are encapsulated within the new contract implementations. The payload's main responsibility is to switch the implementation pointers for the Pool and the associated tokens for each reserve.

## General Upgrade Sequence (via `UpgradePayload`)

This sequence applies to most networks (Polygon, Optimism, Arbitrum, etc.).

1.  **Upgrade Pool Implementation:** The `Pool` contract proxy is updated to point to the new v3.5 `Pool` implementation (`POOL_IMPL`).
2.  **Update AToken/VariableDebtToken Implementations:** The payload iterates through all reserves listed in the `Pool`:
    - For each reserve, it calls `POOL_CONFIGURATOR.updateAToken` to upgrade the reserve's AToken proxy to the new standard `ATokenInstance` implementation (`A_TOKEN_IMPL`).
    - It then calls `POOL_CONFIGURATOR.updateVariableDebtToken` to upgrade the reserve's VariableDebtToken proxy to the new standard `VariableDebtTokenInstance` implementation (`V_TOKEN_IMPL`).

## Ethereum Mainnet Upgrade Sequence (via `UpgradePayloadMainnetCore`)

This sequence includes the general steps plus specific handling for the AAVE and GHO tokens, executed by the `UpgradePayloadMainnetCore` contract.

1.  **Execute Default Upgrade:** The `_defaultUpgrade()` function is called, performing the steps from the "General Upgrade Sequence" above. This process is configured to skip the `aAAVE` and `vGHO` tokens, which require special handling.
2.  **Upgrade vGHO Implementation:** `POOL_CONFIGURATOR.updateVariableDebtToken` is called for the GHO reserve, setting its implementation to the custom `V_TOKEN_GHO_IMPL`. This implementation ensures continued compatibility with the GHO discount rate strategy.
3.  **Upgrade aAAVE Implementation:** `POOL_CONFIGURATOR.updateAToken` is called for the AAVE reserve, setting its implementation to the `A_TOKEN_WITH_DELEGATION_IMPL`. This preserves the vote delegation functionality unique to the AAVE token.
