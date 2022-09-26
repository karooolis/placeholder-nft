import _ from "lodash";
import { Chain } from "./chains";

export enum ContractType {
  ERC721 = "ERC721",
  ERC721A = "ERC721A",
  ERC1155 = "ERC1155",
}

export type ContractsNetworkTypeAddress = {
  [key in Chain]: {
    [key in ContractType]: string;
  };
};

export const CONTRACT_ADDRESS: ContractsNetworkTypeAddress = {
  [Chain.Ethereum]: {
    [ContractType.ERC721]: "0xb60D106AaEcB846Dfd35632f7454E5e7d4FB69fe",
    [ContractType.ERC721A]: "0x8f82Fb87A662c18176daBCF2bbFa1D2A5BC09beC",
    [ContractType.ERC1155]: "0x8Ebb0c154E31418cc3E43B1e600423FD9194FF17",
  },
  [Chain.Rinkeby]: {
    [ContractType.ERC721]: "0xa1Fa06E4C8BB50f9EFDe95B3Ba2E3B706748864c",
    [ContractType.ERC721A]: "0x3B25F09F5a9d69002Bdcd3a50e6869C37eA14132",
    [ContractType.ERC1155]: "0xE6c4c921A9AE419ec6B73Fdd9AD1d1D2369B83E4",
  },
  [Chain.Ropsten]: {
    [ContractType.ERC721]: "0x1333e851dC3E2020eDE88c6470D307d6A1521f79",
    [ContractType.ERC721A]: "0x00aE2fbB0FeF1ec5CD075260B91d096329eb67A6",
    [ContractType.ERC1155]: "0xdb6Dc00aD6B360F7d61Db8538DbC0B0AC88B513c",
  },
  [Chain.Kovan]: {
    [ContractType.ERC721]: "0xc6B8ED252159b4EF9f6f2e6e916E4de0Af1109f0",
    [ContractType.ERC721A]: "0x8950dFf541E4072C3BD7968419469B8C50B06bE2",
    [ContractType.ERC1155]: "0xdA6076fcfF06833512dB5bD7CC414C079C89ca52",
  },
  [Chain.Goerli]: {
    [ContractType.ERC721]: "0xf81789AB209ac710bF2e0a7a9c24e8ceEB1cb368",
    [ContractType.ERC721A]: "0x46e04f2FBa426530fef1A8840782E4B5a9bFb90c",
    [ContractType.ERC1155]: "0x8C30d1CeF95f3c5f0cD3130ed56928bBfdDd0571",
  },
  [Chain.BSC]: {
    [ContractType.ERC721]: "0x960efe6b1c9F8C5a680e9aDf7f03CD3f4A60153E",
    [ContractType.ERC721A]: "0xe1DBc970Fd854Ec048930d1C6a2ecE47232a180E",
    [ContractType.ERC1155]: "0xEA76ffa7e309a20Cfc61207e5974A7aD0E7Ff301",
  },
  [Chain.BSC_Testnet]: {
    [ContractType.ERC721]: "0x6b8E6441e4A5a8F4b911f53c179fC60DA4C2c26B",
    [ContractType.ERC721A]: "0x1cB4D174D1617b1C5a63349Fa521f36160DD6e64",
    [ContractType.ERC1155]: "0xEA42f9408Cefc0c07425246775D9B4B9c3063Fed",
  },
  [Chain.Polygon]: {
    [ContractType.ERC721]: "0xdA6076fcfF06833512dB5bD7CC414C079C89ca52",
    [ContractType.ERC721A]: "0xF037fCA1d00Ce242fdE3e00e6348E98533758410",
    [ContractType.ERC1155]: "0xB4dCbE3045100B276817c18c6b97240BeDa98337",
  },
  [Chain.Mumbai]: {
    [ContractType.ERC721]: "0xB1e00344D3A98E54FBF5C839c85CcaD5f61C40Bf",
    [ContractType.ERC721A]: "0x93F966aedFE673E6D99b3FcD6333f9DC6768f387",
    [ContractType.ERC1155]: "0x01B0d1C240524FC52Ba233Ae509723c79b17A4d3",
  },
  [Chain.Optimism_Kovan]:
    {
      [ContractType.ERC721]: "0xf81789AB209ac710bF2e0a7a9c24e8ceEB1cb368",
      [ContractType.ERC721A]: "0x46e04f2FBa426530fef1A8840782E4B5a9bFb90c",
      [ContractType.ERC1155]: "0x8C30d1CeF95f3c5f0cD3130ed56928bBfdDd0571",
    },
  [Chain.Arbitrum_Rinkeby]:
    {
      [ContractType.ERC721]: "0x05B2446B23BBc5A62A2d53b9D74e26fb7fd465e0",
      [ContractType.ERC721A]: "0xF61BaDe11ceb23E56e5dFB7dd1DC1A8d7BCbb383",
      [ContractType.ERC1155]: "0xe41C126975f1E0F2bdD0b86a2C8Ad625a3643D33",
    },
};
