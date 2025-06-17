// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract BaseTest is UpgradeTest("base", 31378086) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployBase();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.BASE;
  }
}
