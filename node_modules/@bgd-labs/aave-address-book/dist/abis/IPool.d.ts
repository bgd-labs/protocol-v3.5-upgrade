declare const IPool_ABI: readonly [{
    readonly type: "function";
    readonly name: "ADDRESSES_PROVIDER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPoolAddressesProvider";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "BRIDGE_PROTOCOL_FEE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "FLASHLOAN_PREMIUM_TOTAL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "FLASHLOAN_PREMIUM_TO_PROTOCOL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MAX_NUMBER_RESERVES";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "backUnbacked";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "fee";
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
    readonly name: "borrow";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "configureEModeCategory";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "config";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.EModeCategoryBaseConfiguration";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationBonus";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "label";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "configureEModeCategoryBorrowableBitmap";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "borrowableBitmap";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "configureEModeCategoryCollateralBitmap";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "collateralBitmap";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "deposit";
    readonly inputs: readonly [{
        readonly name: "asset";
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
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "dropReserve";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "finalizeTransfer";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "balanceFromBefore";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "balanceToBefore";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "flashLoan";
    readonly inputs: readonly [{
        readonly name: "receiverAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "assets";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "amounts";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "interestRateModes";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "params";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "flashLoanSimple";
    readonly inputs: readonly [{
        readonly name: "receiverAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "params";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getBorrowLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getBridgeLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getConfiguration";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.ReserveConfigurationMap";
        readonly components: readonly [{
            readonly name: "data";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEModeCategoryBorrowableBitmap";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEModeCategoryCollateralBitmap";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEModeCategoryCollateralConfig";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.CollateralConfig";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationBonus";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEModeCategoryData";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.EModeCategoryLegacy";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationBonus";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "priceSource";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "label";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEModeCategoryLabel";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getEModeLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getFlashLoanLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getLiquidationGracePeriod";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getLiquidationLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReserveAddressById";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReserveData";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.ReserveDataLegacy";
        readonly components: readonly [{
            readonly name: "configuration";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.ReserveConfigurationMap";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidityIndex";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "currentLiquidityRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "variableBorrowIndex";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "currentVariableBorrowRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "currentStableBorrowRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "lastUpdateTimestamp";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "id";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "aTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stableDebtTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "variableDebtTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "interestRateStrategyAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "accruedToTreasury";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "unbacked";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "isolationModeTotalDebt";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReserveDataExtended";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.ReserveData";
        readonly components: readonly [{
            readonly name: "configuration";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.ReserveConfigurationMap";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidityIndex";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "currentLiquidityRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "variableBorrowIndex";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "currentVariableBorrowRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "__deprecatedStableBorrowRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "lastUpdateTimestamp";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "id";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "liquidationGracePeriodUntil";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "aTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "__deprecatedStableDebtTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "variableDebtTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "interestRateStrategyAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "accruedToTreasury";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "unbacked";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "isolationModeTotalDebt";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "virtualUnderlyingBalance";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReserveNormalizedIncome";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReserveNormalizedVariableDebt";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReservesCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReservesList";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getSupplyLogic";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserAccountData";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "totalCollateralBase";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "totalDebtBase";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "availableBorrowsBase";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "currentLiquidationThreshold";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "ltv";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "healthFactor";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserConfiguration";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.UserConfigurationMap";
        readonly components: readonly [{
            readonly name: "data";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserEMode";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVirtualUnderlyingBalance";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initReserve";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "aTokenAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "variableDebtAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "interestRateStrategyAddress";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "liquidationCall";
    readonly inputs: readonly [{
        readonly name: "collateralAsset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "debtAsset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "debtToCover";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "receiveAToken";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "mintToTreasury";
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "mintUnbacked";
    readonly inputs: readonly [{
        readonly name: "asset";
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
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "repay";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "repayWithATokens";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
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
    readonly name: "repayWithPermit";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "onBehalfOf";
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
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "rescueTokens";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "resetIsolationModeTotalDebt";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setConfiguration";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "configuration";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.ReserveConfigurationMap";
        readonly components: readonly [{
            readonly name: "data";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setLiquidationGracePeriod";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "until";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setReserveInterestRateStrategyAddress";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "rateStrategyAddress";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setUserEMode";
    readonly inputs: readonly [{
        readonly name: "categoryId";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setUserUseReserveAsCollateral";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "useAsCollateral";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "supply";
    readonly inputs: readonly [{
        readonly name: "asset";
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
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "supplyWithPermit";
    readonly inputs: readonly [{
        readonly name: "asset";
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
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly internalType: "uint16";
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
}, {
    readonly type: "function";
    readonly name: "syncIndexesState";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "syncRatesState";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateBridgeProtocolFee";
    readonly inputs: readonly [{
        readonly name: "bridgeProtocolFee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateFlashloanPremiums";
    readonly inputs: readonly [{
        readonly name: "flashLoanPremiumTotal";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "flashLoanPremiumToProtocol";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "withdraw";
    readonly inputs: readonly [{
        readonly name: "asset";
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
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "BackUnbacked";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "backer";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "fee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Borrow";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum DataTypes.InterestRateMode";
    }, {
        readonly name: "borrowRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly indexed: true;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "FlashLoan";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "initiator";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "asset";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "interestRateMode";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum DataTypes.InterestRateMode";
    }, {
        readonly name: "premium";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly indexed: true;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "IsolationModeTotalDebtUpdated";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "totalDebt";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LiquidationCall";
    readonly inputs: readonly [{
        readonly name: "collateralAsset";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "debtAsset";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "debtToCover";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "liquidatedCollateralAmount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "liquidator";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "receiveAToken";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "MintUnbacked";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly indexed: true;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "MintedToTreasury";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amountMinted";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Repay";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "repayer";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "useATokens";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ReserveDataUpdated";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "liquidityRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "stableBorrowRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "variableBorrowRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "liquidityIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "variableBorrowIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ReserveUsedAsCollateralDisabled";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ReserveUsedAsCollateralEnabled";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Supply";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly indexed: true;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UserEModeSet";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "categoryId";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Withdraw";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}];

export { IPool_ABI };
