// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";

contract ScrollTest is UpgradeTest("scroll", 16776260) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployScroll();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return address(0);
  }
}
