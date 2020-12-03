import React from "react";
import 'semantic-ui-css/semantic.min.css'

export default ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};