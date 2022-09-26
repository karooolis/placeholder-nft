import React from "react";

const Hero = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
        Test your dApp with{" "}
        <div>
          <div className="relative inline-block">
            <h1 className="text-4xl relative z-10 mt-4 sm:text-5xl lg:text-6xl">
              Placeholder NFT 🖼
            </h1>{" "}
            <div
              className="absolute z-0 -inset-2 opacity-20 rounded-xl blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, rgb(68, 255, 154) -0.55%, rgb(68, 176, 255) 22.86%, rgb(139, 68, 255) 48.36%, rgb(255, 102, 68) 73.33%, rgb(235, 255, 112) 99.34%)",
              }}
            ></div>
          </div>
        </div>
      </h1>

      <p className="mt-10 text-lg font-normal text-gray-600 lg:text-xl">
        Placeholder NFT is an unlimited supply, fully on-chain, NFT
        collection available on any EVM-compatible chain. You may mint it
        freely, and use it for testing, or your own satisfaction.
      </p>
    </>
  );
};
export default Hero;
