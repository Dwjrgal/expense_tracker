"use client";

import React, { useContext } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoEye } from "react-icons/io5";
import { GrEmptyCircle } from "react-icons/gr";
import RecordModal from "@/app/components/record-modal";
import { CategoryModal } from "@/app/components";
import { DashboardContext } from "@/app/context/dashboard_context";

const Records = ({}) => {
  const { transactions, categories, setCategoryName, addCategory } =
    useContext(DashboardContext);
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center gap-3 md:gap-5 bg-slate-100 w-full min-h-screen p-4">
        <section className="bg-white rounded flex flex-col gap-4 p-4 w-full md:w-[180px] h-auto md:h-[600px] mt-7">
          <h3 className="text-sm font-bold">Records</h3>
          <input
            type="text"
            placeholder="Search"
            className="rounded pl-2 bg-slate-100 border text-xs"
          />
          <RecordModal />
          <div className="flex flex-col gap-3 text-gray-700">
            <h5 className="font-semibold text-xs">Types</h5>
            <ul className="text-[11px] font-normal pl-5">
              <li className="flex gap-2 items-center">
                {" "}
                <label className="swap">
                  <input type="checkbox" />
                  <GrEmptyCircle className="swap-on"></GrEmptyCircle>
                  <FaRegCircleDot className="swap-off"></FaRegCircleDot>
                </label>
                All
              </li>

              <li className="flex gap-2 items-center">
                <label className="swap">
                  <input type="checkbox" />
                  <FaRegCircleDot className="swap-on"></FaRegCircleDot>
                  <GrEmptyCircle className="swap-off"></GrEmptyCircle>
                </label>
                Income
              </li>
              <li className="flex gap-2 items-center">
                <label className="swap">
                  <input type="checkbox" />
                  <FaRegCircleDot className="swap-on"></FaRegCircleDot>
                  <GrEmptyCircle className="swap-off"></GrEmptyCircle>
                </label>
                Expense
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <h5 className="font-semibold text-[12px]">Category</h5>
            <p className="text-gray-500 text-[12px]">Clear</p>
          </div>
          <div className="flex flex-col gap-1 max-h-[200px] md:max-h-none overflow-y-auto">
            {categories?.map((ct) => (
              <div
                key={ct.id}
                className="flex gap-3 items-center font-normal text-gray-700 ml-2 text-[11px]"
              >
                <IoEye />
                <h4>{ct?.name}</h4>
              </div>
            ))}
            <CategoryModal
              setCategoryName={setCategoryName}
              addCategory={addCategory}
            />
          </div>
        </section>
        <section className="pt-5 w-full md:w-[600px]">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-28 mb-4">
            <h5 className="flex items-center gap-2 text-xs md:text-sm">
              <button className="w-6 h-6 md:w-4 md:h-4 bg-slate-200 flex items-center justify-center rounded-md">
                <SlArrowLeft className="text-xs" />
              </button>
              <p className="text-xs font-normal">Last 30 Days</p>
              <button className="w-6 h-6 md:w-4 md:h-4 bg-slate-200 flex items-center justify-center rounded-md">
                <SlArrowRight className="text-xs" />
              </button>
            </h5>
          </div>
          <p className="font-semibold pb-3 text-sm">Today</p>
          <section className="flex flex-col gap-2">
            {transactions?.map((tr) => (
              <section key={tr.id} className="bg-white rounded pt-3">
                <div className="flex justify-between items-center px-4 py-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="h-6 w-6"
                      src="./img/Home.png"
                      alt="Category"
                    />
                    <div className="flex flex-col text-xs">
                      <h4 className="font-normal">{tr.name}</h4>
                      <p className="text-[9px] text-gray-500">
                        {new Date(tr.created_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`pr-4  text-[11px] text-green-400 flex items-center ${
                      tr.transaction_type === "EXP"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {tr.amount.toLocaleString()}
                  </span>
                </div>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Records;
