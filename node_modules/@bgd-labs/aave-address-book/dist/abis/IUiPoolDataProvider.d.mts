declare const IUiPoolDataProvider_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_networkBaseTokenPriceInUsdProxyAggregator";
        readonly type: "address";
        readonly internalType: "contract IEACAggregatorProxy";
    }, {
        readonly name: "_marketReferenceCurrencyPriceInUsdProxyAggregator";
        readonly type: "address";
        readonly internalType: "contract IEACAggregatorProxy";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "ETH_CURRENCY_UNIT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MKR_ADDRESS";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "bytes32ToString";
    readonly inputs: readonly [{
        readonly name: "_bytes32";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "getReservesData";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly internalType: "contract IPoolAddressesProvider";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IUiPoolDataProviderV3.AggregatedReserveData[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "symbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseLTVasCollateral";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveLiquidationThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveLiquidationBonus";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveFactor";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "usageAsCollateralEnabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "borrowingEnabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "stableBorrowRateEnabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "isActive";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "isFrozen";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "liquidityIndex";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "variableBorrowIndex";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "liquidityRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "variableBorrowRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "stableBorrowRate";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "lastUpdateTimestamp";
            readonly type: "uint40";
            readonly internalType: "uint40";
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
            readonly name: "availableLiquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalPrincipalStableDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "averageStableRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableDebtLastUpdateTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalScaledVariableDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "priceInMarketReferenceCurrency";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "priceOracle";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableRateSlope1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableRateSlope2";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseStableBorrowRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "optimalUsageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "isPaused";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "isSiloedBorrowing";
            readonly type: "bool";
            readonly internalType: "bool";
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
            readonly name: "flashLoanEnabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "debtCeiling";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "debtCeilingDecimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "eModeCategoryId";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "borrowCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "supplyCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "eModeLtv";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "eModeLiquidationThreshold";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "eModeLiquidationBonus";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "eModePriceSource";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "eModeLabel";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "borrowableInIsolation";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }, {
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo";
        readonly components: readonly [{
            readonly name: "marketReferenceCurrencyUnit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "marketReferenceCurrencyPriceInUsd";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "networkBaseTokenPriceInUsd";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "networkBaseTokenPriceDecimals";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getReservesList";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly internalType: "contract IPoolAddressesProvider";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserReservesData";
    readonly inputs: readonly [{
        readonly name: "provider";
        readonly type: "address";
        readonly internalType: "contract IPoolAddressesProvider";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IUiPoolDataProviderV3.UserReserveData[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "scaledATokenBalance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "usageAsCollateralEnabledOnUser";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "scaledVariableDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "principalStableDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableBorrowLastUpdateTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "marketReferenceCurrencyPriceInUsdProxyAggregator";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IEACAggregatorProxy";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "networkBaseTokenPriceInUsdProxyAggregator";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IEACAggregatorProxy";
    }];
    readonly stateMutability: "view";
}];

export { IUiPoolDataProvider_ABI };
