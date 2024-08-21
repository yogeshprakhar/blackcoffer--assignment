import React from "react";
import { Doughnut } from "react-chartjs-2";

const Regiochart = ({ data }) => {
  const regionCounts = {};
  data.forEach((item) => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
      },
    ],
  };
  return (
    <div  className="w-[100%] shadow-black shadow-2xl p-3 rounded-lg">
      <h1 className="text-2xl mb-4 font-bold">Region Distribution</h1>
      <Doughnut data={chartData} />
    </div>
  );
};

export default Regiochart;
