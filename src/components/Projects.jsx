import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CofeeShop from "../assets/coffee-shop.png";
import BookStore from "../assets/book-store.png";
import eLearning from "../assets/Code-learn.png";
import ClothShop from "../assets/cloths-shop.png";
import FoodEat from "../assets/food-eat.png";


const projects = [
  {
    name: "Coffee-Shop",
    description:"A modern coffee shop app built with React.js and Tailwind CSS.",
    link: "https://cofee-shope-savan.netlify.app/",
    image: CofeeShop,
  },
  {
    name: "Book-Store",
    description: "A responsive Book Store app built with React.js and Tailwind CSS,",
    link: "https://book-store-by-savan.netlify.app/",
    image: BookStore,
  },
  {
    name: "E-learning",
    description:"An e-learning platform with interactive courses, built with React.js.",
    link: "https://e-learning-savan.netlify.app/",
    image: eLearning,
  },
  {
    name: "Clothes-Shop",
    description: "An online clothing store built with React.js and Redux.",
    link: "https://cloths-shoping-by-savan.netlify.app/",
    image: ClothShop,
  },
  {
    name: "Foodie-eat",
    description: "A food eat landing page using React and tailwind.",
    link: "https://veg-restourant-savan.netlify.app/",
    image: FoodEat,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          My Projects
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col justify-between"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="rounded-lg mb-4 h-40 w-full object-fill"
                  />
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    View live
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* Navigation Buttons */}
          <div className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer"/>
          <div className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-white cursor-pointer" />

          {/* Pagination Dots (Styled using Tailwind + arbitrary variants) */}
          <div
            className="custom-pagination md:mt-3 flex justify-center gap-2 [&>span]:!bg-gray-400 [&>span]:!opacity-100 [&>span.swiper-pagination-bullet-active]:!bg-indigo-600 [&>span]:w-3 [&>span]:h-3 [&>span]:rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
