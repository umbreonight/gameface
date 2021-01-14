import React, { Fragment } from "react";
import Card from "../../components/Elements/Card";
import { CategoryFeed } from "../../../js/data";
import SectionTitle from "../../components/Global/SectionTitle";

const Category = () => {
  return (
    <Fragment>
      <div className="page-category">
        <div>
          <h1 className="text-center text-uppercase">Category Title</h1>
          <hr className="theme-gradient radial"></hr>
        </div>
        <div className="category-items">
          {CategoryFeed.map((item, index) => (
            <Card key={index} content={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
