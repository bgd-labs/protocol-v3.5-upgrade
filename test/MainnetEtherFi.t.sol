// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";

contract MainnetEtherFiTest is UpgradeTest("mainnet", 22724716) {
  constructor() {
    NETWORK_SUB_NAME = "EtherFi";
  }

  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployMainnetEtherfi();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return address(0);
  }
}
