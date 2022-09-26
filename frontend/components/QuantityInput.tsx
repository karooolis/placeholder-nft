import React, { ChangeEvent } from "react";

type Props = {
  count: number;
  setCount: (evt: ChangeEvent<HTMLInputElement>) => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onBlur: () => void;
};

const QuantityInput = ({
  count,
  setCount,
  onIncrement,
  onDecrement,
  onBlur,
}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <span
        className="text-base font-medium text-gray-900 text-left"
        style={{
          width: "200px",
        }}
      >
        Quantity:
      </span>

      <div className="flex items-center justify-end p-1 space-x-5 border border-gray-200 rounded-md">
        <button
          type="button"
          className="p-1 transition-all duration-200 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
          onClick={onDecrement}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>

        <input
          type="number"
          className="text-base font-semibold text-gray-900 text-center"
          style={{ width: "100%", margin: 0, outline: "none" }}
          min={1}
          step={1}
          value={count}
          onChange={setCount}
          onBlur={onBlur}
        />

        <button
          type="button"
          className="p-1 transition-all duration-200 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
          style={{ margin: 0 }}
          onClick={onIncrement}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
