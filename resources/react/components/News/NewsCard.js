import React from "react";

const NewsCard = props => {
  return (
    <div className="card news">
      <div className="card-image">
        {props.content.video ? (
          <video controls={true} poster={props.content.image}>
            <source src={props.content.video} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={props.content.image} alt=""></img>
        )}
      </div>
      <div className="card-content">
        {props.content.category && (
          <span className="overline">{props.content.category}</span>
        )}
        <span className="card-title">{props.content.title}</span>
        <span className="caption">
          {props.content.date} - <a href="#">{props.content.author}</a>
        </span>
        <p>{props.content.body}</p>
      </div>
      <div className="card-actions">
        <div href="" className="card-action">
          <i className="icon">plus_one</i>
          <span className="action-label">{props.content.likes} likes</span>
        </div>
        <div href="" className="card-action">
          <i className="icon">insert_comment</i>
          <span className="action-label">
            {props.content.comments} comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
