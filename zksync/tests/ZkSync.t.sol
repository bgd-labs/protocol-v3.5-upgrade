// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {DeploymentLibrary} from "../scripts/Deploy.s.sol";
import {Deployments} from "../../src/Deployments.sol";

/**
 * env needs to be set to
 */
contract ZkSyncTest is UpgradeTest("zksync", 63257371) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployZKSync();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.ZKSYNC;
  }
}
