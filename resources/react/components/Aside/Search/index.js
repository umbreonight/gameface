import React, { Fragment } from "react";
import FloatingLabelInput from "../../Elements/FloatingLabelInput";
import SectionTitle from "../../Global/SectionTitle";

const Search = () => {
  return (
    <section name="side-search">
      <SectionTitle title="Search" />
      <div className="search panel">
        <div className="search-input">
          <FloatingLabelInput
            type="text"
            id="side-search"
            placeholder="Enter search criteria"
          />
          <button className="button-flat">
            <i className="icon">search</i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
