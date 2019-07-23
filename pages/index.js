import React, { Fragment } from "react";
import Link from "next/link";

import Header from "../components/Header";
import Button from "../components/Button";
import PostLink from "../components/PostLink";
import Footer from "../components/Footer";
import "../styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='landing-section container'>
          <div className='row no-gutters'>
            <div className='landing-left col-lg-6 col-md-6'>
              <div className='landing-welcome-1'>Sourst from us to you.</div>
              <div className='landing-welcome-2'>SOURST - Building your dreams so you can get going.</div>
            </div>
            <div className='landing-right col-lg-6 col-md-6'>
              <img className='building-website-img' src='../static/images/developing_code.svg' alt='' />
            </div>
          </div>
        </div>
        <div className='learn-more-section container-fluid'>
          <div className='learn-more-wrapper row no-gutters'>
            <div className='learn-more-left col-lg-3 col-sm-12'>
              <div className='learn-more-title'>Who We Are</div>
            </div>
            <div className='learn-more-right col-lg-9 col-sm-12'>
              <div className='learn-more-text'>SOURST is a goal-oriented company focused on bringing your websites to life. We do the heavy lifting so you don't have to.</div>
              <Button btnLabel='Learn More →' />
            </div>
          </div>
        </div>
        <div className='news-section container-fluid'>
          <div className='row no-gutters'>
            <div className='news-header col-lg-12'>
              <div className='news-header-title'>News</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='news-header col-lg-12'>
              <div className='news-header-subtitle'>What We've Been Up To</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='news-stories news-left col-lg-7'>
              <img className='news-img-1' src='../static/images/unsplash-2.jpg' alt='A meeting room' />
              <PostLink title={`Getting Settled - Saying \'Hello!\' to Our New Office!`} imgLink='../static/images/unsplash-2.jpg' />
            </div>
            <div className='news-stories news-right col-lg-5'>
              <img className='news-img-2' src='../static/images/unsplash-1.jpg' alt='Blueprints' />
              <PostLink title='Our Design Process - How We Turn a Concept into Reality' imgLink='../static/images/unsplash-1.jpg' />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='news-stories news-left col-lg-5'>
              <img className='news-img-3' src='../static/images/unsplash-3.jpg' alt='Code sample' />
              <PostLink title='Organizing Code for Scalability' imgLink='../static/images/unsplash-3.jpg' />
            </div>
            <div className='news-stories news-right col-lg-7'>
              <img className='news-img-4' src='../static/images/unsplash-4.jpg' alt='Staff meeting' />
              <PostLink title='SOURST Turns 1!' imgLink='../static/images/unsplash-4.jpg' />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
