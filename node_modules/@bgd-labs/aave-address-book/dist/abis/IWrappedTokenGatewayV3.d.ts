declare const IWrappedTokenGatewayV3_ABI: readonly [{
    readonly type: "function";
    readonly name: "borrowETH";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "depositETH";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "repayETH";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "withdrawETH";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "withdrawETHWithPermit";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "deadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "permitV";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "permitR";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "permitS";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];

export { IWrappedTokenGatewayV3_ABI };
