// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {
  EthereumScript,
  PolygonScript,
  AvalancheScript,
  OptimismScript,
  ArbitrumScript,
  MetisScript,
  BaseScript,
  GnosisScript,
  ScrollScript,
  BNBScript,
  LineaScript,
  SonicScript,
  CeloScript
} from "solidity-utils/contracts/utils/ScriptUtils.sol";

import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";

import {PoolInstance} from "aave-v3-origin/contracts/instances/PoolInstance.sol";
import {L2PoolInstance} from "aave-v3-origin/contracts/instances/L2PoolInstance.sol";
import {ATokenInstance} from "aave-v3-origin/contracts/instances/ATokenInstance.sol";
import {VariableDebtTokenInstance} from "aave-v3-origin/contracts/instances/VariableDebtTokenInstance.sol";
import {ATokenWithDelegationInstance} from "aave-v3-origin/contracts/instances/ATokenWithDelegationInstance.sol";
import {VariableDebtTokenMainnetInstanceGHO} from
  "aave-v3-origin/contracts/instances/VariableDebtTokenMainnetInstanceGHO.sol";

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "aave-v3-origin/contracts/interfaces/IPoolAddressesProvider.sol";

import {AaveV3Polygon, AaveV3PolygonAssets} from "aave-address-book/AaveV3Polygon.sol";
import {AaveV3Avalanche, AaveV3AvalancheAssets} from "aave-address-book/AaveV3Avalanche.sol";
import {AaveV3Optimism, AaveV3OptimismAssets} from "aave-address-book/AaveV3Optimism.sol";
import {AaveV3Arbitrum, AaveV3ArbitrumAssets} from "aave-address-book/AaveV3Arbitrum.sol";
import {AaveV3Ethereum, AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";
import {AaveV3BNB, AaveV3BNBAssets} from "aave-address-book/AaveV3BNB.sol";
import {AaveV3Gnosis, AaveV3GnosisAssets} from "aave-address-book/AaveV3Gnosis.sol";
import {AaveV3Scroll, AaveV3ScrollAssets} from "aave-address-book/AaveV3Scroll.sol";
import {AaveV3Base, AaveV3BaseAssets} from "aave-address-book/AaveV3Base.sol";
import {AaveV3Metis, AaveV3MetisAssets} from "aave-address-book/AaveV3Metis.sol";
import {AaveV3EthereumLido, AaveV3EthereumLidoAssets} from "aave-address-book/AaveV3EthereumLido.sol";
import {AaveV3EthereumEtherFi, AaveV3EthereumEtherFiAssets} from "aave-address-book/AaveV3EthereumEtherFi.sol";
import {AaveV3Linea, AaveV3LineaAssets} from "aave-address-book/AaveV3Linea.sol";
import {AaveV3Sonic, AaveV3SonicAssets} from "aave-address-book/AaveV3Sonic.sol";
import {AaveV3Celo, AaveV3CeloAssets} from "aave-address-book/AaveV3Celo.sol";

import {UpgradePayload} from "../src/UpgradePayload.sol";
import {UpgradePayloadMainnetCore} from "../src/UpgradePayloadMainnetCore.sol";

library DeploymentLibrary {
  // rollups
  function _deployOptimism() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Optimism.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Optimism.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3OptimismAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Optimism.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Optimism.COLLECTOR);

    return _deployL2(deployParams);
  }

  function _deployBase() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Base.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Base.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3BaseAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Base.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Base.COLLECTOR);

    return _deployL2(deployParams);
  }

  function _deployArbitrum() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Arbitrum.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Arbitrum.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3ArbitrumAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Arbitrum.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Arbitrum.COLLECTOR);

    return _deployL2(deployParams);
  }

  function _deployScroll() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Scroll.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Scroll.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3ScrollAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Scroll.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Scroll.COLLECTOR);

    return _deployL2(deployParams);
  }

  function _deployMetis() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Metis.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Metis.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3MetisAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Metis.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Metis.COLLECTOR);

    return _deployL2(deployParams);
  }

  // L1s
  function _deployMainnetCore() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Ethereum.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Ethereum.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3EthereumAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Ethereum.COLLECTOR);

    return _deployMainnetCore(deployParams);
  }

  function _deployMainnetLido() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3EthereumLido.POOL);
    deployParams.poolAddressesProvider = address(AaveV3EthereumLido.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3EthereumLidoAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3EthereumLido.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3EthereumLido.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployMainnetEtherfi() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3EthereumEtherFi.POOL);
    deployParams.poolAddressesProvider = address(AaveV3EthereumEtherFi.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3EthereumEtherFiAssets.FRAX_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3EthereumEtherFi.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3EthereumEtherFi.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployGnosis() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Gnosis.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Gnosis.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3GnosisAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Gnosis.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Gnosis.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployBNB() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3BNB.POOL);
    deployParams.poolAddressesProvider = address(AaveV3BNB.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3BNBAssets.ETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3BNB.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3BNB.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployAvalanche() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Avalanche.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Avalanche.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3AvalancheAssets.WETHe_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Avalanche.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Avalanche.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployPolygon() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Polygon.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Polygon.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3PolygonAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Polygon.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Polygon.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployLinea() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Linea.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Linea.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3LineaAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Linea.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Linea.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deploySonic() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Sonic.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Sonic.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3SonicAssets.WETH_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Sonic.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Sonic.COLLECTOR);

    return _deployL1(deployParams);
  }

  function _deployCelo() internal returns (address) {
    DeployParameters memory deployParams;

    deployParams.pool = address(AaveV3Celo.POOL);
    deployParams.poolAddressesProvider = address(AaveV3Celo.POOL_ADDRESSES_PROVIDER);
    deployParams.interestRateStrategy = address(AaveV3CeloAssets.CELO_INTEREST_RATE_STRATEGY);
    deployParams.rewardsController = AaveV3Celo.DEFAULT_INCENTIVES_CONTROLLER;
    deployParams.treasury = address(AaveV3Celo.COLLECTOR);

    return _deployL2(deployParams);
  }

  struct DeployParameters {
    address poolAddressesProvider;
    address pool;
    address interestRateStrategy;
    address rewardsController;
    address treasury;
  }

  function _deployL2(DeployParameters memory deployParams) internal returns (address) {
    UpgradePayload.ConstructorParams memory payloadParams;

    payloadParams.poolAddressesProvider = IPoolAddressesProvider(deployParams.poolAddressesProvider);
    payloadParams.poolImpl = GovV3Helpers.deployDeterministic(
      type(L2PoolInstance).creationCode,
      abi.encode(deployParams.poolAddressesProvider, deployParams.interestRateStrategy)
    );

    return _deployPayload(deployParams, payloadParams, false);
  }

  function _deployL1(DeployParameters memory deployParams) internal returns (address) {
    UpgradePayload.ConstructorParams memory payloadParams;

    payloadParams.poolAddressesProvider = IPoolAddressesProvider(deployParams.poolAddressesProvider);
    payloadParams.poolImpl = GovV3Helpers.deployDeterministic(
      type(PoolInstance).creationCode, abi.encode(deployParams.poolAddressesProvider, deployParams.interestRateStrategy)
    );

    return _deployPayload({deployParams: deployParams, payloadParams: payloadParams, isMainnetCore: false});
  }

  function _deployMainnetCore(DeployParameters memory deployParams) internal returns (address) {
    UpgradePayload.ConstructorParams memory payloadParams;

    payloadParams.poolAddressesProvider = IPoolAddressesProvider(deployParams.poolAddressesProvider);
    payloadParams.poolImpl = GovV3Helpers.deployDeterministic(
      type(PoolInstance).creationCode, abi.encode(deployParams.poolAddressesProvider, deployParams.interestRateStrategy)
    );

    return _deployPayload({deployParams: deployParams, payloadParams: payloadParams, isMainnetCore: true});
  }

  function _deployPayload(
    DeployParameters memory deployParams,
    UpgradePayload.ConstructorParams memory payloadParams,
    bool isMainnetCore
  ) private returns (address) {
    payloadParams.aTokenImpl = GovV3Helpers.deployDeterministic(
      type(ATokenInstance).creationCode,
      abi.encode(deployParams.pool, deployParams.rewardsController, deployParams.treasury)
    );

    payloadParams.vTokenImpl = GovV3Helpers.deployDeterministic(
      type(VariableDebtTokenInstance).creationCode, abi.encode(deployParams.pool, deployParams.rewardsController)
    );

    if (isMainnetCore) {
      return _deployMainnetCore(payloadParams);
    } else {
      return GovV3Helpers.deployDeterministic(type(UpgradePayload).creationCode, abi.encode(payloadParams));
    }
  }

  function _deployMainnetCore(UpgradePayload.ConstructorParams memory params) private returns (address) {
    address vTokenImplGho = GovV3Helpers.deployDeterministic(
      type(VariableDebtTokenMainnetInstanceGHO).creationCode,
      abi.encode(AaveV3Ethereum.POOL, AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER)
    );

    address aTokenWithDelegationImpl = GovV3Helpers.deployDeterministic(
      type(ATokenWithDelegationInstance).creationCode,
      abi.encode(AaveV3Ethereum.POOL, AaveV3Ethereum.DEFAULT_INCENTIVES_CONTROLLER, AaveV3Ethereum.COLLECTOR)
    );

    return GovV3Helpers.deployDeterministic(
      type(UpgradePayloadMainnetCore).creationCode,
      abi.encode(
        UpgradePayloadMainnetCore.ConstructorMainnetParams({
          poolAddressesProvider: IPoolAddressesProvider(address(AaveV3Ethereum.POOL_ADDRESSES_PROVIDER)),
          poolImpl: params.poolImpl,
          aTokenImpl: params.aTokenImpl,
          vTokenImpl: params.vTokenImpl,
          vTokenGhoImpl: vTokenImplGho,
          aTokenWithDelegationImpl: aTokenWithDelegationImpl
        })
      )
    );
  }
}

