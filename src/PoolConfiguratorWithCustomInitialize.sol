// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.10;

import {PoolConfiguratorInstance} from "aave-v3-origin/contracts/instances/PoolConfiguratorInstance.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";
import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";

contract PoolConfiguratorWithCustomInitialize is PoolConfiguratorInstance {
  function initialize(IPoolAddressesProvider provider) public virtual override initializer {
    super.initialize(provider);

    // @note should be called before the v3.4 upgrade of the Pool contract in order to
    //       fetch the value from the storage. After the v3.4 upgrade this function
    //       will always return 100_00.
    uint128 oldFlashloanPremiumToProtocol = _pool.FLASHLOAN_PREMIUM_TO_PROTOCOL();
    if (oldFlashloanPremiumToProtocol != 100_00) {
      emit FlashloanPremiumToProtocolUpdated({
        oldFlashloanPremiumToProtocol: oldFlashloanPremiumToProtocol,
        newFlashloanPremiumToProtocol: 100_00
      });
    }
  }
}
