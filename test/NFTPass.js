// We import Chai to use its asserting functions here.
const { expect } = require("chai");

describe("NFTPass contract", function () {
  let NFTPassFactory;
  let NFTPass;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    NFTPassFactory = await ethers.getContractFactory("NFTPass");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    NFTPass = await NFTPassFactory.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await NFTPass.owner()).to.equal(owner.address);
    });
  });

  describe("Transactions", function () {
    it("Should mint an NFT to the recipient", async function () {
      const txn = await NFTPass.mintNFTPass(addr1.address);
      // we're kludgily relying on knowledge of how the itemId incrementation works
      expect(await NFTPass.ownerOf(1)).to.equal(addr1.address);
    });
  });
});
