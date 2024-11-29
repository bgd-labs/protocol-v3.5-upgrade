declare const IGovernanceDataHelper_ABI: readonly [{
    readonly type: "function";
    readonly name: "getConstants";
    readonly inputs: readonly [{
        readonly name: "govCore";
        readonly type: "address";
        readonly internalType: "contract IGovernanceCore";
    }, {
        readonly name: "accessLevels";
        readonly type: "uint8[]";
        readonly internalType: "enum PayloadsControllerUtils.AccessControl[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IGovernanceDataHelper.Constants";
        readonly components: readonly [{
            readonly name: "votingConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct IGovernanceDataHelper.VotingConfig[]";
            readonly components: readonly [{
                readonly name: "accessLevel";
                readonly type: "uint8";
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            }, {
                readonly name: "config";
                readonly type: "tuple";
                readonly internalType: "struct IGovernanceCore.VotingConfig";
                readonly components: readonly [{
                    readonly name: "coolDownBeforeVotingStart";
                    readonly type: "uint24";
                    readonly internalType: "uint24";
                }, {
                    readonly name: "votingDuration";
                    readonly type: "uint24";
                    readonly internalType: "uint24";
                }, {
                    readonly name: "yesThreshold";
                    readonly type: "uint56";
                    readonly internalType: "uint56";
                }, {
                    readonly name: "yesNoDifferential";
                    readonly type: "uint56";
                    readonly internalType: "uint56";
                }, {
                    readonly name: "minPropositionPower";
                    readonly type: "uint56";
                    readonly internalType: "uint56";
                }];
            }];
        }, {
            readonly name: "precisionDivider";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "cooldownPeriod";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "expirationTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "cancellationFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalsData";
    readonly inputs: readonly [{
        readonly name: "govCore";
        readonly type: "address";
        readonly internalType: "contract IGovernanceCore";
    }, {
        readonly name: "from";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "to";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "pageSize";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IGovernanceDataHelper.Proposal[]";
        readonly components: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "votingChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "proposalData";
            readonly type: "tuple";
            readonly internalType: "struct IGovernanceCore.Proposal";
            readonly components: readonly [{
                readonly name: "state";
                readonly type: "uint8";
                readonly internalType: "enum IGovernanceCore.State";
            }, {
                readonly name: "accessLevel";
                readonly type: "uint8";
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            }, {
                readonly name: "creationTime";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "votingDuration";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "votingActivationTime";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "queuingTime";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "cancelTimestamp";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "creator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "votingPortal";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "snapshotBlockHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "ipfsHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "forVotes";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "againstVotes";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "cancellationFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "payloads";
                readonly type: "tuple[]";
                readonly internalType: "struct PayloadsControllerUtils.Payload[]";
                readonly components: readonly [{
                    readonly name: "chain";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "accessLevel";
                    readonly type: "uint8";
                    readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                }, {
                    readonly name: "payloadsController";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "payloadId";
                    readonly type: "uint40";
                    readonly internalType: "uint40";
                }];
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRepresentationData";
    readonly inputs: readonly [{
        readonly name: "govCore";
        readonly type: "address";
        readonly internalType: "contract IGovernanceCore";
    }, {
        readonly name: "wallet";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "chainIds";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IGovernanceDataHelper.Representatives[]";
        readonly components: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "representative";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IGovernanceDataHelper.Represented[]";
        readonly components: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "votersRepresented";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
    }];
    readonly stateMutability: "view";
}];

export { IGovernanceDataHelper_ABI };
