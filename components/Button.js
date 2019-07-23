import React, { Fragment } from "react";
import Link from "next/link";

const Button = props => {
  return (
    <Fragment>
      <Link href='/about'>
        <a className='button'>
          <span className='button-label'>{props.btnLabel}</span>
        </a>
      </Link>
    </Fragment>
  );
};

export default Button;
