import React from "react";
import { motion } from "framer-motion";
import Img from "../assets/savan.png";
import CV from "../assets/My_CV_SavanUnagar.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen mt-10 md:mt-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-gray-900 dark:via-black dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl mt-10 sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Hi, I’m{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Frontend Developer
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            I’m a frontend developer who loves building fast, responsive, and
            user-friendly websites.My focus is always on delivering clean, maintainable
            code and a smooth user interface.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all"
            >
              View Projects
            </a>
            {/* Download CV Button */}
            <a
              href={CV}
              download="Savan-Unagar-CV.pdf"
              className="md:px-6 md:py-3 p-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-700 transition-all pointer-coarse"
            >
              Download My CV
            </a>
          </div>
        </motion.div>

        {/* Right Side Image/Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[400px] max-w-[350px] mx-auto"
        >
          <img
            src={Img}
            alt="developer illustration"
            className="w-full h-auto md:w-98 md:h-auto rounded-full drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
