// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";

import {ReserveConfiguration} from "aave-v3-origin/contracts/protocol/libraries/configuration/ReserveConfiguration.sol";
import {WadRayMath} from "aave-v3-origin/contracts/protocol/libraries/math/WadRayMath.sol";
import {DataTypes} from "aave-v3-origin/contracts/protocol/libraries/types/DataTypes.sol";
import {IATokenWithDelegation} from "aave-v3-origin/contracts/interfaces/IATokenWithDelegation.sol";
import {IDefaultInterestRateStrategyV2} from "aave-v3-origin/contracts/interfaces/IDefaultInterestRateStrategyV2.sol";

import {DeploymentLibrary} from "../script/Deploy.s.sol";

import {UpgradePayloadMainnet, IGhoDirectMinter, IGhoToken} from "../src/UpgradePayloadMainnet.sol";
import {VariableDebtTokenMainnetInstanceGHO} from "../src/VariableDebtTokenMainnetInstanceGHO.sol";

import {UpgradeTest, IERC20} from "./UpgradeTest.t.sol";

contract MainnetTest is UpgradeTest("mainnet", 22431434) {
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;
  using WadRayMath for uint256;

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
    assertEq(reserveData.accruedToTreasury, 0);

    uint256 virtualAccActiveFlag = (reserveData.configuration.data & ReserveConfiguration.VIRTUAL_ACC_ACTIVE_MASK)
      >> ReserveConfiguration.VIRTUAL_ACC_START_BIT_POSITION;
    assertEq(virtualAccActiveFlag, 0);

    IDefaultInterestRateStrategyV2.InterestRateData memory oldGHOInterestRateData = IDefaultInterestRateStrategyV2(
      reserveData.interestRateStrategyAddress
    ).getInterestRateDataBps(AaveV3EthereumAssets.GHO_UNDERLYING);

    super.test_upgrade();

    assertEq(
      IERC20(AaveV3EthereumAssets.GHO_UNDERLYING).balanceOf(AaveV3EthereumAssets.GHO_A_TOKEN),
      ghoATokenCapacity - ghoATokenLevel
    );
    assertEq(
      AaveV3Ethereum.POOL.getVirtualUnderlyingBalance(AaveV3EthereumAssets.GHO_UNDERLYING),
      ghoATokenCapacity - ghoATokenLevel
    );

    (facilitatorCapacity, facilitatorLevel) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(_payload.FACILITATOR());
    assertEq(facilitatorCapacity, ghoATokenCapacity);
    assertEq(facilitatorLevel, ghoATokenCapacity);

    assertEq(IERC20(AaveV3EthereumAssets.GHO_A_TOKEN).totalSupply(), ghoATokenCapacity);

    (ghoATokenCapacity, ghoATokenLevel) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);
    assertEq(ghoATokenCapacity, 0);
    assertEq(ghoATokenLevel, 0);

    assertEq(AaveV3Ethereum.POOL.getReserveNormalizedIncome(AaveV3EthereumAssets.GHO_UNDERLYING), 1e27);

    assertTrue(AaveV3Ethereum.ACL_MANAGER.isRiskAdmin(_payload.FACILITATOR()));

    uint256 oldVariableBorrowRate = reserveData.currentVariableBorrowRate;
    reserveData = AaveV3Ethereum.POOL.getReserveData(AaveV3EthereumAssets.GHO_UNDERLYING);
    assertEq(reserveData.configuration.getSupplyCap(), 1);
    assertEq(reserveData.configuration.getReserveFactor(), 100_00);
    assertTrue(reserveData.configuration.getFlashLoanEnabled());
    assertEq(reserveData.currentLiquidityRate, 0);
    assertEq(reserveData.currentVariableBorrowRate, oldVariableBorrowRate);

    virtualAccActiveFlag = (reserveData.configuration.data & ReserveConfiguration.VIRTUAL_ACC_ACTIVE_MASK)
      >> ReserveConfiguration.VIRTUAL_ACC_START_BIT_POSITION;
    assertEq(virtualAccActiveFlag, 1);

    uint256 theoreticalAvailableGhoLiquidityAfterAllRepayments = IERC20(AaveV3EthereumAssets.GHO_V_TOKEN).totalSupply()
      + AaveV3Ethereum.POOL.getVirtualUnderlyingBalance(AaveV3EthereumAssets.GHO_UNDERLYING);
    uint256 theoreticalMaximumWithdrawableGhoLiquidity = IERC20(AaveV3EthereumAssets.GHO_A_TOKEN).totalSupply()
      + uint256(reserveData.accruedToTreasury).rayMul(
        AaveV3Ethereum.POOL.getReserveNormalizedIncome(AaveV3EthereumAssets.GHO_UNDERLYING)
      );
    assertEq(theoreticalAvailableGhoLiquidityAfterAllRepayments, theoreticalMaximumWithdrawableGhoLiquidity);

    // milkmath check reading from etherscan,w hcih also matches what is shown here: https://aave.tokenlogic.xyz/gho-revenue
    assertApproxEqAbs(reserveData.accruedToTreasury, 2_453_753_496504028593200000, 1_000);

    IDefaultInterestRateStrategyV2.InterestRateData memory newGHOInterestRateData = IDefaultInterestRateStrategyV2(
      reserveData.interestRateStrategyAddress
    ).getInterestRateDataBps(AaveV3EthereumAssets.GHO_UNDERLYING);
    assertEq(oldGHOInterestRateData.baseVariableBorrowRate, newGHOInterestRateData.baseVariableBorrowRate);
    assertEq(oldGHOInterestRateData.variableRateSlope1, newGHOInterestRateData.variableRateSlope1);
    assertEq(oldGHOInterestRateData.variableRateSlope2, newGHOInterestRateData.variableRateSlope2);
    assertEq(oldGHOInterestRateData.optimalUsageRatio, newGHOInterestRateData.optimalUsageRatio);

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
