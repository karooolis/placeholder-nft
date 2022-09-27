import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "xdeployer"

dotenv.config();

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    // Ethereum
    ethMain: {
      url: process.env.ETHEREUM_URL || "",
      chainId: 1,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    rinkeby: {
      url: process.env.ETHEREUM_RINKEBY_URL || "",
      chainId: 4,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    ropsten: {
      url: process.env.ETHEREUM_ROPSTEN_URL || "",
      chainId: 3,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    kovan: {
      url: process.env.ETHEREUM_KOVAN_URL || "",
      chainId: 42,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    goerli: {
      url: process.env.ETHEREUM_GOERLI_URL || "",
      chainId: 5,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },

    // Polygon
    polygon: {
      url: process.env.POLYGON_URL || "",
      chainId: 137,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 80000000000,
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_URL || "",
      chainId: 80001,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 80000000000,
    },

    // Binance
    bscMain: {
      url: process.env.BINANCE_URL || "",
      chainId: 56,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    bscTestnet: {
      url: process.env.BINANCE_TESTNET_URL || "",
      chainId: 97,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 80000000000,
    },

    // Optimism
    optimismMain: {
      url: process.env.OPTIMISM_URL || "",
      chainId: 10,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    optimismTestnet: {
      url: process.env.OPTIMISM_KOVAN_URL || "",
      chainId: 69,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },

    // Arbitrum
    arbitrumMain: {
      url: process.env.ARBITRUM_URL || "",
      chainId: 42161,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    arbitrumTestnet: {
      url: process.env.ARBITRUM_RINKEBY_URL || "",
      chainId: 421611,
      accounts: accounts,
      gas: 6721975,
      gasPrice: 8000000000,
    },
  },
  xdeploy: {
    contract: "PlaceholderNFTERC1155",
    salt: process.env.DEPLOYMENT_SALT,
    signer: process.env.PRIVATE_KEY,
    networks: [
      // "ethMain",
      "rinkeby",
      "ropsten",
      "kovan",
      "goerli",
      "polygon",
      "mumbai",
      "bscMain",
      "bscTestnet",
      // "optimismMain",
      "optimismTestnet",
      // "arbitrumMain",
      "arbitrumTestnet"
    ],
    rpcUrls: [
      // process.env.ETHEREUM_URL,
      process.env.ETHEREUM_RINKEBY_URL,
      process.env.ETHEREUM_ROPSTEN_URL,
      process.env.ETHEREUM_KOVAN_URL,
      process.env.ETHEREUM_GOERLI_URL,
      process.env.POLYGON_URL,
      process.env.POLYGON_MUMBAI_URL,
      process.env.BINANCE_URL,
      process.env.BINANCE_TESTNET_URL,
      // process.env.OPTIMISM_URL,
      process.env.OPTIMISM_KOVAN_URL,
      // process.env.ARBITRUM_URL,
      process.env.ARBITRUM_RINKEBY_URL
    ],
    gasPrice: 80000000000,
    gasLimit: 1.2 * 10 ** 7,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.POLYGON_ETHERSCAN_API_KEY,
  },
};

export default config;
