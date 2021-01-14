import React from "react";

const Card = (props) => {
  return (
    <div className={"card " + props.className}>
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

export default Card;
