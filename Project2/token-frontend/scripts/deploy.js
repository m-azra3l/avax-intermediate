// imports
const hre = require("hardhat");
const fs = require('fs');

// funtion to deploy the contracts
async function main() {

  //deploy the token
  const AVTN = await hre.ethers.getContractFactory("AVAXIToken");
  const avtn = await AVTN.deploy();
  await avtn.deployed();
  console.log("avtn deployed to:", avtn.address);


  // export the addresses
  fs.writeFileSync('src/abi/address.js', `
    export const avtnAddress = "${avtn.address}"

  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
