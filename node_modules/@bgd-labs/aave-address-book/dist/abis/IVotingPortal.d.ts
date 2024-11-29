declare const IVotingPortal_ABI: readonly [{
    readonly type: "function";
    readonly name: "CROSS_CHAIN_CONTROLLER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
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
    readonly name: "VOTING_MACHINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTING_MACHINE_CHAIN_ID";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "decodeMessage";
    readonly inputs: readonly [{
        readonly name: "message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "forwardStartVotingMessage";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "blockHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "votingDuration";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getStartVotingGasLimit";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "receiveCrossChainMessage";
    readonly inputs: readonly [{
        readonly name: "originSender";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "originChainId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setStartVotingGasLimit";
    readonly inputs: readonly [{
        readonly name: "gasLimit";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "StartVotingGasLimitUpdated";
    readonly inputs: readonly [{
        readonly name: "gasLimit";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VoteMessageReceived";
    readonly inputs: readonly [{
        readonly name: "originSender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "originChainId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "delivered";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }, {
        readonly name: "message";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }, {
        readonly name: "reason";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }];
    readonly anonymous: false;
}];

export { IVotingPortal_ABI };
