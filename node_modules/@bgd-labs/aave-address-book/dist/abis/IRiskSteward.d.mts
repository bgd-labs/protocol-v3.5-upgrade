declare const IRiskSteward_ABI: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "poolDataProvider";
        readonly type: "address";
        readonly internalType: "contract IPoolDataProvider";
    }, {
        readonly name: "engine";
        readonly type: "address";
        readonly internalType: "contract IAaveV3ConfigEngine";
    }, {
        readonly name: "riskCouncil";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "riskConfig";
        readonly type: "tuple";
        readonly internalType: "struct IRiskSteward.Config";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationBonus";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "supplyCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "borrowCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "debtCeiling";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "optimalUsageRatio";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapLst";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapStable";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "CONFIG_ENGINE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IAaveV3ConfigEngine";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "POOL_DATA_PROVIDER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPoolDataProvider";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "RISK_COUNCIL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRiskConfig";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IRiskSteward.Config";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationBonus";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "supplyCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "borrowCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "debtCeiling";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "optimalUsageRatio";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapLst";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapStable";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getTimelock";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IRiskSteward.Debounce";
        readonly components: readonly [{
            readonly name: "supplyCapLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "borrowCapLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "ltvLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "liquidationBonusLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "liquidationThresholdLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "debtCeilingLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "baseVariableRateLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "variableRateSlope1LastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "variableRateSlope2LastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "optimalUsageRatioLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "priceCapLastUpdated";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isAddressRestricted";
    readonly inputs: readonly [{
        readonly name: "contractAddress";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setAddressRestricted";
    readonly inputs: readonly [{
        readonly name: "contractAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isRestricted";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setRiskConfig";
    readonly inputs: readonly [{
        readonly name: "riskConfig";
        readonly type: "tuple";
        readonly internalType: "struct IRiskSteward.Config";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationBonus";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "supplyCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "borrowCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "debtCeiling";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "optimalUsageRatio";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapLst";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapStable";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateCaps";
    readonly inputs: readonly [{
        readonly name: "capsUpdate";
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
        readonly name: "collateralUpdates";
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
    readonly name: "updateLstPriceCaps";
    readonly inputs: readonly [{
        readonly name: "priceCapUpdates";
        readonly type: "tuple[]";
        readonly internalType: "struct IRiskSteward.PriceCapLstUpdate[]";
        readonly components: readonly [{
            readonly name: "oracle";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "priceCapUpdateParams";
            readonly type: "tuple";
            readonly internalType: "struct IPriceCapAdapter.PriceCapUpdateParams";
            readonly components: readonly [{
                readonly name: "snapshotRatio";
                readonly type: "uint104";
                readonly internalType: "uint104";
            }, {
                readonly name: "snapshotTimestamp";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "maxYearlyRatioGrowthPercent";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateRates";
    readonly inputs: readonly [{
        readonly name: "ratesUpdate";
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
}, {
    readonly type: "function";
    readonly name: "updateStablePriceCaps";
    readonly inputs: readonly [{
        readonly name: "priceCapUpdates";
        readonly type: "tuple[]";
        readonly internalType: "struct IRiskSteward.PriceCapStableUpdate[]";
        readonly components: readonly [{
            readonly name: "oracle";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "priceCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "AddressRestricted";
    readonly inputs: readonly [{
        readonly name: "contractAddress";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "isRestricted";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "RiskConfigSet";
    readonly inputs: readonly [{
        readonly name: "riskConfig";
        readonly type: "tuple";
        readonly indexed: true;
        readonly internalType: "struct IRiskSteward.Config";
        readonly components: readonly [{
            readonly name: "ltv";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationThreshold";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "liquidationBonus";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "supplyCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "borrowCap";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "debtCeiling";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "optimalUsageRatio";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapLst";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "priceCapStable";
            readonly type: "tuple";
            readonly internalType: "struct IRiskSteward.RiskParamConfig";
            readonly components: readonly [{
                readonly name: "minDelay";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "maxPercentChange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AssetIsRestricted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "DebounceNotRespected";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidCaller";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPriceCapUpdate";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidUpdateToZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoZeroUpdates";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OracleIsRestricted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ParamChangeNotAllowed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UpdateNotInRange";
    readonly inputs: readonly [];
}];

export { IRiskSteward_ABI };
