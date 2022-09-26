# Placeholder NFT UI

Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. It was created for the purpose of enabling regular users, and developers to create & test different NFT formats freely, plus experiment with them.

## Getting started

1. Install the dependencies via `yarn install`.
2. Run command `yarn dev` to start the development server.
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

This project uses [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) + [TailwindCSS](https://tailwindcss.com/).

## Frequently Asked Questions

### May I inspect the contracts?

Contracts deployed across all networks are exactly the same. Go visit below to inspect the verified contracts:

Ethereum:
- ERC721 0xb60D106AaEcB846Dfd35632f7454E5e7d4FB69fe
- ERC721A 0x8f82Fb87A662c18176daBCF2bbFa1D2A5BC09beC
- ERC1155 0x8Ebb0c154E31418cc3E43B1e600423FD9194FF17

Binance Smart Chain:
- ERC721 0x960efe6b1c9F8C5a680e9aDf7f03CD3f4A60153E
- ERC721A 0xe1DBc970Fd854Ec048930d1C6a2ecE47232a180E
- ERC1155 0xEA76ffa7e309a20Cfc61207e5974A7aD0E7Ff301

Polygon:
- ERC721 0xdA6076fcfF06833512dB5bD7CC414C079C89ca52
- ERC721A 0xF037fCA1d00Ce242fdE3e00e6348E98533758410
- ERC1155 0xB4dCbE3045100B276817c18c6b97240BeDa98337

### What is an on-chain NFT??

On-chain NFT stores all its metadata + image directly on the blockchain. In this case, each token image is represented as SVG stored in the smart contract. And same goes for the metadata that gets encoded as base64.

On-chain NFTs are superior to off-chain ones as they live solely on the blockchain. As long as the blockchain lives, the NFT lives. Off-chain NFTs do not have the same guarantess since they rely on external storage providers, such as IPFS, to be available.

### ERC721 vs ERC721A vs ERC1155?

ERC721 is a token standard for non-fungible tokens on Ethereum. A pillar of the ecosystem, it supports billions of dollars worth of NFTs.

ERC721A is an improved implementation of the IERC-721 standard that supports minting multiple tokens for close to the cost of one. While not as battle-tested as standard ERC721, it introduces significant gas savings.

ERC1155 is a token standard that enables the efficient transfer of fungible and non-fungible tokens in a single transaction. Often used for gaming tokens.
