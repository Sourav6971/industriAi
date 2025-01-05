import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBlog, FaLock, FaUser, FaArrowUp } from "react-icons/fa";

const Sidebar = () => {
  // Variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1, // Stagger effect
      },
    }),
    hover: {
      scale: 1.1,
      color: "#16a34a", // Green color on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="w-64 bg-white p-6 shadow-md flex flex-col justify-between"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
    >
      <div>
        {/* Animated Logo */}
        <motion.div
          className="text-2xl font-bold text-green-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ESG Folio
        </motion.div>

        {/* Animated Menu Items */}
        <ul className="space-y-4">
          {[
            { icon: <FaHome />, label: "Dashboard" },
            { icon: <FaBlog />, label: "Blog" },
            { icon: <FaLock />, label: "Login" },
            { icon: <FaUser />, label: "Register" },
          ].map((item, index) => (
            <motion.li
              key={item.label}
              className="flex items-center gap-3 text-gray-700 cursor-pointer"
              variants={menuItemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {item.icon} {item.label}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Animated Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="bg-green-600 text-white px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2 hover:bg-green-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp /> Upgrade To Pro
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
