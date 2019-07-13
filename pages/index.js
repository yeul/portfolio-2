import React, { Fragment } from "react";
import Link from "next/link";

import Button from "../components/Button";
import Hamburger from "../components/Hamburger";
import Footer from "../components/Footer";
import main from "../styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='logo-section container-fluid'>
          <div className='row no-gutters'>
            <div className='company-logo col-lg-12'>
              <div className='logo'>sourst</div>
            </div>
            <Hamburger />
          </div>
        </div>
        <div className='landing-section container'>
          <div className='row no-gutters'>
            <div className='landing-left col-lg-6 col-md-6 col-sm'>
              <div className='landing-welcome-1'>Sourst from us to you.</div>
              <div className='landing-welcome'>SOURST - Building your dreams so you can get going.</div>
            </div>
            <div className='landing-right col-lg-6 col-md-6 col-sm'>
              <img className='building-website-img' src='../static/images/developing_code.svg' />
            </div>
          </div>
        </div>
        <div className='about-us-section container-fluid'>
          <div className='about-us-wrapper row no-gutters'>
            <div className='about-us-left col-lg-3 col-sm-12'>
              <div className='about-us-title'>Who We Are</div>
            </div>
            <div className='about-us-right col-lg-9 col-sm-12'>
              <div className='about-us-text'>SOURST is a goal-oriented company focused on bringing your websites to life. We do the heavy lifting so you don't have to.</div>
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
              <img className='news-img-1' src='../static/images/unsplash-2.jpg' />
              <div className='news-story-title'>Getting Settled - Saying 'hello!' to our new office!</div>
            </div>
            <div className='news-stories news-right col-lg-5'>
              <img className='news-img-2' src='../static/images/unsplash-1.jpg' />
              <div className='news-story-title'>Our Design Process - How we turn a concept into a reality</div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='news-stories news-left col-lg-5'>
              <img className='news-img-3' src='../static/images/unsplash-3.jpg' />
              <div className='news-story-title'>Organizing code for scalability</div>
            </div>
            <div className='news-stories news-right col-lg-7'>
              <img className='news-img-4' src='../static/images/unsplash-4.jpg' />
              <div className='news-story-title'>SOURST turns 1! </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
