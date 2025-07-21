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

### Libraries (TODO, need to be updated when the libraries will be updated)

For non-zksync(shanghai) networks:

`FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0xFeD9871528E713B5038c4c44BbE7a315f56cAdc6,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0x6E2aFD57a161d12f34f416c29619BFeAcAC8AA18,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0xD1bddC05A3BB5A7907d82A1b4F1E21dBCE69c3d5,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0x5e84CEe2afb7B37d2AB14722C39A7c1C26F5B0BB,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x36Ae486289bB807C3C79A1427b9c3D934294ef43,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0xE51B69e5722Bf547866A4d7Bc190c6e81b626806,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x034Fd14b9Ae6bB066a1F9f85A55e990b0b25c168`

For linea(london):

`FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x46464bCF5BBa29834b57E6c7631fEfb966F427A2,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0xD379a9e4A925916cF69c16C34409F401a28d5A52,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0x9D147ED046EA1c629B6e66b0504E45019B133aa4,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0xb5656eCAE657A1bF5f7F5CD06363090A4D2c68e3,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x22B38029a2B034340B695C6144B3AfD678e109E3,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0xbB6558a80Ed7811bd6d02bD26814e49c349b3acD,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x330a2C27fCE66685d87ebaE4cE9dA71D2F6D1141`

For zksync(cancun - still outdated):

`FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x3db1dc584758daba133a59f776503b6c5d2dd1db,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0x511eaFe32D70Aad1f0F87BAe560cbC2Ec88B34Db,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0xcdae69765333cae780e4bf6dcb7db886fae0b5a1,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0xF8b48c00Ff12dD97F961EFE5240eBe956a3D8687,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x78ca5c313c8a3265a8bf69a645564181970be9c1,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0x4511b06e1524929a4a90c5dd2aca59c8df728e8a,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x0095325bb5C5da5b19C92bb6919f80110dcbaEFF`
