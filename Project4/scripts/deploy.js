const hre = require("hardhat");

async function main() {

  const DegenToken = await hre.ethers.deployContract("DegenToken");

  await DegenToken.waitForDeployment();

  console.log(`DegenToken deployed to`, await DegenToken.getAddress());

  console.log("Sleeping.....");
  // Wait for Snowtrace to notice that the contract has been deployed
  await sleep(10000);

  // Verify the DegenToken Bank  contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/DegenToken.sol:DegenToken",
    address: DegenToken.target,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});