import React, { Fragment } from "react";
import Link from "next/link";

const Button = props => {
  return (
    <Fragment>
      <Link href='/about'>
        <a>
          <button className='button' type='button'>
            <span className='button-label'>{props.btnLabel}</span>
          </button>
        </a>
      </Link>
    </Fragment>
  );
};

export default Button;
