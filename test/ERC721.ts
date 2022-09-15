import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC721", () => {
  it("Should deploy and have correct name + symbol", async () => {
    // Deployed successfully
    const ERC721 = await ethers.getContractFactory("PlaceholderNFTERC721");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();
    expect(erc721.address).to.have.lengthOf(42);

    // Name and symbol set correctly
    const name = await erc721.name();
    const symbol = await erc721.symbol();

    expect(name).to.eq("Placeholder NFT (ERC721)", "Name not set correctly.");
    expect(symbol).to.eq("PNFT-ERC721", "Symbol not set correctly.");
  });

  it("Should allow minting", async () => {
    const [owner] = await ethers.getSigners();

    const ERC721 = await ethers.getContractFactory("PlaceholderNFTERC721");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();

    const MINT_AMOUNT = 10;

    // Mint tokens
    await erc721.mint(MINT_AMOUNT);

    // Owner set correctly
    for (let i = 0; i < MINT_AMOUNT; i++) {
      const ownerOf = await erc721.ownerOf(i);
      expect(ownerOf).to.eq(owner.address, "NFT owner not as expected.");
    }
  });

  it("Should show correct tokenUri", async () => {
    const ERC721 = await ethers.getContractFactory("PlaceholderNFTERC721");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();

    erc721.mint(1);
    const tokenUri = await erc721.tokenURI(0);

    // TODO: decode URI and check
    console.log(tokenUri);
  });

  it("Throw error if non-existant token ID is being queried", async () => {
    const ERC721 = await ethers.getContractFactory("PlaceholderNFTERC721");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();

    // const tokenUri = await erc721.tokenURI(0);
    // console.log(tokenUri);

    // expect(erc721.tokenURI(0)).to.be.reverted("error");

    // "ERC721: invalid token ID"
  });
});
