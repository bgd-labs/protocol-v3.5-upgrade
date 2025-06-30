// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import {
  VariableDebtToken,
  IPool,
  IInitializableDebtToken,
  Errors
} from "aave-v3-origin/contracts/protocol/tokenization/VariableDebtToken.sol";
import {VersionedInitializable} from "aave-v3-origin/contracts/misc/aave-upgradeability/VersionedInitializable.sol";

import {IVariableDebtTokenMainnetInstanceGHO} from "./interfaces/IVariableDebtTokenMainnetInstanceGHO.sol";

contract VariableDebtTokenMainnetInstanceGHO is VariableDebtToken, IVariableDebtTokenMainnetInstanceGHO {
  uint256 public constant DEBT_TOKEN_REVISION = 5;

  constructor(IPool pool, address rewardsController) VariableDebtToken(pool, rewardsController) {}

  /// @inheritdoc VersionedInitializable
  function getRevision() internal pure virtual override returns (uint256) {
    return DEBT_TOKEN_REVISION;
  }

  /// @inheritdoc IVariableDebtTokenMainnetInstanceGHO
  function updateDiscountDistribution(address, address, uint256, uint256, uint256) external override {}
}
