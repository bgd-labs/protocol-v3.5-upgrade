// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {IERC20Metadata} from "openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolConfigurator} from "aave-v3-origin/contracts/interfaces/IPoolConfigurator.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";
import {IncentivizedERC20} from "aave-v3-origin/contracts/protocol/tokenization/base/IncentivizedERC20.sol";

/**
 * @title UpgradePayload
 * @notice Upgrade payload to upgrade the Aave v3.4 to v3.5
 * @author BGD Labs
 */
contract UpgradePayload {
  struct ConstructorParams {
    IPoolAddressesProvider poolAddressesProvider;
    address poolImpl;
    address aTokenImpl;
    address vTokenImpl;
  }

  error WrongAddresses();

  IPoolAddressesProvider public immutable POOL_ADDRESSES_PROVIDER;
  IPool public immutable POOL;
  IPoolConfigurator public immutable POOL_CONFIGURATOR;

  address public immutable POOL_IMPL;
  address public immutable A_TOKEN_IMPL;
  address public immutable V_TOKEN_IMPL;

  constructor(ConstructorParams memory params) {
    POOL_ADDRESSES_PROVIDER = params.poolAddressesProvider;

    IPool pool = IPool(params.poolAddressesProvider.getPool());
    POOL = pool;
    POOL_CONFIGURATOR = IPoolConfigurator(params.poolAddressesProvider.getPoolConfigurator());

    if (IPool(params.poolImpl).ADDRESSES_PROVIDER() != params.poolAddressesProvider) {
      revert WrongAddresses();
    }
    POOL_IMPL = params.poolImpl;

    if (IncentivizedERC20(params.aTokenImpl).POOL() != pool || IncentivizedERC20(params.vTokenImpl).POOL() != pool) {
      revert WrongAddresses();
    }
    A_TOKEN_IMPL = params.aTokenImpl;
    V_TOKEN_IMPL = params.vTokenImpl;
  }

  function execute() external virtual {
    _defaultUpgrade();
  }

  function _defaultUpgrade() internal {
    // 1. Upgrade `Pool` implementation.
    //    This enables usage of v3.4 interfaces and logic within the `Pool`.
    POOL_ADDRESSES_PROVIDER.setPoolImpl(POOL_IMPL);

    // 2. Update AToken and VariableDebtToken implementations for all reserves.
    address[] memory reserves = POOL.getReservesList();
    uint256 length = reserves.length;
    for (uint256 i = 0; i < length; i++) {
      address reserve = reserves[i];

      if (_needToUpdateReserveAToken(reserve)) {
        POOL_CONFIGURATOR.updateAToken(_prepareATokenUpdateInfo(reserve));
      }

      if (_needToUpdateReserveVToken(reserve)) {
        POOL_CONFIGURATOR.updateVariableDebtToken(_prepareVTokenUpdateInfo(reserve));
      }
    }
  }

  function _prepareATokenUpdateInfo(address underlyingToken)
    internal
    view
    returns (ConfiguratorInputTypes.UpdateATokenInput memory)
  {
    IERC20Metadata aToken = IERC20Metadata(POOL.getReserveAToken(underlyingToken));

    return ConfiguratorInputTypes.UpdateATokenInput({
      asset: underlyingToken,
      implementation: A_TOKEN_IMPL,
      params: "",
      name: aToken.name(),
      symbol: aToken.symbol()
    });
  }

  function _prepareVTokenUpdateInfo(address underlyingToken)
    internal
    view
    returns (ConfiguratorInputTypes.UpdateDebtTokenInput memory)
  {
    IERC20Metadata vToken = IERC20Metadata(POOL.getReserveVariableDebtToken(underlyingToken));

    return ConfiguratorInputTypes.UpdateDebtTokenInput({
      asset: underlyingToken,
      implementation: V_TOKEN_IMPL,
      params: "",
      name: vToken.name(),
      symbol: vToken.symbol()
    });
  }

  function _needToUpdateReserveAToken(address) internal view virtual returns (bool) {
    return true;
  }

  function _needToUpdateReserveVToken(address) internal view virtual returns (bool) {
    return true;
  }
}
