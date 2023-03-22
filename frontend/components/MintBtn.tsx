import React, { ReactNode, useState } from "react";
import { ConnectButton, Chain } from "@rainbow-me/rainbowkit";
import { useContract, useNetwork, useSigner } from "wagmi";
import { useReward } from "react-rewards";
import PlaceholderNFTERC721_ABI from "../contracts/PlaceholderNFTERC721.json";
import PlaceholderNFTERC721A_ABI from "../contracts/PlaceholderNFTERC721A.json";
import PlaceholderNFTERC1155_ABI from "../contracts/PlaceholderNFTERC1155.json";
import {
  CONTRACT_ADDRESS,
  ContractType,
} from "@consts/contracts";
import { Spinner } from "./Spinner";
import MintStatus from "./MintStatus";

type Props = {
  count: number;
  contractType: ContractType;
};

type ContainerProps = {
  onClick: () => void;
  loading?: boolean;
  children: ReactNode;
};

const CONTRACT_ABI = {
  [ContractType.ERC721]: PlaceholderNFTERC721_ABI,
  [ContractType.ERC721A]: PlaceholderNFTERC721A_ABI,
  [ContractType.ERC1155]: PlaceholderNFTERC1155_ABI,
};

const MintBtn = ({ count, contractType }: Props) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <MintBtnContainer onClick={openConnectModal}>
                    Connect wallet
                  </MintBtnContainer>
                );
              }

              if (chain.unsupported) {
                return (
                  <MintBtnContainer onClick={openChainModal}>
                    Wrong network
                  </MintBtnContainer>
                );
              }

              return <Minter count={count} contractType={contractType} />;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const Minter = ({ count, contractType }: Props) => {
  const { data: signer } = useSigner();
  const [tx, setTx] = useState();
  const [isMinting, setIsMinting] = useState(false);

  const network = useNetwork();
  const chainId = network?.chain?.id as number;

  const contract = useContract({
    address: CONTRACT_ADDRESS[chainId][contractType],
    abi: CONTRACT_ABI[contractType],
    signerOrProvider: signer,
  });

  console.log(contract);

  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("mintBtn", "confetti");

  const mint = async () => {
    const tx = await contract?.mint(count);
    setTx(tx);
    setIsMinting(true);

    await tx.wait();
    setIsMinting(false);
    confettiReward();
  };

  return (
    <>
      <MintBtnContainer onClick={mint} loading={isMinting}>
        Mint
      </MintBtnContainer>

      <MintStatus tx={tx} loading={isMinting} />
    </>
  );
};

const MintBtnContainer = ({
  children,
  loading = false,
  onClick,
}: ContainerProps) => {
  return (
    <div className="relative inline-flex group w-full">
      <div
        className="absolute transitiona-all duration-1000 opacity-70 -inset-px rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
        style={{
          background:
            "linear-gradient(90deg, rgb(68, 255, 154) -0.55%, rgb(68, 176, 255) 22.86%, rgb(139, 68, 255) 48.36%, rgb(255, 102, 68) 73.33%, rgb(235, 255, 112) 99.34%)",
        }}
      ></div>

      <button
        id="mintBtn"
        className="relative inline-flex w-full items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-500 bg-gray-900 font-pj rounded-xl focus:outline-0 disabled:opacity-75 disabled:cursor-not-allowed"
        onClick={onClick}
        {...(loading && { disabled: true })}
      >
        {children} {loading && <Spinner />}
      </button>
    </div>
  );
};

export default MintBtn;
