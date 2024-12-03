// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {IReserveInterestRateStrategy} from "aave-v3-origin/contracts/interfaces/IReserveInterestRateStrategy.sol";
import {DataTypes} from "aave-v3-origin/contracts/protocol/pool/Pool.sol";
import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";
import {GovernanceV3Ethereum} from "aave-address-book/GovernanceV3Ethereum.sol";
import {IERC20} from "solidity-utils/contracts/oz-common/interfaces/IERC20.sol";
import {ProtocolV3TestBase, ReserveConfig} from "aave-helpers/src/ProtocolV3TestBase.sol";
import {IGhoToken} from "gho-direct-minter/interfaces/IGhoToken.sol";
import {UpgradePayload3_4} from "../src/UpgradePayload3_4.sol";
import {PoolInstanceProtoProto3_4} from "../src/PoolInstanceProtoProto3_4.sol";
import {ATokenInstance} from "../src/ATokenInstance.sol";
import {VariableDebtTokenInstance} from "../src/VariableDebtTokenInstance.sol";

/**
 * @dev Test for AaveV3EthereumLido_GHOListingOnLidoPool_20241119
 * command: FOUNDRY_PROFILE=mainnet forge test --match-path=src/20241119_AaveV3EthereumLido_GHOListingOnLidoPool/AaveV3EthereumLido_GHOListingOnLidoPool_20241119.t.sol -vv
 */
contract UpgradePayload3_4_Test is ProtocolV3TestBase {
  UpgradePayload3_4 internal proposal;

  function setUp() public {
    vm.createSelectFork(vm.rpcUrl("mainnet"), 21265036);
    PoolInstanceProtoProto3_4 poolInstance = new PoolInstanceProtoProto3_4(
      AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      IReserveInterestRateStrategy(AaveV3EthereumAssets.WETH_INTEREST_RATE_STRATEGY)
    );
    ATokenInstance aTokenImpl = new ATokenInstance(AaveV3Ethereum.POOL);
    VariableDebtTokenInstance vTokenImpl = new VariableDebtTokenInstance(AaveV3Ethereum.POOL);
    proposal = new UpgradePayload3_4(poolInstance, address(aTokenImpl), address(vTokenImpl));
  }

  /**
   * @dev executes the generic test suite including e2e and config snapshots
   */
  function test_defaultProposalExecution() public {
    DataTypes.ReserveDataLegacy memory ghoReserveBefore =
      AaveV3Ethereum.POOL.getReserveData(AaveV3EthereumAssets.GHO_UNDERLYING);
    uint256 variableDebtBefore = IERC20(ghoReserveBefore.variableDebtTokenAddress).totalSupply();
    uint256 aTokenSupplyBefore = IERC20(ghoReserveBefore.aTokenAddress).totalSupply();
    uint256 virtualBalanceBefore = AaveV3Ethereum.POOL.getVirtualUnderlyingBalance(AaveV3EthereumAssets.GHO_UNDERLYING);
    assertEq(virtualBalanceBefore, 0);
    assertEq(aTokenSupplyBefore, 0);
    assertEq(ghoReserveBefore.liquidityIndex, 1e27);
    (uint256 capacity, uint256 level) =
      IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).getFacilitatorBucket(AaveV3EthereumAssets.GHO_A_TOKEN);

    defaultTest("UpgradePayload3_4", AaveV3Ethereum.POOL, address(proposal));

    DataTypes.ReserveDataLegacy memory ghoReserveAfter =
      AaveV3Ethereum.POOL.getReserveData(AaveV3EthereumAssets.GHO_UNDERLYING);
    assertEq(ghoReserveBefore.liquidityIndex, ghoReserveAfter.liquidityIndex);
    assertEq(ghoReserveBefore.currentLiquidityRate, ghoReserveAfter.currentLiquidityRate);
    assertEq(ghoReserveBefore.currentVariableBorrowRate, ghoReserveAfter.currentVariableBorrowRate);
    assertEq(variableDebtBefore, IERC20(ghoReserveAfter.variableDebtTokenAddress).totalSupply());
    // this should actually not be true
    assertEq(level, IERC20(ghoReserveAfter.aTokenAddress).totalSupply(), "WRONG_A_TOKEN_SUPPLY");
    // vb should stay at zero
    assertEq(
      virtualBalanceBefore,
      AaveV3Ethereum.POOL.getVirtualUnderlyingBalance(AaveV3EthereumAssets.GHO_UNDERLYING),
      "WRONG_VIRTUAL_BALANCE"
    );
  }
}
