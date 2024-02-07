const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Greeting = await ethers.getContractFactory("Greeting");
  console.log("Deploying Greeting...");
  const greeting = await upgrades.deployProxy(Greeting, [], { initializer: 'initialize' });
  await greeting.deployed();

  console.log("Greeting deployed to:", greeting.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
