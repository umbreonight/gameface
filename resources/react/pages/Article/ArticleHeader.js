import React from "react";
import Icon from "../../components/Elements/Icon";

const ArticleHeader = () => {
  return (
    <div className="article-header">
      <div className="article-image">
        <img src="/static/images/hzd-4.jpg"></img>
      </div>
      <div className="article-meta">
        <img
          src="/static/images/espeon-pokeball.jpg"
          alt="Low-angle shot of a tall white building pointing to a blue sky"
          className="author-avatar round"
        ></img>
        <div className="author-name">
          <span className="article-meta-label">Author</span>
          <span className="article-meta-title">Rita Skeeter</span>
        </div>
        <div className="article-date">
          <span className="article-meta-label">Published</span>
          <span className="article-meta-title">11 March 2020</span>
        </div>
        <div className="article-engagements">
          <div className="article-action">
            <i className="icon">thumb_up_alt</i>
            <span className="action-label">2 likes</span>
          </div>
          <div className="article-action">
            <i className="icon">add_comment</i>
            <span className="action-label">3 comments</span>
          </div>
        </div>
        {/* <div className="article-share">
          <span className="overline">Share</span>
          <Icon name="share" />
        </div> */}
      </div>
    </div>
  );
};

export default ArticleHeader;
