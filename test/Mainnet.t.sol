// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";

import {ReserveConfiguration} from "aave-v3-origin/contracts/protocol/libraries/configuration/ReserveConfiguration.sol";
import {DataTypes} from "aave-v3-origin/contracts/protocol/libraries/types/DataTypes.sol";
import {IATokenWithDelegation} from "aave-v3-origin/contracts/interfaces/IATokenWithDelegation.sol";

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradePayloadMainnet, IGhoDirectMinter, IGhoToken} from "../src/UpgradePayloadMainnet.sol";
import {VariableDebtTokenMainnetInstanceGHO} from "../src/VariableDebtTokenMainnetInstanceGHO.sol";

import {UpgradeTest, IERC20} from "./UpgradeTest.t.sol";

contract MainnetTest is UpgradeTest("mainnet", 22089018) {
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  function test_upgrade() public override {
    UpgradePayloadMainnet _payload = UpgradePayloadMainnet(_getTestPayload());

    assertGt(IERC20(AaveV3EthereumAssets.GHO_UNDERLYING).balanceOf(AaveV3EthereumAssets.GHO_A_TOKEN), 0);
    assertEq(AaveV3Ethereum.POOL.getVirtualUnderlyingBalance(AaveV3EthereumAssets.GHO_UNDERLYING), 0);

    (uint256 ghoATokenCapacity, uint256 ghoATokenLevel) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    assertGt(ghoATokenCapacity, 0);
    assertGt(ghoATokenLevel, 0);

    (uint256 facilitatorCapacity, uint256 facilitatorLevel) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(_payload.FACILITATOR());
    assertEq(facilitatorCapacity, 0);
    assertEq(facilitatorLevel, 0);

    assertEq(IERC20(AaveV3EthereumAssets.GHO_A_TOKEN).totalSupply(), 0);

    assertEq(AaveV3Ethereum.POOL.getReserveNormalizedIncome(AaveV3EthereumAssets.GHO_UNDERLYING), 1e27);

    DataTypes.ReserveDataLegacy memory reserveData =
      AaveV3Ethereum.POOL.getReserveData(AaveV3EthereumAssets.GHO_UNDERLYING);
    assertFalse(reserveData.configuration.getFlashLoanEnabled());


    super.test_upgrade();

    assertEq(IERC20(AaveV3EthereumAssets.GHO_UNDERLYING).balanceOf(AaveV3EthereumAssets.GHO_A_TOKEN), 0);
    assertEq(AaveV3Ethereum.POOL.getVirtualUnderlyingBalance(AaveV3EthereumAssets.GHO_UNDERLYING), 0);

    (facilitatorCapacity, facilitatorLevel) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(_payload.FACILITATOR());
    assertEq(facilitatorCapacity, ghoATokenCapacity);
    assertEq(facilitatorLevel, ghoATokenLevel);

    assertEq(IERC20(AaveV3EthereumAssets.GHO_A_TOKEN).totalSupply(), ghoATokenLevel);

    (ghoATokenCapacity, ghoATokenLevel) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    assertEq(ghoATokenCapacity, 0);
    assertEq(ghoATokenLevel, 0);

    assertEq(AaveV3Ethereum.POOL.getReserveNormalizedIncome(AaveV3EthereumAssets.GHO_UNDERLYING), 1e27);

    assertTrue(AaveV3Ethereum.ACL_MANAGER.isRiskAdmin(_payload.FACILITATOR()));

    reserveData =
      AaveV3Ethereum.POOL.getReserveData(AaveV3EthereumAssets.GHO_UNDERLYING);
    assertEq(reserveData.configuration.getSupplyCap(), 1);
    assertEq(reserveData.configuration.getReserveFactor(), 100_00);
    assertTrue(reserveData.configuration.getFlashLoanEnabled());

    // test updateDiscountDistribution function in the vToken of the GHO aToken
    VariableDebtTokenMainnetInstanceGHO(AaveV3EthereumAssets.GHO_V_TOKEN).updateDiscountDistribution(
      address(0), address(0), 0, 0, 0
    );

    // test delegation functionalities in the AAVE aToken
    IATokenWithDelegation(AaveV3EthereumAssets.AAVE_A_TOKEN).getDelegates(address(this));
    IATokenWithDelegation(AaveV3EthereumAssets.AAVE_A_TOKEN).getPowersCurrent(address(this));
  }

  function _getPayload() internal virtual override returns (address) {
    return DeploymentLibrary._deployMainnet();
  }

  function _getDeployedPayload() internal virtual override returns (address) {
    return address(0);
  }
}
