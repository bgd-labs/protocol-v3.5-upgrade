// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {IPool} from "aave-v3-origin/contracts/interfaces/IPool.sol";
import {ATokenInstance, IInitializableAToken, Errors} from "aave-v3-origin/contracts/instances/ATokenInstance.sol";

import {AaveV3EthereumAssets} from "aave-address-book/AaveV3Ethereum.sol";

import {IGhoToken} from "gho-direct-minter/interfaces/IGhoToken.sol";

import {IATokenMainnetInstanceGHO} from "./interfaces/IATokenMainnetInstanceGHO.sol";

contract ATokenMainnetInstanceGHO is ATokenInstance, IATokenMainnetInstanceGHO {
  // These are additional variables that were in the v3.3 AToken for the GHO aToken
  // but there is no such variables in all other aTokens in both v3.3 and v3.4
  // so we need to clean them in case in future versions of aTokens it will be
  // needed to add new storage variables.
  // If we don't clean them, then the aToken for the GHO token will have non zero values
  // in these new variables that may be added in the future.
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
    // @note this is the default initialization function
    // the same as the `ATokenInstance.initialize` function
    // but contains the additional logic for deleting the deprecated variables

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
    // @note This action is needed to remove this aToken from facilitator list.
    //       In order to do this, a facilitator should have it's bucket level set to 0.
    //       The facilitator bucket of this token (capacity and level) will be transferred
    //       to a new `GhoDirectMinter` contract.
    IGhoToken(AaveV3EthereumAssets.GHO_UNDERLYING).burn(amount);
  }
}
