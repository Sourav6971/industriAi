import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label), // Changed to use 'label'
    datasets: [
      {
        data: data.map((item) => item.value), // Using 'value'
        backgroundColor: data.map((item) => item.color), // Using 'color'
        hoverBackgroundColor: data.map((item) => item.color), // Using 'color'
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
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
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
