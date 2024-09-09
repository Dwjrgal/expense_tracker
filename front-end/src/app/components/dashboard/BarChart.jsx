import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { RxBorderWidth } from "react-icons/rx";

const BarChart = ({ cardValue, recDate }) => {
  const data1 = {
    labels: [
      "   Jan         Feb         March         April      May        June       ",
    ],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [cardValue?.income?.sum],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [cardValue?.expense?.sum],
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

  return (
    <div className="flex items-center justify-center p-4 bg-white card  h-60 w-[460px]">
      {/* {barChartData && <Bar data={data1} options={options1} />} */}
      <Bar data={data1} options={options1} />
      {/* {!barChartData && (
        <div className="flex items-end justify-center w-full gap-4 ">
          <div className="w-4 skeleton h-14"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 skeleton h-14"></div>
        </div>
      )} */}
    </div>
  );
};

export default BarChart;
