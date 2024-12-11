// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {
  ITransparentProxyFactory,
  ProxyAdmin
} from "solidity-utils/contracts/transparent-proxy/interfaces/ITransparentProxyFactory.sol";
import {PoolConfiguratorInstance} from "../src/PoolConfiguratorInstance.sol";

// special imports related to the proto upgrade inclduing the GHO aToken facilitator
import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {MiscEthereum} from "aave-address-book/MiscEthereum.sol";
import {GovernanceV3Ethereum} from "aave-address-book/GovernanceV3Ethereum.sol";
import {IReserveInterestRateStrategy} from "aave-v3-origin/contracts/interfaces/IReserveInterestRateStrategy.sol";
import {GhoDirectMinter} from "gho-direct-minter/GhoDirectMinter.sol";
import {ATokenInstanceGHO, IPool as IPoolv3_3} from "../src/ATokenInstanceGHO.sol";
import {VariableDebtTokenInstanceGHO} from "../src/VariableDebtTokenInstanceGHO.sol";
import {UpgradePayloadProto3_4} from "../src/UpgradePayloadProto3_4.sol";
import {PoolInstanceProtoProto3_4} from "../src/PoolInstanceProtoProto3_4.sol";

library DeploymentLibrary {
  function _deployMainnetProto() internal returns (address) {
    // its the council used on other GHO stewards
    // might make sense to have on address book
    address council = 0x8513e6F37dBc52De87b166980Fa3F50639694B60;

    // Deploy a new GHO facilitator for the proto pool
    address facilitatorImpl = address(
      new GhoDirectMinter(
        AaveV3Ethereum.POOL_ADDRESSES_PROVIDER, address(AaveV3Ethereum.COLLECTOR), AaveV3EthereumAssets.GHO_UNDERLYING
      )
    );
    address facilitator = ITransparentProxyFactory(MiscEthereum.TRANSPARENT_PROXY_FACTORY).create(
      facilitatorImpl,
      ProxyAdmin(MiscEthereum.PROXY_ADMIN),
      abi.encodeWithSelector(GhoDirectMinter.initialize.selector, GovernanceV3Ethereum.EXECUTOR_LVL_1, council)
    );
    // TODO: initialize all
    ATokenInstanceGHO aTokenImplGho = new ATokenInstanceGHO(IPoolv3_3(address(AaveV3Ethereum.POOL)));
    VariableDebtTokenInstanceGHO vdtImplGho =
      new VariableDebtTokenInstanceGHO(AaveV3Ethereum.POOL, AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER);
    PoolInstanceProtoProto3_4 poolInstance = new PoolInstanceProtoProto3_4(
      AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      IReserveInterestRateStrategy(AaveV3EthereumAssets.WETH_INTEREST_RATE_STRATEGY) // arbitrary ir, is everywhere the same
    );
    PoolConfiguratorInstance poolConfiguratorInstance = new PoolConfiguratorInstance();
    poolConfiguratorInstance.initialize(AaveV3Ethereum.POOL_ADDRESSES_PROVIDER);

    // TODO: refactor to use struct
    UpgradePayloadProto3_4 payload = new UpgradePayloadProto3_4(
      poolInstance, address(poolConfiguratorInstance), address(aTokenImplGho), address(vdtImplGho), facilitator
    );
    return address(payload);
  }
}
