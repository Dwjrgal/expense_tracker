"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
// import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
import { ExpenseFrame, IncomeFrame, LastRecords } from "../components";
import ChartDesign from "../components/chart";

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
    <section className="bg-slate-200 w-full h-full px-12">
      <div className=" flex  gap-5 pt-5 flex-col">
        <div className="flex gap-5">
          <img src="./img/Card.png" alt="" className="w-72 h-36" />
          <IncomeFrame />
          <ExpenseFrame />
          {/* <ChartDesign /> */}
        </div>
        <div>
          <LastRecords />
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
