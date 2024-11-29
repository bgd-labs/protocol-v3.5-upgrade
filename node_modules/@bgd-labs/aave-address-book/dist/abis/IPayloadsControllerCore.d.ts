declare const IPayloadsControllerCore_ABI: readonly [{
    readonly type: "function";
    readonly name: "EXPIRATION_DELAY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "GRACE_PERIOD";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MAX_EXECUTION_DELAY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MIN_EXECUTION_DELAY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "cancelPayload";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "createPayload";
    readonly inputs: readonly [{
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
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "executePayload";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "getExecutorSettingsByAccessControl";
    readonly inputs: readonly [{
        readonly name: "accessControl";
        readonly type: "uint8";
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
    }];
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPayloadById";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPayloadState";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum IPayloadsControllerCore.PayloadState";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPayloadsCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "updateExecutors";
    readonly inputs: readonly [{
        readonly name: "executors";
        readonly type: "tuple[]";
        readonly internalType: "struct IPayloadsControllerCore.UpdateExecutorInput[]";
        readonly components: readonly [{
            readonly name: "accessLevel";
            readonly type: "uint8";
            readonly internalType: "enum PayloadsControllerUtils.AccessControl";
        }, {
            readonly name: "executorConfig";
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
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "ExecutorSet";
    readonly inputs: readonly [{
        readonly name: "accessLevel";
        readonly type: "uint8";
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
    }, {
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "delay";
        readonly type: "uint40";
        readonly indexed: false;
        readonly internalType: "uint40";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PayloadCancelled";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly indexed: false;
        readonly internalType: "uint40";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PayloadCreated";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly indexed: true;
        readonly internalType: "uint40";
    }, {
        readonly name: "creator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "actions";
        readonly type: "tuple[]";
        readonly indexed: false;
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
    }, {
        readonly name: "maximumAccessLevelRequired";
        readonly type: "uint8";
        readonly indexed: true;
        readonly internalType: "enum PayloadsControllerUtils.AccessControl";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PayloadExecuted";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly indexed: false;
        readonly internalType: "uint40";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PayloadExecutionMessageReceived";
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
}, {
    readonly type: "event";
    readonly name: "PayloadQueued";
    readonly inputs: readonly [{
        readonly name: "payloadId";
        readonly type: "uint40";
        readonly indexed: false;
        readonly internalType: "uint40";
    }];
    readonly anonymous: false;
}];

export { IPayloadsControllerCore_ABI };
