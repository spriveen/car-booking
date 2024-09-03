"use client";
import React from 'react';
import BannerCard from "./BannerCard.jsx";
import { SlStar } from "react-icons/sl";

const About = () => {
  const bgStyle = {
    backgroundImage: `url('/assets/girl.jpg')`, // Correct path for image in the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "520px",
    width: "100vw",
  };

  return (
    <div style={bgStyle}>
      <div className='text-white bg-black/80 min-h-[530px] flex items-center py-10'>
        <div className='container'>
          {/* Header title section */}
          <div className='space-y-3 uppercase text-center
           py-14'>
            <p className='text-primary text-2xl font-semibold'> 
              We do Best
            </p>
            <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl font-bold"
            >
            Than You Wish
            </h1>
            
          </div>

          {/* Card Sections */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='space-y-8'>
              <BannerCard
                title={"Fast Booking"}
                description={"lorem ipsum dolor amet consecture"}
                icon={<SlStar />}
              />
              <BannerCard
                title={"Best Service"}
                description={"lorem ipsum dolor amet consecture"}
                icon={<SlStar />}
              />
            </div> 
            <div className='space-y-8'>
              <BannerCard
                title={"Quality Experience"}
                description={"lorem ipsum dolor amet consecture"}
                icon={<SlStar />}
              />
              <BannerCard
                title={"Customer Support"}
                description={"lorem ipsum dolor amet consecture"}
                icon={<SlStar />}
              />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
