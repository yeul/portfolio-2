import React, { Fragment } from "react";
import Link from "next/link";

import main from "../styles/main.scss";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='about-page-container container'>
          <div className='about-page-row row no-gutters'>
            <div className='about-page-col col-lg-12'>
              <h1 className='about-header'>About</h1>
              <div className='about-page-intro'>
                <div className='about-page-text'>
                  <span className='sourst-bold'>SOURST</span> was established in 2018 as a business for businesses. Our team of creatives take a vision from even its smallest idea
                  and are able to turn it into a fully-featured reality. Since our inception, we have assisted over 20 businesses create websites of varying complexity showcasing
                  their products and services. Our team has grown from just 8 developers and designers to 25 with additional plans for growth in the coming months. Our aim is to
                  create brand awareness with our partners in order to help their business thrive.
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='numbers-row row no-gutters'>
              <div className='numbers-header col-lg-12'>
                <div className='our-numbers-title'>Our numbers</div>
                <div className='our-numbers-subtitle'>at a glance</div>
              </div>
              <div className='number-stats col-lg-12'>
                <ul className='number-stats-list'>
                  <li className='stat'>
                    <div>25</div>
                    <div>employees</div>
                  </li>
                  <li className='stat'>
                    <div>20+</div>
                    <div> customers</div>
                  </li>
                  <li className='stat'>
                    <span>500+</span> thousand dollars in annual revenue
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='container'>
            <h1 className='how-we-work-header'>How We Work</h1>
            <div className='process-row row no-gutters'>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='step-1'>1 Conceptualize</div>
                <div>
                  Beginning with a deeper understanding of the products and services our customers provide we discuss what the goals of the project are. What is the website setting
                  out to achieve? Who is the audience? What message are we conveying? What kind of interactivity do we wish to provide? Taking time to answer these questions allows
                  us to conceptualize a design that will satisfy all of these needs and more in order to propel brands forward.
                </div>
              </div>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='step-2'>2 Strategize</div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='process-row row no-gutters'>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='step-3'>3 Design</div>
              </div>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='step-4'>4 Launch & Scale</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
