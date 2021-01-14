import React, { Fragment } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import { FeaturedArticles } from "../../../js/data";
import Card from "../../components/Elements/Card";

const FeaturedNews = () => {
  return (
    <section name="news-featured">
      <SectionTitle title="Featured" action="View All" />
      <div className="news-featured">
        {FeaturedArticles.map((item, index) => (
          <a href="#" key={index}>
            <Card content={item} />
          </a>
        //   <Link to="/article" key={index}>
        //   <Card content={item} />
        // </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
