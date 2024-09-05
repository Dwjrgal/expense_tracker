import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { IoArrowDownCircleSharp } from "react-icons/io5";

export const ExpenseFrame = () => {
  return (
    <div className="border rounded-xl w-72 flex flex-col justify-center pl-4 bg-white">
      <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
        <RxDotFilled className="text-lg text-blue-700" />
        Total expenses{" "}
      </h4>
      <h2 className="text-2xl font-semibold">-1,200,000</h2>
      <p className="text-[12px] font-normal text-gray-500">
        Your Income Amount{" "}
      </p>
      <span className="flex items-center gap-1 mt-2 text-xs pb-3">
        {" "}
        <IoArrowDownCircleSharp className="text-blue-700 text-sm" />
        32% from last month
      </span>
    </div>
  );
};
