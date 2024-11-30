import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnurChart = () => {
  const [donutValue, setDonutValue] = useState(null);

  const getChartInfo = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      setDonutValue({ bar: res.data.bar, donut: res.data.donut });
    } catch (error) {
      console.error(error);
      // toast.error("Failed to fetch chartvalue");
    }
  };

  useEffect(() => {
    getChartInfo();
  }, []);

  const dnt = donutValue?.donut?.map((d) => d.sum);
  const lbl = donutValue?.donut?.map((d) => d.cat_name);

  const data2 = {
    datasets: [
      {
        data: dnt,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: lbl,
  };

  const options2 = {
    plugins: {
      legend: {
        position: "right",
      },
      colors: {
        forceOverride: true,
      },
    },
  };
  console.log("donutValue", donutValue);

  return (
    <div className="flex items-center justify-center p-4 bg-white card">
      <div className="w-[360px] max-h-[200px]">
        <div className="flex justify-between border-b-[1px] px-4">
          <p className="text-xs">Income-Expense </p>
          <p className="text-[10px] text-gray-600">Jun-1 Nov-30</p>
        </div>
        <Doughnut options={options2} data={data2} className="h-10" />
      </div>
    </div>
  );
};

export default DoughnurChart;
