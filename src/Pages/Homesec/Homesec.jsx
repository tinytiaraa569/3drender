import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstimg from './images/first.jpg';
import secondimg from './images/second.jpg';
import thirdimg from './images/third.jpg';
import './Homesec.css'

function Homesec() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
  };

  const slides = [
    {
      img: firstimg,
      text: "Discover Exquisite Designs",
      description: "Explore the artistry and craftsmanship in every piece we create.",
    },
    {
      img: secondimg,
      text: "Jewellery Crafted to Perfection",
      description: "Our jewellery embodies elegance and timeless beauty.",
    },
    {
      img: thirdimg,
      text: "Elegance in Every Detail",
      description: "Find the perfect blend of sophistication and style.",
    },
  ];

  return (
    <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[80vh]">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-full h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
              <div>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 filtershadowh1">
                  {slide.text}
                </h1>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  {slide.description}
                </p>
                
              </div>
            </div>

            {/* Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Homesec;
