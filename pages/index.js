import React, { Fragment } from "react";

import Button from "../components/Button";
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
          </div>
        </div>
        <div className='landing-section container-fluid'>
          <div className='row no-gutters'>
            <div className='landing-left col-lg-6 col-md-6 col-sm'>
              <div className='landing-welcome-1'>Sourst from us to you.</div>
              <div className='landing-welcome'>SOURST - Building your dreams so you can get going.</div>
            </div>
            <div className='landing-right col-lg-6 col-md-6 col-sm'>
              <img className='building-website-img' src='../static/images/developing_code(blue).svg' />
            </div>
          </div>
        </div>
        <div className='about-us-section container-fluid'>
          <div className='about-us-wrapper row no-gutters'>
            <div className='about-us-left col-lg-3 col-sm-12'>
              <div className='about-us-title'>Who We Are</div>
            </div>
            <div className='about-us-right col-lg-9 col-sm-12'>
              <div className='about-us-text'>
                SOURST is a goal-oriented company focused on bringing your websites to life. We do the heavy lifting so you don't have to.
              </div>
              <Button btnLabel='Learn More →' />
            </div>
          </div>
        </div>
        <div className='news-section container-fluid'>
          <div className='row no-gutters'>
            <div className='news-header col-lg-12'>News</div>
          </div>
          <div className='row no-gutters'>
            <div className='news-stories col-lg-7'>Article section 1</div>
          </div>
          <div className='row no-gutters'>
            <div className='news-stories col-lg-7'>Article section 2</div>
          </div>
        </div>
        <div className='footer container-fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-12'>Footer logo</div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>Contact info</div>
            <div className='col-lg-6'>Address</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
