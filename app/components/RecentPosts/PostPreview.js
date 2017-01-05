import React from 'react';
const { Component } = React;

const PostPreview = (props) => {
  const { title, author, date, category } = props.post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{date}</p>
      <p>{category}</p>
    </div>
  );
};

export default PostPreview;
