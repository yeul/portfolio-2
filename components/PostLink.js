import React, { Fragment } from "react";
import Link from "next/link";

const PostLink = props => {
  return (
    <Fragment>
      <Link href={`/post?title=${props.title}&imgURL=${props.imgLink}`}>
        <a>
          <div className='news-story-title'>{props.title}</div>
        </a>
      </Link>
    </Fragment>
  );
};

export default PostLink;
