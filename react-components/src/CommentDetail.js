import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="">
        <img src={props.imgUrl} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
