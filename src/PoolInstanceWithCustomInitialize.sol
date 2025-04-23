// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {PoolInstance} from "aave-v3-origin/contracts/instances/PoolInstance.sol";
import {Errors} from "aave-v3-origin/contracts/protocol/libraries/helpers/Errors.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {IReserveInterestRateStrategy} from "aave-v3-origin/contracts/interfaces/IReserveInterestRateStrategy.sol";

import {CustomInitialize} from "./CustomInitialize.sol";

contract PoolInstanceWithCustomInitialize is PoolInstance {
  constructor(IPoolAddressesProvider provider, IReserveInterestRateStrategy interestRateStrategy_)
    PoolInstance(provider, interestRateStrategy_)
  {}

  /// @inheritdoc PoolInstance
  function initialize(IPoolAddressesProvider provider) external virtual override initializer {
    require(provider == ADDRESSES_PROVIDER, Errors.InvalidAddressesProvider());

    CustomInitialize._initialize(_reservesCount, _reservesList, _reserves);
  }
}
