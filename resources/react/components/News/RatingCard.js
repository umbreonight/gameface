import React from "react";

const RatingCard = props => {
  return (
    <div className="card review">
      <div className="card-image">
        <img src={props.content.image} alt=""></img>
      </div>
      <div className="card-content">
        <span className="rating">
          <i className="icon icon-18">star</i>{props.content.rating}</span>
        <span className="card-title">{props.content.title}</span>
      </div>
    </div>
  );
};

export default RatingCard;
