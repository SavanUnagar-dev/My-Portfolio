import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Softcolon Technology Pvt Ltd',
    duration: 'January 2025 - March 2025',
    description:
      'Completed a 3-month internship using React.js and Tailwind CSS. Built responsive UI components, managed state with React Hooks, and optimized performance. Worked on real-world projects and clean code practices.',
    projects: [
      {
        title: 'Car Rental Service',
        details:
           'I built key UI parts of a car rental app that included vehicle browsing, availability display, and user account sections. I implemented search and filter functionality using React Context API to manage global state. The design was completely mobile responsive and created using Tailwind CSS and ShadCN components. My main focus was converting the Figma designs into functional UI with dynamic rendering using hooks and logic.'
      },
      {
        title: 'Follow Client CRM',
        details:
          'This CRM project focused on managing leads and customer information. I worked on UI for authentication, contact forms, and lead management dashboards. I created dynamic components using React and JavaScript to display customer data and actions. The project also had an analytics dashboard which I helped design from the given Figma layout. After building these sections, I submitted the code to my senior who reviewed and merged it with the actual CRM system.'
      },
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-indigo-500 dark:border-indigo-400 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10"
            >
              <div className="absolute -left-3 top-1.5 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {exp.role} - <span className="text-gray-700 dark:text-gray-300">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.duration}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

              {exp.projects?.map((project, idx) => (
                <div key={idx} className="ml-4 mb-4">
                  <h4 className="text-md font-semibold text-indigo-500 dark:text-indigo-300">{project.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.details}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
