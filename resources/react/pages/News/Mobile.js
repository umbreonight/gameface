import React from "react";
import { MobileNews } from "../../../js/data";
import Media from "../../components/Elements/Media";
import SectionTitle from "../../components/Global/SectionTitle";

const Mobile = () => {
  return (
    <section name="news-mobile">
      <SectionTitle title="Mobile" action="View All" />
      <div className="news-mobile">
        {MobileNews.map((item, index) => (
          <Media key={index} content={item}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis dolore officia quas, minima sint hic sit quia quod
              quo quisquam atque necessitatibus, in rerum numquam nulla? Aliquid
              numquam rem possimus!
            </p>
          </Media>
        ))}
      </div>
    </section>
  );
};

export default Mobile;
