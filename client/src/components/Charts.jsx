import { useState, useEffect } from "react";
import Axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Charts(props) {
  const phoneCounter = props.chartData.filter((item) =>
    item.assignedTo.includes("Phone")
  );

  const PCCounter = props.chartData.filter((item) =>
    item.assignedTo.includes("PC")
  );
  const BuildPc = props.chartData.filter((item) =>
    item.assignedTo.includes("BuildPc")
  );

  console.log(PCCounter);

  const CRCounter = props.chartData.filter((item) =>
    item.assignedTo.includes("cr")
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: ["phone", "pc", "CR", "BuildPc"],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          phoneCounter.length,
          PCCounter.length,
          CRCounter.length,
          BuildPc.length,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log(data);
  return (
    <div style={{ width: "800px", margin: "auto auto" }}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Charts;
