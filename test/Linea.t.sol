// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

/**
 * @dev Test contract for Linea network needs to be run via:
 * FORGE_PROFIE=linea forge test --mc LineaTest
 */
contract LineaTest is UpgradeTest("linea", 19928377) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployLinea();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.LINEA;
  }
}
