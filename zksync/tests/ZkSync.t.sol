// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {DeploymentLibrary} from "../scripts/Deploy.s.sol";
import {Deployments} from "../../src/Deployments.sol";

/**
 * env needs to be set to FOUNDRY_LIBRARIES=aave-v3-origin/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic:0x3db1dc584758daba133a59f776503b6c5d2dd1db,aave-v3-origin/contracts/protocol/libraries/logic/ConfiguratorLogic.sol:ConfiguratorLogic:0x511eaFe32D70Aad1f0F87BAe560cbC2Ec88B34Db,aave-v3-origin/contracts/protocol/libraries/logic/EModeLogic.sol:EModeLogic:0xcdae69765333cae780e4bf6dcb7db886fae0b5a1,aave-v3-origin/contracts/protocol/libraries/logic/FlashLoanLogic.sol:FlashLoanLogic:0xF8b48c00Ff12dD97F961EFE5240eBe956a3D8687,aave-v3-origin/contracts/protocol/libraries/logic/LiquidationLogic.sol:LiquidationLogic:0x78ca5c313c8a3265a8bf69a645564181970be9c1,aave-v3-origin/contracts/protocol/libraries/logic/PoolLogic.sol:PoolLogic:0x4511b06e1524929a4a90c5dd2aca59c8df728e8a,aave-v3-origin/contracts/protocol/libraries/logic/SupplyLogic.sol:SupplyLogic:0x0095325bb5C5da5b19C92bb6919f80110dcbaEFF
 */
contract ZkSyncTest is UpgradeTest("zksync", 62572110) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployZKSync();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.ZKSYNC;
  }
}
