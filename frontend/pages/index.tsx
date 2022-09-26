import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useNetwork } from "wagmi";
import { usePreviousImmediate } from "rooks";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Mint from "@components/Mint";
import FAQ from "@components/FAQ";

const Home: NextPage = () => {
  const network = useNetwork();
  const prevNetwork = usePreviousImmediate(network);

  useEffect(() => {
    // Reload app on network change
    if (
      prevNetwork?.chain?.network &&
      network?.chain?.network !== prevNetwork?.chain?.network
    ) {
      window.location.reload();
    }
  }, [network?.chain?.network, prevNetwork?.chain?.network]);

  return (
    <>
      <Head>
        <title>Placeholder NFT</title>

        <meta
          name="description"
          content="Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. You may mint it freely, and use it for testing, or your own satisfaction."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta property="og:url" content="https://www.placeholdernft.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Placeholder NFT" />
        <meta
          property="og:description"
          content="Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. You may mint it freely, and use it for testing, or your own satisfaction."
        />
        <meta
          property="og:image"
          content="https://placeholdernft.com/static-preview.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="placeholdernft.com" />
        <meta name="twitter:creator" content="@karooolis" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://www.placeholdernft.com/"
        />
        <meta name="twitter:title" content="Placeholder NFT" />
        <meta
          name="twitter:description"
          content="Placeholder NFT is an unlimited supply, fully on-chain, NFT collection available on any EVM-compatible chain. You may mint it freely, and use it for testing, or your own satisfaction."
        />
        <meta
          name="twitter:image"
          content="https://placeholdernft.com/static-preview.jpeg"
        />
      </Head>

      <div
        className="relative min-h-screen"
        style={{ background: "rgb(246,250,247)" }}
      >
        <Header />

        <section className="relative pt-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Hero />

              <Mint />
            </div>
          </div>
        </section>

        <FAQ />

        <Footer />
      </div>
    </>
  );
};

export default Home;
