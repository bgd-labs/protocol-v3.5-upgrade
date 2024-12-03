// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {PoolInstance} from "aave-v3-origin/contracts/instances/PoolInstance.sol";
import {IPoolAddressesProvider, Errors} from "aave-v3-origin/contracts/protocol/pool/Pool.sol";
import {DataTypes} from "aave-v3-origin/contracts/protocol/pool/Pool.sol";
import {ReserveConfiguration} from "aave-v3-origin/contracts/protocol/libraries/configuration/ReserveConfiguration.sol";
import {IReserveInterestRateStrategy} from "aave-v3-origin/contracts/interfaces/IReserveInterestRateStrategy.sol";
import {AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";

/**
 * @notice Pool instance
 *
 * Modifications:
 * - bumped revision
 * - custom initialize
 */
contract PoolInstanceProtoProto3_4 is PoolInstance {
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  constructor(IPoolAddressesProvider provider, IReserveInterestRateStrategy interestRateStrategy)
    PoolInstance(provider, interestRateStrategy)
  {}

  function initialize(IPoolAddressesProvider provider) external virtual override initializer {
    require(provider == ADDRESSES_PROVIDER, Errors.INVALID_ADDRESSES_PROVIDER);
    DataTypes.ReserveData storage currentGHOConfig = _reserves[AaveV3EthereumAssets.GHO_UNDERLYING];
    currentGHOConfig.configuration.setVirtualAccActive();
  }

  // TODO: remove, bump should be on original repo
  function getRevision() internal pure virtual override returns (uint256) {
    return 7;
  }
}
