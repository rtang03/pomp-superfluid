import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { Contract } from "ethers";
import { expect } from "chai";
import { type TransactionResponse } from "@ethersproject/abstract-provider";
import type { Distributor, DistributorProxy } from "../typechain-types";
import { deployTestFramework } from "./utils/deploy-sf";
import { Framework, WrapperSuperToken } from "@superfluid-finance/sdk-core";
import TestToken from "@superfluid-finance/ethereum-contracts/build/contracts/TestToken.json";
import DistributorAbi from "../abi/contracts/Distributor.sol/Distributor.json";
import {
  CHALLENGE_HASH,
  CHALLENGE_HASH2,
  deployer,
  deployerAddress,
  FIRST_INDEX_ID,
  prepareAccounts,
  SECOND_INDEX_ID,
  userOne,
  userOneAddress,
  userTwo,
  userTwoAddress
} from "./utils/setup";

let sf: Framework;
let distributor1: Contract;
let master: Distributor;
let distributorProxy: DistributorProxy;
let daix: WrapperSuperToken;

// Constants
const thousandEther = ethers.utils.parseEther("10000");
const expecationDiffLimit = 10; // sometimes the IDA distributes a little less wei than expected. Accounting for potential discrepency with 10 wei margin
const getGas = async (tx: TransactionResponse) => {
  const receipt = await ethers.provider.getTransactionReceipt(tx.hash);
  return receipt.gasUsed.toString();
};

