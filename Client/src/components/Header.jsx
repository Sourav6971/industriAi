import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Hi, Welcome to Your Impactful Portfolio
      </h1>
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" // Replace this URL with your photo URL
          alt="Profile"
          className="w-10 h-10 rounded-full" // Add styling for the circular image
        />
      </div>
    </div>
  );
};

export default Header;
