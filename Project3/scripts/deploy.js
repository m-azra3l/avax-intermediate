// imports
const hre = require("hardhat");
const fs = require('fs');

// funtion to deploy the contracts
async function main() {

  //deploy the token
  const AVAXI = await hre.ethers.getContractFactory("AVAXITokenMint");
  const avaxi = await AVAXI.deploy();
  await avaxi.deployed();
  console.log("avaxi deployed to:", avaxi.address);


  // export the addresses
  fs.writeFileSync('scripts/address.js', `
    export const avaxiAddress = '${avaxi.address}'

  `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
