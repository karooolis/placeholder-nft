export enum Chain {
  // TODO: Ethereum = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
  // TODO: Polygon = 137,
  Mumbai = 80001,
  BSC = 56,
  BSC_Testnet = 97,
  // TODO: Optimism = 10,
  Optimism_Kovan = 69,
  // TODO: Arbitrum = 42161,
  Arbitrum_Rinkeby = 421611,
}

export const CHAIN_NAME: { [key in Chain]: string } = {
  // [Chain.Ethereum]: 'Ethereum',
  [Chain.Ropsten]: 'Ropsten',
  [Chain.Rinkeby]: 'Rinkeby',
  [Chain.Goerli]: 'Goerli',
  [Chain.Kovan]: 'Kovan',
  // [Chain.Polygon]: 'Polygon',
  [Chain.Mumbai]: 'Polygon Mumbai',
  [Chain.BSC]: 'Binance Smart Chain',
  [Chain.BSC_Testnet]: 'Binance Smart Chain - Testnet',
  [Chain.Optimism_Kovan]: 'Optimism Kovan',
  [Chain.Arbitrum_Rinkeby]: 'Arbitrum Rinkeby',
};
