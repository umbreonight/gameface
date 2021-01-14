import React, { Fragment } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import {LatestArticles} from "../../../js/data"
import NewsCard from "../../components/News/NewsCard";

const LatestNews = () => {
  return (
    <Fragment>
      <section name="news-latest">
        <SectionTitle title="Latest" action="View All" />
        <div className="news-latest">
          {LatestArticles.map((item, index) => (
            <NewsCard key={index} content={item} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default LatestNews;
