import React from 'react';

const Comment = props => {
  const { saveComment, likeToggle, deleteComment } = props;
  console.log(saveComment);
  return (
    <>
      {saveComment.map(item => (
        <div key={item.id} className="contents">
          <p>
            <strong> {item.id}</strong> {item.value}
          </p>
          <div>
            <button
              className={item.up ? 'upThumbs' : ''}
              onClick={() => {
                likeToggle(item);
              }}
            >
              <i className="bi bi-hand-thumbs-up-fill" />
            </button>
            <button
              onClick={() => {
                deleteComment(item);
              }}
            >
              <i className="bi bi-trash3" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
