"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
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
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [cardValue, setCardValue] = useState({});
  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  const getCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/value`);
      console.log("ST", res.data);
      setCardValue(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    fetchTransactions();
    getCardData();
  }, [user]);

  console.log("trasactions", transactions);
  return (
    <section className="bg-slate-200 w-full h-full px-10 flex justify-center">
      <div className=" flex  gap-2 pt-5 flex-col">
        <div className="flex gap-2">
          <img src="./img/Card.png" alt="" className="w-[250px] h-36" />
          <div className="border rounded-xl w-[250px] h-36 flex flex-col justify-center pl-3 bg-white">
            <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
              <RxDotFilled className="text-sm text-green-500" /> Your income{" "}
            </h4>
            <h2 className="text-xl font-semibold">{cardValue?.income?.sum}</h2>
            <p className="text-[9px] text-gray-500 font-normal">
              Your Income Amount{" "}
            </p>
            <span className="flex items-center gap-1 mt-2 text-[10px] pb-3">
              {" "}
              <IoArrowUpCircleSharp className="text-green-500 text-sm" />
              32% from last month
            </span>
          </div>
          <div className="border rounded-xl w-[250px] h-36 flex flex-col justify-center pl-4 bg-white">
            <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
              <RxDotFilled className="text-sm text-blue-700" />
              Total expenses{" "}
            </h4>
            <h2 className="text-xl font-semibold">
              -{cardValue?.expense?.sum}
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
        <div className="flex gap-3">
          <BarChart />
          <DoughnurChart />
        </div>
        <div>
          <section className="bg-white rounded pt-3">
            <h3 className="font-semibold pb-3 pl-4 text-sm">Last Records</h3>
            {transactions.map((tr) => (
              <div className=" h-10 flex items-center justify-between border-solid border-t-[1px] border-gray gap-2 ml-5 pt-3 mb-3">
                <div className="flex gap-3">
                  <img className="h-6" src="./img/Home.png"></img>
                  <div className="flex flex-col text-xs">
                    <h4 className="font-normal">{tr.name}</h4>
                    <p className="text-[8px] text-gray-500">{tr.created_at}</p>
                  </div>
                </div>
                <span
                  className={`pr-4  text-[11px] text-green-400 ${
                    tr.transaction_type === "EXP"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {tr.amount}
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
