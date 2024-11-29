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

// src/ts/abis/AggregatorInterface.ts
var AggregatorInterface_exports = {};
__export(AggregatorInterface_exports, {
  AggregatorInterface_ABI: () => AggregatorInterface_ABI
});
module.exports = __toCommonJS(AggregatorInterface_exports);
var AggregatorInterface_ABI = [
  {
    type: "function",
    name: "getAnswer",
    inputs: [
      {
        name: "roundId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "int256",
        internalType: "int256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTimestamp",
    inputs: [
      {
        name: "roundId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
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
    name: "latestAnswer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "int256",
        internalType: "int256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "latestRound",
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
    name: "latestTimestamp",
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
    type: "event",
    name: "AnswerUpdated",
    inputs: [
      {
        name: "current",
        type: "int256",
        indexed: true,
        internalType: "int256"
      },
      {
        name: "roundId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "updatedAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewRound",
    inputs: [
      {
        name: "roundId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "startedBy",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "startedAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AggregatorInterface_ABI
});
//# sourceMappingURL=AggregatorInterface.js.map