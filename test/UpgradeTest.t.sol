// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";

import {
  ProtocolV3TestBase,
  IPool,
  IPoolDataProvider,
  IPoolAddressesProvider,
  IERC20,
  DataTypes,
  ReserveConfiguration,
  SafeERC20
} from "aave-helpers/src/ProtocolV3TestBase.sol";

import {UpgradePayload} from "../src/UpgradePayload.sol";

interface NewPool {
  function RESERVE_INTEREST_RATE_STRATEGY() external returns (address);
}

interface MockExecute {
  function execute() external;
}

contract MockFlashReceiver {
  using SafeERC20 for IERC20;

  function executeOperation(
    address[] calldata assets,
    uint256[] calldata amounts,
    uint256[] calldata premiums,
    address initiator, /* initiator */
    bytes calldata /* params */
  ) external returns (bool) {
    for (uint256 i = 0; i < assets.length; i++) {
      IERC20(assets[i]).forceApprove(msg.sender, amounts[i] + premiums[i]);
    }

    MockExecute(initiator).execute();

    return true;
  }
}

abstract contract UpgradeTest is ProtocolV3TestBase {
  using SafeERC20 for IERC20;
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  string public NETWORK;
  string public NETWORK_SUB_NAME;
  uint256 public immutable BLOCK_NUMBER;
  address immutable FLASH_RECEIVER;

  IPool public POOL;
  IPoolAddressesProvider public ADDRESSES_PROVIDER;

  constructor(string memory network, uint256 blocknumber) {
    NETWORK = network;
    BLOCK_NUMBER = blocknumber;
    FLASH_RECEIVER = address(new MockFlashReceiver());
  }

  function setUp() public virtual {
    vm.createSelectFork(vm.rpcUrl(NETWORK), BLOCK_NUMBER);
  }

  function test_execution() public virtual {
    executePayload(vm, _getTestPayload());
  }

  // function to be called from the flashloan
  function execute() external {
    executePayload(vm, _getTestPayload());
  }

  function test_diff() external virtual {
    UpgradePayload _payload = UpgradePayload(_getTestPayload());

    IPoolAddressesProvider addressesProvider = IPoolAddressesProvider(address(_payload.POOL_ADDRESSES_PROVIDER()));
    IPool pool = IPool(addressesProvider.getPool());

    defaultTest(
      string(abi.encodePacked(vm.toString(block.chainid), "_", vm.toString(address(pool)))), pool, address(_payload)
    );
  }

  /**
   * On the upgrade we assume all interest rates are already the same.
   * This test simply validates that assumption.
   */
  function test_assumption_interestRates() external {
    UpgradePayload _payload = UpgradePayload(_getTestPayload());
    IPoolAddressesProvider addressesProvider = IPoolAddressesProvider(address(_payload.POOL_ADDRESSES_PROVIDER()));
    IPool pool = IPool(addressesProvider.getPool());
    address[] memory reserves = pool.getReservesList();
    address[] memory irs = new address[](reserves.length);
    for (uint256 i = 0; i < reserves.length; i++) {
      DataTypes.ReserveDataLegacy memory reserveData = pool.getReserveData(reserves[i]);
      irs[i] = reserveData.interestRateStrategyAddress;
    }

    executePayload(vm, address(_payload));

    address commonIr = NewPool(address(pool)).RESERVE_INTEREST_RATE_STRATEGY();
    for (uint256 i = 0; i < reserves.length; i++) {
      assertEq(irs[i], commonIr);
    }
  }

  function test_assumption_unbacked() external {
    UpgradePayload _payload = UpgradePayload(_getTestPayload());
    IPoolAddressesProvider addressesProvider = IPoolAddressesProvider(address(_payload.POOL_ADDRESSES_PROVIDER()));
    IPool pool = IPool(addressesProvider.getPool());
    address[] memory reserves = pool.getReservesList();
    for (uint256 i = 0; i < reserves.length; i++) {
      DataTypes.ReserveDataLegacy memory reserveData = pool.getReserveData(reserves[i]);
      assertEq(reserveData.unbacked, 0);
    }
  }

  function test_upgrade() public virtual {
    UpgradePayload _payload = UpgradePayload(_getTestPayload());

    executePayload(vm, address(_payload));
  }

  function test_gas() external {
    executePayload(vm, address(_getPayload()));
    vm.snapshotGasLastCall("Execution", string.concat(NETWORK, NETWORK_SUB_NAME));
  }

  function test_flashloan_attack() public {
    UpgradePayload payloadForFlashloan = UpgradePayload(_getTestPayload());

    POOL = payloadForFlashloan.POOL();
    ADDRESSES_PROVIDER = payloadForFlashloan.POOL_ADDRESSES_PROVIDER();

    address[] memory reserves = POOL.getReservesList();
    uint256[] memory oldVirtualUnderlyingBalances = new uint256[](reserves.length);

    uint256 length;
    address[] memory filteredReserves = new address[](reserves.length);
    uint256[] memory amounts = new uint256[](reserves.length);
    uint256[] memory interestRateModes = new uint256[](reserves.length);
    for (uint256 i = 0; i < reserves.length; i++) {
      oldVirtualUnderlyingBalances[i] = POOL.getVirtualUnderlyingBalance(reserves[i]);
      console.log(oldVirtualUnderlyingBalances[i]);

      DataTypes.ReserveConfigurationMap memory configuration = POOL.getConfiguration(reserves[i]);

      if (configuration.getPaused() || !configuration.getActive() || !configuration.getFlashLoanEnabled()) {
        continue;
      }

      filteredReserves[length] = reserves[i];
      // The amount flashed does not really matter.
      // We're limiting it in the test because we know that the vBalanceDelta can sometimes be slightly negative,
      // and for some assets, `deal` does not work. Therefore, we fall back to user transfers, which for most assets,
      // do not provide enough funds to 'deal' the entire available VirtualUnderlyingBalance.
      amounts[length] = oldVirtualUnderlyingBalances[i] / 2;
      interestRateModes[length] = 0;

      ++length;
    }
    assembly {
      mstore(filteredReserves, length)
      mstore(amounts, length)
      mstore(interestRateModes, length)
    }

    // Using bytes("") to expect a revert without a reason string (an "empty" error, like EvmError: Revert).
    vm.expectRevert(bytes(""));
    POOL.flashLoan({
      receiverAddress: FLASH_RECEIVER,
      assets: filteredReserves,
      amounts: amounts,
      interestRateModes: interestRateModes,
      onBehalfOf: address(this),
      params: "",
      referralCode: 0
    });

    for (uint256 i = 0; i < reserves.length; i++) {
      assertEq(POOL.getVirtualUnderlyingBalance(reserves[i]), oldVirtualUnderlyingBalances[i]);
    }
  }

  function _getTestPayload() internal returns (address) {
    address deployed = _getDeployedPayload();
    if (deployed == address(0)) return _getPayload();
    return deployed;
  }

  function _getPayload() internal virtual returns (address);

  function _getDeployedPayload() internal virtual returns (address);
}
