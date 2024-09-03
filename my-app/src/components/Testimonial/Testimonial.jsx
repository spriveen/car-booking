import React from 'react';
import Slider from 'react-slick';
import BgImage from "../../assests/testimonial.png";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Riveen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Peanuka",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "Duvidu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 4,
    name: "Nishad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={bgStyle} className="testimonial-section">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {TestimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
