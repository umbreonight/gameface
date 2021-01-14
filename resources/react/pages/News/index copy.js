import React, { Fragment } from "react";
import Billboard from "../../components/Elements/Billboard";
import FeaturedNews from "./FeaturedNews";
import LatestNews from "./LatestNews";
import Reviews from "./Reviews";
import Mobile from "./Mobile";
import Entertainment from "./Entertainment";
import TechNews from "./TechNews";
import HeaderCarousel from "../../components/Global/HeaderCarousel";

import {Categories, Search, TopArticles, Subscribe, UserControl} from "../../components/Aside";


const News = () => {
  return (
    <Fragment>
      <div className="gameface365-news">
        <HeaderCarousel />
        <main>
          <section name="news">
            <FeaturedNews />
            <Billboard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              image="/static/images/bloodborne.jpg"
            />
            <LatestNews />
            <Billboard
              title="Xbox Series X to reveal Smart Delivery"
              image="/static/images/xbo.jpg"
            />
            <Reviews />
            <Mobile />
            <Billboard
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              image={"/static/images/connected.webp"}
            />
            <Entertainment />
            <TechNews />
          </section>
        </main>
        <aside>
          <UserControl />
          <Search />
          <Categories />
          <TopArticles />
          <Subscribe />
        </aside>
      </div>
    </Fragment>
  );
};

export default News;
