import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PostLink from "../components/PostLink";
import Footer from "../components/Footer";

import "../styles/main.scss";

const Post = () => {
  const router = useRouter();
  console.log(useRouter());
  console.log(router.query);
  return (
    <Fragment>
      <div className='post-image-container container-fluid' style={{ backgroundImage: `url("${router.query.imgURL}")` }}>
        <div className='row no-gutters'>
          <h1 className='post-title'>{router.query.title}</h1>
        </div>
      </div>
      <div className='post-content-container container'>
        <div className='post-row row no-gutters'>
          <div className='post-col col-lg-12'>
            <div className='post-title'>{router.query.title}</div>
          </div>
        </div>
        <div className='post-row row no-gutters'>
          <div className='post-col col-lg-12'>
            <div className='post-subtitle'>New Story Subtitle</div>
          </div>
        </div>
        <div className='post-row row no-gutters'>
          <div className='post-col col-lg-12'>
            <div className='post-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat
                nisl. Convallis convallis tellus id interdum velit. Urna nec tincidunt praesent semper feugiat. Pharetra diam sit amet nisl suscipit adipiscing bibendum est
                ultricies. Tincidunt ornare massa eget egestas purus viverra. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. At tellus at urna condimentum mattis.
                Mi bibendum neque egestas congue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Netus et malesuada fames ac turpis. Amet justo donec enim diam
                vulputate. Adipiscing elit ut aliquam purus sit amet. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
              </p>

              <p>
                Consectetur adipiscing elit pellentesque habitant morbi. Eu tincidunt tortor aliquam nulla facilisi cras. Nunc sed velit dignissim sodales. Eget nullam non nisi est
                sit. Quis varius quam quisque id. Ut lectus arcu bibendum at varius vel pharetra. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Neque
                aliquam vestibulum morbi blandit cursus risus at ultrices. Eget duis at tellus at urna. Eu nisl nunc mi ipsum faucibus. Sagittis nisl rhoncus mattis rhoncus urna
                neque viverra. Tincidunt augue interdum velit euismod. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Sagittis purus sit amet volutpat
                consequat. Fringilla est ullamcorper eget nulla facilisi etiam. Arcu cursus euismod quis viverra nibh. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                Id consectetur purus ut faucibus pulvinar elementum. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Lorem ipsum dolor sit amet. Mauris
                pellentesque pulvinar pellentesque habitant morbi. Ac tincidunt vitae semper quis. Senectus et netus et malesuada fames ac turpis egestas sed. Duis ultricies lacus
                sed turpis tincidunt id aliquet.
              </p>

              <p>
                Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Leo urna molestie at elementum eu
                facilisis sed. Ornare massa eget egestas purus viverra. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl. Convallis convallis tellus id
                interdum velit. Urna nec tincidunt praesent semper feugiat. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Tincidunt ornare massa eget
                egestas purus viverra. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. At tellus at urna condimentum mattis. Mi bibendum neque egestas congue.
                Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Netus et malesuada fames ac turpis. Amet justo donec enim diam vulputate. Adipiscing elit ut aliquam
                purus sit amet. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Consectetur adipiscing elit pellentesque habitant morbi. Eu tincidunt tortor
                aliquam nulla facilisi cras. Nunc sed velit dignissim sodales. Eget nullam non nisi est sit. Quis varius quam quisque id. Ut lectus arcu bibendum at varius vel
                pharetra. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Eget duis at
                tellus at urna. Eu nisl nunc mi ipsum faucibus.
              </p>

              <p>
                Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt augue interdum velit euismod. Nascetur ridiculus mus mauris vitae ultricies leo integer
                malesuada. Sagittis purus sit amet volutpat consequat. Fringilla est ullamcorper eget nulla facilisi etiam. Arcu cursus euismod quis viverra nibh. Morbi blandit
                cursus risus at ultrices mi tempus imperdiet. Id consectetur purus ut faucibus pulvinar elementum. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.
                Lorem ipsum dolor sit amet. Mauris pellentesque pulvinar pellentesque habitant morbi. Ac tincidunt vitae semper quis. Senectus et netus et malesuada fames ac turpis
                egestas sed. Duis ultricies lacus sed turpis tincidunt id aliquet. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vitae suscipit tellus mauris a
                diam maecenas sed enim ut. Leo urna molestie at elementum eu facilisis sed. Ornare massa eget egestas purus viverra. Magna fermentum iaculis eu non diam phasellus
                vestibulum lorem sed.
              </p>

              <p>
                Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt augue interdum velit euismod. Nascetur ridiculus mus mauris vitae ultricies leo integer
                malesuada. Sagittis purus sit amet volutpat consequat. Fringilla est ullamcorper eget nulla facilisi etiam. Arcu cursus euismod quis viverra nibh. Morbi blandit
                cursus risus at ultrices mi tempus imperdiet. Id consectetur purus ut faucibus pulvinar elementum. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.
                Lorem ipsum dolor sit amet. Mauris pellentesque pulvinar pellentesque habitant morbi. Ac tincidunt vitae semper quis. Senectus et netus et malesuada fames ac turpis
                egestas sed. Duis ultricies lacus sed turpis tincidunt id aliquet. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vitae suscipit tellus mauris a
                diam maecenas sed enim ut. Leo urna molestie at elementum eu facilisis sed. Ornare massa eget egestas purus viverra. Magna fermentum iaculis eu non diam phasellus
                vestibulum lorem sed.
              </p>
              <p>
                Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Tincidunt augue interdum velit euismod. Nascetur ridiculus mus mauris vitae ultricies leo integer
                malesuada. Sagittis purus sit amet volutpat consequat. Fringilla est ullamcorper eget nulla facilisi etiam. Arcu cursus euismod quis viverra nibh. Morbi blandit
                cursus risus at ultrices mi tempus imperdiet. Id consectetur purus ut faucibus pulvinar elementum. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.
                Lorem ipsum dolor sit amet. Mauris pellentesque pulvinar pellentesque habitant morbi. Ac tincidunt vitae semper quis. Senectus et netus et malesuada fames ac turpis
                egestas sed. Duis ultricies lacus sed turpis tincidunt id aliquet. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vitae suscipit tellus mauris a
                diam maecenas sed enim ut. Leo urna molestie at elementum eu facilisis sed. Ornare massa eget egestas purus viverra. Magna fermentum iaculis eu non diam phasellus
                vestibulum lorem sed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Post;
