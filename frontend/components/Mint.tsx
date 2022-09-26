import React, { ChangeEvent, useState } from "react";
import { ContractType } from "@consts/contracts";
import QuantityInput from "./QuantityInput";
import ContractTypeSelect from "./ContractTypeSelect";
import NFT from "./NFT";
import MintBtn from "./MintBtn";

const Mint = () => {
  const [mintCount, setMintCount] = useState(1);
  const [contractType, setContractType] = useState<ContractType>(
    ContractType["ERC721"]
  );

  const handleSetMintCount = (evt: ChangeEvent<HTMLInputElement>) => {
    let newMintCount = Number(evt.target.value);

    if (newMintCount < 0) {
      newMintCount = newMintCount * -1;
    }

    if (newMintCount) {
      setMintCount(Number(newMintCount));
    } else {
      setMintCount(newMintCount);
    }
  };

  const handleBlurCount = () => {
    if (typeof mintCount !== "number") {
      setMintCount(1);
    }
  };

  const handleDecrementCount = () => {
    setMintCount(mintCount - 1);
  };

  const handleIncrementCount = () => {
    setMintCount(mintCount + 1);
  };

  const handleSetContractType = (evt: ChangeEvent<HTMLSelectElement>) => {
    setContractType(ContractType[evt.target.value as keyof typeof ContractType]);
  };

  return (
    <section className="py-2 sm:py-4">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xs mx-auto mt-10 overflow-hidden bg-white border-gray-900 border-4 rounded-xl">
          <div className="p-6 sm:p-8">
            <div className="rounded-md overflow-hidden">
              <NFT />
            </div>

            <div className="mt-6 space-y-5">
              <QuantityInput
                count={mintCount}
                setCount={handleSetMintCount}
                onBlur={handleBlurCount}
                onIncrement={handleIncrementCount}
                onDecrement={handleDecrementCount}
              />

              <ContractTypeSelect
                type={contractType}
                setType={handleSetContractType}
              />

              <MintBtn count={mintCount} contractType={contractType} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
