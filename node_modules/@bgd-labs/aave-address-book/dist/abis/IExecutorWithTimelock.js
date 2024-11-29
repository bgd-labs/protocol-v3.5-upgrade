"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/abis/IExecutorWithTimelock.ts
var IExecutorWithTimelock_exports = {};
__export(IExecutorWithTimelock_exports, {
  IExecutorWithTimelock_ABI: () => IExecutorWithTimelock_ABI
});
module.exports = __toCommonJS(IExecutorWithTimelock_exports);
var IExecutorWithTimelock_ABI = [
  {
    type: "function",
    name: "GRACE_PERIOD",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAXIMUM_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MINIMUM_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_DURATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "cancelTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "executeTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "getAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelay",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPendingAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isActionQueued",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isProposalOverGracePeriod",
    inputs: [
      {
        name: "governance",
        type: "address",
        internalType: "address"
      },
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "queueTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CancelledAction",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ExecutedAction",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      },
      {
        name: "resultData",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewAdmin",
    inputs: [
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewDelay",
    inputs: [
      {
        name: "delay",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewPendingAdmin",
    inputs: [
      {
        name: "newPendingAdmin",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "QueuedAction",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IExecutorWithTimelock_ABI
});
//# sourceMappingURL=IExecutorWithTimelock.js.map