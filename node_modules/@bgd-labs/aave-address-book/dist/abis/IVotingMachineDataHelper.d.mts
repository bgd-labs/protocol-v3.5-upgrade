declare const IVotingMachineDataHelper_ABI: readonly [{
    readonly type: "function";
    readonly name: "getProposalsData";
    readonly inputs: readonly [{
        readonly name: "votingMachine";
        readonly type: "address";
        readonly internalType: "contract IVotingMachineWithProofs";
    }, {
        readonly name: "initialProposals";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineDataHelper.InitialProposal[]";
        readonly components: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "snapshotBlockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineDataHelper.Proposal[]";
        readonly components: readonly [{
            readonly name: "proposalData";
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
        }, {
            readonly name: "votedInfo";
            readonly type: "tuple";
            readonly internalType: "struct IVotingMachineDataHelper.VotedInfo";
            readonly components: readonly [{
                readonly name: "support";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "votingPower";
                readonly type: "uint248";
                readonly internalType: "uint248";
            }];
        }, {
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract IVotingStrategy";
        }, {
            readonly name: "dataWarehouse";
            readonly type: "address";
            readonly internalType: "contract IDataWarehouse";
        }, {
            readonly name: "votingAssets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "hasRequiredRoots";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "voteConfig";
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
        }, {
            readonly name: "state";
            readonly type: "uint8";
            readonly internalType: "enum IVotingMachineWithProofs.ProposalState";
        }];
    }];
    readonly stateMutability: "view";
}];

export { IVotingMachineDataHelper_ABI };
