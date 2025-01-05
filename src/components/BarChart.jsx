import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required elements
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label), // Updated to use 'label' instead of 'title'
    datasets: [
      {
        label: "Impact Values",
        data: data.map((item) => item.value), // Using 'value' for actual bar heights
        backgroundColor: data.map((item) => item.color), // Using 'color' for bar colors
        hoverBackgroundColor: data.map((item) => item.color),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for simplicity
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw.toLocaleString("en-US", {
              minimumFractionDigits: 0,
            });
            const percentage = (
              (tooltipItem.raw /
                data.reduce((acc, item) => acc + item.value, 0)) *
              100
            ).toFixed(2);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove gridlines for a cleaner look
        },
        ticks: {
          color: "#333", // Customize tick label color
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "#e0e0e0", // Light gridlines
        },
        ticks: {
          beginAtZero: true,
          stepSize: 20, // Customize step size for better readability
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md  my-28 mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
