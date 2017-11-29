import React from 'react';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
         {props.username}
      </div>
      <div className="post__media">
        <img className="img-responsive" src={props.images[0]} />
      </div>
      <div className="post__content">
      </div>
      <div className="post__actions">
      </div>
    </div>
  )
}

export default Post;
