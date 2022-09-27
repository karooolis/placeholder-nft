# Placeholder NFT contracts

The NFT contracts are made up of ERC721, ERC721A and ERC1155 on-chain NFT implementations.

## Getting started

1. Make sure the dependencies are installed. If not, run `yarn install`.
2. Copy `.env.example` to `.env` and setup environment variables with your own RPC endpoints.

## Test run contracts

`npx hardhat run scripts/run.ts`

## Deploy to a given network

Use helper script `./scripts/deploy.sh` to deploy contracts to all given networks.

To individually deploy a contract run `npx hardhat run scripts/deploy.ts --network <network>`.

## Verify contracts on Etherscan

Use helper script `./scripts/verify.sh` to verify all contracts specified in the script.

To individually verify a contract run `npx hardhat verify --network <network> <contract_address>`.

## Deployed contracts

| Network     | NFT type    | Address     |
| ----------- | ----------- | ----------- |
| Rinkeby     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://rinkeby.etherscan.io/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| Goerli     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://goerli.etherscan.io/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| Mumbai     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://mumbai.polygonscan.com/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| BSC     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://bscscan.com/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| BSC Testnet     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://testnet.bscscan.com/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| Kovan Optimistic     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://kovan-optimistic.etherscan.io/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| Arbitrum Testnet     | ERC721      | [0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8](https://testnet.arbiscan.io/address/0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8#code) |
| Rinkeby     | ERC721A     | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://rinkeby.etherscan.io/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| Goerli     | ERC721A     | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://goerli.etherscan.io/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| Mumbai     | ERC721A      | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://mumbai.polygonscan.com/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| BSC     | ERC721A      | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://bscscan.com/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| BSC Testnet     | ERC721A      | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://testnet.bscscan.com/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| Kovan Optimistic     | ERC721A      | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://kovan-optimistic.etherscan.io/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| Arbitrum Testnet     | ERC721A      | [0xc816EB81c65efA37EeAFB673c39BDb5A57226896](https://testnet.arbiscan.io/address/0xc816EB81c65efA37EeAFB673c39BDb5A57226896#code) |
| Rinkeby     | ERC1155     | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://rinkeby.etherscan.io/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
| Goerli     | ERC1155     | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://goerli.etherscan.io/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
| Mumbai     | ERC1155      | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://mumbai.polygonscan.com/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
| BSC     | ERC1155      | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://bscscan.com/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
| BSC Testnet     | ERC1155      | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://testnet.bscscan.com/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
| Kovan Optimistic     | ERC1155      | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://kovan-optimistic.etherscan.io/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
| Arbitrum Testnet     | ERC1155      | [0x5a28F24109b7E122EeE1968fD51Db983da46cb31](https://testnet.arbiscan.io/address/0x5a28F24109b7E122EeE1968fD51Db983da46cb31#code) |
