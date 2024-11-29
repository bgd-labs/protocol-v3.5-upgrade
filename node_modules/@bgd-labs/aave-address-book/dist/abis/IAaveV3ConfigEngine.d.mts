declare const IAaveV3ConfigEngine_ABI: readonly [{
    readonly type: "function";
    readonly name: "ATOKEN_IMPL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "BORROW_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "CAPS_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "COLLATERAL_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "COLLECTOR";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "DEFAULT_INTEREST_RATE_STRATEGY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "EMODE_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "LISTING_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ORACLE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IAaveOracle";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "POOL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "POOL_CONFIGURATOR";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPoolConfigurator";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "PRICE_FEED_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "RATE_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "REWARDS_CONTROLLER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VTOKEN_IMPL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "listAssets";
    readonly inputs: readonly [{
        readonly name: "context";
        readonly type: "tuple";
        readonly internalType: "struct IAaveV3ConfigEngine.PoolContext";
        readonly components: readonly [{
            readonly name: "networkName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "networkAbbreviation";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }, {
        readonly name: "listings";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.Listing[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assetSymbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "priceFeed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "rateStrategyParams";
            readonly type: "tuple";
            readonly internalType: "struct IAaveV3ConfigEngine.InterestRateInputData";
            readonly components: readonly [{
                readonly name: "optimalUsageRatio";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "baseVariableBorrowRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "variableRateSlope1";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "variableRateSlope2";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "enabledToBorrow";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowableInIsolation";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "withSiloedBorrowing";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "flashloanable";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "ltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqBonus";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveFactor";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "supplyCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "debtCeiling";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqProtocolFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "listAssetsCustom";
    readonly inputs: readonly [{
        readonly name: "context";
        readonly type: "tuple";
        readonly internalType: "struct IAaveV3ConfigEngine.PoolContext";
        readonly components: readonly [{
            readonly name: "networkName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "networkAbbreviation";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }, {
        readonly name: "listings";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.ListingWithCustomImpl[]";
        readonly components: readonly [{
            readonly name: "base";
            readonly type: "tuple";
            readonly internalType: "struct IAaveV3ConfigEngine.Listing";
            readonly components: readonly [{
                readonly name: "asset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "assetSymbol";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "priceFeed";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rateStrategyParams";
                readonly type: "tuple";
                readonly internalType: "struct IAaveV3ConfigEngine.InterestRateInputData";
                readonly components: readonly [{
                    readonly name: "optimalUsageRatio";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "baseVariableBorrowRate";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "variableRateSlope1";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "variableRateSlope2";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "enabledToBorrow";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "borrowableInIsolation";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withSiloedBorrowing";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "flashloanable";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "ltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liqThreshold";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liqBonus";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveFactor";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "supplyCap";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "borrowCap";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "debtCeiling";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liqProtocolFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "implementations";
            readonly type: "tuple";
            readonly internalType: "struct IAaveV3ConfigEngine.TokenImplementations";
            readonly components: readonly [{
                readonly name: "aToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "vToken";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateAssetsEMode";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.AssetEModeUpdate[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "eModeCategory";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "borrowable";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "collateral";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateBorrowSide";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.BorrowUpdate[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "enabledToBorrow";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "flashloanable";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowableInIsolation";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "withSiloedBorrowing";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveFactor";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateCaps";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.CapsUpdate[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "supplyCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateCollateralSide";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.CollateralUpdate[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "ltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqBonus";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "debtCeiling";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqProtocolFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateEModeCategories";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.EModeCategoryUpdate[]";
        readonly components: readonly [{
            readonly name: "eModeCategory";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "ltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liqBonus";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
    readonly name: "updatePriceFeeds";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.PriceFeedUpdate[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "priceFeed";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateRateStrategies";
    readonly inputs: readonly [{
        readonly name: "updates";
        readonly type: "tuple[]";
        readonly internalType: "struct IAaveV3ConfigEngine.RateStrategyUpdate[]";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct IAaveV3ConfigEngine.InterestRateInputData";
            readonly components: readonly [{
                readonly name: "optimalUsageRatio";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "baseVariableBorrowRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "variableRateSlope1";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "variableRateSlope2";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];

export { IAaveV3ConfigEngine_ABI };
