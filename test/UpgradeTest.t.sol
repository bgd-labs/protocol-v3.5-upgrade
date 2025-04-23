// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {
  ProtocolV3TestBase,
  IPool,
  IPoolDataProvider,
  IPoolAddressesProvider,
  IERC20
} from "../src/aave-helpers/ProtocolV3TestBase.sol";

import {UpgradePayload} from "../src/UpgradePayload.sol";

abstract contract UpgradeTest is ProtocolV3TestBase {
  string public NETWORK;
  uint256 public immutable BLOCK_NUMBER;

  constructor(string memory network, uint256 blocknumber) {
    NETWORK = network;
    BLOCK_NUMBER = blocknumber;
  }

  function setUp() public {
    vm.createSelectFork(vm.rpcUrl(NETWORK), BLOCK_NUMBER);
  }

  function test_execution() public virtual {
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

  function test_upgrade() public virtual {
    UpgradePayload _payload = UpgradePayload(_getTestPayload());

    executePayload(vm, address(_payload));

    IPoolAddressesProvider addressesProvider = IPoolAddressesProvider(address(_payload.POOL_ADDRESSES_PROVIDER()));
    IPool pool = IPool(addressesProvider.getPool());
    IPoolDataProvider poolDataProvider = IPoolDataProvider(addressesProvider.getPoolDataProvider());

    assertEq(pool.FLASHLOAN_PREMIUM_TO_PROTOCOL(), 100_00);

    address[] memory reserves = pool.getReservesList();
    for (uint256 i = 0; i < reserves.length; i++) {
      address reserve = reserves[i];
      assertTrue(poolDataProvider.getIsVirtualAccActive(reserve));

      address aToken = pool.getReserveAToken(reserve);

      assertGe(IERC20(reserve).balanceOf(aToken), pool.getVirtualUnderlyingBalance(reserve));
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
