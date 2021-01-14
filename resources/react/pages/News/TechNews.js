import React from "react";
import Slider from "react-slick";
import Card from "../../components/Elements/Card";
import { TopArticlesFeed } from "../../../js/data";
import SectionTitle from "../../components/Global/SectionTitle";

const TechNews = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <section name="news-tech">
      <SectionTitle title="Tech News" />
      <div className="news-tech">
        <Slider {...settings}>
          {TopArticlesFeed.map((item, index) => (
            <Card key={index} content={item} className="small" />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechNews;
