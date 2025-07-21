// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract CeloTest is UpgradeTest("celo", 39979754) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployCelo();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.CELO;
  }
}
