// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";

contract PolygonTest is UpgradeTest("polygon", 73239971) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployPolygon();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return address(0);
  }
}
