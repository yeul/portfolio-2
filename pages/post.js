import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PostLink from "../components/PostLink";
import PostContent from "../components/PostContent";
import Footer from "../components/Footer";

import "../styles/main.scss";

const Post = () => {
  const router = useRouter();
  console.log(useRouter());
  console.log(router.query);
  return (
    <Fragment>
      <div className='post-image-container container-fluid' style={{ backgroundImage: `url("${router.query.imgURL}")` }} />
      <div className='post-content-container container'>
        <div className='post-row row no-gutters'>
          <div className='post-col col-lg-12'>
            <h1 className='post-title'>{router.query.title}</h1>
          </div>
        </div>
        <div className='post-row row no-gutters'>
          <div className='post-col col-lg-6 col-md-12'>
            <div className='post-info'>
              <div className='author-image' />
            </div>
          </div>
          <div className='post-col col-lg-6 col-md-12'>
            <div className='author-name'>By: The Sourst Team</div>
          </div>
        </div>
        <div className='post-row row no-gutters'>
          <div className='post-col col-lg-12'>
            <PostContent />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Post;
