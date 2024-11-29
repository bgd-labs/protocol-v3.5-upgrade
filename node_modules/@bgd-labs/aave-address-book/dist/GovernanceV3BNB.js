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

// src/ts/GovernanceV3BNB.ts
var GovernanceV3BNB_exports = {};
__export(GovernanceV3BNB_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CL_EMERGENCY_ORACLE: () => CL_EMERGENCY_ORACLE,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  GOVERNANCE_GUARDIAN: () => GOVERNANCE_GUARDIAN,
  GRANULAR_GUARDIAN: () => GRANULAR_GUARDIAN,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  PC_DATA_HELPER: () => PC_DATA_HELPER
});
module.exports = __toCommonJS(GovernanceV3BNB_exports);
var CROSS_CHAIN_CONTROLLER = "0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19";
var CL_EMERGENCY_ORACLE = "0xcabb46FfB38c93348Df16558DF156e9f68F9F7F1";
var PAYLOADS_CONTROLLER = "0xE5EF2Dd06755A97e975f7E282f828224F2C3e627";
var PC_DATA_HELPER = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var GRANULAR_GUARDIAN = "0xe4FB5e3F506BE0095f38004f993D16fdA8224383";
var GOVERNANCE_GUARDIAN = "0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b";
var EXECUTOR_LVL_1 = "0x9390B1735def18560c509E2d0bc090E9d6BA257a";
var CHAIN_ID = 56;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CL_EMERGENCY_ORACLE,
  CROSS_CHAIN_CONTROLLER,
  EXECUTOR_LVL_1,
  GOVERNANCE_GUARDIAN,
  GRANULAR_GUARDIAN,
  PAYLOADS_CONTROLLER,
  PC_DATA_HELPER
});
//# sourceMappingURL=GovernanceV3BNB.js.map