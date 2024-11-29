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

// src/ts/GovernanceV3PolygonZkEvm.ts
var GovernanceV3PolygonZkEvm_exports = {};
__export(GovernanceV3PolygonZkEvm_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  PC_DATA_HELPER: () => PC_DATA_HELPER
});
module.exports = __toCommonJS(GovernanceV3PolygonZkEvm_exports);
var CROSS_CHAIN_CONTROLLER = "0xed7e0874526B9BB9E36C7e9472ed7ed324CEeE3B";
var PAYLOADS_CONTROLLER = "0xa2d22795E0D85D4Cb14Cbb14Df7bb8fec1016615";
var PC_DATA_HELPER = "0xF1c11BE0b4466728DDb7991A0Ac5265646ec9672";
var EXECUTOR_LVL_1 = "0xe59470B3BE3293534603487E00A44C72f2CD466d";
var CHAIN_ID = 1101;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CROSS_CHAIN_CONTROLLER,
  EXECUTOR_LVL_1,
  PAYLOADS_CONTROLLER,
  PC_DATA_HELPER
});
//# sourceMappingURL=GovernanceV3PolygonZkEvm.js.map