contract Deploypolygon is PolygonScript {
  function run() external broadcast {
    DeploymentLibrary._deployPolygon();
  }
}

contract Deploygnosis is GnosisScript {
  function run() external broadcast {
    DeploymentLibrary._deployGnosis();
  }
}

contract Deployoptimism is OptimismScript {
  function run() external broadcast {
    DeploymentLibrary._deployOptimism();
  }
}

contract Deployarbitrum is ArbitrumScript {
  function run() external broadcast {
    DeploymentLibrary._deployArbitrum();
  }
}

contract Deployavalanche is AvalancheScript {
  function run() external broadcast {
    DeploymentLibrary._deployAvalanche();
  }
}

contract Deploybase is BaseScript {
  function run() external broadcast {
    DeploymentLibrary._deployBase();
  }
}

contract Deployscroll is ScrollScript {
  function run() external broadcast {
    DeploymentLibrary._deployScroll();
  }
}

contract Deploybnb is BNBScript {
  function run() external broadcast {
    DeploymentLibrary._deployBNB();
  }
}

// metis is broken
contract Deploymetis is MetisScript {
  function run() external broadcast {
    DeploymentLibrary._deployMetis();
  }
}

contract Deploymainnet is EthereumScript {
  function run() external broadcast {
    DeploymentLibrary._deployMainnetCore();
  }
}

contract Deploylido is EthereumScript {
  function run() external broadcast {
    DeploymentLibrary._deployMainnetLido();
  }
}

contract Deployetherfi is EthereumScript {
  function run() external broadcast {
    DeploymentLibrary._deployMainnetEtherfi();
  }
}

contract Deploylinea is LineaScript {
  function run() external broadcast {
    DeploymentLibrary._deployLinea();
  }
}

contract Deploysonic is SonicScript {
  function run() external broadcast {
    DeploymentLibrary._deploySonic();
  }
}

contract Deploycelo is CeloScript {
  function run() external broadcast {
    DeploymentLibrary._deployCelo();
  }
}
