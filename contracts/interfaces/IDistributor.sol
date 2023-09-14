// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";

interface IDistributor {
    function approveSubscription() external;

    function deleteSubscription(address subscriber) external;

    function depositFund(uint256 amount) external;

    function distribute() external;

    function gainShare(address subscriber) external;

    function getActualDistributionAmount() external view returns (uint256);

    function getCurrentUnitsHeld(address subscriber) external view returns (uint256);

    function initialize(
        ISuperfluid _host,
        ISuperToken _superToken,
        uint32 _indexId
    ) external;

    function loseShare(address subscriber) external;

    function pause() external;

    function revokeSubscription() external;

    function unpause() external;

    function withdrawFund(uint256 amount) external;
}
