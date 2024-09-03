import React from 'react';
import Img2 from "../../assests/car2.png";
import Image from 'next/image';

const ServiceData = [
  {
    id: 1,
    name: "Economy Class",
    image: Img2,
    description: "This is the first dummy item.",
    aosDelay: 100,
  },
  {
    id: 2,
    name: "Standard Class",
    image: Img2,
    description: "This is the second dummy item.",
    aosDelay: 200,
  },
  {
    id: 3,
    name: "Business Class",
    image: Img2,
    description: "This is the third dummy item.",
    aosDelay: 300,
  },
];

const BestCabs = () => {
  return (
    <div className='py-10 bg-white dark:bg-dark text-black dark:text-white'>
      <div className='container'>
        {/* header title section */}
        <div data-aos="fade-up" className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
            Choose Best Cab
          </h1>
          {/* Decorative element below the title */}
          <div className='mt-4 mb-8'>
            <div className='mx-auto h-1 w-20 bg-primary rounded'></div>
          </div>
        </div>
        {/* Best Cab Card Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center'>
          {ServiceData.map(({ id, image, name, description, aosDelay }) => (
            <div
              key={id}
              data-aos='fade-up'
              data-aos-delay={aosDelay}
              className='group rounded-2xl bg-white
              dark:bg-black hover:bg-primary shadow-xl
              duration-200 max-w-[300px] relative'
            >
              {/* image section */}
              <div className='h-[140px] flex justify-center items-center'>
                <Image 
                  src={image} 
                  alt="" 
                  className='max-w-[150px] block
                  transform translate-y-4 
                  group-hover:scale-110
                  group-hover:translate-x-4 duration-300' 
                />
              </div>
              {/* text content section */}
              <div className='p-6 text-center space-y-4'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p 
                className='text-gray-500
                  group-hover:text-black duration-300 text-sm
                  line-clamp-2'>
                  {description}
                </p>
                <p className='text-primary text-2xl
                  font-bold group-hover:text-black'>
                  $10/km
                </p>
                <button className='bg-black text-white px-4
                  py-2 rounded-lg'>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestCabs;
