// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {ATokenInstance, IInitializableAToken, Errors} from "aave-v3-origin/contracts/instances/ATokenInstance.sol";

import {AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";

import {IGhoToken} from "gho-direct-minter/interfaces/IGhoToken.sol";

import {IATokenMainnetInstanceGHO} from "./interfaces/IATokenMainnetInstanceGHO.sol";

contract ATokenMainnetInstanceGHO is ATokenInstance, IATokenMainnetInstanceGHO {
  // These are additional storage variables that were present in the v3.3 AToken implementation specific to the GHO aToken.
  // However, such variables do not exist in other AToken implementations (for other assets) in either v3.3 or v3.4.
  // Therefore, these slots need to be cleaned (zeroed out) in case future AToken versions
  // require the addition of new storage variables at these specific slots.
  // If these slots are not cleaned, the GHO AToken contract would retain non-zero values
  // at these storage locations, potentially conflicting with new variables introduced in future standard AToken upgrades.
  address private _deprecated_ghoVariableDebtToken;
  address private _deprecated_ghoTreasury;

  constructor(IPool pool, address rewardsController, address treasury)
    ATokenInstance(pool, rewardsController, treasury)
  {}

  /// @inheritdoc IInitializableAToken
  function initialize(
    IPool initializingPool,
    address underlyingAsset,
    uint8 aTokenDecimals,
    string calldata aTokenName,
    string calldata aTokenSymbol,
    bytes calldata params
  ) public virtual override initializer {
    // @note This is the standard initialization function,
    //       similar to `ATokenInstance.initialize`,
    //       but it includes additional logic to delete the deprecated storage variables specific to the old GHO AToken.

    delete _deprecated_ghoVariableDebtToken;
    delete _deprecated_ghoTreasury;

    require(initializingPool == POOL, Errors.PoolAddressesDoNotMatch());
    _setName(aTokenName);
    _setSymbol(aTokenSymbol);
    _setDecimals(aTokenDecimals);

    _underlyingAsset = underlyingAsset;

    _domainSeparator = _calculateDomainSeparator();

    emit Initialized(
      underlyingAsset,
      address(POOL),
      address(TREASURY),
      address(REWARDS_CONTROLLER),
      aTokenDecimals,
      aTokenName,
      aTokenSymbol,
      params
    );
  }

  /// @inheritdoc IATokenMainnetInstanceGHO
  function resolveFacilitator(uint256 amount) external override onlyPoolAdmin {
    // @note This action is necessary to remove this AToken contract from the GHO facilitator list.
    //       To achieve this, a facilitator must have its bucket level reduced to 0.
    //       The facilitator bucket (both capacity and level) previously associated with this AToken
    //       will be effectively transferred to a new `GhoDirectMinter` contract (which becomes the new facilitator).
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).burn(amount);
  }
}