"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("INC");
  const [recordFormData, setRecordFormData] = useState({
    name: "",
    amount: 0,
    cid: "",
    uid: "",
    // transaction_type: "EXP",
    description: "",
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
      toast.error("Record nemeh uyd aldaa garlaa");
    }
  };
  return (
    <DashboardContext.Provider
      value={{ recordFormData, handleChangeForm, addRecordData, activeTab }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
