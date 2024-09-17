"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // const [activeTab, setActiveTab] = useState("INC");
  const [recordFormData, setRecordFormData] = useState({
    uid: "40cc8213-eae4-4edd-a2af-786296162da9",
    cid: "bb5ad933-ff87-43cc-8834-e120cfa557a0",
    name: "",
    amount: 0,
    transaction_type: "",
    // description: "",
  });

  const handleChangeForm = (e) => {
    setRecordFormData({ ...recordFormData, [e.target.name]: e.target.value });
  };

  const addRecordData = async () => {
    const newData = {
      ...recordFormData,
      transaction_type: activeTab,
    };

    console.log("new data", newData);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(`${apiUrl}/records`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        toast.success("Record amjilttai nemegdlee");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Record nemeh uyd aldaa garlaa");
    }
  };

  useEffect(() => {
    handleChangeForm();
    addRecordData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ recordFormData, handleChangeForm, addRecordData }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
