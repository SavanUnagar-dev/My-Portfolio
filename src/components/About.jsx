import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, BookOpen, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">

        {/* Left: About Me Text */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-8 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Savan Unagar</span>,
            a passionate Frontend Developer. I specialize in building responsive and dynamic web applications using{" "}
            <strong>React.js</strong> and <strong>Tailwind CSS</strong>.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <strong>Softcolon Technology Pvt Ltd</strong> where I worked on real-world projects using React, implemented user interfaces,
            managed state with React Hooks, and focused on performance optimization.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I'm committed to continuous learning and love solving challenges through clean and efficient frontend code.
          </p>
        </motion.div>

        {/* Right Side Cards: Contact Info, Education, Hobbies */}
        <div className="space-y-6">

          {/* Contact Info */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full p-6 rounded-xl shadow-md space-y-4 text-gray-300 text-sm bg-gray-900"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5">
              Contact Info
            </h3>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-500" />
              Surat, Gujarat, India
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-500" />
              +91 9313780379
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500" />
              savanunagar305@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-indigo-500" />
              <a
                href="https://linkedin.com/in/savan-unagar-369239279"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-indigo-500" />
              <a
                href="https://github.com/SavanUnagar-dev"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-indigo-500" />
              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=8fzdydp"
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full p-6 rounded-xl shadow-md text-gray-300 bg-gray-900"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-3">
              <BookOpen className="w-6 h-6" />
              Education
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Natubhai V. Patel College of Pure & Applied Sciences</strong><br />
              2021 - 2024 | Bachelor of Computer Applications (BCA)
            </p>
          </motion.div>

          {/* Hobbies */}
          {/* <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full p-6 rounded-xl shadow-md text-gray-300 bg-gray-900"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-3">
              <Heart className="w-6 h-6" />
              Hobbies
            </h3>
            <p className="text-sm leading-relaxed">
              Coding, UI Designing, Reading Tech Blogs, Playing Cricket, Exploring New Technologies
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
