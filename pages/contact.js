import React, { Fragment } from "react";

import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/main.scss";

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <div className='contact-section container'>
        <div className='contact-row row'>
          <div className='contact-col-left col-lg-6'>
            <h1 className='contact-header'>Work with SOURST</h1>
            <div className='contact-description-1'>
              We are here to answer any questions you may have about SOURST and what it's like working with us. Drop us a line and we'll get back to you as soon as we can.
            </div>
            <div className='contact-description-2'>If there's something you think that SOURST should be doing in order to make your dreams a reality, let us know!</div>
          </div>
          <div className='contact-col-right col-lg-6'>
            <div className='contact-info-title'>
              <i className='far fa-envelope' /> Email:
            </div>
            <div className='contact-info-content'>
              <a className='contact-link' href='mailto:sourst@sourst.com?subject=Hello!'>
                sourst@sourst.com
              </a>
            </div>
            <div className='contact-info-title'>
              <i className='fas fa-phone-volume' /> Telephone:
            </div>
            <div className='contact-info-content'>
              <a className='contact-link' href='tel:4165550195'>
                (416)-555-0195
              </a>
            </div>
            <div className='contact-info-title'>
              <i className='fas fa-map-pin' /> Address:
            </div>
            <div className='contact-info-content'>
              <Link href='https://www.google.com/maps/search/Toronto,+ON+Canada+M5V+2T6+301+Front+St+W/@43.6425676,-79.3881189,18z'>
                <a className='contact-link' target='_blank'>
                  Toronto, ON <br />
                  Canada M5V 2T6 <br />
                  301 Front St W
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
