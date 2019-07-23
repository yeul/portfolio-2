import React, { Fragment } from "react";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/main.scss";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='main-page-container container'>
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
          <div className='our-numbers-container container'>
            <div className='our-numbers-header-row row no-gutters'>
              <div className='our-numbers-header-col col-lg-12'>
                <div className='our-numbers-title'>Our numbers</div>
                <div className='our-numbers-subtitle'>At a glance</div>
              </div>
            </div>
            <div className='stats-row row'>
              <div className='stat-col col-lg-3'>
                <div className='stat'>
                  <div className='stat-number'>25</div>
                  <div>employees</div>
                </div>
              </div>
              <div className='stat-col col-lg-3'>
                <div className='stat'>
                  <div className='stat-number'>20 +</div>
                  <div>customers</div>
                </div>
              </div>
              <div className='stat-col col-lg-3'>
                <div className='stat'>
                  <div className='stat-number'>500 +</div>
                  <div className='stat-text'>thousand dollars in annual revenue</div>
                </div>
              </div>
            </div>
            <div className='img-container'>
              <img src='../static/images/business_svg.svg' className='business-svg' alt='' />
            </div>
          </div>
          <div className='how-we-work-container container'>
            <h2 className='how-we-work-header'>How We Work</h2>
            <div className='process-row row'>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='steps step-1-header'>1 Conceptualize</div>
                <div className='steps-text'>
                  Beginning with a deeper understanding of the products and services our customers provide, we discuss what the goals of the project are. What is the website
                  setting out to achieve? Who is the audience? What message are we conveying? What kind of interactivity do we wish to provide? Taking time to answer these
                  questions allows us to conceptualize a design that will satisfy all of these needs and more in order to propel brands forward.
                </div>
              </div>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='steps step-2-header'>2 Strategize</div>
                <div className='steps-text'>
                  We assess your current position in the marketplace, gathering information from customers and stakeholders in the form of surveys and workshops. Using this
                  information, we strategize the best way to achieve growth and profitability through your company's digital voice. One of our main goals is to help our clients
                  discover more of themselves and share that with their customers through online communications.
                </div>
              </div>
            </div>
            <div className='process-row row'>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='steps step-3-header'>3 Design</div>
                <div className='steps-text'>
                  Form or function? You can have both! We understand that getting a message across is vital to converting the individuals who visit your website into customers.
                  Simplicity is a crucial aspect of our creative process and great design has the ability to solve many problems. SOURST's design team take your brand identity,
                  campaigns, and services into account in order to create a cohesive result. Plus, we think you're going to love how it looks too.
                </div>
              </div>
              <div className='process-col col-lg-6 col-md-6 col-sm'>
                <div className='steps step-4-header'>4 Launch & Scale</div>
                <div className='steps-text'>
                  SOURST takes its clients to new heights in the digital space. By using our knowledge of you, we make sure your brands develop in other areas as well. We are
                  mindful of your growth after launch and provide consistently excellent service in the form of apps, photography, print, and (of course) websites. SOURST grows
                  when our clients do, allowing us to provide the very best to the very best in their fields.
                </div>
              </div>
            </div>
          </div>
          <div className='we-are-container container'>
            <div className='we-are-row row'>
              <div className='we-are-col col-lg-12'>
                <h2 className='we-are-header'>We Are...</h2>
              </div>
              <div className='career-col col-lg-4 col-md-4 col-sm-6'>
                <ul className='careers-list'>
                  <li>Business analysts</li>
                  <li>Cloud architects</li>
                  <li>Community managers</li>
                  <li>Database architects</li>
                  <li>DevOps</li>
                </ul>
              </div>
              <div className='career-col col-lg-4 col-md-4 col-sm-6'>
                <ul className='careers-list'>
                  <li>Front-end developers</li>
                  <li>Illustrators</li>
                  <li> Motion designers</li>
                  <li>Photographers</li>
                  <li> PR & Marketing </li>
                </ul>
              </div>
              <div className='career-col col-lg-4 col-md-4 col-sm-6'>
                <ul className='careers-list'>
                  <li>Product managers</li>
                  <li>QA</li>
                  <li> SEO/SEM specialists</li>
                  <li>Support engineers</li>
                  <li>UX/UI designers</li>
                </ul>
              </div>
            </div>
            <div className='end-mark-row row'>
              <div className='end-mark-col col-lg-12'>
                <div className='end-mark-symbol'>❤</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default About;
