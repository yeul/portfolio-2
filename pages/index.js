import React, { Fragment } from "react";

import landing from "../styles/landing.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='container=fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-6 col-md-6 col-sm'>Row 1 left side</div>
            <div className='col-lg-6 col-md-6 col-sm'>Row 1 right side</div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>Hi row 2</div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-12'>Hi row 3</div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-7'>Hi row 4</div>
          </div>
          <div className='row no-gutters'>
            <div className='col-lg-7'>Hi row 5</div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>Hi row 6</div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>Row 7 left side</div>
            <div className='col-lg-6'>Row 7 right side</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
