import React from 'react';
import '../assets/styles/components/Carousel.scss';

const CarouselList = ({ children }) => (
  <div className="carousel">
    <div className="carousel__container">{children}</div>
  </div>
);

export default CarouselList;
