import React from 'react'
// import yellowCab from "../../assests/yellow-cab.png"
import bgCity from "../../assests/city.jpg"
// import Image from 'next/image'

const bgStyle ={
  backgroundImage: `url(${bgCity.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height:"520px",
  width:"100vw",
};

const Hero = () => {
  return <div style={bgStyle}>
    <div>
      <div  className='container'>
       {/* text content section */}
       <div></div>
       {/* Image content section */}
       <div></div>
      </div>
    </div>
  </div>
  
}

export default Hero
