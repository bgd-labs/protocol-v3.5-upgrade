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

// src/ts/abis/IExecutor.ts
var IExecutor_exports = {};
__export(IExecutor_exports, {
  IExecutor_ABI: () => IExecutor_ABI
});
module.exports = __toCommonJS(IExecutor_exports);
var IExecutor_ABI = [
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
    type: "event",
    name: "ExecutedAction",
    inputs: [
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
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IExecutor_ABI
});
//# sourceMappingURL=IExecutor.js.map