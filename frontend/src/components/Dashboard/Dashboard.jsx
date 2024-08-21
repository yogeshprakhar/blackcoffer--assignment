import { useState, useEffect } from "react";
import axios from "axios";
import Intensitychart from "./Intensitychart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import Countrychart from "./Countrychart";
import Regiochart from "./Regiochart";
import Topicchart from "./Topicchart";
import Relevancechart from "./Relevancechart";
import Sectorchart from "./Sectorchart";
import Liklehoodchart from "./Liklehoodchart";

const API_URL = "https://blackcoffer-assignment-lpq9.onrender.com";
Chart.register(CategoryScale);
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("data from api", data);
  return (
    <div className="w-[95%]">
      <h2 className="text-5xl font-bold font-serif mb-4">Dashboard</h2>
      <div className="flex flex-col gap-16">
        <Intensitychart data={data} />
        <Countrychart data={data} />
        <div style={{ height: "780px" }} className="flex flex-row gap-2">
          <Sectorchart data={data} />
          <Liklehoodchart data={data} />
        </div>
        <Relevancechart data={data} />
        <div className="flex flex-row gap-4 mb-10">
          <Regiochart data={data} />
          <Topicchart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
