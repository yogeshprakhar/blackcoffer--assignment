import React from "react";
import { PolarArea } from "react-chartjs-2";

const Topicchart = ({ data }) => {
  const topics = data.map((item) => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map((item) => item.relevance),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };
  return (
    <div className="w-[100%] shadow-black shadow-2xl p-3 rounded-lg">
      <h2 className="text-2xl mb-4 font-bold">Topic Chart</h2>
      <PolarArea data={chartData} options={chartOptions} />
    </div>
  );
};

export default Topicchart;
