import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Countrychart = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America"
  );
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const countryData = data.filter(
      (entry) => entry.country === selectedCountry
    );

    const sectors = {};
    countryData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = [];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities = sectorLabels.map((sector) => sectors[sector]);

    const chartBackgroundColor = "rgba(79, 59, 169, 0.7)";

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          label: "Intensity",
          data: sectorIntensities,
          backgroundColor: chartBackgroundColor,
        },
      ],
    });
  }, [selectedCountry, data]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        grid: {
          color: "gray.200",
        },
      },
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div
      className="shadow-black shadow-2xl p-3 rounded-lg"
    >
      <h1 className="text-2xl mb-4 font-bold">Country Chart</h1>
      <select className="rounded-lg p-1" value={selectedCountry} onChange={handleCountryChange}>
        <option value="Mexico">Mexico</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="United States of America">
          United States of America
        </option>
        <option value="Russia">Russia</option>
        <option value="Nigeria">Nigeria</option>
      </select>
      {chartData && (
        <div style={{height:"500px"}}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default Countrychart;
