import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import isSvg from "is-svg";

describe("ERC721", () => {
  const deployFixture = async () => {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, otherAccount2] = await ethers.getSigners();
    const ERC721 = await ethers.getContractFactory("PlaceholderNFTERC721");
    const erc721 = await ERC721.deploy();

    return { erc721, owner, otherAccount, otherAccount2 };
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

  it("Should allow minting & set correct owner", async () => {
    const { erc721, owner, otherAccount } = await loadFixture(deployFixture);
    await erc721.deployed();

    // Mint tokens
    await erc721.mint(1);
    await erc721.connect(otherAccount).mint(1);

    // Owners set correctly
    const ownerOfToken0 = await erc721.ownerOf(0);
    const ownerOfToken1 = await erc721.ownerOf(1);

    expect(ownerOfToken0).to.eq(owner.address, "Incorrect owner.");
    expect(ownerOfToken1).to.eq(otherAccount.address, "Incorrect owner.");
  });

  it("Should include correct metadata", async () => {
    const { erc721 } = await loadFixture(deployFixture);
    await erc721.deployed();
    await erc721.mint(1);
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

    await expect(erc721.tokenURI(0)).to.be.reverted;
  });

  it("Enable transfers only by owner or if approved", async () => {
    const { erc721, owner, otherAccount, otherAccount2 } = await loadFixture(
      deployFixture
    );
    await erc721.deployed();
    await erc721.mint(2);

    // Originally, owner is who minted the token
    let ownerOf = await erc721.ownerOf(0);
    expect(ownerOf).to.eq(owner.address);

    // Transfer from non-owner should not be allowed
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 0)
    ).to.be.reverted;

    // Transfer to new owner
    await erc721.transferFrom(owner.address, otherAccount.address, 0);

    // Owner changed to new one after transfer
    ownerOf = await erc721.ownerOf(0);
    expect(ownerOf).to.eq(otherAccount.address);

    // Approve otherAccount to transfer
    await erc721.setApprovalForAll(otherAccount.address, true);
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 1)
    ).to.not.be.reverted;
  });

  it("Enable approvals only by owner or if approved", async () => {
    const { erc721, otherAccount, otherAccount2 } = await loadFixture(
      deployFixture
    );
    await erc721.deployed();
    await erc721.mint(2);

    // Should not allow approvals from non-owner
    await expect(erc721.connect(otherAccount).approve(otherAccount.address, 0))
      .to.be.reverted;

    await expect(
      erc721.connect(otherAccount).setApprovalForAll(otherAccount.address, true)
    ).to.be.reverted;

    // Should allow approvals from owner
    await expect(erc721.approve(otherAccount.address, 0)).to.not.be.reverted;
    await expect(erc721.setApprovalForAll(otherAccount.address, true)).to.not.be
      .reverted;

    // Should allow approvals from "approved"
    await expect(erc721.connect(otherAccount).approve(otherAccount2.address, 0))
      .to.not.be.reverted;
    await expect(
      erc721
        .connect(otherAccount)
        .setApprovalForAll(otherAccount2.address, true)
    ).to.not.be.reverted;
  });

  it("Approve specific token for transfer by another account", async () => {
    const { erc721, owner, otherAccount } = await loadFixture(deployFixture);
    await erc721.deployed();
    await erc721.mint(2);

    // Transfer from non-owner should not be allowed
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(otherAccount.address, otherAccount.address, 0)
    ).to.be.reverted;

    // Approve Token ID: 0 for transfers by otherAccount
    await erc721.approve(otherAccount.address, 0);

    // Check that approval set only for Token ID: 0
    const approvedAddressToken0 = await erc721.getApproved(0);
    const approvedAddressToken1 = await erc721.getApproved(1);
    expect(approvedAddressToken0).to.eq(
      otherAccount.address,
      "Token ID: 0 should be approved for otherAccount."
    );
    expect(approvedAddressToken1).to.eq(
      "0x0000000000000000000000000000000000000000",
      "Token ID: 1 should not be approved for otherAccount."
    );

    // Transfer from non-owner should be allowed after approve for Token ID: 0
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 0)
    ).to.not.be.reverted;

    // Transfer from non-owner should not be allowed for tokens other than Token ID: 0
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(otherAccount.address, otherAccount.address, 1)
    ).to.be.reverted;
  });

  it("Transfer after setApprovalForAll", async () => {
    const { erc721, owner, otherAccount } = await loadFixture(deployFixture);
    await erc721.deployed();
    await erc721.mint(2);

    // Transfer from non-owner should not be allowed
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(otherAccount.address, otherAccount.address, 0)
    ).to.be.reverted;

    // Approve Token ID: 0 for transfers by otherAccount
    await erc721.setApprovalForAll(otherAccount.address, true);

    // Transfer from non-owner should be allowed after setApprovalForAll for all tokens
    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 0)
    ).to.not.be.reverted;

    await expect(
      erc721
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 1)
    ).to.not.be.reverted;
  });
});
