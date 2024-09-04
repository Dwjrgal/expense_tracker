"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
// import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
import  {incomeFrame}  from "../components"
import { RxDotFilled } from "react-icons/rx";
import { FaArrowCircleUp } from "react-icons/fa";


const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/${user.id}`);
      setTransactionData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchTransactions();
    }
  }, [user.id]);

  return (
    <section>
      <div className="bg-slate-50 flex gap-2 pt-5 ">
        <img src="./img/Card.png" alt="" className="w-60 h-32" />
        <incomeFrame/>
        <div className="border rounded-lg w-60 flex flex-col justify-center pl-3 bg-white">
        <h4 className="border-b-[1px] border-gray-200 flex items-center gap-1 text-sm py-2 mb-2"><RxDotFilled className="text-xs text-green-500" /> Your income </h4>
        <h2 className="text-3xl font-semibold">1,200,000</h2>
        <p className="text-xs text-gray-500">Your Income Amount </p>
        <span className="flex items-center gap-1 mt-2"> <FaArrowCircleUp className="text-green-500 text-sm" />32% from last month</span>

    </div>
        {transactionData?.transactions?.map((transaction, index) => {
          return (
            <div key={index} className="flex">
              <img src="/income.svg" alt="income" />
              <div>
                <p className="mb-1">{transaction?.name}</p>
                <p className="text-[#6B7280]">{transaction?.createdat}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dashboard;
