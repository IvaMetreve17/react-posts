import React from "react";

const SingleComment = ({ commentData }) => {
  return (
    <div>
      <h2>name: {commentData.name}</h2>
      <h3>email: {commentData.email}</h3>
      <text>body: {commentData.body}</text>
    </div>
  );
};

export default SingleComment;
