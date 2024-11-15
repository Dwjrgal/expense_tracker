"use client";

import { useContext } from "react";
import { RxDotFilled } from "react-icons/rx";
import { IoArrowUpCircleSharp, IoArrowDownCircleSharp } from "react-icons/io5";
import BarChart from "@/app/components/dashboard/BarChart";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import DoughnurChart from "@/app/components/dashboard/Doughnut";
import { DashboardContext } from "@/app/context/dashboard_context";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { transactions, cardValue } = useContext(DashboardContext);

  return (
    <section className="bg-slate-200 w-full min-h-screen pt-5 pb-20 flex justify-center px-4">
      <div className="flex gap-2 pt-5 flex-col max-w-[800px] w-full">
        <div className="flex flex-col md:flex-row gap-2">
          <img
            src="./img/Card.png"
            alt=""
            className="w-full md:w-[250px] h-36 object-cover"
          />
          <div className="border rounded-xl w-full md:w-[250px] h-36 flex flex-col justify-center pl-3 bg-white">
            <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
              <RxDotFilled className="text-sm text-green-500" /> Your income{" "}
            </h4>
            <h2 className="text-xl font-semibold">
              {cardValue?.income?.sum.toLocaleString()}
            </h2>
            <p className="text-[9px] text-gray-500 font-normal">
              Your Income Amount{" "}
            </p>
            <span className="flex items-center gap-1 mt-2 text-[10px] pb-3">
              {" "}
              <IoArrowUpCircleSharp className="text-green-500 text-sm" />
              32% from last month
            </span>
          </div>
          <div className="border rounded-xl w-full md:w-[250px] h-36 flex flex-col justify-center pl-4 bg-white">
            <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
              <RxDotFilled className="text-sm text-blue-700" />
              Total expenses{" "}
            </h4>
            <h2 className="text-xl font-semibold">
              -{cardValue?.expense?.sum.toLocaleString()}
            </h2>
            <p className="text-[9px] font-normal text-gray-500">
              Your Income Amount{" "}
            </p>
            <span className="flex items-center gap-1 mt-2 text-[10px] pb-3">
              {" "}
              <IoArrowDownCircleSharp className="text-blue-700 text-sm" />
              32% from last month
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <BarChart />
          </div>
          <div className="lg:w-1/2">
            <DoughnurChart />
          </div>
        </div>
        <div className="w-full">
          <section className="bg-white rounded pt-3">
            <h3 className="font-semibold pb-3 pl-4 text-sm">Last Records</h3>
            {transactions?.map((tr) => (
              <div
                key={tr.id}
                className="h-auto min-h-[40px] flex items-center justify-between border-solid border-t-[1px] border-gray gap-2 px-4 py-3"
              >
                <div className="flex gap-3 items-center">
                  <img className="h-6" src="./img/Home.png" alt="" />
                  <div className="flex flex-col text-xs">
                    <h4 className="font-normal">{tr.name}</h4>
                    <p className="text-[8px] text-gray-500">
                      {new Date(tr.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[11px] ${
                    tr.transaction_type === "EXP"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {tr.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
