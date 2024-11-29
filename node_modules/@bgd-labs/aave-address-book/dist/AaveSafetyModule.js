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

// src/ts/AaveSafetyModule.ts
var AaveSafetyModule_exports = {};
__export(AaveSafetyModule_exports, {
  CHAIN_ID: () => CHAIN_ID,
  STK_AAVE: () => STK_AAVE,
  STK_AAVE_WSTETH_BPTV2: () => STK_AAVE_WSTETH_BPTV2,
  STK_AAVE_WSTETH_BPTV2_ORACLE: () => STK_AAVE_WSTETH_BPTV2_ORACLE,
  STK_ABPT: () => STK_ABPT,
  STK_ABPT_ORACLE: () => STK_ABPT_ORACLE,
  STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR: () => STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR,
  STK_GHO: () => STK_GHO
});
module.exports = __toCommonJS(AaveSafetyModule_exports);
var STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
var STK_ABPT = "0xa1116930326D21fB917d5A27F1E9943A9595fb47";
var STK_ABPT_ORACLE = "0x209Ad99bd808221293d03827B86cC544bcA0023b";
var STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR = "0xecD4bd3121F9FD604ffaC631bF6d41ec12f1fafb";
var STK_GHO = "0x1a88Df1cFe15Af22B3c4c783D4e6F7F9e0C1885d";
var STK_AAVE_WSTETH_BPTV2 = "0x9eDA81C21C273a82BE9Bbc19B6A6182212068101";
var STK_AAVE_WSTETH_BPTV2_ORACLE = "0xADf86b537eF08591c2777E144322E8b0Ca7E82a7";
var CHAIN_ID = 1;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  STK_AAVE,
  STK_AAVE_WSTETH_BPTV2,
  STK_AAVE_WSTETH_BPTV2_ORACLE,
  STK_ABPT,
  STK_ABPT_ORACLE,
  STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR,
  STK_GHO
});
//# sourceMappingURL=AaveSafetyModule.js.map