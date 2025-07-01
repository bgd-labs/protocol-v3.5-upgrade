// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// TODO remove after v3.4 go live
import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract PolygonTest is UpgradeTest("polygon", 73436616) {
  function setUp() public override {
    super.setUp();

    // TODO remove after v3.4 go live
    GovV3Helpers.executePayload(vm, 114);
  }

  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployPolygon();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.POLYGON;
  }
}
