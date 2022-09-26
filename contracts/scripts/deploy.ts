// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const CONTRACT_TYPES = ["ERC721", "ERC721A", "ERC1155"];

async function main() {
  console.log(`\n⛓  ${process.env.HARDHAT_NETWORK}:`);

  for (const contractType of CONTRACT_TYPES) {
    const contractName = `PlaceholderNFT${contractType}`;
    const ContractFactory = await ethers.getContractFactory(contractName);
    console.log(`🏗  Get ${contractType} contract factory`);

    const contractInstance = await ContractFactory.deploy();
    console.log(`⏳ Initiate ${contractType} contract deployment`);

    await contractInstance.deployed();
    console.log(
      `✅ ${contractName} deployed to: ${contractInstance.address}\n`
    );
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
