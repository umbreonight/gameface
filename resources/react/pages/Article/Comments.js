import React, { Fragment } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import Comment from "./Comment";

const Comments = () => {
  return (
    <Fragment>
      <SectionTitle title="Comments" action="Add Comment" />
      <div className="article-comments">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </Fragment>
  );
};

export default Comments;
