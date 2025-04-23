// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";

contract LineaTest is UpgradeTest("linea", 17167264) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployLinea();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return address(0);
  }
}
