import React from "react";
import { NewsCategories } from "../../../../js/data";
import SectionTitle from "../../Global/SectionTitle";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Categories = () => {
  return (
    <section name="category-quick-links">
      <SectionTitle title="Categories" />
      <div className="category-quick-links panel">
        {NewsCategories.map((item, index) => (
          <Link to="/category" key={index}>
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
