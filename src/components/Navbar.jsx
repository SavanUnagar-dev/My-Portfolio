import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">SavanUnagar</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700 dark:text-white">
          <li><a href="#home" className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Experience</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-gray-700 dark:text-white focus:outline-none transform transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lg font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-900"
        >
          <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Projects</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300">Experience</a></li>
        </motion.ul>
      )}
    </motion.nav>
  )
}

export default Navbar
