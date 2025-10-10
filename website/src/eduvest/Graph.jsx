
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Graph = () => {
  const data = {
    labels: ["Current", "2030*", "2040*", "2050*"],
    datasets: [
      {
        label: "MBA",
        data: [405, 460, 470, 495],
        borderColor: "#FF6A00",
        backgroundColor: "#FF6A00",
        tension: 0.4,
      },
      {
        label: "BTech/Engg",
        data: [405, 445, 450, 460],
        borderColor: "#FFB366",
        backgroundColor: "#FFB366",
        tension: 0.4,
      },
      {
        label: "MBBS",
        data: [405, 430, 440, 445],
        borderColor: "#8B4513",
        backgroundColor: "#8B4513",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Success Prediction",
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 400,
        max: 500,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};


