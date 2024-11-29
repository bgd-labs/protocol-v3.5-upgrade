declare const IStataTokenFactory_ABI: readonly [{
    readonly type: "function";
    readonly name: "createStataTokens";
    readonly inputs: readonly [{
        readonly name: "underlyings";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getStataToken";
    readonly inputs: readonly [{
        readonly name: "underlying";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getStataTokens";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "error";
    readonly name: "NotListedUnderlying";
    readonly inputs: readonly [{
        readonly name: "underlying";
        readonly type: "address";
        readonly internalType: "address";
    }];
}];

export { IStataTokenFactory_ABI };
