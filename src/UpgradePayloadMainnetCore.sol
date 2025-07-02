// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {IERC20Metadata} from "openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";
import {IncentivizedERC20} from "aave-v3-origin/contracts/protocol/tokenization/base/IncentivizedERC20.sol";

import {AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";

import {UpgradePayload} from "./UpgradePayload.sol";

/**
 * @title UpgradePayloadMainnetCore
 * @notice Upgrade payload for the ETH Mainnet network for the Core Pool to upgrade the Aave v3.4 to v3.5
 * @author BGD Labs
 */
contract UpgradePayloadMainnetCore is UpgradePayload {
  struct ConstructorMainnetParams {
    IPoolAddressesProvider poolAddressesProvider;
    address poolImpl;
    address aTokenImpl;
    address vTokenImpl;
    address vTokenGhoImpl;
    address aTokenWithDelegationImpl;
  }

  address public immutable V_TOKEN_GHO_IMPL;

  address public immutable A_TOKEN_WITH_DELEGATION_IMPL;

  constructor(ConstructorMainnetParams memory params)
    UpgradePayload(
      ConstructorParams({
        poolAddressesProvider: params.poolAddressesProvider,
        poolImpl: params.poolImpl,
        aTokenImpl: params.aTokenImpl,
        vTokenImpl: params.vTokenImpl
      })
    )
  {
    IPool pool = IPool(params.poolAddressesProvider.getPool());

    if (
      IncentivizedERC20(params.vTokenGhoImpl).POOL() != pool
        || IncentivizedERC20(params.aTokenWithDelegationImpl).POOL() != pool
    ) {
      revert WrongAddresses();
    }
    V_TOKEN_GHO_IMPL = params.vTokenGhoImpl;
    A_TOKEN_WITH_DELEGATION_IMPL = params.aTokenWithDelegationImpl;
  }

  function execute() external override {
    // 1. Perform default update. It will include:
    //    - Upgrade `Pool` implementation.
    //    - Update AToken and VariableDebtToken implementations for all reserves.
    //      (except for the GHO (VariableDebtToken) and AAVE (AToken) reserves).
    _defaultUpgrade();

    // 2. Upgrade the GHO VariableDebtToken (`GHO_V_TOKEN`) to its new custom implementation (`V_TOKEN_GHO_IMPL`).
    POOL_CONFIGURATOR.updateVariableDebtToken(
      ConfiguratorInputTypes.UpdateDebtTokenInput({
        asset: AaveV3EthereumAssets.GHO_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.GHO_V_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.GHO_V_TOKEN).symbol(),
        implementation: V_TOKEN_GHO_IMPL,
        params: ""
      })
    );

    // 3. Upgrade the AAVE AToken (`AAVE_A_TOKEN`) to the `ATokenWithDelegation` implementation (`A_TOKEN_WITH_DELEGATION_IMPL`).
    POOL_CONFIGURATOR.updateAToken(
      ConfiguratorInputTypes.UpdateATokenInput({
        asset: AaveV3EthereumAssets.AAVE_UNDERLYING,
        name: IERC20Metadata(AaveV3EthereumAssets.AAVE_A_TOKEN).name(),
        symbol: IERC20Metadata(AaveV3EthereumAssets.AAVE_A_TOKEN).symbol(),
        implementation: A_TOKEN_WITH_DELEGATION_IMPL,
        params: ""
      })
    );
  }

  function _needToUpdateReserveAToken(address reserve) internal pure override returns (bool) {
    if (reserve == AaveV3EthereumAssets.AAVE_UNDERLYING) {
      return false;
    }

    return true;
  }

  function _needToUpdateReserveVToken(address reserve) internal pure override returns (bool) {
    if (reserve == AaveV3EthereumAssets.GHO_UNDERLYING) {
      return false;
    }

    return true;
  }
}
