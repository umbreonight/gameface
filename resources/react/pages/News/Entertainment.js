import React, { Fragment } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import { EntertainmentNews } from "../../../js/data";
import CompactCard from "../../components/Elements/CompactCard";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Entertainment  = () => {
  return (
    <section name="news-entertainment">
      <SectionTitle title="Entertainment" action="View All" />
      <div className="news-entertainment">
        {EntertainmentNews.map((item, index) => (
          <Link to="/article" key={index}>
            <CompactCard content={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Entertainment ;
