import React from 'react';
import Slider from "react-slick";
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };  
  

  

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel__container">{children}</div>
      </Slider>
    </div>
  );

}

export default Carousel;
