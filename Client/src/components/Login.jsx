import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const textLines = isLogin
    ? [
        "Welcome back!",
        "We're securely logging you in and getting everything ready for your journey toward smarter ESG management.",
        "Experience the perfect blend of innovation and practicality as we empower businesses.",
      ]
    : [
        "Join GreenSphere Today!",
        "Transform the way you handle sensitive data with our innovative solutions.",
        "Empowering businesses to achieve more, together.",
      ];

  const handleLogin = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axios.post(
        "https://industri-ai-back-end.vercel.app/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Login Successful:", response.data);
      dispatch(addUser(response.data));
      navigate("/model");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed. Please try again.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const handleSignup = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axios.post(
        "https://industri-ai-back-end.vercel.app/signup",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Signup Successful:", response.data);
      dispatch(addUser(response.data));
      navigate("/model");
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup Failed. Please try again.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  // Animation variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.07 },
    }),
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login-text" : "signup-text"}
          className="flex-1 bg-gradient-to-t from-green-600 to-white flex flex-col justify-center items-center text-black p-8"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {textLines.map((line, lineIndex) => (
            <motion.p
              key={lineIndex}
              className={`text-${
                lineIndex === 0
                  ? "5xl font-bold mb-4"
                  : "lg text-center max-w-md"
              }`}
            >
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  custom={wordIndex}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-b from-green-400 to-white flex justify-center items-center p-8">
        <motion.div
          className="w-96 h-5/6 shadow-gray-500 bg-green-600 to-white p-8 rounded-lg shadow-xl relative"
          initial={false}
          animate="visible"
          exit="exit"
          style={{ transformStyle: "preserve-3d" }}
        >
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute w-full "
                style={{ backfaceVisibility: "hidden" }}
              >
                <h2 className="text-2xl mr-20 font-bold mt-3 text-white mb-5 text-center">
                  User Login
                </h2>
                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-4 items-center">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-80 px-5 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="mb-4 mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-80 px-4 py-2  border border-gray-300 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Loader */}
                  {loading && (
                    <div className="flex justify-center items-center mt-4">
                      <div className="loader border-t-4 border-white border-solid rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                  )}

                  {/* Login Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                    className={`w-80 bg-white text-green-500 py-2 rounded-lg font-semibold ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Login
                  </motion.button>
                </form>
                <div
                  className="text-md text-center mt-8 font-semibold text-white hover:underline cursor-pointer mr-16"
                  onClick={() => setIsLogin(false)}
                >
                  Don't have an account? Sign Up
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute w-full h-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h2 className="text-2xl font-bold mr-20 text-white mb-6 text-center">
                  Sign Up
                </h2>
                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-80 px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Create a password"
                      className="w-80 px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Loader */}
                  {loading && (
                    <div className="flex justify-center items-center mt-4">
                      <div className="loader border-t-4 border-white border-solid rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                  )}

                  {/* Sign Up Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                    className="w-80 bg-white mt-3 text-green-500 py-2 rounded-lg font-semibold"
                  >
                    Sign Up
                  </motion.button>
                </form>
                <div
                  className="text-md text-center mt-8 font-semibold text-white hover:underline cursor-pointer mr-16"
                  onClick={() => setIsLogin(true)}
                >
                  Already have an account? Login
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
