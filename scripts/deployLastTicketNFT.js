const hre = require("hardhat");

async function main() {
  const LastTicketNFT = await hre.ethers.getContractFactory("LastTicketNFT");
  const lastTicketNFT = await LastTicketNFT.deploy();

  await lastTicketNFT.deployed();

  console.log("LastTicketNFT deployed to:", lastTicketNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
