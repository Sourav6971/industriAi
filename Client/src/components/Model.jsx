import React from "react";
import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import bgImage from "../assets/photo.jpg"; // Adjust the path to your image

const Model = () => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Uploaded file:", file);
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="w-screen h-screen mx-auto p-8 border-2 border-dashed border-green-500 bg-cover bg-center bg-no-repeat rounded-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center space-y-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <FiFileText className="mx-auto text-6xl text-green-600" />
          <h3 className="text-xl font-semibold">Upload Your PDF</h3>
          <p className="text-gray-700">
            Choose a PDF file or drag and drop it here.
          </p>
          <div>
            <label
              htmlFor="file-upload"
              className="cursor-pointer inline-block px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Only PDF files are allowed.
          </p>
        </motion.div>
        <div className="w-screen py-10">
          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md"
              variants={stepVariants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-green-600">
                Step 1: Upload Your PDF
              </h3>
              <p className="text-gray-700">
                Simply upload your PDF to get started.
              </p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md"
              variants={stepVariants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-green-600">
                Step 2: Analyze ESG Data
              </h3>
              <p className="text-gray-700">
                Our tool will extract and analyze ESG data from your document.
              </p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md"
              variants={stepVariants}
              transition={{ duration: 1.5 }}
            >
              <h3 className="text-lg font-semibold text-green-600">
                Step 3: Review Dashboard
              </h3>
              <p className="text-gray-700">
                View comprehensive ESG insights in seconds.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Model;
