import React from "react";
import Link from "next/link";

const PostLink = props => {
  return (
    <Link href={`/post?title=${props.title}`}>
      <a>
        <div className='news-story-title'>{props.title}</div>
      </a>
    </Link>
  );
};

export default PostLink;
