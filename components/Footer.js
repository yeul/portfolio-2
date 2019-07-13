import React, { Fragment } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='footer container-fluid'>
      <div className='footer-row row no-gutters'>
        <div className='footer-logo col-lg-12'>SOURST</div>
      </div>
      <div className='row no-gutters'>
        <div className='contact-info col-lg-7'>
          <div className='footer-nav'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='address-info col-lg-5'>
          <div className='address'>
            Toronto, ON
            <br />
            Canada M5V 2T6
            <br />
            301 Front St W
          </div>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='footer-social-media col-lg-7'>
          <ul>
            <li>
              <i className='fab fa-twitter' />
            </li>
            <li>
              <i className='fab fa-facebook-f' />
            </li>
            <li>
              <i className='fab fa-linkedin-in' />
            </li>
          </ul>
        </div>
        <div className='footer-phone-email col-lg-5'>
          <div className='phone-and-email'>
            (416) 555 0195
            <br />
            sourst@sourst.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
