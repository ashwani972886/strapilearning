import React from "react";
import { banner1, banner2 } from "../../img";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Slider } from 'react-responsive-carousel';

const Carousel = () => {
  return (
    <Slider autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      <div className="cursor-pointer">
        <img className="lg:h-96" src={banner1} alt="Banner-1" />
        <p className="legend custom-legend">Legend 1</p>
      </div>
      <div className="cursor-pointer">
        <img className="lg:h-96" src={banner2} alt="Banner-2" />
        <p className="legend custom-legend">Legend 2</p>
      </div>
    </Slider>
  );
};

export default Carousel;
