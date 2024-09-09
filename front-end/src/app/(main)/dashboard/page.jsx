"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
// import { apiUrl } from "../../utils/util";
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
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [cardValue, setCardValue] = useState({});

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:8008/records/");
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  const getCardData = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/value`);
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

  console.log("Card data", cardValue);
  console.log(cardValue.income);
  return (
    <section className="bg-slate-200 w-full h-full px-12 flex justify-center">
      <div className=" flex  gap-5 pt-5 flex-col">
        <div className="flex gap-6">
          <img src="./img/Card.png" alt="" className="w-[310px] h-36" />
          <div className="border rounded-xl w-[300px] flex flex-col justify-center pl-3 bg-white">
            <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
              <RxDotFilled className="text-lg text-green-500" /> Your income{" "}
            </h4>
            <h2 className="text-2xl font-semibold">{cardValue?.income?.sum}</h2>
            <p className="text-[12px] text-gray-500 font-normal">
              Your Income Amount{" "}
            </p>
            <span className="flex items-center gap-1 mt-2 text-xs pb-3">
              {" "}
              <IoArrowUpCircleSharp className="text-green-500 text-sm" />
              32% from last month
            </span>
          </div>
          <div className="border rounded-xl w-[300px] flex flex-col justify-center pl-4 bg-white">
            <h4 className="border-b-[1px] border-gray-200 flex items-center gap-[1px] text-sm py-2 mb-2">
              <RxDotFilled className="text-lg text-blue-700" />
              Total expenses{" "}
            </h4>
            <h2 className="text-2xl font-semibold">
              -{cardValue?.expense?.sum}
            </h2>
            <p className="text-[12px] font-normal text-gray-500">
              Your Income Amount{" "}
            </p>
            <span className="flex items-center gap-1 mt-2 text-xs pb-3">
              {" "}
              <IoArrowDownCircleSharp className="text-blue-700 text-sm" />
              32% from last month
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <BarChart cardValue={cardValue} />
          <DoughnurChart fetchTransactions={fetchTransactions} />
        </div>
        <div>
          <section className="bg-white rounded  pt-3">
            <h3 className="font-semibold pb-4 pl-4 text-sm">Last Records</h3>
            {transactions.map((tr) => (
              <div className="flex items-center justify-between border-solid border-t-2 border-gray gap-2 pt-4 pb-4 ml-4">
                <div className="flex gap-3">
                  <img className="h-6" src="./img/Home.png"></img>
                  <div className="flex flex-col text-xs">
                    <h4 className="font-normal">{tr.name}</h4>
                    <p className="text-xs text-gray-500">{tr.created_at}</p>
                  </div>
                </div>
                <span className="text-green-400 pr-4 text-sm">{tr.amount}</span>
              </div>
            ))}
          </section>
        </div>
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById(11).showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_3" className="modal w-[450px]">
            <div className="modal-box pl-8">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 py-4">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg pb-5">Add Records</h3>
             
              <div className="w-80"> 
              <div className="form-control">
  <label className="label cursor-pointer">
    <input type="checkbox" className="toggle toggle-accent w-80 h-12 border rounded-full" placeholder="Expense" defaultChecked/>
  </label>
</div>
<button className="join-item btn border rounded-full bg-blue-700 text-white">
                  Expense
                </button>
                <button className="join-item btn border rounded-full">
                  Income
                </button>
                
                <div className="flex flex-col mt-5 w-80">
                  <p className="font-semibold">Amount</p>
                  <input
                    type="text"
                    placeholder="$ 000"
                    className="input input-bordered w-full h-20 bg-slate-100"
                  />
                  <h4 className="font-semibold pt-3 pb-1 text-md">Category</h4>
                  <select className="select select-bordered w-full max-w-xs bg-slate-100 text-gray-400">
                    <option disabled selected>
                      Choose
                    </option>
                    <option>Food & Drinks</option>
                    <option>Shopping</option>
                    <option>Housing</option>
                  </select>
                  <div className="flex gap-4 mt-3">
                    <div>
                    <h4 className="font-semibold">Date</h4>
                  <select className="select select-bordered w-full max-w-xs bg-slate-100 mt-1">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
</div>
<div>
<h4 className="font-semibold">Time</h4>
<select className="select select-bordered w-full max-w-xs bg-slate-100 mt-1">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
</div>
                  </div>
                  <button className="bg-blue-600 text-white h-10 border rounded-full mt-5">Add Record </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
