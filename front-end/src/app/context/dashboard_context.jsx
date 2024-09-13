// "use client";

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const DashboardContext = createContext();

// export const DashboardProvider = ({ children }) => {
//   const { user } = useContext(UserContext);
//   const [transactions, setTransactions] = useState([]);
//   const [cardValue, setCardValue] = useState({});
//   const fetchTransactions = async () => {
//     try {
//       const res = await axios.get("http://localhost:8008/records");
//       setTransactions(res.data.records);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch transactions");
//     }
//   };

//   const getCardData = async () => {
//     try {
//       const res = await axios.get(`http://localhost:8008/records/value`);
//       console.log("ST", res.data);
//       setCardValue(res.data);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch transactions");
//     }
//   };
//   useEffect(() => {
//     fetchTransactions();
//     getCardData();
//   }, [user]);
//   return (
//     <DashboardContext.Provider
//       value={{ transactions, fetchTransactions, cardValue, getCardData }}
//     >
//       {children}
//     </DashboardContext.Provider>
//   );
// };
