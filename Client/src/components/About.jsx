import React from "react";
import { motion } from "framer-motion";
import { FaRegHeart, FaHandshake, FaRegLightbulb } from "react-icons/fa"; // React Icons

const About = () => {
  // Split the paragraph text into an array of words
  const paragraphText =
    "Since 2024, GreenSphere Inc. has been helping women, young and old, " +
    "create the lives they want to live through events, girl talk, books, " +
    "videos, and more that support and empower them to follow their " +
    "dreams. We help them embark on a journey of finding their true selves by " +
    "organizing events that discuss women’s issues with the help of women " +
    "who share their experiences. Our events are a mix of girl talk and " +
    "fun. There are also signature events that happen every year such as " +
    "#UnWined, Heels Class for a Cure, and #EmpowerYourself.";
  const words = paragraphText.split(" ");

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-green-600 p-10 text-center rounded-lg shadow-md border-2 border-gray-400">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white"
        >
          Welcome to GreenSphere Inc.
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-white mt-4"
        >
          A platform which enhances your sustainability without compromising the
          quality
        </motion.p>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-3 ">
        {/* Side Section */}
        <div className="bg-green-500 flex items-center justify-center p-10 rounded-lg shadow-md border-2 border-gray-400">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white transform rotate-[-90deg]"
          >
            About us
          </motion.h2>
        </div>

        {/* Content Section */}
        <div className="mt-6 px-5 text-black">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="inline-block mr-2" // Added margin-right for spacing
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className=" px-3 h-80 w-80">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCzi3tHjgH13AaLEYQCjBgU5_t4-CnSap4A&s"
            alt="Image description"
            className="w-full h-auto" // You can adjust the classes as per your layout
          />
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="bg-green-600 p-10 text-center text-white rounded-lg shadow-md border-2 border-gray-400"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg">
          Our goal is to encourage and motivate the everyday woman by giving her
          the tools to overcome everyday challenges and meet women who have
          faced and overcome the same challenges. By helping one another, women
          can transform not only our peers but the world.
        </p>

        {/* Icons Section */}
        <div className="mt-6 flex justify-around text-4xl">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaRegHeart className="text-red-500 hover:text-red-700 transition duration-300" />
            <p className="mt-2 text-white">Empowerment</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaHandshake className="text-blue-500 hover:text-blue-700 transition duration-300" />
            <p className="mt-2 text-white">Community</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaRegLightbulb className="text-yellow-500 hover:text-yellow-700 transition duration-300" />
            <p className="mt-2 text-white">Inspiration</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
