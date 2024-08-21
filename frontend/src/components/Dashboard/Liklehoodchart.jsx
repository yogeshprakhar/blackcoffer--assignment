import React from "react";
import { Radar } from "react-chartjs-2";

const Liklehoodchart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((entry) => entry.likelihood),
        backgroundColor: "rgba(79, 59, 169, 0.7)",
        borderColor: "rgba(79, 59, 169, 1)",
        borderWidth: 2,
        pointBackgroundColor: "black",
        pointBorderColor: "rgba(79, 59, 169, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };
  return (
    <div className="w-[100%] shadow-black shadow-2xl p-3 rounded-lg">
      <h1 className="text-2xl mb-4 font-bold">Liklehood Chart</h1>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Liklehoodchart;
