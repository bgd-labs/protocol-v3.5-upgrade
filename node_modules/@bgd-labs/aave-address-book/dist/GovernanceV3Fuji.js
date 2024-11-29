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

// src/ts/GovernanceV3Fuji.ts
var GovernanceV3Fuji_exports = {};
__export(GovernanceV3Fuji_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  VOTING_MACHINE: () => VOTING_MACHINE,
  VOTING_STRATEGY: () => VOTING_STRATEGY
});
module.exports = __toCommonJS(GovernanceV3Fuji_exports);
var CROSS_CHAIN_CONTROLLER = "0x5488A48E5C22175548E8d68622211F5928cBbf23";
var VOTING_MACHINE = "0x79Edd77c76F95b6b69907CaD1d8241F9DB0e3FD0";
var PAYLOADS_CONTROLLER = "0xf1842f9D6C3D9ec1153d7afCBb9cDBC537Ea5d15";
var EXECUTOR_LVL_1 = "0xACd2b1bA0B85FaF0f45D4974Ba8ee538E157fBc6";
var VOTING_STRATEGY = "0x8c55a1bf3DC7076522C5cd025f497A498eF90143";
var DATA_WAREHOUSE = "0xDB23939d4C483E748c2487916fB20d7fF7e39588";
var CHAIN_ID = 43113;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE,
  EXECUTOR_LVL_1,
  PAYLOADS_CONTROLLER,
  VOTING_MACHINE,
  VOTING_STRATEGY
});
//# sourceMappingURL=GovernanceV3Fuji.js.map