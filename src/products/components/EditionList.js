import React from 'react';

import Edition from './Edition';

import './EditionList.css';

class EditionList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Edition title={this.props.name} key={this.props.id} />
      </React.Fragment>
    );
  }
}

export default EditionList;
