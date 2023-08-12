const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DegenToken", function () {
  let owner, user1, user2;
  let degenToken;

  beforeEach(async function () {
    // Get the signers (accounts) from ethers.js
    [owner, user1, user2] = await ethers.getSigners();
    const DegenToken = await ethers.getContractFactory("DegenToken");
    // Deploy the DegenToken contract
    degenToken = await DegenToken.deploy();
    await degenToken.deployed();
  });

  it("Should deploy the contract", async function () {
    // Check if the contract address is not equal to 0
    expect(degenToken.address).to.not.equal(0);
  });

  it("Should have correct name and symbol", async function () {
    // Check if the contract name is "Degen"
    expect(await degenToken.name()).to.equal("Degen");
    // Check if the contract symbol is "DGN"
    expect(await degenToken.symbol()).to.equal("DGN");
  });

  it("Owner should be able to mint tokens", async function () {
    // Mint 1000 tokens to user1
    await degenToken.connect(owner).mint(user1.address, 1000);
    // Check if user1's balance is 1000
    expect(await degenToken.balanceOf(user1.address)).to.equal(1000);
  });

  it("Users can transfer tokens", async function () {
    // Mint 1000 tokens to user1
    await degenToken.connect(owner).mint(user1.address, 1000);
    // Transfer 500 tokens from user1 to user2
    await degenToken.connect(user1).transfer(user2.address, 500);
    // Check if user2's balance is 500
    expect(await degenToken.balanceOf(user2.address)).to.equal(500);
  });

  it("Users can redeem tokens", async function () {
    // Mint 1000 tokens to user1
    await degenToken.connect(owner).mint(user1.address, 1000);
    // Redeem 500 tokens from user1
    await degenToken.connect(user1).redeem(500);
    // Check if user1's balance is 500
    expect(await degenToken.balanceOf(user1.address)).to.equal(500);
  });

  it("Users can burn tokens", async function () {
    // Mint 1000 tokens to user1
    await degenToken.connect(owner).mint(user1.address, 1000);
    // Burn 500 tokens from user1
    await degenToken.connect(user1).burn(500);
    // Check if user1's balance is 500
    expect(await degenToken.balanceOf(user1.address)).to.equal(500);
  });
});
