// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract MetisTest is UpgradeTest("metis", 20786990) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployMetis();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.METIS;
  }
}
