import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
