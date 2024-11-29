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

// src/ts/abis/IWrappedTokenGatewayV3.ts
var IWrappedTokenGatewayV3_exports = {};
__export(IWrappedTokenGatewayV3_exports, {
  IWrappedTokenGatewayV3_ABI: () => IWrappedTokenGatewayV3_ABI
});
module.exports = __toCommonJS(IWrappedTokenGatewayV3_exports);
var IWrappedTokenGatewayV3_ABI = [
  {
    type: "function",
    name: "borrowETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "depositETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "repayETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "withdrawETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "withdrawETHWithPermit",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "permitV",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "permitR",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "permitS",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IWrappedTokenGatewayV3_ABI
});
//# sourceMappingURL=IWrappedTokenGatewayV3.js.map