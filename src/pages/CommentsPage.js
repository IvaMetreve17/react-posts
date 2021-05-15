import React, { useState, useEffect } from "react";
import Comments from "../components/Comments";

const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((result) => setComments(result));
  }, []);

  return <div>{comments && <Comments commentData={comments} />}</div>;
};

export default CommentsPage;
