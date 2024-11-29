declare const IGovernanceCore_ABI: readonly [{
    readonly type: "function";
    readonly name: "ACHIEVABLE_VOTING_PARTICIPATION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "CANCELLATION_FEE_COLLECTOR";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "COOLDOWN_PERIOD";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MIN_VOTING_DURATION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "NAME";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "PRECISION_DIVIDER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "PROPOSAL_EXPIRATION_TIME";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTING_TOKENS_CAP";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "activateVoting";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addVotingPortals";
    readonly inputs: readonly [{
        readonly name: "votingPortals";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "cancelProposal";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "createProposal";
    readonly inputs: readonly [{
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
    }, {
        readonly name: "votingPortal";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "ipfsHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "executeProposal";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getCancellationFee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPowerStrategy";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IGovernancePowerStrategy";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposal";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalState";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum IGovernanceCore.State";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalsCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRepresentativeByChain";
    readonly inputs: readonly [{
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "chainId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRepresentedVotersByChain";
    readonly inputs: readonly [{
        readonly name: "representative";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "chainId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVotingConfig";
    readonly inputs: readonly [{
        readonly name: "accessLevel";
        readonly type: "uint8";
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
    }];
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVotingPortalsCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isVotingPortalApproved";
    readonly inputs: readonly [{
        readonly name: "votingPortal";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "queueProposal";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "forVotes";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "againstVotes";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "redeemCancellationFee";
    readonly inputs: readonly [{
        readonly name: "proposalIds";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "removeVotingPortals";
    readonly inputs: readonly [{
        readonly name: "votingPortals";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "rescueVotingPortal";
    readonly inputs: readonly [{
        readonly name: "votingPortal";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setPowerStrategy";
    readonly inputs: readonly [{
        readonly name: "newPowerStrategy";
        readonly type: "address";
        readonly internalType: "contract IGovernancePowerStrategy";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setVotingConfigs";
    readonly inputs: readonly [{
        readonly name: "votingConfigs";
        readonly type: "tuple[]";
        readonly internalType: "struct IGovernanceCore.SetVotingConfigInput[]";
        readonly components: readonly [{
            readonly name: "accessLevel";
            readonly type: "uint8";
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        }, {
            readonly name: "coolDownBeforeVotingStart";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "votingDuration";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "yesThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "yesNoDifferential";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minPropositionPower";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateCancellationFee";
    readonly inputs: readonly [{
        readonly name: "cancellationFee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateRepresentativesForChain";
    readonly inputs: readonly [{
        readonly name: "representatives";
        readonly type: "tuple[]";
        readonly internalType: "struct IGovernanceCore.RepresentativeInput[]";
        readonly components: readonly [{
            readonly name: "representative";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "CancellationFeeRedeemed";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "cancellationFee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "success";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "CancellationFeeUpdated";
    readonly inputs: readonly [{
        readonly name: "cancellationFee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PayloadSent";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly indexed: false;
        readonly internalType: "uint40";
    }, {
        readonly name: "payloadsController";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "chainId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "payloadNumberOnProposal";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "numberOfPayloadsOnProposal";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PowerStrategyUpdated";
    readonly inputs: readonly [{
        readonly name: "newPowerStrategy";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalCanceled";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalCreated";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "creator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "accessLevel";
        readonly type: "uint8";
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
    }, {
        readonly name: "ipfsHash";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalExecuted";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalFailed";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "votesFor";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }, {
        readonly name: "votesAgainst";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalQueued";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "votesFor";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }, {
        readonly name: "votesAgainst";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RepresentativeUpdated";
    readonly inputs: readonly [{
        readonly name: "voter";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "representative";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "chainId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VoteForwarded";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }, {
        readonly name: "votingAssetsWithSlot";
        readonly type: "tuple[]";
        readonly indexed: false;
        readonly internalType: "struct IVotingMachineWithProofs.VotingAssetWithSlot[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VotingActivated";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "snapshotBlockHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "votingDuration";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VotingConfigUpdated";
    readonly inputs: readonly [{
        readonly name: "accessLevel";
        readonly type: "uint8";
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
    }, {
        readonly name: "votingDuration";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }, {
        readonly name: "coolDownBeforeVotingStart";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }, {
        readonly name: "yesThreshold";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "yesNoDifferential";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "minPropositionPower";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VotingPortalUpdated";
    readonly inputs: readonly [{
        readonly name: "votingPortal";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}];

export { IGovernanceCore_ABI };
