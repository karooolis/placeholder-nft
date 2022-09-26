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

### Ethereum
- ERC721 - [0xb60D106AaEcB846Dfd35632f7454E5e7d4FB69fe](https://etherscan.io/address/0xb60D106AaEcB846Dfd35632f7454E5e7d4FB69fe#code)
- ERC721A - [0x8f82Fb87A662c18176daBCF2bbFa1D2A5BC09beC](https://etherscan.io/address/0x8f82Fb87A662c18176daBCF2bbFa1D2A5BC09beC#code)
- ERC1155 - [0x8Ebb0c154E31418cc3E43B1e600423FD9194FF17](https://etherscan.io/address/0x8Ebb0c154E31418cc3E43B1e600423FD9194FF17#code)

### Rinkeby
- ERC721 - [0xa1Fa06E4C8BB50f9EFDe95B3Ba2E3B706748864c](https://rinkeby.etherscan.io/address/0xa1Fa06E4C8BB50f9EFDe95B3Ba2E3B706748864c)
- ERC721A - [0x3B25F09F5a9d69002Bdcd3a50e6869C37eA14132](https://rinkeby.etherscan.io/address/0x3B25F09F5a9d69002Bdcd3a50e6869C37eA14132)
- ERC1155 - [0xE6c4c921A9AE419ec6B73Fdd9AD1d1D2369B83E4](https://rinkeby.etherscan.io/address/0xE6c4c921A9AE419ec6B73Fdd9AD1d1D2369B83E4)

### Ropsten
- ERC721 - [0x1333e851dC3E2020eDE88c6470D307d6A1521f79](https://ropsten.etherscan.io/address/0x1333e851dC3E2020eDE88c6470D307d6A1521f79)
- ERC721A - [0x00aE2fbB0FeF1ec5CD075260B91d096329eb67A6](https://ropsten.etherscan.io/address/0x00aE2fbB0FeF1ec5CD075260B91d096329eb67A6)
- ERC1155 - [0xdb6Dc00aD6B360F7d61Db8538DbC0B0AC88B513c](https://ropsten.etherscan.io/address/0xdb6Dc00aD6B360F7d61Db8538DbC0B0AC88B513c)

### Kovan
- ERC721 - [0xc6B8ED252159b4EF9f6f2e6e916E4de0Af1109f0](https://kovan.etherscan.io/address/0xc6B8ED252159b4EF9f6f2e6e916E4de0Af1109f0)
- ERC721A - [0x8950dFf541E4072C3BD7968419469B8C50B06bE2](https://kovan.etherscan.io/address/0x8950dFf541E4072C3BD7968419469B8C50B06bE2)
- ERC1155 - [0xdA6076fcfF06833512dB5bD7CC414C079C89ca52](https://kovan.etherscan.io/address/0xdA6076fcfF06833512dB5bD7CC414C079C89ca52)

### Goerli
- ERC721 - [0xf81789AB209ac710bF2e0a7a9c24e8ceEB1cb368](https://goerli.etherscan.io/address/0xf81789AB209ac710bF2e0a7a9c24e8ceEB1cb368)
- ERC721A - [0x46e04f2FBa426530fef1A8840782E4B5a9bFb90c](https://goerli.etherscan.io/address/0x46e04f2FBa426530fef1A8840782E4B5a9bFb90c)
- ERC1155 - [0x8C30d1CeF95f3c5f0cD3130ed56928bBfdDd0571](https://goerli.etherscan.io/address/0x8C30d1CeF95f3c5f0cD3130ed56928bBfdDd0571)

### Binance Smart Chain
- ERC721 - [0x960efe6b1c9F8C5a680e9aDf7f03CD3f4A60153E](https://bscscan.com/address/0x960efe6b1c9F8C5a680e9aDf7f03CD3f4A60153E#code)
- ERC721A - [0xe1DBc970Fd854Ec048930d1C6a2ecE47232a180E](https://bscscan.com/address/0xe1DBc970Fd854Ec048930d1C6a2ecE47232a180E#code)
- ERC1155 - [0xEA76ffa7e309a20Cfc61207e5974A7aD0E7Ff301](https://bscscan.com/address/0xEA76ffa7e309a20Cfc61207e5974A7aD0E7Ff301#code)

### Binance Smart Chain - Testnet
- ERC721 - [0x6b8E6441e4A5a8F4b911f53c179fC60DA4C2c26B](https://testnet.bscscan.com/address/0x6b8E6441e4A5a8F4b911f53c179fC60DA4C2c26B)
- ERC721A - [0x1cB4D174D1617b1C5a63349Fa521f36160DD6e64](https://testnet.bscscan.com/address/0x1cB4D174D1617b1C5a63349Fa521f36160DD6e64)
- ERC1155 - [0xEA42f9408Cefc0c07425246775D9B4B9c3063Fed](https://testnet.bscscan.com/address/0xEA42f9408Cefc0c07425246775D9B4B9c3063Fed)

### Polygon
- ERC721 - [0xdA6076fcfF06833512dB5bD7CC414C079C89ca52](https://polygonscan.com/address/0xdA6076fcfF06833512dB5bD7CC414C079C89ca52#code)
- ERC721A - [0xF037fCA1d00Ce242fdE3e00e6348E98533758410](https://polygonscan.com/address/0xF037fCA1d00Ce242fdE3e00e6348E98533758410#code)
- ERC1155 - [0xB4dCbE3045100B276817c18c6b97240BeDa98337](https://polygonscan.com/address/0xB4dCbE3045100B276817c18c6b97240BeDa98337#code)

### Mumbai
- ERC721 - [0xB1e00344D3A98E54FBF5C839c85CcaD5f61C40Bf](https://mumbai.polygonscan.com/address/0xB1e00344D3A98E54FBF5C839c85CcaD5f61C40Bf)
- ERC721A - [0x93F966aedFE673E6D99b3FcD6333f9DC6768f387](https://mumbai.polygonscan.com/address/0x93F966aedFE673E6D99b3FcD6333f9DC6768f387)
- ERC1155 - [0x01B0d1C240524FC52Ba233Ae509723c79b17A4d3](https://mumbai.polygonscan.com/address/0x01B0d1C240524FC52Ba233Ae509723c79b17A4d3)

### Optimism Kovan
- ERC721 - [0xf81789AB209ac710bF2e0a7a9c24e8ceEB1cb368](https://kovan-optimistic.etherscan.io/address/0xf81789AB209ac710bF2e0a7a9c24e8ceEB1cb368)
- ERC721A - [0x46e04f2FBa426530fef1A8840782E4B5a9bFb90c](https://kovan-optimistic.etherscan.io/address/0x46e04f2FBa426530fef1A8840782E4B5a9bFb90c)
- ERC1155 - [0x8C30d1CeF95f3c5f0cD3130ed56928bBfdDd0571](https://kovan-optimistic.etherscan.io/address/0x8C30d1CeF95f3c5f0cD3130ed56928bBfdDd0571)

### Arbitrum Rinkeby
- ERC721 - [0x05B2446B23BBc5A62A2d53b9D74e26fb7fd465e0](https://testnet.arbiscan.io/address/0x05B2446B23BBc5A62A2d53b9D74e26fb7fd465e0)
- ERC721A - [0xF61BaDe11ceb23E56e5dFB7dd1DC1A8d7BCbb383](https://testnet.arbiscan.io/address/0xF61BaDe11ceb23E56e5dFB7dd1DC1A8d7BCbb383)
- ERC1155 - [0xe41C126975f1E0F2bdD0b86a2C8Ad625a3643D33](https://testnet.arbiscan.io/address/0xe41C126975f1E0F2bdD0b86a2C8Ad625a3643D33)
