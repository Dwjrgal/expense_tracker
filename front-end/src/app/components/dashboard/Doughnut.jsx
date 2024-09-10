import { Doughnut } from "react-chartjs-2";

const DoughnurChart = ({ categoryData }) => {
  const data2 = {
    datasets: [
      {
        data: [10, 10, 20, 40, 20],

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
    labels: ["Food", "Tech", "Taxi", "Health", "Car"],
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4  bg-white card">
      <div className="h-40 w-[360px]">
        <div className="flex justify-between border-b-[1px] px-4">
          <p className="text-xs">Income-Expense </p>
          <p className="text-[10px] text-gray-600">Jun-1 Nov-30</p>
        </div>
        <Doughnut options={options2} data={data2} className="h-10" />
        {/* {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="w-24 h-24 rounded-full skeleton"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DoughnurChart;
