declare const IPayloadsControllerDataHelper_ABI: readonly [{
    readonly type: "function";
    readonly name: "getExecutorConfigs";
    readonly inputs: readonly [{
        readonly name: "payloadsController";
        readonly type: "address";
        readonly internalType: "contract IPayloadsController";
    }, {
        readonly name: "accessLevels";
        readonly type: "uint8[]";
        readonly internalType: "enum PayloadsControllerUtils.AccessControl[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]";
        readonly components: readonly [{
            readonly name: "accessLevel";
            readonly type: "uint8";
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        }, {
            readonly name: "config";
            readonly type: "tuple";
            readonly internalType: "struct IPayloadsControllerCore.ExecutorConfig";
            readonly components: readonly [{
                readonly name: "executor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "delay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPayloadsData";
    readonly inputs: readonly [{
        readonly name: "payloadsController";
        readonly type: "address";
        readonly internalType: "contract IPayloadsController";
    }, {
        readonly name: "payloadsIds";
        readonly type: "uint40[]";
        readonly internalType: "uint40[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IPayloadsControllerDataHelper.Payload[]";
        readonly components: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "tuple";
            readonly internalType: "struct IPayloadsControllerCore.Payload";
            readonly components: readonly [{
                readonly name: "creator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maximumAccessLevelRequired";
                readonly type: "uint8";
                readonly internalType: "enum PayloadsControllerUtils.AccessControl";
            }, {
                readonly name: "state";
                readonly type: "uint8";
                readonly internalType: "enum IPayloadsControllerCore.PayloadState";
            }, {
                readonly name: "createdAt";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "queuedAt";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "executedAt";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "cancelledAt";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "expirationTime";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "delay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "gracePeriod";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "actions";
                readonly type: "tuple[]";
                readonly internalType: "struct IPayloadsControllerCore.ExecutionAction[]";
                readonly components: readonly [{
                    readonly name: "target";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "withDelegateCall";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }, {
                    readonly name: "accessLevel";
                    readonly type: "uint8";
                    readonly internalType: "enum PayloadsControllerUtils.AccessControl";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "signature";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
    }];
    readonly stateMutability: "view";
}];

export { IPayloadsControllerDataHelper_ABI };
