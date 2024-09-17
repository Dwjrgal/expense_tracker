"use client";

import React, { useContext, useEffect, useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoEye } from "react-icons/io5";
import { GrEmptyCircle } from "react-icons/gr";
import RecordModal from "@/app/components/record-modal";
import { CategoryModal } from "@/app/components";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/app/utils/util";
import { DashboardContext } from "@/app/context/dashboard_context";

const Records = ({ children }) => {
  const { recordFormData } = useContext(DashboardContext);
  const [categoryName, setCategoryName] = useState([]);
  const [categories, setCategories] = useState(null);

  const getCategories = async (req, res) => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);

      console.log("categories", res.data);
      setCategories(res.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories", error);
    }
  };

  const addCategory = async (req, res) => {
    try {
      const res = await axios.post(
        `${apiUrl}/categories`,
        {
          name: categoryName,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      console.log("success add category");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCategories();
    addCategory();
  }, []);
  console.log("categories", categories);

  return (
    <>
      <section className="flex justify-center gap-5 bg-slate-100  w-full h-full">
        <section className="bg-white rounded flex flex-col gap-4 pt-4 px-4 mt-5 ml-12 w-[180px]">
          <h3 className="text-sm font-bold">Records</h3>
          <input
            type="text"
            placeholder="Search"
            className="rounded pl-2 bg-slate-100 border text-xs"
          />
          <RecordModal categories={categories} />
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
          <div className="flex flex-col gap-1">
            {categories?.map((ct) => (
              <div className="flex gap-3 items-center font-normal text-gray-700 ml-2 text-[11px]">
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
        <section className="pt-5 w-[600px]">
          <div className="flex justify-between gap-28">
            <h5 className="flex items-center gap-2 md:font-semibold md:mb-5 mb-3 text-xs md:text-sm">
              {" "}
              <button className="w-4 h-4 bg-slate-200 text-[8px] pl-1 rounded-md">
                <SlArrowLeft className="font-bold" />
              </button>
              <p className="text-xs font-normal">Last 30 Days</p>
              <button className="w-4 h-4 bg-slate-200 text-[8px] pl-1 rounded-md">
                <SlArrowRight />
              </button>{" "}
            </h5>
          </div>
          <p className="font-semibold pb-3 text-sm">Today</p>
          <section className="bg-white rounded  pt-3">
            <div className="flex items-center justify-between border-solid rounded-lg h-8 border-gray gap-2 pt-4 pb-4 ml-4">
              {recordFormData?.map((rf) => (
                <div className="flex gap-3">
                  <img className="h-6" src="./img/Home.png"></img>
                  <div className="flex flex-col text-xs">
                    <h4 className="font-normal">{rf.name}</h4>
                    <p className="text-[9px] text-gray-500">14:00</p>
                  </div>
                </div>
              ))}

              <span className="text-green-400 pr-4 text-sm"></span>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Records;
