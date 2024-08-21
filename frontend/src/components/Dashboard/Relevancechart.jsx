import React from "react";
import { Line } from "react-chartjs-2";

const Relevancechart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Relevance",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5,
        })),
      },
      {
        label: "Intensity",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        })),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Likelihood",
        },
      },
      y: {
        title: {
          display: true,
          text: "Impact",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  return (
    <div  className="w-[100%] shadow-black shadow-2xl p-3 rounded-lg">
      <h2 className="text-2xl mb-4 font-bold">Relevance Chart</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Relevancechart;
