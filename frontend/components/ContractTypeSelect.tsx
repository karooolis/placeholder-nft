import React, { ChangeEvent } from "react";
import { ContractType } from "@consts/contracts";

type Props = {
  type: string;
  setType: (evt: ChangeEvent<HTMLSelectElement>) => void;
};

const ContractTypeSelect = ({ type, setType }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor="type"
        className="text-base font-medium text-gray-900 text-left"
      >
        NFT type:
      </label>

      <div className="flex items-center justify-end p-1 space-x-5 border border-gray-200 rounded-md">
        {/* TODO: clean up styles */}
        <select
          name="type"
          className="text-base font-semibold text-gray-900 text-center cursor-pointer"
          style={{ width: "135px", margin: 0, outline: "none" }}
          value={type}
          onChange={setType}
        >
          {Object.values(ContractType).map((contractType) => (
            <option key={contractType} value={contractType}>
              {contractType}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ContractTypeSelect;
