# Placeholder NFT

Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. It was created for the purpose of enabling regular users, and developers to create & test different NFT formats freely, plus experiment with them.

Placeholder NFT monorepo consists of two parts, [Solidity smart contracts](contracts) and [frontend wrapper](frontend).

## Getting started

1. Clone the repository `git clone https://github.com/karooolis/placeholder-nft.git`.
2. Install the dependencies `yarn install`.
3. Then, you may work on either the frontend, or the smart contracts, part:  
  3.1 In order to work on smart contracts, continue with instructions in [Placeholder NFT contracts](contracts/README.md).  
  3.2 In order to work on the frontend, continue with instructions in [Placeholder NFT frontend](frontend/README.md).

## Frequently Asked Questions

### May I inspect already deployed contracts?

[See the deployed contracts here](contracts/README.md#deployed-contracts).

### What is an on-chain NFT??

On-chain NFT stores all its metadata + image directly on the blockchain. In this case, each token image is represented as SVG stored in the smart contract. And same goes for the metadata that gets encoded as base64.

On-chain NFTs are superior to off-chain ones as they live solely on the blockchain. As long as the blockchain lives, the NFT lives. Off-chain NFTs do not have the same guarantess since they rely on external storage providers, such as IPFS, to be available.

### ERC721 vs ERC721A vs ERC1155?

ERC721 is a token standard for non-fungible tokens on Ethereum. A pillar of the ecosystem, it supports billions of dollars worth of NFTs.

ERC721A is an improved implementation of the IERC-721 standard that supports minting multiple tokens for close to the cost of one. While not as battle-tested as standard ERC721, it introduces significant gas savings.

ERC1155 is a token standard that enables the efficient transfer of fungible and non-fungible tokens in a single transaction. Often used for gaming tokens.
