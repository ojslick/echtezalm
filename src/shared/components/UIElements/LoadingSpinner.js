import React from 'react';
import { Loader } from 'semantic-ui-react';

class LoadingSpinner extends React.Component {
  render() {
    return (
      <>
        {this.props.container ? (
          <div className="ui segment" style={{ width: '100%', height: '100%' }}>
            <div className="ui active transition visible dimmer">
              <div className="content">
                <div className="ui loader"></div>
              </div>
            </div>
          </div>
        ) : (
          <Loader active inline="centered" />
        )}
      </>
    );
  }
}

export default LoadingSpinner;
