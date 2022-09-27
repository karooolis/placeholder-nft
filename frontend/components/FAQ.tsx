import React, { useState } from "react";
import { CONTRACT_ADDRESS, ContractType } from "@consts/contracts";
import { CHAIN_NAME, Chain } from "@consts/chains";

type VerifiedContractsProps = {
  chain: Chain;
  explorer: string;
};

const VerifiedContracts = ({ chain, explorer }: VerifiedContractsProps) => {
  return (
    <>
      <br />
      <h3 className="font-semibold">{CHAIN_NAME[chain]}:</h3>
      <ul className="list-disc pt-1">
        {Object.values(ContractType).map((contractType) => {
          return (
            <li key={`${chain}-${contractType}`} className="truncate">
              <a
                href={`${explorer}/${CONTRACT_ADDRESS[contractType]}#code`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {contractType}{" "}
                <span className="bg-gray-100 text-gray-700 font-semilight">
                  {CONTRACT_ADDRESS[contractType]}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const FAQ_DATA = [
  {
    question: "May I inspect and verify the contracts?",
    answer: (
      <>
        <p>
          Find the list of deployed and verified contracts on{" "}
          <a
            className="text-blue-500 text-underline"
            href="https://github.com/karooolis/placeholder-nft/tree/main/#deployed-contracts"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 	&ldquo;Deployed contracts&rdquo;
          </a>{" "}
          section.
        </p>
      </>
    ),
  },
  {
    question: "What is an on-chain NFT?",
    answer: (
      <>
        <p>
          On-chain NFT stores all its metadata + image directly on the
          blockchain. In this case, each token image is represented as SVG
          stored in the smart contract. And same goes for the metadata that gets
          encoded as base64.
        </p>
        <br />
        <p>
          On-chain NFTs are superior to off-chain ones as they live solely on
          the blockchain. As long as the blockchain lives, the NFT lives.
          Off-chain NFTs do not have the same guarantess since they rely on
          external storage providers, such as IPFS, to be available.
        </p>
      </>
    ),
  },
  {
    question: "ERC721 vs ERC721A vs ERC1155?",
    answer: (
      <>
        <p>
          ERC721 is a token standard for non-fungible tokens on Ethereum. A
          pillar of the ecosystem, it supports billions of dollars worth of
          NFTs.
        </p>
        <br />
        <p>
          ERC721A is an improved implementation of the IERC-721 standard that
          supports minting multiple tokens for close to the cost of one. While
          not as battle-tested as standard ERC721, it introduces significant gas
          savings.
        </p>
        <br />
        <p>
          ERC1155 is a token standard that enables the efficient transfer of
          fungible and non-fungible tokens in a single transaction. Often used
          for gaming tokens.
        </p>
      </>
    ),
  },
];

const FAQ = () => {
  // TODO: finish up functionality or remove opening/closing
  const [open, setOpen] = useState([0, 1, 2, 3, 4]);

  return (
    <section className="py-16 sm:pt-24 lg:pt-30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-xl mx-auto mt-8 sm:mt-12">
          <div className="space-y-4">
            {FAQ_DATA.map((data, idx) => {
              return (
                <QuestionAnswer
                  key={idx}
                  idx={idx}
                  open={open}
                  setOpen={setOpen}
                  {...data}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const QuestionAnswer = ({ idx, open, setOpen, question, answer }) => {
  return (
    <div
      role="region"
      className="px-4 py-5 border-4 border-gray-900 rounded-lg bg-white"
    >
      <h3>
        <button className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900">
          <span className="flex-1">{question}</span>
        </button>
      </h3>

      {open && (
        <div>
          <div className="pt-4 whitespace-pre-line text-base font-medium text-gray-600">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
