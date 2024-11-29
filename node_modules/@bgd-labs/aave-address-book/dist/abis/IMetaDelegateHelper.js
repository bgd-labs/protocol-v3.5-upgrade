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

// src/ts/abis/IMetaDelegateHelper.ts
var IMetaDelegateHelper_exports = {};
__export(IMetaDelegateHelper_exports, {
  IMetaDelegateHelper_ABI: () => IMetaDelegateHelper_ABI
});
module.exports = __toCommonJS(IMetaDelegateHelper_exports);
var IMetaDelegateHelper_ABI = [
  {
    type: "function",
    name: "batchMetaDelegate",
    inputs: [
      {
        name: "delegateParams",
        type: "tuple[]",
        internalType: "struct IMetaDelegateHelper.MetaDelegateParams[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "contract IGovernancePowerDelegationToken"
          },
          {
            name: "delegationType",
            type: "uint8",
            internalType: "enum IMetaDelegateHelper.DelegationType"
          },
          {
            name: "delegator",
            type: "address",
            internalType: "address"
          },
          {
            name: "delegatee",
            type: "address",
            internalType: "address"
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IMetaDelegateHelper_ABI
});
//# sourceMappingURL=IMetaDelegateHelper.js.map