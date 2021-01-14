import React from "react";

const Billboard = props => {
  return (
    <div className="billboard">
      <div className="billboard-image">
        <img className="responsive" src={props.image} alt=""></img>
      </div>
      <div className="billboard-content">
        <h3 className="billboard-title">{props.title}</h3>
        {props.body && <p className="feature">{props.body}</p>}
        {props.action && <button className="button">{props.action}</button>}
      </div>
    </div>
  );
};

export default Billboard;
