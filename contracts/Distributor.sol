// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";
import {IInstantDistributionAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol";
import {IDAv1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/IDAv1Library.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "hardhat/console.sol";
import "./libraries/DataTypes.sol";
import "./interfaces/IDistributor.sol";

error Insufficient();
error SignatureInvalid();
error SignatureExpired();

contract Distributor is AccessControl, Initializable, IDistributor, Pausable, EIP712 {
    using IDAv1Library for IDAv1Library.InitData;
    IDAv1Library.InitData public idaV1;
    address public owner;
    address public immutable deployer;
    ISuperToken public superToken;
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant ALLOWED_ROLE = keccak256("ALLOWED_ROLE");
    bytes32 internal constant ABORT_WITH_SIG_TYPEHASH =
        keccak256("Abort(uint256 profileId,uint256 missionId,uint256 nonce,uint256 deadline)");
    mapping(address => uint256) public sigNonces;
    uint32 public INDEX_ID;

    constructor() EIP712("Distributor", "1") {
        deployer = msg.sender;
    }

    /// @inheritdoc IDistributor
    function initialize(
        ISuperfluid _host,
        ISuperToken _superToken,
        uint32 _indexId
    ) external override initializer {
        assert(address(_host) != address(0));
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(OWNER_ROLE, msg.sender);
        _grantRole(ALLOWED_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        owner = msg.sender;
        superToken = _superToken;
        idaV1 = IDAv1Library.InitData(
            _host,
            IInstantDistributionAgreementV1(
                address(
                    _host.getAgreementClass(
                        keccak256(
                            "org.superfluid-finance.agreements.InstantDistributionAgreement.v1"
                        )
                    )
                )
            )
        );
        // Creates the IDA Index through which tokens will be distributed
        INDEX_ID = _indexId;
        idaV1.createIndex(_superToken, _indexId);
    }

    /// ***********************
    /// *** WRITE FUNCTIONS ***
    /// ***********************

    /// @inheritdoc IDistributor
    function approveSubscription() external override onlyRole(ALLOWED_ROLE) whenNotPaused {
        idaV1.approveSubscription(superToken, address(this), INDEX_ID);
    }

    /// @inheritdoc IDistributor
    function deleteSubscription(address subscriber)
        external
        override
        onlyRole(OWNER_ROLE)
        whenNotPaused
    {
        idaV1.deleteSubscription(superToken, address(this), INDEX_ID, subscriber);
    }

    /// @inheritdoc IDistributor
    function depositFund(uint256 amount) external override onlyRole(OWNER_ROLE) whenNotPaused {
        superToken.transferFrom(msg.sender, address(this), amount);
    }

    /// @inheritdoc IDistributor
    function distribute() external override onlyRole(OWNER_ROLE) whenNotPaused {
        uint256 superTokenBalance = superToken.balanceOf(address(this));
        (uint256 actualDistributionAmount, ) = idaV1.ida.calculateDistribution(
            superToken,
            address(this),
            INDEX_ID,
            superTokenBalance
        );
        idaV1.distribute(superToken, INDEX_ID, actualDistributionAmount);
        // noop after distribute
        _pause();
    }

    /// @inheritdoc IDistributor
    function gainShare(address subscriber) external override onlyRole(OWNER_ROLE) whenNotPaused {
        // Get current units subscriber holds
        (, , uint256 currentUnitsHeld, ) = idaV1.getSubscription(
            superToken,
            address(this),
            INDEX_ID,
            subscriber
        );

        // Update to current amount + 1
        idaV1.updateSubscriptionUnits(
            superToken,
            INDEX_ID,
            subscriber,
            uint128(currentUnitsHeld + 1)
        );
    }

    /// @inheritdoc IDistributor
    function loseShare(address subscriber) external override onlyRole(OWNER_ROLE) whenNotPaused {
        // Get current units subscriber holds
        (, , uint256 currentUnitsHeld, ) = idaV1.getSubscription(
            superToken,
            address(this),
            INDEX_ID,
            subscriber
        );

        // Update to current amount - 1 (reverts if currentUnitsHeld - 1 < 0, so basically if currentUnitsHeld = 0)
        idaV1.updateSubscriptionUnits(
            superToken,
            INDEX_ID,
            subscriber,
            uint128(currentUnitsHeld - 1)
        );
    }

    /// @inheritdoc IDistributor
    function pause() external override onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /// @inheritdoc IDistributor
    function revokeSubscription() external override onlyRole(ALLOWED_ROLE) whenNotPaused {
        idaV1.revokeSubscription(superToken, address(this), INDEX_ID);
    }

    /// @inheritdoc IDistributor
    function unpause() external override onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /// @inheritdoc IDistributor
    function withdrawFund(uint256 amount) external override onlyRole(OWNER_ROLE) whenNotPaused {
        if (superToken.balanceOf(owner) < amount) revert Insufficient();

        superToken.transfer(msg.sender, amount);
    }

    /// ***********************
    /// *** VIEW FUNCTIONS ***
    /// ***********************

    /// @inheritdoc IDistributor
    function getCurrentUnitsHeld(address subscriber) external view override returns (uint256) {
        (, , uint256 currentUnitsHeld, ) = idaV1.getSubscription(
            superToken,
            address(this),
            INDEX_ID,
            subscriber
        );
        return currentUnitsHeld;
    }

    /// @inheritdoc IDistributor
    function getActualDistributionAmount() external view override returns (uint256) {
        uint256 superTokenBalance = superToken.balanceOf(address(this));
        (uint256 actualDistributionAmount, ) = idaV1.ida.calculateDistribution(
            superToken,
            address(this),
            INDEX_ID,
            superTokenBalance
        );
        return actualDistributionAmount;
    }

    function _validateSignature(
        bytes32 digest,
        address _owner,
        bytes calldata signature,
        uint256 deadline
    ) internal view returns (bool) {
        if (deadline < block.timestamp) revert SignatureExpired();
        address recoveredAddress = ECDSA.recover(digest, signature);
        if (
            _owner != recoveredAddress ||
            !SignatureChecker.isValidSignatureNow(owner, digest, signature)
        ) revert SignatureInvalid();
        return true;
    }
}
