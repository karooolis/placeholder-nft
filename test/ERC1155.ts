import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import isSvg from "is-svg";

const PLACEHOLDER_NFT_ID = 1;

describe("ERC1155", () => {
  const deployFixture = async () => {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, otherAccount2] = await ethers.getSigners();
    const ERC1155 = await ethers.getContractFactory("PlaceholderNFTERC1155");
    const erc1155 = await ERC1155.deploy();

    return { erc1155, owner, otherAccount, otherAccount2 };
  };

  it("Should deploy and have correct name + symbol", async () => {
    // Deployed successfully
    const { erc1155 } = await loadFixture(deployFixture);
    await erc1155.deployed();
    expect(erc1155.address).to.have.lengthOf(42);

    // Name and symbol set correctly
    const name = await erc1155.name();
    const symbol = await erc1155.symbol();
    expect(name).to.eq("Placeholder NFT (ERC1155)", "Name not set correctly.");
    expect(symbol).to.eq("PNFT-ERC1155", "Symbol not set correctly.");
  });

  it("Should allow minting & set correct balances", async () => {
    const { erc1155, owner, otherAccount, otherAccount2 } = await loadFixture(
      deployFixture
    );
    await erc1155.deployed();

    // Mint tokens
    await erc1155.mint(1);
    await erc1155.connect(otherAccount).mint(1);

    // Owners set correctly
    const balanceOwner = await erc1155.balanceOf(owner.address, [
      PLACEHOLDER_NFT_ID,
    ]);
    const balanceOtherAccount = await erc1155.balanceOf(otherAccount.address, [
      PLACEHOLDER_NFT_ID,
    ]);
    const balanceOtherAccount2 = await erc1155.balanceOf(
      otherAccount2.address,
      [PLACEHOLDER_NFT_ID]
    );

    expect(balanceOwner).to.eq(1, "Incorrect balance, should be 1.");
    expect(balanceOtherAccount).to.eq(1, "Incorrect balance, should be 1.");
    expect(balanceOtherAccount2).to.eq(0, "Incorrect balance, should be 0.");
  });

  it("Should include correct metadata", async () => {
    const { erc1155 } = await loadFixture(deployFixture);
    await erc1155.deployed();
    await erc1155.mint(1);
    const tokenUri = await erc1155.uri(1);

    // Decode metadata and check if it's as expected
    const [, metadata] = tokenUri.split("base64,");
    const { name, image, description } = JSON.parse(atob(metadata));
    const [, base64Image] = image.split("base64,");
    const svgImage = atob(base64Image);

    expect(name).to.eq(
      "Placeholder NFT (ERC1155)",
      "Incorrect metadata name set."
    );

    expect(description).to.eq(
      "Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. You may mint it freely, and use it for testing, or your own satisfaction.",
      "Incorrect metadata description set."
    );

    expect(isSvg(svgImage)).to.eq(true, "Image is not SVG type.");
  });

  it("Throw error if non-existant token ID is being queried", async () => {
    const { erc1155 } = await loadFixture(deployFixture);
    await erc1155.deployed();

    await expect(erc1155.uri(13)).to.be.reverted;
  });

  it("Enable transfers only by owner or if approved", async () => {
    const { erc1155, owner, otherAccount } = await loadFixture(deployFixture);
    await erc1155.deployed();
    await erc1155.mint(1);

    // Initial balance of otherAccount should be 0
    let balanceOf = await erc1155.balanceOf(otherAccount.address, [
      PLACEHOLDER_NFT_ID,
    ]);
    expect(balanceOf).to.eq(0, "Initial balance of other account should be 0.");

    // Transfer from non-owner should not be allowed
    await expect(
      erc1155
        .connect(otherAccount)
        .safeTransferFrom(
          owner.address,
          otherAccount.address,
          PLACEHOLDER_NFT_ID,
          1,
          []
        )
    ).to.be.reverted;

    // Transfer to new owner
    await erc1155.safeTransferFrom(
      owner.address,
      otherAccount.address,
      PLACEHOLDER_NFT_ID,
      1,
      []
    );

    // Balance of otherAccount after transfer should be 1
    balanceOf = await erc1155.balanceOf(otherAccount.address, [
      PLACEHOLDER_NFT_ID,
    ]);
    expect(balanceOf).to.eq(1, "Balance of other account should be 1.");
  });

  it("Enable approvals only by owner or if approved", async () => {
    const { erc1155, otherAccount, otherAccount2 } = await loadFixture(
      deployFixture
    );
    await erc1155.deployed();
    await erc1155.mint(2);

    // Should not allow approvals from non-owner
    await expect(
      erc1155
        .connect(otherAccount)
        .setApprovalForAll(otherAccount.address, true)
    ).to.be.reverted;

    // Should allow approvals from owner
    await expect(erc1155.setApprovalForAll(otherAccount.address, true)).to.not
      .be.reverted;

    // Should allow approvals from "approved"
    await expect(
      erc1155
        .connect(otherAccount)
        .setApprovalForAll(otherAccount2.address, true)
    ).to.not.be.reverted;
  });

  it("Transfer after setApprovalForAll", async () => {
    const { erc1155, owner, otherAccount } = await loadFixture(deployFixture);
    await erc1155.deployed();
    await erc1155.mint(2);

    // Transfer from non-owner should not be allowed
    await expect(
      erc1155
        .connect(otherAccount)
        .safeTransferFrom(
          otherAccount.address,
          otherAccount.address,
          PLACEHOLDER_NFT_ID,
          1,
          []
        )
    ).to.be.reverted;

    // Approve Token ID: 0 for transfers by otherAccount
    await erc1155.setApprovalForAll(otherAccount.address, true);

    // Transfer from non-owner should be allowed after setApprovalForAll for all tokens
    await expect(
      erc1155
        .connect(otherAccount)
        .safeTransferFrom(
          owner.address,
          otherAccount.address,
          PLACEHOLDER_NFT_ID,
          1,
          []
        )
    ).to.not.be.reverted;

    await expect(
      erc1155
        .connect(otherAccount)
        .safeTransferFrom(
          owner.address,
          otherAccount.address,
          PLACEHOLDER_NFT_ID,
          1,
          []
        )
    ).to.not.be.reverted;
  });
});
