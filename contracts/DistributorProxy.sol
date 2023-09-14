// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./interfaces/IDistributorProxy.sol";

import "hardhat/console.sol";

contract DistributorProxy is Pausable, AccessControl, IDistributorProxy {
    using Clones for address;
    using Counters for Counters.Counter;
    Counters.Counter public indexIdCounter;
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");
    address public master;
    mapping(bytes32 => uint256) internal _indexIdByChallengeHash;
    mapping(uint256 => address) internal _contractByIndexId;

    event Created(
        uint256 indexed indexId,
        address indexed contractAddress,
        bytes32 indexed challengeHash,
        uint256 timestamp
    );

    constructor(address _master) {
        indexIdCounter.increment();
        master = _master;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(GOVERNOR_ROLE, msg.sender);
    }

    /// @inheritdoc IDistributorProxy
    function pause() external override onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /// @inheritdoc IDistributorProxy
    function unpause() external override onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /// ***********************
    /// *** WRTIE FUNCTIONS ***
    /// ***********************

    /// @inheritdoc IDistributorProxy
    function createDistributor(bytes32 challengeHash)
        external
        payable
        override
        onlyRole(GOVERNOR_ROLE)
        whenNotPaused
    {
        require(_indexIdByChallengeHash[challengeHash] == 0, "NotAvailable");
        uint256 indexId = indexIdCounter.current();
        indexIdCounter.increment();
        address instance = master.cloneDeterministic(keccak256(abi.encode(indexId)));
        // Todo: change to struct
        _indexIdByChallengeHash[challengeHash] = indexId;
        _contractByIndexId[indexId] = instance;

        emit Created(indexId, instance, challengeHash, block.timestamp);
    }

    /// ***********************
    /// *** VIEW FUNCTIONS ***
    /// ***********************

    /// @inheritdoc IDistributorProxy
    function getDistributorAddress(uint256 indexId) external view override returns (address) {
        require(master != address(0), "master must be set");
        return master.predictDeterministicAddress(keccak256(abi.encode(indexId)));
    }

    /// @inheritdoc IDistributorProxy
    function contractByIndexId(uint256 indexId) external view override returns (address) {
        return _contractByIndexId[indexId];
    }

    /// @inheritdoc IDistributorProxy
    function contractByChallenge(bytes32 challengeHash) external view override returns (address) {
        return _contractByIndexId[_indexIdByChallengeHash[challengeHash]];
    }

    /// @inheritdoc IDistributorProxy
    function indexIdByChallenge(bytes32 challengeHash) external view override returns (uint256) {
        return _indexIdByChallengeHash[challengeHash];
    }
}
