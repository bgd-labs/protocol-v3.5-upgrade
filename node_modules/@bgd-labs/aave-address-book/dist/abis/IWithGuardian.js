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

// src/ts/abis/IWithGuardian.ts
var IWithGuardian_exports = {};
__export(IWithGuardian_exports, {
  IWithGuardian_ABI: () => IWithGuardian_ABI
});
module.exports = __toCommonJS(IWithGuardian_exports);
var IWithGuardian_ABI = [
  {
    type: "function",
    name: "guardian",
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
    name: "updateGuardian",
    inputs: [
      {
        name: "newGuardian",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "GuardianUpdated",
    inputs: [
      {
        name: "oldGuardian",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "newGuardian",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IWithGuardian_ABI
});
//# sourceMappingURL=IWithGuardian.js.map