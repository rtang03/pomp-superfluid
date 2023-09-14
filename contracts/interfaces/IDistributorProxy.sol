// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IDistributorProxy {
    function pause() external;

    function unpause() external;

    function getDistributorAddress(uint256 indexId) external view returns (address);

    function createDistributor(bytes32 challengeHash) external payable;

    function contractByIndexId(uint256 indexId) external view returns (address);

    function contractByChallenge(bytes32 challengeHash) external view returns (address);

    function indexIdByChallenge(bytes32 challengeHash) external view returns (uint256);
}
