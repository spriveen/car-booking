"use client"
import Image from 'next/image';
import React from 'react';
import CarBooking from "../../assests/carbooking.png";
import AppStoreImg from "../../assests/website/app_store.png"
import PlayStoreImg from "../../assests/website/play_store.png";

const AppStore = () => {
  return <div className='bg-[#f5f5f5] dark:bg-black
   dark:text-white'>
    <div className='container'>
        {/* header title section */}
    <div className='space-y-3 uppercase text-center py-14'>
            <p
            data-aos="fade-up" 
            className='text-primary text-2xl font-semibold
            '>Download</p>
            <h1 data-aos="fade-up"
            data-aos-delay="300"
            className='text-3xl font-bold'
            >
            Best Cab Service
            </h1>
         </div>
         {/* Card Section */}
         <div 
         data-aos="fade-up"
         className='grid
         grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'
         >
            {/* text-content section */}
            <div className='space-y-8 max-w-[400px] mx-auto'>
              <h1 className='text-2xl font-bold'>
                Download the cab voucher app free! Get Exciting
                New Offers
                </h1>
                <p>
                Experience convenience at your fingertips with our cab voucher app. Download it now for free and unlock exclusive offers, discounts, and seamless booking options.
                </p>
                 {/*App Store Logo Section  */}
                 <div className='flex flex-wrap justify-center
                 sm:justify-start items-center'>
                    <Image
                    src={AppStoreImg}
                    alt='app store'
                    className='max-w-[150px] sm:max-w-[120px]
                    md:max-w-[200px]'
                    />
                    
                    <a href='#'>
                        <Image
                        src={PlayStoreImg}
                        alt='play store'
                        className='max-w-[150px] sm:max-w-[120px]
                        md:max-w-[200px]'
                        />
                    </a>
                 </div>
            </div>
                {/* Image section */}
                <div>
                  <Image src={CarBooking} alt='' className='max-w-
                  [400px]' />
                </div>
         </div>
        </div>
  </div>
  }
export default AppStore
