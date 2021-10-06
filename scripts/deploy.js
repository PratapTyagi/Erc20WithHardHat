const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Contract = await hre.ethers.getContractFactory("Test");
  const Test = await Contract.deploy("100000000000000000000");
  const deployed = await Test.deployed();
  console.log(`Deployed to ${deployed.address}`);
  const data = {
    address: deployed.address,
    abi: JSON.parse(deployed.interface.format('json'))
  };
  fs.writeFileSync('scripts/script.json', JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });