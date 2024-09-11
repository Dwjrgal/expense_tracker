import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { RxBorderWidth } from "react-icons/rx";

const BarChart = ({}) => {
  const [chartValue, setChartValue] = useState(null);

  const getChartInf = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/chart`);
      setChartValue({ bar: res.data.bar, donut: res.data.donut });
    } catch (error) {
      console.error(error);
      // toast.error("Failed to fetch chartvalue");
    }
  };

  useEffect(() => {
    getChartInf();
  }, []);

  const lbl = chartValue?.bar?.map((c) => c.month);
  const inc = chartValue?.bar?.map((c) => c.total_inc);
  const exp = chartValue?.bar?.map((c) => c.total_exp);

  const data1 = {
    labels: lbl,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: inc,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: exp,
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  console.log("ChartValue", chartValue);
  return (
    <div className="flex items-center justify-center p-4 bg-white card w-[360px]">
      <div className="flex justify-start w-[360px] border-b-[1px] px-4 pb-2">
        <p className="text-[10px] font-semibold ">Income-Expense</p>
      </div>
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
