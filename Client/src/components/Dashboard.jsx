import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import ImpactCard from "./ImpactCard";
import ChartSection from "./ChartSection";

const Dashboard = () => {
  const impacts = [
    {
      title: "Environment Impact",
      value: 80,
      color: "bg-green-100",
      icon: "🌱",
    },
    { title: "Social Impact", value: 70, color: "bg-blue-100", icon: "🌍" },
    {
      title: "Government Impact",
      value: 72,
      color: "bg-yellow-100",
      icon: "🏛️",
    },
    { title: "Total Impact", value: 74, color: "bg-red-100", icon: "🚀" },
  ];

  // Animation variants for impact cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Stagger the cards
        duration: 0.5,
        type: "spring",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex-1 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Header />
      </motion.div>

      {/* Impact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <ImpactCard {...impact} />
          </motion.div>
        ))}
      </div>

      {/* Animated Chart Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
      >
        <ChartSection />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
