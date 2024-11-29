declare const IMetaDelegateHelper_ABI: readonly [{
    readonly type: "function";
    readonly name: "batchMetaDelegate";
    readonly inputs: readonly [{
        readonly name: "delegateParams";
        readonly type: "tuple[]";
        readonly internalType: "struct IMetaDelegateHelper.MetaDelegateParams[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "contract IGovernancePowerDelegationToken";
        }, {
            readonly name: "delegationType";
            readonly type: "uint8";
            readonly internalType: "enum IMetaDelegateHelper.DelegationType";
        }, {
            readonly name: "delegator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];

export { IMetaDelegateHelper_ABI };
