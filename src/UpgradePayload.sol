// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {IERC20Metadata} from "openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import {ITransparentProxyFactory} from
  "solidity-utils/contracts/transparent-proxy/interfaces/ITransparentProxyFactory.sol";

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolConfigurator} from "aave-v3-origin/contracts/interfaces/IPoolConfigurator.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";

/**
 * @title UpgradePayload
 * @notice Upgrade payload to upgrade the Aave v3.3 to v3.4
 * @author BGD Labs
 */
contract UpgradePayload {
  struct ConstructorParams {
    IPoolAddressesProvider poolAddressesProvider;
    address poolDataProvider;
    address poolImpl;
    address poolConfiguratorImpl;
    address aTokenImpl;
    address vTokenImpl;
  }

  IPoolAddressesProvider public immutable POOL_ADDRESSES_PROVIDER;
  address public immutable POOL_DATA_PROVIDER;
  IPool public immutable POOL;
  IPoolConfigurator public immutable POOL_CONFIGURATOR;

  address public immutable POOL_IMPL;
  address public immutable POOL_CONFIGURATOR_IMPL;
  address public immutable A_TOKEN_IMPL;
  address public immutable V_TOKEN_IMPL;

  constructor(ConstructorParams memory params) {
    POOL_ADDRESSES_PROVIDER = params.poolAddressesProvider;
    POOL_DATA_PROVIDER = params.poolDataProvider;

    POOL = IPool(params.poolAddressesProvider.getPool());
    POOL_CONFIGURATOR = IPoolConfigurator(params.poolAddressesProvider.getPoolConfigurator());

    POOL_IMPL = params.poolImpl;
    POOL_CONFIGURATOR_IMPL = params.poolConfiguratorImpl;
    A_TOKEN_IMPL = params.aTokenImpl;
    V_TOKEN_IMPL = params.vTokenImpl;
  }

  function execute() external virtual {
    // 1. Upgrade configurator implementation
    // to be able to use v3.4 interfaces for the configurator
    POOL_ADDRESSES_PROVIDER.setPoolConfiguratorImpl(POOL_CONFIGURATOR_IMPL);

    _defaultUpgrade();
  }

  function _defaultUpgrade() internal {
    // 2. Upgrade pool implementation
    // to be able to use v3.4 interfaces for the pool
    POOL_ADDRESSES_PROVIDER.setPoolImpl(POOL_IMPL);

    // 3. Set a new pool data provider
    POOL_ADDRESSES_PROVIDER.setPoolDataProvider(POOL_DATA_PROVIDER);

    // 4. Update aTokens and vTokens for all reserves
    address[] memory reserves = POOL.getReservesList();
    uint256 length = reserves.length;
    for (uint256 i = 0; i < length; i++) {
      address reserve = reserves[i];

      if (!_needToUpdateReserve(reserve)) {
        continue;
      }

      POOL_CONFIGURATOR.updateAToken(_prepareATokenUpdateInfo(reserve));

      POOL_CONFIGURATOR.updateVariableDebtToken(_prepareVTokenUpdateInfo(reserve));
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

  function _needToUpdateReserve(address) internal view virtual returns (bool) {
    return true;
  }
}
