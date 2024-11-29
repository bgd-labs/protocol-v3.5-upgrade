// src/ts/abis/IGovernancePowerStrategy.ts
var IGovernancePowerStrategy_ABI = [
  {
    type: "function",
    name: "getFullPropositionPower",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getFullVotingPower",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  }
];
export {
  IGovernancePowerStrategy_ABI
};
//# sourceMappingURL=IGovernancePowerStrategy.mjs.map