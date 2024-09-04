import React from 'react';
import Slider from 'react-slick';
import BgImage from "../../assests/testimonial.png";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Riveen",
    text: "The cab server is incredibly reliable and user-friendly.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Peanuka",
    text: "Excellent service! The cab server ensured I reached my destination on time, every time.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "Duvidu",
    text: "I highly recommend this cab server. The interface is smooth, and the drivers are professional",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 4,
    name: "Nishad",
    text: "This cab service is fantastic! The booking process is seamless, and the drivers are always courteous.",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={bgStyle}>
      <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
        <div className='container'>
          {/* header section */}
          <div data-aos="fade-up" className='text-center mb-10'>
            <h1 className='text-4xl font-bold'>Testimonials</h1>
          </div>
          {/* Testimonials cards section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map(({id, name, text, img}) => (
                <div key={id} className='my-6'>
                  <div className='flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative'>
                    {/* content section */}
                    <div className='flex flex-col items-center gap-4'>
                      <p className='text-xs'>{text}</p>
                    </div>
                    {/* image section */}
                    <div className='flex items-center gap-4'>
                      <img 
                      src={img}
                       alt={name} 
                       className="rounded-full w-16 h-16" 
                       />
                       <div className='space-y-2'>
                        <h1 className='text-xl font-bold text-black/60
                        dark:text-primary font-cusive'>
                          {name}
                          </h1>
                          <p className='text-sm font-bold text-black/45
                          dark:text-white'>
                            Developer
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;


