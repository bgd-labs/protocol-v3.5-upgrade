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

`FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x5047AD5e603Ec4a2AB58aaE2321C07D8f4De6a8a,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0x6E2aFD57a161d12f34f416c29619BFeAcAC8AA18,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0x7fcE69A2bA3e78EeB36798cde2c94C70f3A043af,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0x4fDB5d360f946CFD25b14F346f748204c0C6a2F4,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x5934b283f7120500253f277CCcF4521528aE34D6,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0x564c42578A1b270EaE16c25Da39d901245881d1F,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x1eF34B91afC368174F579067D1DB94325cDC7946`

For linea(london):

`FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x24B58926d2Dd490238C6366dc7b36357caBd71b9,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0xD379a9e4A925916cF69c16C34409F401a28d5A52,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0x23Bde27B7be7C2Eb741c3BcEF95384AAEc4f084c,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0x001b936869b535B4AF6F77a9be033801B39fcfa6,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0xED56ED0316FECBF93E3F5cA5aE70b8eF48ad4535,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0xca1610aE2820d34EB717b43e3CB1dd33B7eC05FB,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x8bd15bbd01e987D4b851818b6586AA6E16E65c62`

For zksync(cancun):

`FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x3db1dc584758daba133a59f776503b6c5d2dd1db,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0x511eaFe32D70Aad1f0F87BAe560cbC2Ec88B34Db,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0xcdae69765333cae780e4bf6dcb7db886fae0b5a1,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0xF8b48c00Ff12dD97F961EFE5240eBe956a3D8687,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x78ca5c313c8a3265a8bf69a645564181970be9c1,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0x4511b06e1524929a4a90c5dd2aca59c8df728e8a,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x0095325bb5C5da5b19C92bb6919f80110dcbaEFF`