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

// src/ts/MiscFantom.ts
var MiscFantom_exports = {};
__export(MiscFantom_exports, {
  CHAIN_ID: () => CHAIN_ID,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER
});
module.exports = __toCommonJS(MiscFantom_exports);
var PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
var CHAIN_ID = 250;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  PARASWAP_FEE_CLAIMER
});
//# sourceMappingURL=MiscFantom.js.map