// "use client";

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const DashboardContext = createContext();

// export const DashboardProvider = ({ children }) => 
//     {
//         const [chartValue, setChartValue] = useState(null);

//         const getChartData = async () => {
//             try {
//               const res = await axios.get(`http://localhost:8008/records/chart`);
//               setChartValue({ bar: res.data.bar, donut: res.data.donut });
//             } catch (error) {
//               console.error(error);
//               // toast.error("Failed to fetch chartvalue");
//             }
//           };
        
//           useEffect(() => {
//             getChartData();
//           }, []);
//   return (
//     <DashboardContext.Provider
//       value={{ bar: chartValue.bar, donut: chartValue.donut }}
//     >
//       {children}
//     </DashboardContext.Provider>
//   );
// };