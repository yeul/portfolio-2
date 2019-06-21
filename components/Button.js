import React, { Fragment } from "react";

const Button = props => {
  return (
    <Fragment>
      <button className='button' type='button'>
        <span className='button-label'>{props.btnLabel}</span>
      </button>
    </Fragment>
  );
};

export default Button;
