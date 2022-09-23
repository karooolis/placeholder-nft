import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

dotenv.config();

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    // Ethereum
    ethereum: {
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
    bsc: {
      url: process.env.BINANCE_URL || "",
      chainId: 56,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    bsc_testnet: {
      url: process.env.BINANCE_TESTNET_URL || "",
      chainId: 97,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 80000000000,
    },

    // Optimism
    optimism: {
      url: process.env.OPTIMISM_URL || "",
      chainId: 10,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    optimism_kovan: {
      url: process.env.OPTIMISM_KOVAN_URL || "",
      chainId: 69,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },

    // Arbitrum
    arbitrum: {
      url: process.env.ARBITRUM_URL || "",
      chainId: 42161,
      accounts: accounts,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    arbitrum_rinkeby: {
      url: process.env.ARBITRUM_RINKEBY_URL || "",
      chainId: 421611,
      accounts: accounts,
      gas: 6721975,
      gasPrice: 8000000000,
    },
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
