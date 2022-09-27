import _ from "lodash";

export enum ContractType {
  ERC721 = "ERC721",
  ERC721A = "ERC721A",
  ERC1155 = "ERC1155",
}

export type ContractsNetworkTypeAddress = {
  [key in ContractType]: string;
};

export const CONTRACT_ADDRESS: ContractsNetworkTypeAddress = {
  [ContractType.ERC721]: "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8",
  [ContractType.ERC721A]: "0xc816EB81c65efA37EeAFB673c39BDb5A57226896",
  [ContractType.ERC1155]: "0x5a28F24109b7E122EeE1968fD51Db983da46cb31",
};
