// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract MainnetLidoTest is UpgradeTest("mainnet", 22866426) {
  constructor() {
    NETWORK_SUB_NAME = "Lido";
  }

  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployMainnetLido();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.MAINNET_LIDO;
  }
}
