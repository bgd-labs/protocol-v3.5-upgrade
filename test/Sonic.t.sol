// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract SonicTest is UpgradeTest("sonic", 39514680) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deploySonic();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.SONIC;
  }
}
