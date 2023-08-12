const { expect } = require("chai");
const {ethers} = require("hardhat");

describe("AVAXIToken", function () {
  let AVTN;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    const AVTNContract = await ethers.getContractFactory("AVAXIToken");
    AVTN = await AVTNContract.deploy();

    // Mint some tokens to the contract creator
    await AVTN.mint(owner.address, 6);
  });

  it("Should return the correct name, symbol, and total supply", async function () {
    expect(await AVTN.name()).to.equal("AVAX Intermediate Token");
    expect(await AVTN.symbol()).to.equal("AVTN");
    expect(await AVTN.totalSupply()).to.equal(12);
  });

  it("Should update balances after minting and burning tokens", async function () {
    // Mint some tokens to address 1
    await AVTN.connect(owner).mint(addr1.address, 2);

    expect(await AVTN.balances(addr1.address)).to.equal(2);
    expect(await AVTN.totalSupply()).to.equal(14);

    // Burn some tokens from the contract creator
    await AVTN.connect(owner).burn(3);

    expect(await AVTN.balances(owner.address)).to.equal(9);
    expect(await AVTN.totalSupply()).to.equal(11);
  });

  it("Should revert if an invalid address is provided to mint", async function () {
    await expect(AVTN.connect(owner).mint("0x0000000000000000000000000000000000000000", 1)).to.be.revertedWith("Invalid address");
  });

  it("Should revert if the contract creator doesn't have sufficient balance to burn", async function () {
    await expect(AVTN.connect(owner).burn(16)).to.be.revertedWith("Insufficient balance");
  });
});
