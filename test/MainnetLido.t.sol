// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// TODO remove after v3.4 go live
import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";
import {Deployments} from "../src/Deployments.sol";

contract MainnetLidoTest is UpgradeTest("mainnet", 22822649) {
  function setUp() public override {
    super.setUp();

    // TODO remove after v3.4 go live
    GovV3Helpers.executePayload(vm, 301);
  }

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
