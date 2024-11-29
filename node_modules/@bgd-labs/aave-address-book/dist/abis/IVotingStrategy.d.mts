declare const IVotingStrategy_ABI: readonly [{
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
    readonly name: "POWER_SCALE_FACTOR";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "STK_AAVE_SLASHING_EXCHANGE_RATE_PRECISION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "STK_AAVE_SLASHING_EXCHANGE_RATE_SLOT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVotingPower";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "storageSlot";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "power";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "blockHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hasRequiredRoots";
    readonly inputs: readonly [{
        readonly name: "blockHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "view";
}];

export { IVotingStrategy_ABI };
