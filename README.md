# Placeholder NFT contracts

Placeholder NFT contracts consist of ERC721, ERC721A and ERC1155 on-chain NFT implementations.

## Installation

1. `yarn install`
2. Copy `.env.example` to `.env` and setup environment variables.

## Test run contracts

`npx hardhat run scripts/run.ts`

## Deploy to a given network

Use helper script `./scripts/deploy.sh` to deploy contracts to all given networks.

To individually deploy a contract run `npx hardhat run scripts/deploy.ts --network <network>`.

## Verify contracts on Etherscan

Use helper script `./scripts/verify.sh` to verify all contracts specified in the script.

To individually verify a contract run `npx hardhat verify --network <network> <contract_address>`.
