import React, { Fragment } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <div className='logo-section container-fluid'>
        <div className='row no-gutters'>
          <div className='company-logo col-lg-12'>
            <Link href='/'>
              <a>
                <div className='logo'>sourst</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
