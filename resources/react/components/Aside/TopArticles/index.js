import React, { Fragment } from "react";
import SectionTitle from "../../Global/SectionTitle";
import Card from "../../Elements/Card";
import { TopArticlesFeed } from "../../../../js/data";

const TopArticles = () => {
  return (
    <section name="top-articles">
      <SectionTitle title="Top Articles" />
      <section name="top-articles-feed">
        {TopArticlesFeed.map((item, index) => (
          <Card key={index} content={item} className="small" />
        ))}
      </section>
    </section>
  );
};

export default TopArticles;
