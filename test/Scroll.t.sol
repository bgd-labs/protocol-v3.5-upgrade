// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract ScrollTest is UpgradeTest("scroll", 16389632) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployScroll();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.SCROLL;
  }
}
