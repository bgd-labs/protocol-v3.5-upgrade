// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {IATokenWithDelegation} from "aave-v3-origin/contracts/interfaces/IATokenWithDelegation.sol";
import {VariableDebtTokenMainnetInstanceGHO} from
  "aave-v3-origin/contracts/instances/VariableDebtTokenMainnetInstanceGHO.sol";

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {Deployments} from "../src/Deployments.sol";
import {UpgradePayloadMainnetCore} from "../src/UpgradePayloadMainnetCore.sol";

import {UpgradeTest} from "./UpgradeTest.t.sol";

contract MainnetCoreTest is UpgradeTest("mainnet", 22973298) {
  function test_upgrade() public override {
    super.test_upgrade();

    // Test the updateDiscountDistribution function in the GHO vToken.
    VariableDebtTokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_V_TOKEN).updateDiscountDistribution(
      address(0), address(0), 0, 0, 0
    );

    // Test the delegation functionalities in the AAVE AToken.
    IATokenWithDelegation(AaveV3EthereumAssets.AAVE_A_TOKEN).getDelegates(address(this));
    IATokenWithDelegation(AaveV3EthereumAssets.AAVE_A_TOKEN).getPowersCurrent(address(this));
  }

  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployMainnetCore();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return Deployments.MAINNET_CORE;
  }
}
