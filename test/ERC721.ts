import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import isSvg from "is-svg";

describe("ERC721", () => {
  const deployFixture = async () => {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const ERC721 = await ethers.getContractFactory("PlaceholderNFTERC721");
    const erc721 = await ERC721.deploy();

    return { erc721, owner, otherAccount };
  };

  it("Should deploy and have correct name + symbol", async () => {
    // Deployed successfully
    const { erc721 } = await loadFixture(deployFixture);
    await erc721.deployed();
    expect(erc721.address).to.have.lengthOf(42);

    // Name and symbol set correctly
    const name = await erc721.name();
    const symbol = await erc721.symbol();

    expect(name).to.eq("Placeholder NFT (ERC721)", "Name not set correctly.");
    expect(symbol).to.eq("PNFT-ERC721", "Symbol not set correctly.");
  });

  it("Should allow minting", async () => {
    const { erc721, owner } = await loadFixture(deployFixture);
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

  it("Should include correct metadata", async () => {
    const { erc721 } = await loadFixture(deployFixture);
    await erc721.deployed();

    erc721.mint(1);
    const tokenUri = await erc721.tokenURI(0);

    // Decode metadata and check if it's as expected
    const [, metadata] = tokenUri.split("base64,");
    const { name, image, description } = JSON.parse(atob(metadata));
    const [, base64Image] = image.split("base64,");
    const svgImage = atob(base64Image);

    expect(name).to.eq(
      "Placeholder NFT (ERC721) #0",
      "Incorrect metadata name set."
    );

    expect(description).to.eq(
      "Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. You may mint it freely, and use it for testing, or your own satisfaction.",
      "Incorrect metadata description set."
    );

    expect(isSvg(svgImage)).to.eq(true, "Image is not SVG type.");
  });

  it("Throw error if non-existant token ID is being queried", async () => {
    const { erc721 } = await loadFixture(deployFixture);
    await erc721.deployed();

    await expect(erc721.tokenURI(0)).to.be.revertedWith(
      "ERC721: invalid token ID"
    );
  });

  // TODO: enable transfer
  // TODO: approve & enable transfer
  // TODO: do not allow transfer & approve from non-owner
});
