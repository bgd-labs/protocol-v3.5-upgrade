// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";

contract GnosisTest is UpgradeTest("gnosis", 39708181) {
  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployGnosis();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return address(0);
  }
}
