import React, { Fragment } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import { ReviewsArticles } from "../../../js/data";
import RatingCard from "../../components/News/RatingCard";

const Reviews = () => {
  return (
    <Fragment>
      <section name="news-reviews">
        <SectionTitle title="Reviews" action="View All" />
        <div className="news-reviews">
          {ReviewsArticles.map((item, index) => (
            <RatingCard key={index} content={item} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Reviews;
