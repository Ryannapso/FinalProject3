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

export function Charts() {
  const [tickets, SetTickets] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/tickets").then((response) => {
      SetTickets(response.data);
    });
  }, []);

  const statusList = () => {
    return [...new Set(tickets.map((item) => item.assignedTo))];
  };

  const assignedTo = statusList();

  // connt data.assignedTo.length = (tickets.assignedTo = "phone".length);

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

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  const data = {
    labels: assignedTo,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          (tickets.assignedTo = "phone".length),
          (tickets.assignedTo = "PC".length),
          (tickets.assignedTo = "cr".length),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: [10, 20, 30, 40, 50, 60],
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };
  return (
    <div style={{ width: "800px", margin: "auto auto" }}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Charts;
