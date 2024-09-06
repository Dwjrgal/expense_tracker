"use client";

import React from "react";
import { Header, LastRecords, Select } from "../../components";
import { PiPlusThin } from "react-icons/pi";
import { FaRegCircleDot } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Records = () => {
  return (
    <>
      <Header />
      <section className="flex gap-10 bg-slate-100">
        <section className="bg-white rounded flex flex-col gap-4 pt-4 px-4 mt-5 ml-12 w-90">
          <h3 className="text-2xl font-bold">Records</h3>
          <button className="h-8 bg-blue-600 rounded-xl text-white  flex justify-center items-center gap-2">
            {" "}
            <PiPlusThin className="text-white text-xl" /> Add
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-52 rounded pl-2 bg-slate-100 border"
          />
          <div className="flex flex-col gap-3">
            <h5 className="font-semibold">Types</h5>
            <ul className="text-md font-normal pl-5">
              <li className="flex gap-2 items-center">
                {" "}
                <FaRegCircleDot />
                All
              </li>
              <li className="flex gap-2 items-center">
                {" "}
                <FaRegCircleDot />
                Income
              </li>
              <li className="flex gap-2 items-center">
                {" "}
                <FaRegCircleDot />
                Expense
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <h5 className="font-semibold">Category</h5>
            <p className="text-gray-500">Clear</p>
          </div>
        </section>
        <section className="pt-5">
          <div className="flex justify-between gap-28">
            <h5 className="flex items-center gap-2 font-normal mb-5">
              {" "}
              <button className="w-6 h-5 bg-white text-xs pl-1 rounded-md">
                <SlArrowLeft className="font-bold" />
              </button>
              Last 30 Days{" "}
              <button className="w-6 h-5 bg-white text-xs pl-1 rounded-md">
                <SlArrowRight />
              </button>{" "}
            </h5>
            <Select />
          </div>
          <p className="font-semibold pb-3">Today</p>
          <div>
            <LastRecords />
          </div>
        </section>
      </section>
    </>
  );
};

export default Records;
