import React, { Fragment } from "react";

const PostContent = props => {
  return (
    <Fragment>
      <div className='post-text'>
        <p className='text-paragraph'>{props.postText}</p>
      </div>
    </Fragment>
  );
};

export default PostContent;
