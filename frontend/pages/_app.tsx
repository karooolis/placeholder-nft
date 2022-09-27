import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { Chain, RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import splitbee from '@splitbee/web';

// Initialize Splitbee analytics
splitbee.init()

const binance: Chain = {
  id: 56,
  name: "Binance Smart Chain",
  network: "Binance Smart Chain",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  iconUrl: 'https://res.cloudinary.com/drchu0ouk/image/upload/c_scale,w_28/v1658032551/placeholder_nft/bsc_gwze06.svg',
  rpcUrls: {
    default: "https://bsc-dataseed.binance.org",
    default2: "https://bsc-dataseed1.defibit.io/",
    default3: "https://bsc-dataseed1.ninicoin.io/",
  },
  blockExplorers: {
    etherscan: {
      name: "BNB Smart Chain Explorer",
      url: "https://bscscan.com",
    },
    default: {
      name: "BNB Smart Chain Explorer",
      url: "https://bscscan.com",
    },
  },
  testnet: false,
};

const binanceTestnet: Chain = {
  id: 97,
  name: "Binance Smart Chain - Testnet",
  network: "Binance Smart Chain - Testnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  iconUrl: 'https://res.cloudinary.com/drchu0ouk/image/upload/c_scale,w_28/v1658032551/placeholder_nft/bsc_gwze06.svg',
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  blockExplorers: {
    etherscan: {
      name: "BNB Smart Chain Explorer",
      url: "https://testnet.bscscan.com",
    },
    default: {
      name: "BNB Smart Chain Explorer",
      url: "https://testnet.bscscan.com",
    },
  },
};

const { chains, provider, webSocketProvider } = configureChains(
  [
    // chain.mainnet,
    chain.goerli,
    chain.kovan,
    chain.rinkeby,
    chain.ropsten,

    // chain.polygon,
    chain.polygonMumbai,

    // chain.optimism,
    chain.optimismKovan,

    // chain.arbitrum,
    chain.arbitrumRinkeby,

    binance,
    binanceTestnet,
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      alchemyId: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Placeholder NFT 🖼",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
