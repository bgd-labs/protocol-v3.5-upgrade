// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract SoneiumTest is UpgradeTest("soneium", 9984695) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deploySoneium();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.SONEIUM;
  }
}
