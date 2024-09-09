"use client";

import React from "react";
import { Select } from "../../components";
import { PiPlusThin } from "react-icons/pi";
import { FaRegCircleDot } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoEye } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { GrEmptyCircle } from "react-icons/gr";

const Records = () => {
  return (
    <>
      <section className="flex gap-10 bg-slate-100 px-20">
        <section className="bg-white rounded flex flex-col gap-4 pt-4 px-4 mt-5 ml-12 w-[300px]">
          <h3 className="text-2xl font-bold">Records</h3>
          <button className="h-8 bg-blue-600 rounded-xl text-white  flex justify-center items-center gap-2">
            {" "}
            <PiPlusThin className="text-white text-xl" /> Add
          </button>
          <input
            type="text"
            placeholder="Search"
            className="rounded pl-2 bg-slate-100 border"
          />
          <div className="flex flex-col gap-3 text-gray-700">
            <h5 className="font-semibold">Types</h5>
            <ul className="text-md font-normal pl-5">
              <li className="flex gap-2 items-center">
                {" "}
                <label className="swap">
  <input type="checkbox" />
  <FaRegCircleDot className="swap-on">ON</FaRegCircleDot>
  <GrEmptyCircle  className="swap-off">OFF</GrEmptyCircle>
</label>
              
                All
              </li>
            
              <li className="flex gap-2 items-center">
              <label className="swap">
  <input type="checkbox" />
  <FaRegCircleDot className="swap-on">ON</FaRegCircleDot>
  <GrEmptyCircle  className="swap-off">OFF</GrEmptyCircle>
</label>
                Income
              </li>
              <li className="flex gap-2 items-center">
              <label className="swap">
  <input type="checkbox" />
  <FaRegCircleDot className="swap-on">ON</FaRegCircleDot>
  <GrEmptyCircle  className="swap-off">OFF</GrEmptyCircle>
</label>
                Expense
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <h5 className="font-semibold">Category</h5>
            <p className="text-gray-500">Clear</p>
          </div>
          <div className="flex gap-3 items-center font-normal text-gray-700 ml-5">
          <IoEye /> <h4>Food & Drink</h4>
          </div>
          <button className="flex gap-3 items-center ml-5 text-semibold text-gray-700"><FaPlus className="text-blue-600 text-lg"/>Add Category</button>
        </section>
        <section className="pt-5 w-[600px]">
          <div className="flex justify-between gap-28">
            <h5 className="flex items-center gap-2 md:font-semibold md:mb-5 mb-3 text-xs md:text-sm">
              {" "}
              <button className="w-6 h-5 bg-slate-300 text-xs pl-1 rounded-md">
                <SlArrowLeft className="font-bold" />
              </button>
              Last 30 Days{" "}
              <button className="w-6 h-5 bg-slate-300 text-xs pl-1 rounded-md">
                <SlArrowRight />
              </button>{" "}
            </h5>
            <Select/>
          </div>
          <p className="font-semibold pb-3">Today</p>
          <section className="bg-white rounded  pt-3">
            <h3 className="font-semibold pb-4 pl-4 text-sm">Last Records</h3>
              <div className="flex items-center justify-between border-solid border-t-2 border-gray gap-2 pt-4 pb-4 ml-4">
                <div className="flex gap-3">
                  <img className="h-6" src="./img/Home.png"></img>
                  <div className="flex flex-col text-xs">
                    <h4 className="font-normal">Lending& Renting</h4>
                    <p className="text-xs text-gray-500">14:00</p>
                  </div>
                </div>
                <span className="text-green-400 pr-4 text-sm"></span>
              </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Records;
