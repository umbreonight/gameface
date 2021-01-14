import React from "react";

const Comment = () => {
  return (
    <div className="article-comment">
      <img
        src="/static/images/adorb.png"
        alt=""
        className="author-avatar"
      ></img>
      <div className="article-comment-meta">
        <span className="author-name">Darren van Reenen</span>
        <span className="published">12 Minutes ago</span>
      </div>
      <button className="comment-options button-flat">
        <i className="icon">more_vert</i>
      </button>
      <div className="comment-body">
        <p>
          Activision says it's plank,ning to announce more remasters and
          'reimaginings' in 2020. Activision says it's plank,ning to announce
          more remasters and 'reimaginings' in 2020.
        </p>
      </div>
      <div className="comment-actions">
          <button className="button-flat small">Like</button>
          <button className="button-flat small">Reply</button>
      </div>
    </div>
  );
};

export default Comment;
