import React from "react";
import { motion } from "framer-motion";
import video from "../assets/video.mov"; // Imported video
import ChatBot from "./ChatBot";

const Home = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen w-screen relative">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-50">
        <video
          src={video} // Using the imported video file
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="fixed bottom-0 left-0 z-10">
        <ChatBot />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-evenly space-y-10 p-6">
        {/* Title and Description */}
        <motion.h1
          className="text-white text-4xl font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.5 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to GreenSphere
        </motion.h1>
        <motion.p
          className="text-white text-lg max-w-lg text-center text-pretty"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.5 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          The most insightful way for private financial institutions to manage
          their ESG data and performance.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.5 }}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          onClick={() => {
            document
              .getElementById("learn-more-section")
              .scrollIntoView({ behavior: "smooth" }); // Smooth scroll effect
          }}
        >
          Learn More
        </motion.button>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="p-6 rounded-lg shadow-2xl flex flex-col items-center"
          >
            <img
              src="https://media.licdn.com/dms/image/D4E12AQGy37HjMQ8IMA/article-cover_image-shrink_720_1280/0/1716369980982?e=2147483647&v=beta&t=BcFiatZunLJGIx7XjFG-WLWAmkyqFJk0302w_VCM3Uc"
              alt="Feature Image 1"
              className="w-40 h-40 object-cover rounded-full text-white mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Why GreenInvest AI?
            </h3>
            <p className="text-center text-white">
              As the world moves towards sustainability, the challenge lies in
              identifying and prioritizing projects that deliver the greatest
              ESG benefits. Our platform bridges this gap with AI-driven
              solutions, enabling smarter resource allocation and fostering
              impactful investments.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="p-6 rounded-lg shadow-2xl flex flex-col items-center"
          >
            <img
              src="https://www.kisem.co.kr/wp-content/uploads/2024/06/esg%EB%8F%84%ED%91%9C.png"
              alt="Feature Image 2"
              className="w-40 h-40 object-cover rounded-full text-white mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Smart Investment Optimization
            </h3>
            <p className="text-center text-white">
              Apply linear and mixed-integer programming to prioritize
              high-impact projects. Balance portfolios with diversification
              strategies while managing risks.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="p-6 rounded-lg shadow-2xl flex flex-col items-center"
          >
            <img
              src="https://img.freepik.com/premium-vector/esg-environmental-social-governance-infographics-template-diagram-with-big-circle-joined-shape-3-point-step-creative-design-slide-presentation-vector_65709-811.jpg"
              alt="Feature Image 3"
              className="w-40 h-40 object-cover rounded-full text-white mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Future Risk Prediction
            </h3>
            <p className="text-center text-white">
              Leverage AI models to forecast and mitigate potential risks
              associated with green investments.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="p-6 rounded-lg shadow-2xl flex flex-col items-center"
          >
            <img
              src="https://as1.ftcdn.net/v2/jpg/05/92/36/22/1000_F_592362261_gcRHs2iOeLJNWSU7VG6HVFO8fDW5Gucl.jpg"
              alt="Feature Image 4"
              className="w-40 h-40 object-cover rounded-full text-white mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Stakeholder Dashboard
            </h3>
            <p className="text-center text-white">
              Visualize project rankings, ROI, and ESG scores. Perform scenario
              analysis to explore different investment strategies.
            </p>
          </motion.div>
        </div>

        {/* Learn More Section */}

        <div
          id="learn-more-section"
          className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6"
        >
          <h2 className="text-3xl font-bold mb-4">Welcome to GreenInvest AI</h2>
          <p className="max-w-2xl text-center text-lg mb-6">
            Your gateway to smarter, impactful green finance investments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-2xl bg-green-800">
              <h3 className="text-xl font-semibold mb-2">
                Why Choose GreenInvest AI?
              </h3>
              <p>
                Green finance is key to achieving sustainability goals, but
                identifying high-impact projects can be complex. Our platform
                simplifies this process, ensuring your investments align with
                environmental, social, and governance (ESG) priorities while
                maximizing returns.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-2xl bg-blue-800">
              <h3 className="text-xl font-semibold mb-2">
                Data-Driven Project Scoring
              </h3>
              <p>
                Aggregate and analyze ESG data from reliable sources. Use AI and
                Natural Language Processing (NLP) to extract insights from
                reports and metrics.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-2xl bg-yellow-800">
              <h3 className="text-xl font-semibold mb-2">
                Smart Investment Optimization
              </h3>
              <p>
                Apply linear and mixed-integer programming to prioritize
                high-impact projects. Balance portfolios with diversification
                strategies while managing risks.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-2xl bg-purple-800">
              <h3 className="text-xl font-semibold mb-2">
                Future Risk Prediction
              </h3>
              <p>
                Leverage AI models to forecast and mitigate potential risks
                associated with green investments.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-2xl bg-red-800">
              <h3 className="text-xl font-semibold mb-2">
                Interactive Stakeholder Dashboard
              </h3>
              <p>
                Visualize project rankings, ROI, and ESG scores. Perform
                scenario analysis to explore different investment strategies.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-2xl bg-pink-800">
              <h3 className="text-xl font-semibold mb-2">
                Empower your organization to lead in green finance. GreenInvest
                AI transforms your investment decisions into actionable steps
                for a more sustainable future.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
