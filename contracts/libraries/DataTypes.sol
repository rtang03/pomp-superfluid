// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

library DataTypes {
    struct DistributorStruct {
        uint32 indexId;
    }

    struct startMissionData {
        uint256 profileId;
        uint256 tokenId;
        string slug;
        uint256 minutesToExpire;
        address creator;
        address verifier;
        address owner;
        uint256 missionId;
    }
}
