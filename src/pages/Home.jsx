import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Contact />
        <Location />
      </main>
      <FloatingActionButtons />
      <Footer />
    </>
  );
};

export default Home;
