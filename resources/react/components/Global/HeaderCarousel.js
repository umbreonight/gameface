import React from "react";
import Slider from "react-slick";
import Billboard from "../Elements/Billboard";
import {HeaderSlider} from "../../../js/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true
  };

  return (
    <div className="header-carousel">
      <Slider {...settings}>
        {HeaderSlider.map((item, index) => (
          <Billboard
            key={index}
            title={item.title}
            image={item.image}
            action={item.action}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
