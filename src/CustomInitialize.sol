// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {DataTypes} from "aave-v3-origin/contracts/protocol/pool/PoolStorage.sol";

library CustomInitialize {
  function _initialize(
    uint256 reservesCount,
    mapping(uint256 => address) storage _reservesList,
    mapping(address => DataTypes.ReserveData) storage _reserves
  ) internal {
    for (uint256 i = 0; i < reservesCount; i++) {
      address currentReserveAddress = _reservesList[i];
      DataTypes.ReserveData storage currentReserve = _reserves[currentReserveAddress];

      // @note The value `__deprecatedVirtualUnderlyingBalance` was deprecated in v3.4 and
      //       moved to `virtualUnderlyingBalance` which in it own turn takes the place of the
      //       `unbacked` variable that was in the v3.3 version of the reserve but removed in v3.4.
      //       So we need to move the value from the old variable to the new one.

      uint128 currentVB = currentReserve.__deprecatedVirtualUnderlyingBalance;
      if (currentVB != 0) {
        currentReserve.virtualUnderlyingBalance = currentVB;
        currentReserve.__deprecatedVirtualUnderlyingBalance = 0;
      }
    }
  }
}
