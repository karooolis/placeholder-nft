import _ from "lodash";

export enum ContractType {
  ERC721 = "ERC721",
  ERC721A = "ERC721A",
  ERC1155 = "ERC1155",
}

export type ContractsNetworkTypeAddress = {
  [key in number]: {
    [key in ContractType]: string;
  }
};

export const CONTRACT_ADDRESS: ContractsNetworkTypeAddress = {
  5: {
    [ContractType.ERC721]: "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8",
    [ContractType.ERC721A]: "0xc816EB81c65efA37EeAFB673c39BDb5A57226896",
    [ContractType.ERC1155]: "0x5a28F24109b7E122EeE1968fD51Db983da46cb31",
  },
  11155111: {
    [ContractType.ERC721]: "0x05B2446B23BBc5A62A2d53b9D74e26fb7fd465e0",
    [ContractType.ERC721A]: "0xF61BaDe11ceb23E56e5dFB7dd1DC1A8d7BCbb383",
    [ContractType.ERC1155]: "0xe41C126975f1E0F2bdD0b86a2C8Ad625a3643D33",
  },
  80001: {
    [ContractType.ERC721]: "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8",
    [ContractType.ERC721A]: "0xc816EB81c65efA37EeAFB673c39BDb5A57226896",
    [ContractType.ERC1155]: "0x5a28F24109b7E122EeE1968fD51Db983da46cb31",
  },
  97: {
    [ContractType.ERC721]: "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8",
    [ContractType.ERC721A]: "0xc816EB81c65efA37EeAFB673c39BDb5A57226896",
    [ContractType.ERC1155]: "0x5a28F24109b7E122EeE1968fD51Db983da46cb31",
  },
  420: {
    [ContractType.ERC721]: "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8",
    [ContractType.ERC721A]: "0xc816EB81c65efA37EeAFB673c39BDb5A57226896",
    [ContractType.ERC1155]: "0x5a28F24109b7E122EeE1968fD51Db983da46cb31",
  },
  421613: {
    [ContractType.ERC721]: "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8",
    [ContractType.ERC721A]: "0xc816EB81c65efA37EeAFB673c39BDb5A57226896",
    [ContractType.ERC1155]: "0x5a28F24109b7E122EeE1968fD51Db983da46cb31",
  },
};
