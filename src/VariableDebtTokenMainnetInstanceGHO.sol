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

  // These are additional storage variables that were present in the v3.3 VariableDebtToken (vToken) implementation specific to GHO.
  // However, such variables do not exist in other vToken implementations (for other assets) in either v3.3 or v3.4.
  // Therefore, these slots need to be cleaned (zeroed out) in case future vToken versions
  // require the addition of new storage variables at these specific slots.
  // If these slots are not cleaned, the GHO vToken contract would retain non-zero values
  // at these storage locations, potentially conflicting with new variables introduced in future standard vToken upgrades.
  address private _deprecated_ghoAToken;
  address private _deprecated_discountToken;
  address private _deprecated_discountRateStrategy;

  // This mapping variable (`_deprecated_ghoUserState`, now commented out) cannot be 'deleted' in the same way as simple value types.
  // If it previously held data, those storage slots remain occupied.
  // Future vToken upgrades must be mindful of this: this specific storage slot (where the mapping was declared)
  // should not be reused for a new mapping due to potential data remnants.
  // It might be possible to reuse it for simple value types, but not for new reference types like another mapping.
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
    // @note This is the standard initialization function,
    //       similar to the standard `VariableDebtToken.initialize` function,
    //       but it includes additional logic to delete the deprecated storage variables specific to the old GHO vToken.

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