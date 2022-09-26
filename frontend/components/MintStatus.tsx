import React from "react";
import { useNetwork } from "wagmi";

type Props = {
  tx: any;
  loading: boolean;
};

const MintStatus = ({ tx, loading }: Props) => {
  const network = useNetwork();
  const explorerUrl = network.chain?.blockExplorers?.etherscan?.url;

  if (!tx) {
    return null;
  }

  return (
    <div className="text-md truncate pt-4">
      {loading && (
        <p className="text-yellow-600 font-semibold">
          View pending transaction ⏳
        </p>
      )}
      {!loading && (
        <p className="text-green-600 font-semibold">
          Your NFTs have been minted 🎉
        </p>
      )}

      <a
        href={`${explorerUrl}/tx/${tx?.hash}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-ellipsis hover:underline"
      >
        {explorerUrl}/tx/{tx?.hash}
      </a>
    </div>
  );
};

export default MintStatus;
