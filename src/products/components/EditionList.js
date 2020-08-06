import React from 'react';

import Edition from './Edition';

import './EditionList.css';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

class EditionList extends React.Component {
  state = { collection: [] };

  async componentDidMount() {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/collection/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    this.setState({ collection: responseData.collection });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.collection[0] ? (
          <div className="edition-list">
            {this.state.collection[0]
              ? this.state.collection.map((collection) => (
                  <Edition title={collection.name} key={collection.id} />
                ))
              : ''}
          </div>
        ) : (
          <div className="edition-list-loading-spinner">
            <LoadingSpinner container />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default EditionList;
