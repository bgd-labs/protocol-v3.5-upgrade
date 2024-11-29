// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {ConfiguratorInputTypes} from "aave-v3-origin/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol";

contract UpgradePayload3_4 {
  IPool public immutable POOL_IMPL;
  address public immutable A_TOKEN_IMPL;
  address public immutable V_TOKEN_IMPL;

  constructor(IPool poolImpl, address aTokenImpl, address vTokenImpl) {
    POOL_IMPL = poolImpl;
    A_TOKEN_IMPL = aTokenImpl;
    V_TOKEN_IMPL = vTokenImpl;
  }

  function execute() external {
    // enables virtual accounting on GHO
    AaveV3Ethereum.POOL_ADDRESSES_PROVIDER.setPoolImpl(address(POOL_IMPL));

    // set reserve factor to 100% so all fee is accrued to treasury
    AaveV3Ethereum.POOL_CONFIGURATOR.setReserveFactor(AaveV3EthereumAssets.GHO_UNDERLYING, 100_00);

    // set a supply cap so noone can supply, as 0 currently is unlimited
    AaveV3Ethereum.POOL_CONFIGURATOR.setSupplyCap(AaveV3EthereumAssets.GHO_UNDERLYING, 1);

    ConfiguratorInputTypes.UpdateATokenInput memory aTokenUpdate = ConfiguratorInputTypes.UpdateATokenInput({
      asset: AaveV3EthereumAssets.GHO_UNDERLYING,
      treasury: address(AaveV3Ethereum.COLLECTOR),
      incentivesController: AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER,
      implementation: A_TOKEN_IMPL,
      params: "",
      name: "hello",
      symbol: "yay"
    });
    AaveV3Ethereum.POOL_CONFIGURATOR.updateAToken(aTokenUpdate);

    ConfiguratorInputTypes.UpdateDebtTokenInput memory vTokenUpdate = ConfiguratorInputTypes.UpdateDebtTokenInput({
      asset: AaveV3EthereumAssets.GHO_UNDERLYING,
      incentivesController: AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER,
      implementation: V_TOKEN_IMPL,
      params: "",
      name: "hello",
      symbol: "yay"
    });
    AaveV3Ethereum.POOL_CONFIGURATOR.updateVariableDebtToken(vTokenUpdate);
  }
}
