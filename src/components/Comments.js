import React from "react";

import SingleComment from "./SingleComment";

const Comments = ({ commentData }) => {
  const renderComments = () => {
    if (commentData) {
      return commentData.map((item) => {
        return <SingleComment commentData={item} />;
      });
    }
  };

  return <div>{renderComments()}</div>;
};

export default Comments;
