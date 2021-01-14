import React, { Fragment } from "react";

const SectionTitle = props => {
  return (
    <Fragment>
      <div className="section-title">
        {props.title}
        {props.action && <button className="see-all">{props.action}</button>}
      </div>
      <hr className="theme-gradient"></hr>
    </Fragment>
  );
};

export default SectionTitle;
