import React from "react";

const CompactCard = (props) => {
  return (
    <div className={"card small"}>
      <div className="card-image">
        <img src={props.content.image} alt=""></img>
      </div>
      <div className="card-content">
        <span className="overline">{props.content.category}</span>
        <span className="card-title">{props.content.title}</span>
        <span className="caption">{props.content.date}</span>
      </div>
    </div>
  );
};

export default CompactCard;
