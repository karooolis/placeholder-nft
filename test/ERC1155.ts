import { expect } from "chai";
import { ethers } from "hardhat";

const PLACEHOLDER_NFT_ID = 1;

describe("ERC1155", () => {
  it("Should deploy and have correct name + symbol", async () => {
    // Deployed successfully
    const ERC1155 = await ethers.getContractFactory("PlaceholderNFTERC1155");
    const erc1155 = await ERC1155.deploy();
    await erc1155.deployed();
    expect(erc1155.address).to.have.lengthOf(42);

    // Name and symbol set correctly
    const name = await erc1155.name();
    const symbol = await erc1155.symbol();

    expect(name).to.eq("Placeholder NFT (ERC1155)", "Name not set correctly.");
    expect(symbol).to.eq("PNFT-ERC1155", "Symbol not set correctly.");
  });

  it("Should allow minting", async () => {
    const [owner] = await ethers.getSigners();

    const ERC1155 = await ethers.getContractFactory("PlaceholderNFTERC1155");
    const erc1155 = await ERC1155.deploy();
    await erc1155.deployed();

    const MINT_AMOUNT = 10;

    // Mint tokens
    await erc1155.mint(MINT_AMOUNT);

    // Owner set correctly
    const balance = await erc1155.balanceOf(owner.address, PLACEHOLDER_NFT_ID);
    expect(balance).to.eq(MINT_AMOUNT);
  });
});
