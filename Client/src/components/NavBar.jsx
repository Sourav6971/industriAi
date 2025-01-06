import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { removeUser } from "../utils/userSlice.js";
import axios from "axios";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.user);
  console.log("redux token", token);
  const handleLogOut = async () => {
    try {
      await axios.post(
        "https://industri-ai-back-end.vercel.app/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      return navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex w-screen justify-between items-center px-6 py-3 bg-gradient-to-b from-green-200 to-white shadow-md">
        <h1 className="text-5xl mx-3 font-bold text-green-900">GreenSphere</h1>
        <ul className="flex space-x-7 text-gray-600">
          <li
            className="cursor-pointer text-black font-semibold text-lg hover:text-green-800"
            onClick={() => navigate("/")} // Navigate to the home page
          >
            Home
          </li>
          {!token && (
            <li
              className="cursor-pointer text-black font-semibold text-lg hover:text-green-800"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
          )}
          {token && (
            <li
              className="cursor-pointer text-black font-semibold text-lg hover:text-green-800"
              onClick={handleLogOut}
            >
              Logout
            </li>
          )}
          {token && (
            <li
              className="cursor-pointer text-black font-semibold text-lg hover:text-green-800"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </li>
          )}

          <li
            className="cursor-pointer text-black font-semibold text-lg hover:text-green-800"
            onClick={() => navigate("/about")}
          >
            About Us
          </li>
        </ul>
        <div className="flex space-x-4 pr-8 text-gray-600">
          {/* Mail Icon with Framer Motion Slide Animation */}
          <motion.a
            href="mailto:your-email@example.com" // Replace with your actual email
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              y: ["0px", "-20px", "0px"], // Slide up and down
            }}
            transition={{
              duration: 1.2,
              // No repeat: animation will only run once
            }}
          >
            <HiOutlineMail className="cursor-pointer text-3xl text-black hover:text-gray-800" />
          </motion.a>

          {/* Instagram Icon with Framer Motion Slide Animation */}
          <motion.div
            animate={{
              y: ["0px", "-20px", "0px"], // Slide up and down
            }}
            transition={{
              duration: 1.7,
              // No repeat: animation will only run once
            }}
          >
            <FaInstagram className="cursor-pointer text-3xl text-black hover:text-gray-800" />
          </motion.div>

          {/* GitHub Icon with Framer Motion Slide Animation */}
          <motion.a
            href="https://github.com/your-username" // Replace with your actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              y: ["0px", "-20px", "0px"], // Slide up and down
            }}
            transition={{
              duration: 2.1,
              // No repeat: animation will only run once
            }}
          >
            <FaGithub className="cursor-pointer text-black text-3xl hover:text-gray-800" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
