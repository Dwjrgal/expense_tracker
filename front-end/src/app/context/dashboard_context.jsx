"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";
import { UserContext } from "./user-context";
import { toast } from "react-toastify";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState(null);

  const [cardValue, setCardValue] = useState({});

  const handleClose = () => {
    setIsOpen(false);
  };

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
      console.log("success", res);
      toast.success("Added category successfully");
    } catch (error) {
      console.log("error", error);
      toast.error("Failed to add category");
    }
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      setTransactions(res.data.records);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
      console.log("error", error);
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

  return (
    <DashboardContext.Provider
      value={{
        transactions,
        fetchTransactions,
        categories,
        cardValue,
        addCategory,
        categoryName,
        setCategoryName,
        handleClose,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
