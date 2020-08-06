import React from 'react';

import collection from './images/collection.jpg';

import './Edition.css';

class Edition extends React.Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flip-card-image ">
            <img
              src={collection}
              alt="collection"
              className="flip-card-image-img"
            />
            <p className="flip-card-front-title">{this.props.title}</p>
          </div>

          <div className="flip-card-back flip-card-image">
            <img
              src={collection}
              alt="collection"
              className="flip-card-image-img-back"
            />
            <h1 className="flip-card-back-title">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Edition;
