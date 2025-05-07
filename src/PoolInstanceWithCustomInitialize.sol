// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {IScaledBalanceToken} from "aave-v3-origin/contracts/interfaces/IScaledBalanceToken.sol";
import {PoolInstance} from "aave-v3-origin/contracts/instances/PoolInstance.sol";
import {Errors} from "aave-v3-origin/contracts/protocol/libraries/helpers/Errors.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {IReserveInterestRateStrategy} from "aave-v3-origin/contracts/interfaces/IReserveInterestRateStrategy.sol";
import {DataTypes} from "aave-v3-origin/contracts/protocol/pool/Pool.sol";
import {ReserveConfiguration} from "aave-v3-origin/contracts/protocol/libraries/configuration/ReserveConfiguration.sol";

import {AaveV3EthereumAssets, AaveV3Ethereum} from "aave-address-book/AaveV3Ethereum.sol";

import {CustomInitialize} from "./CustomInitialize.sol";

contract PoolInstanceWithCustomInitialize is PoolInstance {
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  constructor(IPoolAddressesProvider provider, IReserveInterestRateStrategy interestRateStrategy_)
    PoolInstance(provider, interestRateStrategy_)
  {}

  /// @inheritdoc PoolInstance
  function initialize(IPoolAddressesProvider provider) external virtual override initializer {
    require(provider == ADDRESSES_PROVIDER, Errors.InvalidAddressesProvider());

    CustomInitialize._initialize(_reservesCount, _reservesList, _reserves);

    // @note Should be executed only on the Ethereum Mainnet Core Pool instance
    //       The check is sufficient as the Ethereum Core Pool address is unique across chains.
    if (address(this) == address(AaveV3Ethereum.POOL) && block.chainid == 1) {
      // 1. Update the `virtualAcc` configuration of the GHO reserve

      DataTypes.ReserveData storage ghoReserveData = _reserves[AaveV3EthereumAssets.GHO_UNDERLYING];
      DataTypes.ReserveConfigurationMap memory GHOConfig = ghoReserveData.configuration;

      GHOConfig.setVirtualAccActive();

      ghoReserveData.configuration = GHOConfig;

      // 2. Update the `accruedToTreasury` variable of the GHO token

      // Variable `accruedToTreasury` should hold all interest that accured (because the reserve
      // factor of the GHO token is 100%), but not repayed yet.
      // In the process of the upgrade of the `Pool` contract we've already resolved the AToken of the GHO
      // as a facilitator and now it has zero capacity and level.
      // Also, new `GhoDirectMinter` contract has been already added as a facilitator and it has
      // minted and supplied the initial level of the AToken of the GHO to the Pool. So we can use total
      // supply of the `GHO_A_TOKEN` as an initial level of the AToken of the GHO.
      uint256 vTokenTotalSupply = IERC20(ghoReserveData.variableDebtTokenAddress).totalSupply();

      // @note index is 1, we can use scaled
      uint256 level = IScaledBalanceToken(AaveV3EthereumAssets.GHO_A_TOKEN).scaledTotalSupply();

      ghoReserveData.accruedToTreasury = uint128(vTokenTotalSupply - level);
    }
  }
}
