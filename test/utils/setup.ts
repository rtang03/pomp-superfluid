import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import keccak256 from "keccak256";

export const FIRST_INDEX_ID = 1;
export const SECOND_INDEX_ID = 2;
export const CHALLENGE = "CUZX5qE8Wvye6kS_SasIsa8MMxacJftmWdsIA_iKp3I";
export const CHALLENGE_HASH = keccak256(CHALLENGE);
export const CHALLENGE2 = "9rLddc0zMnW4ekKKqOoC1km6dr6KvGGM1FSUfQhtSMY";
export const CHALLENGE_HASH2 = keccak256(CHALLENGE2);
export let accounts: SignerWithAddress[];
export let deployer: SignerWithAddress;
export let governor: SignerWithAddress;
export let userOne: SignerWithAddress;
export let userTwo: SignerWithAddress;
export let userThree: SignerWithAddress;
export let userFour: SignerWithAddress;
export let deployerAddress: string;
export let governorAddress: string;
export let userOneAddress: string;
export let userTwoAddress: string;
export let userThreeAddress: string;
export let userFourAddress: string;
export let userTwoHash: Buffer;
export let userThreeHash: Buffer;
export let userFourHash: Buffer;

export const prepareAccounts = async () => {
  accounts = await ethers.getSigners();
  deployer = accounts[0];
  userOne = accounts[1];
  userTwo = accounts[2];
  userThree = accounts[3];
  userFour = accounts[4];
  deployerAddress = await deployer.getAddress();
  userOneAddress = await userOne.getAddress();
  userTwoAddress = await userTwo.getAddress();
  userThreeAddress = await userThree.getAddress();
  userFourAddress = await userFour.getAddress();
  userTwoHash = keccak256(userTwoAddress);
  userThreeHash = keccak256(userThreeAddress);
  userFourHash = keccak256(userFourAddress);
  governorAddress = deployerAddress;
  governor = deployer;
};
