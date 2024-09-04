import React from 'react'
import {
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaMapMarker,
    FaMousePointer,
    FaGoogle,
} from "react-icons/fa";
import{MdEmail,MdCall} from "react-icons/md";


const Footer = () => {
  return <div className='bg-white text-black
  dark:bg-black dark:text-white'>
    {/*upper section Banner  */}
    <div className='bg-primary'>
       <div className='container text-black
       text-center py-10 lg:py-14 text-2xl
       font-bold space-y-4'>
        <p>We Are Raedy To Take Your Call 24
            Hours, 7days!
        <h1 className='text-3xl md:text-5xl
        font-bold'>+ 94 715362367</h1>
        </p>
        </div> 
    </div>
    {/* Bottom Footer section*/}
    <div className='container grid
    grid-cols-1 sm: grif-cols-2
    md:grid-cols-3 gap-10 md:gap-20 py-12'>
        {/* First col section */}
    <div className='space-y-6'>
     {/* heading */}
     <h1 className='text-2xl py-3
     font-bold uppercase border-b-8
     border-primary'>
        About Cab Hub
        </h1>
        <p>
        Welcome to Cab Hub, your trusted partner for reliable and efficient cab services.
        </p>
        {/* Social Links */}
        <div className='flex-items-center
        text-primary gap-3 text-2xl'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaGoogle/>
            </div>
    </div>
    {/* Second col section */}
    <div className='space-y-6'>
    <h1 className='text-2xl py-3
     font-bold uppercase border-b-8
     border-primary'>
        Download
        </h1>
        <p>
        Welcome to Cab Hub, where we offer reliable and efficient cab services tailored to meet your travel needs.   
        </p> 
        <h1 className='text-primary text-xl
        font-semibold flex-items-center
        gap-4'>
            Android user{""}
            <span>
             <FaAndroid className='text-2xl
             text-black dark:text-white'/>
            </span>
            <h1 className='text-primary text-xl
            font-semibold flex items-center
            gap-4'>
                IOS user{""}
                <span>
                    <FaAppStoreIos
                    className='text-2xl text-black
                    dark:text-white'/>
                </span>
            </h1>
        </h1>
    </div>
    {/* Third col section */}
    <div className='space-y-6'>
        {/* heading */}
        <h1 className='text-2xl py-3
        font-bold uppercase border-b-8
        border-primary'>
            Contact
        </h1>
        <div className='flex- items-center
        gap-4'>
           <FaMapMarker /> 123 Street, New
           York, USA
           </div>
           <div className='flex items-center
           gap-4'>
           <MdCall />
           +94 715362367
           </div>
           <div className='flex items-center
           gap-4'>
            <MdEmail /> rpeanuka@gmail.com 
            </div>
            <div className='flex items-center
            gap-4'>
                <FaMousePointer /> www.Riveen.com 
                </div>
    </div>
    </div>
    <p className='ext-center py-4
    text-sm'>Copyright@ 2024. All right
        reserved</p>
  </div>
    
  
}

export default Footer