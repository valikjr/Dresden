const hre = require("hardhat");

async function main() {
  const DresdenToken = await hre.ethers.getContractFactory("DresdenToken");
  const token = await DresdenToken.deploy();
  await token.deployed();
  console.log(`DresdenToken deployed to: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
