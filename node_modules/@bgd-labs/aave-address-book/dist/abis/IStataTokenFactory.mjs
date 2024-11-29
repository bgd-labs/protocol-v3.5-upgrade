// src/ts/abis/IStataTokenFactory.ts
var IStataTokenFactory_ABI = [
  {
    type: "function",
    name: "createStataTokens",
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
    name: "getStataToken",
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
    name: "getStataTokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "error",
    name: "NotListedUnderlying",
    inputs: [
      {
        name: "underlying",
        type: "address",
        internalType: "address"
      }
    ]
  }
];
export {
  IStataTokenFactory_ABI
};
//# sourceMappingURL=IStataTokenFactory.mjs.map