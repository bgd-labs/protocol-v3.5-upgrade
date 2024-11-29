// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";
import {GovernanceV3Ethereum} from "aave-address-book/GovernanceV3Ethereum.sol";
import {IERC20} from "solidity-utils/contracts/oz-common/interfaces/IERC20.sol";
import {ProtocolV3TestBase, ReserveConfig} from "aave-helpers/src/ProtocolV3TestBase.sol";
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
    PoolInstanceProtoProto3_4 poolInstance = new PoolInstanceProtoProto3_4(AaveV3Ethereum.POOL_ADDRESSES_PROVIDER);
    ATokenInstance aTokenImpl = new ATokenInstance(AaveV3Ethereum.POOL);
    VariableDebtTokenInstance vTokenImpl = new VariableDebtTokenInstance(AaveV3Ethereum.POOL);
    proposal = new UpgradePayload3_4(poolInstance, address(aTokenImpl), address(vTokenImpl));
  }

  /**
   * @dev executes the generic test suite including e2e and config snapshots
   */
  function test_defaultProposalExecution() public {
    defaultTest("UpgradePayload3_4", AaveV3Ethereum.POOL, address(proposal));
  }
}
