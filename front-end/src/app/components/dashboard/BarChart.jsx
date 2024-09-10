import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { RxBorderWidth } from "react-icons/rx";

const BarChart = ({}) => {
  const [chartValue, setChartValue] = useState([])

  const getChartInf = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/chart`);
      setChartValue(res.data);
      console.log ("chart data",setChartValue)
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chartvalue")
    }
  };

  useEffect(()=>{
    getChartInf();
  }, [])



  const data1 = {
    labels: [
      "   Jan         Feb         March         April      May        June       ",
    ],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [],
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
  console.log ("ChartValue",chartValue)
  return (
    <div className="flex items-center justify-center p-4 bg-white card w-[360px]">
      <div className="flex justify-start w-[360px] border-b-[1px] px-4 pb-2">
        <p className="text-[10px]">Income-Expense</p>
      </div>
      {chartValue.map((cValue) => {
        data1.labels=[cValue.month]
        datasets.data=[cValue.total_exp]

      })}
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
