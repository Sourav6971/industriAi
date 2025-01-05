import React from "react";

const ImpactCard = ({ title, value, color, icon }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color}`}>
      <div className="text-5xl">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 mt-4">{title}</h2>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default ImpactCard;
