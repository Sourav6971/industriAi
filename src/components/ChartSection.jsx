import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart"; // New BarChart component

const ChartSection = () => {
  const impacts = [
    { title: "Environment Impact", value: 80, color: "#A3E635", icon: "🌱" },
    { title: "Social Impact", value: 70, color: "#60A5FA", icon: "🌍" },
    { title: "Government Impact", value: 72, color: "#FACC15", icon: "🏛️" },
    { title: "My Impact", value: 74, color: "#FB7185", icon: "🚀" },
  ];

  const chartData = impacts.map((item) => ({
    label: item.title,
    value: item.value,
    color: item.color,
  }));

  return (
    <div className="flex  justify-between mt-8 gap-4">
      {/* Left Section: Pie Chart */}
      <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Impact Distribution
        </h2>
        <PieChart data={chartData} />
      </div>

      {/* Right Section: Bar Chart */}
      <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Category Colors
        </h2>
        <BarChart data={chartData} />
      </div>
    </div>
  );
};

export default ChartSection;
