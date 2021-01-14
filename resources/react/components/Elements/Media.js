import React from "react";

const Media = props => {
  return (
    <div className="media">
      <img
        src={props.content.image}
        alt="Low-angle shot of a tall white building pointing to a blue sky"
        className="media-asset"
      ></img>

      <div className="media-content">
        <h2 className="media-heading">{props.content.title}</h2>
        {props.children}
        <div className="media-actions">
          <div href="" className="media-action">
            <i className="icon">thumb_up_alt</i>
            <span className="action-label">{props.content.likes} likes</span>
          </div>
          <div href="" className="media-action">
            <i className="icon">add_comment</i>
            <span className="action-label">
              {props.content.comments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
