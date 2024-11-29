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

// src/ts/abis/IGovernanceDataHelper.ts
var IGovernanceDataHelper_exports = {};
__export(IGovernanceDataHelper_exports, {
  IGovernanceDataHelper_ABI: () => IGovernanceDataHelper_ABI
});
module.exports = __toCommonJS(IGovernanceDataHelper_exports);
var IGovernanceDataHelper_ABI = [
  {
    type: "function",
    name: "getConstants",
    inputs: [
      {
        name: "govCore",
        type: "address",
        internalType: "contract IGovernanceCore"
      },
      {
        name: "accessLevels",
        type: "uint8[]",
        internalType: "enum PayloadsControllerUtils.AccessControl[]"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceDataHelper.Constants",
        components: [
          {
            name: "votingConfigs",
            type: "tuple[]",
            internalType: "struct IGovernanceDataHelper.VotingConfig[]",
            components: [
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "config",
                type: "tuple",
                internalType: "struct IGovernanceCore.VotingConfig",
                components: [
                  {
                    name: "coolDownBeforeVotingStart",
                    type: "uint24",
                    internalType: "uint24"
                  },
                  {
                    name: "votingDuration",
                    type: "uint24",
                    internalType: "uint24"
                  },
                  {
                    name: "yesThreshold",
                    type: "uint56",
                    internalType: "uint56"
                  },
                  {
                    name: "yesNoDifferential",
                    type: "uint56",
                    internalType: "uint56"
                  },
                  {
                    name: "minPropositionPower",
                    type: "uint56",
                    internalType: "uint56"
                  }
                ]
              }
            ]
          },
          {
            name: "precisionDivider",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "cooldownPeriod",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "expirationTime",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "cancellationFee",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsData",
    inputs: [
      {
        name: "govCore",
        type: "address",
        internalType: "contract IGovernanceCore"
      },
      {
        name: "from",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "pageSize",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IGovernanceDataHelper.Proposal[]",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "votingChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "proposalData",
            type: "tuple",
            internalType: "struct IGovernanceCore.Proposal",
            components: [
              {
                name: "state",
                type: "uint8",
                internalType: "enum IGovernanceCore.State"
              },
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "creationTime",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "votingDuration",
                type: "uint24",
                internalType: "uint24"
              },
              {
                name: "votingActivationTime",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "queuingTime",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "cancelTimestamp",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "creator",
                type: "address",
                internalType: "address"
              },
              {
                name: "votingPortal",
                type: "address",
                internalType: "address"
              },
              {
                name: "snapshotBlockHash",
                type: "bytes32",
                internalType: "bytes32"
              },
              {
                name: "ipfsHash",
                type: "bytes32",
                internalType: "bytes32"
              },
              {
                name: "forVotes",
                type: "uint128",
                internalType: "uint128"
              },
              {
                name: "againstVotes",
                type: "uint128",
                internalType: "uint128"
              },
              {
                name: "cancellationFee",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "payloads",
                type: "tuple[]",
                internalType: "struct PayloadsControllerUtils.Payload[]",
                components: [
                  {
                    name: "chain",
                    type: "uint256",
                    internalType: "uint256"
                  },
                  {
                    name: "accessLevel",
                    type: "uint8",
                    internalType: "enum PayloadsControllerUtils.AccessControl"
                  },
                  {
                    name: "payloadsController",
                    type: "address",
                    internalType: "address"
                  },
                  {
                    name: "payloadId",
                    type: "uint40",
                    internalType: "uint40"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRepresentationData",
    inputs: [
      {
        name: "govCore",
        type: "address",
        internalType: "contract IGovernanceCore"
      },
      {
        name: "wallet",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainIds",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IGovernanceDataHelper.Representatives[]",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "representative",
            type: "address",
            internalType: "address"
          }
        ]
      },
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IGovernanceDataHelper.Represented[]",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "votersRepresented",
            type: "address[]",
            internalType: "address[]"
          }
        ]
      }
    ],
    stateMutability: "view"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IGovernanceDataHelper_ABI
});
//# sourceMappingURL=IGovernanceDataHelper.js.map