describe("Distributor with Minimal Proxy", () => {
  const deployFixture = async () => {
    await prepareAccounts();
    const sfDeployer = await deployTestFramework();
    const contractsFramework = await sfDeployer.getFramework();

    if (!deployer.provider) throw new Error("unknown provider");

    const sf = await Framework.create({
      chainId: 31337,
      provider: deployer.provider,
      resolverAddress: contractsFramework.resolver, // (empty)
      protocolReleaseVersion: "test"
    });

    // DEPLOYING DAI and DAI wrapper super token (which will be our `spreaderToken`)
    await sfDeployer.deployWrapperSuperToken(
      "Fake DAI Token",
      "fDAI",
      18,
      ethers.utils.parseEther("100000000").toString()
    );

    const daix = await sf.loadWrapperSuperToken("fDAIx");
    const dai = new ethers.Contract(
      daix.underlyingToken?.address as string,
      TestToken.abi,
      deployer
    );

    // minting test DAI
    await dai.mint(deployerAddress, thousandEther);
    await dai.mint(userOneAddress, thousandEther);
    await dai.mint(userTwoAddress, thousandEther);

    // approving DAIx to spend DAI (Super Token object is not an ethers contract object and has different operation syntax)
    await dai.approve(daix.address, ethers.constants.MaxInt256);
    await dai
      .connect(userOne)
      .approve(daix.address, ethers.constants.MaxInt256);
    await dai
      .connect(userTwo)
      .approve(daix.address, ethers.constants.MaxInt256);

    // Upgrading all DAI to DAIx
    const adminUpgrade = daix.upgrade({
      amount: thousandEther.toHexString(),
      overrides: {
        gasLimit: 30_000_000
      }
    });
    const userOneUpgrade = daix.upgrade({
      amount: thousandEther.toHexString(),
      overrides: {
        gasLimit: 30_000_000
      }
    });
    const userTwoUpgrade = daix.upgrade({
      amount: thousandEther.toHexString(),
      overrides: {
        gasLimit: 30_000_000
      }
    });

    await adminUpgrade.exec(deployer);
    await userOneUpgrade.exec(userOne);
    await userTwoUpgrade.exec(userTwo);

    // INITIALIZING SPREADER CONTRACT
    // Setting DAIx as distributor token
    const master = await ethers
      .getContractFactory("Distributor", deployer)
      .then(factory =>
        factory.deploy({
          gasLimit: 30_000_000
        })
      );
    const standaloneGas = await getGas(master.deployTransaction);
    console.log(`standaloneGas: ${standaloneGas}`);

    const distributorProxy = await ethers
      .getContractFactory("DistributorProxy", deployer)
      .then(factory =>
        factory.deploy(master.address, {
          gasLimit: 30_000_000
        })
      );

    const distributor1Address = await distributorProxy.getDistributorAddress(
      FIRST_INDEX_ID
    );

    const tx = await distributorProxy.createDistributor(CHALLENGE_HASH);
    await tx.wait();
    const distributorProxyGas = await getGas(tx);
    console.log(`distributorProxyGas: ${distributorProxyGas}`);

    // @notice
    // "userOne" is the default OWNER_ROLE for Distributor, which "initialize" the contract.
    const distributor1 = new ethers.Contract(
      distributor1Address,
      DistributorAbi,
      userOne
    );
    const initTx = await distributor1.initialize(
      sf.settings.config.hostAddress,
      daix.address,
      FIRST_INDEX_ID,
      {
        gasLimit: 30_000_000
      }
    );
    await initTx.wait();

    // SUBSCRIBING TO DISTRIBUTOR CONTRACT'S IDA INDEX
    // subscribe to distribution (doesn't matter if this happens before or after distribution execution)
    const approveSubscriptionOperation = sf.idaV1.approveSubscription({
      indexId: `${FIRST_INDEX_ID}`,
      superToken: daix.address,
      publisher: distributor1.address,
      overrides: {
        gasLimit: 30_000_000
      }
    });
    await approveSubscriptionOperation.exec(userOne);
    await approveSubscriptionOperation.exec(userTwo);
    return { distributor1, daix, dai, master, distributorProxy, sf };
  };

  describe("DistributorProxy: Access Control", () => {
    before(async () => {
      console.log("== Fixture ==");
      ({ distributor1, master, daix, distributorProxy, sf } = await loadFixture(
        deployFixture
      ));
      console.log("== deployed ==");
    });

    it("should fail to pause: Not PAUSER_ROLE", async () =>
      expect(distributorProxy.connect(userTwo).pause()).to.be.reverted);

    it("should pause", async () =>
      expect(distributorProxy.pause()).not.to.be.reverted);

    it("should fail to unpause: Not PAUSER_ROLE", async () =>
      expect(distributorProxy.connect(userTwo).unpause()).to.be.reverted);

    it("should unpause", async () =>
      expect(distributorProxy.unpause()).not.to.be.reverted);

    it("fail to createDistributor: Not GOVERNOR_ROLE", async () =>
      expect(
        distributorProxy.connect(userTwo).createDistributor(CHALLENGE_HASH)
      ).to.be.reverted);
  });

  describe("Distributor: Access Control", () => {
    before(async () => {
      ({ distributor1, master, daix, distributorProxy, sf } = await loadFixture(
        deployFixture
      ));
    });

    it("should fail to pause: Not PAUSER_ROLE", async () =>
      expect(distributor1.connect(userTwo).pause()).to.be.reverted);

    it("should pause", async () =>
      expect(distributor1.pause()).not.to.be.reverted);

    it("should fail to unpause: Not PAUSER_ROLE", async () =>
      expect(distributor1.connect(userTwo).unpause()).to.be.reverted);

    it("should unpause", async () =>
      expect(distributor1.unpause()).not.to.be.reverted);
  });

  describe("Distribution with [ 1 unit issued ] but [ 0 superTokens held ]", () => {
    before(async () => {
      ({ distributor1, master, daix, distributorProxy, sf } = await loadFixture(
        deployFixture
      ));
    });

    it("should fail to distribute, before user gainShare", async () =>
      expect(distributor1.connect(userOne).distribute()).to.be.reverted);

    it("should fail to gainShare: by not OWNER_ROLE", async () =>
      expect(distributor1.connect(userTwo).gainShare(userOneAddress)).to.be
        .reverted);

    it("should gainShare by userOne", async () => {
      // ACTIONS
      // Alice claims distribution unit
      await distributor1.connect(userOne).gainShare(userOneAddress);

      // EXPECTATIONS
      // expect alice to have 1 distribution unit
      const userOneSubscription = await sf.idaV1.getSubscription({
        superToken: daix.address,
        publisher: distributor1.address,
        indexId: `${FIRST_INDEX_ID}`, // recall this was `INDEX_ID` in TokenSpreader.sol
        subscriber: userOneAddress,
        providerOrSigner: userOne
      });

      await expect(userOneSubscription.units).to.equal("1");
    });

    it("should fail to distribute: by not OWNER_ROLE", async () =>
      expect(distributor1.connect(userTwo).distribute()).to.be.reverted);

    it("should distribute by userOne", async () => {
      const tx = await distributor1.connect(userOne).distribute();
      // todo: figure out what events emit
      expect(await tx.wait()).to.be.not.reverted;
    });
  });

  describe("Distribution with [ 2 units issued to different accounts ] but [ 0 spreaderTokens ]", () => {
    before(async () => {
      ({ distributor1, master, daix, distributorProxy, sf } = await loadFixture(
        deployFixture
      ));
    });

    it("userOne gainShare", async () => {
      await distributor1.connect(userOne).gainShare(userOneAddress);

      const userOneSubscription = await sf.idaV1.getSubscription({
        superToken: daix.address,
        publisher: distributor1.address,
        indexId: `${FIRST_INDEX_ID}`, // recall this was `INDEX_ID` in TokenSpreader.sol
        subscriber: userOneAddress,
        providerOrSigner: userOne
      });

      await expect(userOneSubscription.units).to.equal("1");
    });

    it("userTwo gainShare", async () => {
      // Bob claims distribution unit
      await distributor1.connect(userOne).gainShare(userTwoAddress, {
        gasLimit: 30_000_000
      });

      // expect bob to have 1 distribution unit
      const userTwoSubscription = await sf.idaV1.getSubscription({
        superToken: daix.address,
        publisher: distributor1.address,
        indexId: `${FIRST_INDEX_ID}`,
        subscriber: userTwoAddress,
        providerOrSigner: userTwo
      });

      await expect(userTwoSubscription.units).to.equal("1");
    });

    // distribution SHOULD NOT REVERT if there are outstanding units issued
    it("distribute", async () =>
      expect(distributor1.connect(userOne).distribute()).to.be.not.reverted);
  });

  describe("Distribution with [ 2 units issued to different accounts ] and [ 100 spreaderTokens ]", () => {
    before(async () => {
      ({ distributor1, master, daix, distributorProxy, sf } = await loadFixture(
        deployFixture
      ));
    });

    it("gainShare and distribute with equal amounts", async () => {
      const distributionAmount = ethers.utils.parseEther("100");

      // Admin gives spreader 100 DAIx
      await daix
        .transfer({
          receiver: distributor1.address,
          amount: distributionAmount.toHexString()
        })
        .exec(deployer);

      // (snapshot balances)
      const userOneInitialBalance = await daix.balanceOf({
        account: userOneAddress,
        providerOrSigner: deployer
      });

      const userTwoInitialBalance = await daix.balanceOf({
        account: userTwoAddress,
        providerOrSigner: deployer
      });

      await distributor1.connect(userOne).gainShare(userOneAddress, {
        gasLimit: 30_000_000
      });

      await distributor1.connect(userOne).gainShare(userTwoAddress, {
        gasLimit: 30_000_000
      });

      // Distribution executed
      await expect(distributor1.connect(userOne).distribute()).to.be.not
        .reverted;

      // EXPECTATIONS
      // expect alice to receive 1/2 of distribution
      await expect(
        await daix.balanceOf({
          account: userOneAddress,
          providerOrSigner: deployer
        })
      ).to.closeTo(
        ethers.BigNumber.from(userOneInitialBalance).add(
          distributionAmount.div("2")
        ), // expect original balance + distribution amount / 2
        expecationDiffLimit
      );

      // expect bob to receive 1/2 of distribution
      await expect(
        await daix.balanceOf({
          account: userTwoAddress,
          providerOrSigner: deployer
        })
      ).to.closeTo(
        ethers.BigNumber.from(userTwoInitialBalance).add(
          distributionAmount.div("2")
        ), // expect original balance + distribution amount / 2
        expecationDiffLimit
      );

      // expect balance of spreader contract to be zeroed out
      await expect(
        await daix.balanceOf({
          account: distributor1.address,
          providerOrSigner: deployer
        })
      ).to.closeTo(ethers.BigNumber.from("0"), expecationDiffLimit);
    });
  });

  describe("Two-Distributor tests", () => {
    before(async () => {
      ({ distributor1, master, daix, distributorProxy, sf } = await loadFixture(
        deployFixture
      ));
    });

    it("should fail to initialize repeatedly", async () =>
      expect(
        distributor1.initialize(
          sf.settings.config.hostAddress,
          daix.address,
          FIRST_INDEX_ID
        )
      ).to.be.revertedWith("Initializable: contract is already initialized"));

    it("should deploy second distributor", async () => {
      const distributor2Address = await distributorProxy.getDistributorAddress(
        SECOND_INDEX_ID
      );
      expect(distributor2Address).to.exist;

      const tx = await distributorProxy.createDistributor(CHALLENGE_HASH2);

      expect(await tx.wait())
        .to.emit(distributorProxy, "Created")
        .withArgs(
          SECOND_INDEX_ID,
          distributor2Address,
          CHALLENGE_HASH,
          anyValue
        );

      const distributor2 = new ethers.Contract(
        distributor2Address,
        DistributorAbi,
        userTwo
      );
      expect(distributor2.address).to.equal(distributor2Address);

      const initTx = await distributor2.initialize(
        sf.settings.config.hostAddress,
        daix.address,
        SECOND_INDEX_ID
      );
      await expect(initTx.wait()).not.to.be.reverted;
    });

    it("fail to createDistributor: ChallengeHash not available", async () =>
      expect(
        distributorProxy.createDistributor(CHALLENGE_HASH2)
      ).to.be.revertedWith("NotAvailable"));
  });
});
