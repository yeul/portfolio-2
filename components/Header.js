import React, { Fragment } from "react";
import Link from "next/link";

import Hamburger from "../components/Hamburger";

const Header = () => {
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
    </Fragment>
  );
};

export default Header;
