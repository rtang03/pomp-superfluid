// import { ethers } from "hardhat";
// import { Framework, WrapperSuperToken } from "@superfluid-finance/sdk-core";
// import { deployTestFramework } from "./utils/deploy-sf";
// import TestToken from "@superfluid-finance/ethereum-contracts/build/contracts/TestToken.json";
// import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { Contract } from "ethers";
// import type { TokenSpreader } from "../typechain-types";
// import { expect } from "chai";
//
// let sfDeployer: Contract;
// let contractsFramework;
// let sf: Framework;
// let spreader: TokenSpreader;
// let dai: Contract;
// let daix: WrapperSuperToken;
//
// // Test Accounts
// let admin: SignerWithAddress;
// let alice: SignerWithAddress;
// let bob: SignerWithAddress;
//
// // Constants
// const expecationDiffLimit = 10; // sometimes the IDA distributes a little less wei than expected. Accounting for potential discrepency with 10 wei margin
// const thousandEther = ethers.utils.parseEther("10000");
//
// describe("Tests", () => {
//   const deployFixture = async () => {
//     [admin, alice, bob] = await ethers.getSigners();
//     sfDeployer = await deployTestFramework();
//     contractsFramework = await sfDeployer.getFramework();
//
//     // initialize framework
//     if (!admin.provider) throw new Error("unknown provider");
//
//     sf = await Framework.create({
//       chainId: 31337,
//       provider: admin.provider,
//       resolverAddress: contractsFramework.resolver, // (empty)
//       protocolReleaseVersion: "test"
//     });
//     // DEPLOYING DAI and DAI wrapper super token (which will be our `spreaderToken`)
//     const tokenDeployment = await sfDeployer.deployWrapperSuperToken(
//       "Fake DAI Token",
//       "fDAI",
//       18,
//       ethers.utils.parseEther("100000000").toString()
//     );
//     const daix = await sf.loadWrapperSuperToken("fDAIx");
//     const dai = new ethers.Contract(
//       daix.underlyingToken?.address as string,
//       TestToken.abi,
//       admin
//     );
//     // minting test DAI
//     await dai.mint(admin.address, thousandEther);
//     await dai.mint(alice.address, thousandEther);
//     await dai.mint(bob.address, thousandEther);
//
//     // approving DAIx to spend DAI (Super Token object is not an ethers contract object and has different operation syntax)
//     await dai.approve(daix.address, ethers.constants.MaxInt256);
//     await dai.connect(alice).approve(daix.address, ethers.constants.MaxInt256);
//     await dai.connect(bob).approve(daix.address, ethers.constants.MaxInt256);
//
//     // Upgrading all DAI to DAIx
//     const adminUpgrade = daix.upgrade({ amount: thousandEther.toHexString() });
//     const aliceUpgrade = daix.upgrade({ amount: thousandEther.toHexString() });
//     const bobUpgrade = daix.upgrade({ amount: thousandEther.toHexString() });
//
//     await adminUpgrade.exec(admin);
//     await aliceUpgrade.exec(alice);
//     await bobUpgrade.exec(bob);
//
//     // await daix.upgrade(thousandEther).exec(alice);
//     // await daix.connect(bob).upgrade(thousandEther);
//
//     // INITIALIZING SPREADER CONTRACT
//     // Setting DAIx as spreader token
//     const spreader = await ethers
//       .getContractFactory("TokenSpreader", admin)
//       .then(factory =>
//         factory.deploy(sf.settings.config.hostAddress, daix.address, {
//           gasLimit: 30_000_000
//         })
//       );
//     // SUBSCRIBING TO SPREADER CONTRACT'S IDA INDEX
//     // subscribe to distribution (doesn't matter if this happens before or after distribution execution)
//     const approveSubscriptionOperation = sf.idaV1.approveSubscription({
//       indexId: "0",
//       superToken: daix.address,
//       publisher: spreader.address,
//       overrides: {
//         gasLimit: 30_000_000
//       }
//     });
//     await approveSubscriptionOperation.exec(alice);
//     await approveSubscriptionOperation.exec(bob);
//     return { spreader, daix, dai };
//   };
//
//   describe("TokenSpreader Test Sequence", () => {
//     before(async () => {
//       ({ dai, daix, spreader } =
//         await loadFixture(deployFixture));
//     });
//
//     it("Distribution with [ no units outstanding ] and [ no spreaderTokens held ]", async () =>
//       expect(spreader.connect(alice).distribute()).to.be.reverted);
//
//     it("Distribution with [ 1 unit issued ] but [ 0 spreaderTokens held ] - gainShare", async () => {
//       // ACTIONS
//
//       // Alice claims distribution unit
//       await spreader.connect(alice).gainShare(alice.address);
//
//       // EXPECTATIONS
//
//       // expect alice to have 1 distribution unit
//       let aliceSubscription = await sf.idaV1.getSubscription({
//         superToken: daix.address,
//         publisher: spreader.address,
//         indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
//         subscriber: alice.address,
//         providerOrSigner: alice
//       });
//
//       await expect(aliceSubscription.units).to.equal("1");
//
//       // distribution SHOULD NOT REVERT if there are outstanding units issued
//       await expect(spreader.connect(alice).distribute()).to.be.not.reverted;
//     });
//
//     it("Distribution with [ 2 units issued to different accounts ] but [ 0 spreaderTokens ] - gainShare", async function () {
//       // ACTIONS
//
//       // Bob claims distribution unit
//       await spreader.connect(bob).gainShare(bob.address);
//
//       // EXPECTATIONS
//
//       // expect alice to have 1 distribution unit
//       let aliceSubscription = await sf.idaV1.getSubscription({
//         superToken: daix.address,
//         publisher: spreader.address,
//         indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
//         subscriber: alice.address,
//         providerOrSigner: alice
//       });
//
//       await expect(aliceSubscription.units).to.equal("1");
//
//       // expect bob to have 1 distribution unit
//       let bobSubscription = await sf.idaV1.getSubscription({
//         superToken: daix.address,
//         publisher: spreader.address,
//         indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
//         subscriber: bob.address,
//         providerOrSigner: bob
//       });
//
//       await expect(bobSubscription.units).to.equal("1");
//
//       // distribution SHOULD NOT REVERT if there are outstanding units issued
//       await expect(spreader.connect(alice).distribute()).to.be.not.reverted;
//     });
//
//     it("Distribution with [ 2 units issued to different accounts ] and [ 100 spreaderTokens ] - gainShare", async function () {
//       let distributionAmount = ethers.utils.parseEther("100");
//
//       // ACTIONS
//
//       // Admin gives spreader 100 DAIx
//       await daix.transfer({receiver: spreader.address, amount: distributionAmount.toHexString()}).exec(admin);
//
//       // (snapshot balances)
//       let aliceInitialBlance = await daix.balanceOf({account: alice.address, providerOrSigner: admin});
//       let bobInitialBlance = await daix.balanceOf({account: bob.address, providerOrSigner: admin});
//
//       // Distribution executed
//       await expect(spreader.connect(admin).distribute()).to.be.not.reverted;
//
//       // EXPECTATIONS
//
//       // expect alice to receive 1/2 of distribution
//       await expect(await daix.balanceOf({account: alice.address, providerOrSigner: admin})).to.closeTo(
//         ethers.BigNumber.from(aliceInitialBlance).add(
//           distributionAmount.div("2")
//         ), // expect original balance + distribution amount / 2
//         expecationDiffLimit
//       );
//
//       // expect bob to receive 1/2 of distribution
//       await expect(await daix.balanceOf({account: bob.address, providerOrSigner: admin})).to.closeTo(
//         ethers.BigNumber.from(bobInitialBlance).add(
//           distributionAmount.div("2")
//         ), // expect original balance + distribution amount / 2
//         expecationDiffLimit
//       );
//
//       // expect balance of spreader contract to be zeroed out
//       await expect(await daix.balanceOf({account: spreader.address, providerOrSigner: admin})).to.closeTo(
//         ethers.BigNumber.from("0"),
//         expecationDiffLimit
//       );
//     });
//   });
// });

export {}