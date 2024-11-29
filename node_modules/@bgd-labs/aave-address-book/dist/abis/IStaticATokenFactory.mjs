// src/ts/abis/IStaticATokenFactory.ts
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
export {
  IStaticATokenFactory_ABI
};
//# sourceMappingURL=IStaticATokenFactory.mjs.map