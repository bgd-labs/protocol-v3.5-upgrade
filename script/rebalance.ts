import { AaveSafetyModule } from "@bgd-labs/aave-address-book";
import { AaveV3Ethereum } from "@bgd-labs/aave-address-book";
import { genericIndexer, getClient, IERC20_ABI } from "@bgd-labs/toolbox";
import {
  type Address,
  createPublicClient,
  encodeFunctionData,
  getAbiItem,
  getAddress,
  http,
  type Log,
} from "viem";
import { writeFileSync } from "node:fs";
import { getBlockNumber, readContract, simulateContract } from "viem/actions";
import PQueue from "p-queue";
import initialCache from "../rebalance-cache.json";
import { vGHO_ABI } from "./vGHOAbi";
import { multiCall_ABI } from "./multicallAbi";
import { mainnet } from "viem/chains";

// const mainnetClient = getClient(1, {
//   providerConfig: { alchemyKey: process.env.ALCHEMY_API_KEY },
//   httpConfig: { batch: true },
//   clientConfig: { batch: { multicall: true } },
// });

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://mainnet.gateway.tenderly.co/${process.env.TENDERLY_MULTICHAIN_KEY}`,
  ),
});
// const mainnetClient = createPublicClient({
//   chain: ChainList[Number(1) as keyof typeof ChainList],
//   transport: http(getHyperRPC(1)),
// });
//
//
const MULTICALL = "0xcA11bde05977b3631167028862bE2a173976CA11";

type CacheType = {
  lastIndexed: number;
  records: Record<string, Address[]>;
  intersection: Address[];
};

const vGHO = new Set<Address>(
  initialCache.records[AaveV3Ethereum.ASSETS.GHO.V_TOKEN] || [],
);
const stkAAVE = new Set<Address>(
  initialCache.records[AaveSafetyModule.STK_AAVE] || [],
);

const transferLog = getAbiItem({ abi: IERC20_ABI, name: "Transfer" });

const indexer = genericIndexer({
  client: mainnetClient,
  getIndexerState: () => {
    return [
      {
        abi: transferLog,
        address: AaveV3Ethereum.ASSETS.GHO.V_TOKEN,
        lastIndexedBlockNumber: BigInt(initialCache.lastIndexed),
      },
      {
        abi: transferLog,
        address: AaveSafetyModule.STK_AAVE,
        lastIndexedBlockNumber: BigInt(initialCache.lastIndexed),
      },
    ];
  },
  updateIndexerState: () => {},
  processLogs: async (logs) => {
    for (const _log of logs) {
      const log = _log as Log<unknown, unknown, false, typeof transferLog>;
      const contract = getAddress(log.address);
      if (contract === AaveV3Ethereum.ASSETS.GHO.V_TOKEN) {
        vGHO.add(log.args.from!);
        vGHO.add(log.args.to!);
      } else {
        stkAAVE.add(log.args.from!);
        stkAAVE.add(log.args.to!);
      }
    }
  },
});

const lastBlock = await getBlockNumber(mainnetClient);
console.log("last block", lastBlock);
// 1. fetch all transfers
await indexer(lastBlock);
initialCache.lastIndexed = Number(lastBlock);
initialCache.records[AaveV3Ethereum.ASSETS.GHO.V_TOKEN] = [...vGHO];
initialCache.records[AaveSafetyModule.STK_AAVE] = [...stkAAVE];

// 2. populate balance
for (const contract of Object.keys(initialCache.records)) {
  console.log(
    `Contract: ${contract}, Users: ${initialCache.records[contract].length}`,
  );
  const queue = new PQueue({ concurrency: 500 });
  const users = (initialCache as CacheType).records[contract];
  const jobs = users.map((user) => {
    return queue.add(async () => {
      return {
        balance: await readContract(mainnetClient, {
          address: contract as Address,
          abi: IERC20_ABI,
          functionName: "balanceOf",
          args: [user],
        }),
        user,
      };
    });
  });
  const balances = await Promise.all(jobs);

  initialCache.records[contract] = balances
    .filter((u) => u!.balance !== 0n)
    .map((u) => u!.user);
}

// 3. create intersection
const bSet = new Set(initialCache.records[AaveV3Ethereum.ASSETS.GHO.V_TOKEN]);
const intersection = initialCache.records[AaveSafetyModule.STK_AAVE].filter(
  (value) => bSet.has(value),
);
console.log(
  `StkAave users`,
  initialCache.records[AaveSafetyModule.STK_AAVE].length,
);
console.log(
  `VGHO users`,
  initialCache.records[AaveV3Ethereum.ASSETS.GHO.V_TOKEN].length,
);
console.log(`Total Intersection: ${intersection.length}`);
initialCache.intersection = intersection;

writeFileSync("rebalance-cache.json", JSON.stringify(initialCache), "utf8");

// https://etherscan.io/address/0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2#readProxyContract#F26 //0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f
const indexSnapshot = 1136325166523935507223355724n;

const finalUsers: Address[] = [];
for (const user of intersection) {
  const index = await readContract(mainnetClient, {
    address: AaveV3Ethereum.ASSETS.GHO.V_TOKEN,
    abi: vGHO_ABI,
    functionName: "getPreviousIndex",
    args: [user as Address],
  });
  if (index >= indexSnapshot) {
    console.log(`skipping ${user} as already up to date`);
    continue;
  }
  const balance = await readContract(mainnetClient, {
    address: AaveV3Ethereum.ASSETS.GHO.V_TOKEN,
    abi: vGHO_ABI,
    functionName: "balanceOf",
    args: [user as Address],
  });
  if (balance == 0n /*<= BigInt(1e18)*/) {
    console.log(`skipping ${user} as position too small`);
    continue;
  }
  finalUsers.push(user as Address);
}

const request = encodeFunctionData({
  abi: multiCall_ABI,
  functionName: "aggregate",
  args: [
    finalUsers.map((u) => ({
      target: "0x786dBff3f1292ae8F92ea68Cf93c30b34B1ed04B",
      callData: encodeFunctionData({
        abi: vGHO_ABI,
        functionName: "rebalanceUserDiscountPercent",
        args: [u],
      }),
    })),
  ],
});

console.log("request to execute on ", MULTICALL);
console.log(request);
