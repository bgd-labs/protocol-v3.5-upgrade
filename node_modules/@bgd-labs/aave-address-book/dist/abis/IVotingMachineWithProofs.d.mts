declare const IVotingMachineWithProofs_ABI: readonly [{
    readonly type: "function";
    readonly name: "DATA_WAREHOUSE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IDataWarehouse";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "DOMAIN_SEPARATOR";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "GOVERNANCE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
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
    readonly name: "REPRESENTATIVES_SLOT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTE_SUBMITTED_TYPEHASH";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTING_ASSET_WITH_SLOT_RAW";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTING_ASSET_WITH_SLOT_TYPEHASH";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTING_STRATEGY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IVotingStrategy";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "closeAndSendVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getProposalById";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes";
        readonly components: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sentToGovernance";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "startTime";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "endTime";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "votingClosedAndSentTimestamp";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "forVotes";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "againstVotes";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "creationBlockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "votingClosedAndSentBlockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly internalType: "enum IVotingMachineWithProofs.ProposalState";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalVoteConfiguration";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration";
        readonly components: readonly [{
            readonly name: "votingDuration";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "l1ProposalBlockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalsVoteConfigurationIds";
    readonly inputs: readonly [{
        readonly name: "skip";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "size";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserProposalVote";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.Vote";
        readonly components: readonly [{
            readonly name: "support";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "votingPower";
            readonly type: "uint248";
            readonly internalType: "uint248";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "startProposalVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVoteAsRepresentative";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "proofOfRepresentation";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVoteAsRepresentativeBySignature";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "representative";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "proofOfRepresentation";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "signatureParams";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.SignatureParams";
        readonly components: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVoteBySignature";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "v";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "r";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "s";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "ProposalResultsSent";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "forVotes";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "againstVotes";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalVoteConfigurationBridged";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "blockHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "votingDuration";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }, {
        readonly name: "voteCreated";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalVoteStarted";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "l1BlockHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "startTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "endTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VoteEmitted";
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
        readonly name: "votingPower";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}];

export { IVotingMachineWithProofs_ABI };
