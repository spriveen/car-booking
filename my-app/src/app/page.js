"use client";
import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css"


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Contact from '@/components/Contact/Contact';
import BestCabs from '@/components/BestCabs/BestCabs';
import About from '@/components/About/About';

const Page = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className='dark:bg-dark
    dark:text-white'>
      <Hero />
      <Contact />
       <BestCabs />
       <About />
       </div> 
     
  );
};

export default Page;
