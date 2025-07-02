// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// TODO remove after v3.4 go live
import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

/**
 * @dev Test contract for Linea network needs to be run via:
 * FORGE_PROFIE=linea forge test --mc LineaTest
 */
contract LineaTest is UpgradeTest("linea", 20480168) {
  function setUp() public override {
    super.setUp();

    // TODO remove after v3.4 go live
    GovV3Helpers.executePayload(vm, 9);
  }

  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployLinea();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.LINEA;
  }
}
