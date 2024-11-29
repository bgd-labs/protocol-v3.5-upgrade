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

// src/ts/abis/IStaticATokenFactory.ts
var IStaticATokenFactory_exports = {};
__export(IStaticATokenFactory_exports, {
  IStaticATokenFactory_ABI: () => IStaticATokenFactory_ABI
});
module.exports = __toCommonJS(IStaticATokenFactory_exports);
var IStaticATokenFactory_ABI = [
  {
    type: "function",
    name: "createStaticATokens",
    inputs: [
      {
        name: "underlyings",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getStaticAToken",
    inputs: [
      {
        name: "underlying",
        type: "address",
        internalType: "address"
      }
    ],
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
    name: "getStaticATokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IStaticATokenFactory_ABI
});
//# sourceMappingURL=IStaticATokenFactory.js.map