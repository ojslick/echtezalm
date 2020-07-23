import React from 'react';

import './LandingPage.css';

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-page-container">
          <div className="landing-page-red-bar-timer">
            <p className="landing-page-red-bar-timer-text">
              03d: 03u: 24m tot volgende verzending
            </p>
          </div>
          <div className="landing-page-background-pic">
            <p className="landing-page-background-pic-text">
              Een bijzondere ervaring van smaak en traditie
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
