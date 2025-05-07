// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {
  VariableDebtToken,
  IPool,
  IInitializableDebtToken,
  VersionedInitializable,
  Errors
} from "aave-v3-origin/contracts/protocol/tokenization/VariableDebtToken.sol";

import {IVariableDebtTokenMainnetInstanceGHO} from "./interfaces/IVariableDebtTokenMainnetInstanceGHO.sol";

contract VariableDebtTokenMainnetInstanceGHO is VariableDebtToken, IVariableDebtTokenMainnetInstanceGHO {
  uint256 public constant DEBT_TOKEN_REVISION = 4;

  // These are additional variables that were in the v3.3 VToken for the GHO aToken
  // but there is no such variables in all other vTokens in both v3.3 and v3.4
  // so we need to clean them in case in future versions of vTokens it will be
  // needed to add new storage variables.
  // If we don't clean them, then the aToken for the GHO token will have non zero values
  // in these new variables that may be added in the future.
  address private _deprecated_ghoAToken;
  address private _deprecated_discountToken;
  address private _deprecated_discountRateStrategy;

  // This global variable can't be cleaned. The future vToken code upgrades should consider
  // that on this slot there can't be a new mapping because it holds some non-zero values
  // On this slot there can be only value types, not reference types.
  // mapping(address => GhoUserState) internal _deprecated_ghoUserState;

  constructor(IPool pool, address rewardsController) VariableDebtToken(pool, rewardsController) {}

  /// @inheritdoc VersionedInitializable
  function getRevision() internal pure virtual override returns (uint256) {
    return DEBT_TOKEN_REVISION;
  }

  /// @inheritdoc IInitializableDebtToken
  function initialize(
    IPool initializingPool,
    address underlyingAsset,
    uint8 debtTokenDecimals,
    string memory debtTokenName,
    string memory debtTokenSymbol,
    bytes calldata params
  ) external override initializer {
    // @note this is the default initialization function
    // the same as the `VariableDebtTokenInstance.initialize` function
    // but contains the additional logic for deleting the deprecated variables

    delete _deprecated_ghoAToken;
    delete _deprecated_discountToken;
    delete _deprecated_discountRateStrategy;

    require(initializingPool == POOL, Errors.PoolAddressesDoNotMatch());
    _setName(debtTokenName);
    _setSymbol(debtTokenSymbol);
    _setDecimals(debtTokenDecimals);

    _underlyingAsset = underlyingAsset;

    _domainSeparator = _calculateDomainSeparator();

    emit Initialized(
      underlyingAsset,
      address(POOL),
      address(REWARDS_CONTROLLER),
      debtTokenDecimals,
      debtTokenName,
      debtTokenSymbol,
      params
    );
  }

  /// @inheritdoc IVariableDebtTokenMainnetInstanceGHO
  function updateDiscountDistribution(address, address, uint256, uint256, uint256) external override {}
}
