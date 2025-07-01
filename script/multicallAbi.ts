export const multiCall_ABI = [
  {
    type: "constructor",
    name: "",
    stateMutability: "",
    constant: false,
    id: "60957fbb-9e13-4d16-845d-45a341bd98a3",
  },
  {
    type: "function",
    name: "getBlockHash",
    stateMutability: "view",
    constant: false,
    inputs: [
      {
        type: "uint256",
        name: "blockNumber",
        simpleType: "uint",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "blockHash",
        simpleType: "bytes",
      },
    ],
    id: "0xee82ac5e",
  },
  {
    type: "function",
    name: "getLastBlockHash",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "bytes32",
        name: "blockHash",
        simpleType: "bytes",
      },
    ],
    id: "0x27e86d6e",
  },
  {
    type: "function",
    name: "aggregate3",
    stateMutability: "payable",
    constant: false,
    inputs: [
      {
        type: "tuple[]",
        name: "calls",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "address",
            name: "target",
            simpleType: "address",
          },
          {
            type: "bool",
            name: "allowFailure",
            simpleType: "bool",
          },
          {
            type: "bytes",
            name: "callData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "returnData",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "bool",
            name: "success",
            simpleType: "bool",
          },
          {
            type: "bytes",
            name: "returnData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    id: "0x82ad56cb",
  },
  {
    type: "function",
    name: "getCurrentBlockGasLimit",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "gaslimit",
        simpleType: "uint",
      },
    ],
    id: "0x86d516e8",
  },
  {
    type: "function",
    name: "getChainId",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "chainid",
        simpleType: "uint",
      },
    ],
    id: "0x3408e470",
  },
  {
    type: "function",
    name: "getBlockNumber",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "blockNumber",
        simpleType: "uint",
      },
    ],
    id: "0x42cbb15c",
  },
  {
    type: "function",
    name: "getCurrentBlockTimestamp",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "timestamp",
        simpleType: "uint",
      },
    ],
    id: "0x0f28c97d",
  },
  {
    type: "function",
    name: "tryBlockAndAggregate",
    stateMutability: "payable",
    constant: false,
    inputs: [
      {
        type: "bool",
        name: "requireSuccess",
        simpleType: "bool",
      },
      {
        type: "tuple[]",
        name: "calls",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "address",
            name: "target",
            simpleType: "address",
          },
          {
            type: "bytes",
            name: "callData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "blockNumber",
        simpleType: "uint",
      },
      {
        type: "bytes32",
        name: "blockHash",
        simpleType: "bytes",
      },
      {
        type: "tuple[]",
        name: "returnData",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "bool",
            name: "success",
            simpleType: "bool",
          },
          {
            type: "bytes",
            name: "returnData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    id: "0x399542e9",
  },
  {
    type: "function",
    name: "getBasefee",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "basefee",
        simpleType: "uint",
      },
    ],
    id: "0x3e64a696",
  },
  {
    type: "function",
    name: "getEthBalance",
    stateMutability: "view",
    constant: false,
    inputs: [
      {
        type: "address",
        name: "addr",
        simpleType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "balance",
        simpleType: "uint",
      },
    ],
    id: "0x4d2301cc",
  },
  {
    type: "function",
    name: "getCurrentBlockDifficulty",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "difficulty",
        simpleType: "uint",
      },
    ],
    id: "0x72425d9d",
  },
  {
    type: "function",
    name: "tryAggregate",
    stateMutability: "payable",
    constant: false,
    inputs: [
      {
        type: "bool",
        name: "requireSuccess",
        simpleType: "bool",
      },
      {
        type: "tuple[]",
        name: "calls",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "address",
            name: "target",
            simpleType: "address",
          },
          {
            type: "bytes",
            name: "callData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "returnData",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "bool",
            name: "success",
            simpleType: "bool",
          },
          {
            type: "bytes",
            name: "returnData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    id: "0xbce38bd7",
  },
  {
    type: "function",
    name: "aggregate",
    stateMutability: "payable",
    constant: false,
    inputs: [
      {
        type: "tuple[]",
        name: "calls",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "address",
            name: "target",
            simpleType: "address",
          },
          {
            type: "bytes",
            name: "callData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "blockNumber",
        simpleType: "uint",
      },
      {
        type: "bytes[]",
        name: "returnData",
        simpleType: "slice",
        nestedType: {
          type: "bytes",
        },
      },
    ],
    id: "0x252dba42",
  },
  {
    type: "function",
    name: "getCurrentBlockCoinbase",
    stateMutability: "view",
    constant: false,
    outputs: [
      {
        type: "address",
        name: "coinbase",
        simpleType: "address",
      },
    ],
    id: "0xa8b0574e",
  },
  {
    type: "function",
    name: "aggregate3Value",
    stateMutability: "payable",
    constant: false,
    inputs: [
      {
        type: "tuple[]",
        name: "calls",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "address",
            name: "target",
            simpleType: "address",
          },
          {
            type: "bool",
            name: "allowFailure",
            simpleType: "bool",
          },
          {
            type: "uint256",
            name: "value",
            simpleType: "uint",
          },
          {
            type: "bytes",
            name: "callData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "returnData",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "bool",
            name: "success",
            simpleType: "bool",
          },
          {
            type: "bytes",
            name: "returnData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    id: "0x174dea71",
  },
  {
    type: "function",
    name: "blockAndAggregate",
    stateMutability: "payable",
    constant: false,
    inputs: [
      {
        type: "tuple[]",
        name: "calls",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "address",
            name: "target",
            simpleType: "address",
          },
          {
            type: "bytes",
            name: "callData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "blockNumber",
        simpleType: "uint",
      },
      {
        type: "bytes32",
        name: "blockHash",
        simpleType: "bytes",
      },
      {
        type: "tuple[]",
        name: "returnData",
        simpleType: "slice",
        nestedType: {
          type: "tuple",
        },
        components: [
          {
            type: "bool",
            name: "success",
            simpleType: "bool",
          },
          {
            type: "bytes",
            name: "returnData",
            simpleType: "bytes",
          },
        ],
      },
    ],
    id: "0xc3077fa9",
  },
] as const;
