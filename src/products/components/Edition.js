import React from 'react';

import './Edition.css';

class Edition extends React.Component {
  render() {
    return (
      // <div
      //   className={`landing-page-collection-${this.props.title
      //     .split(' ')[0]
      //     .toLowerCase()}-edition`}
      // >
      //   <p className="landing-page-collection-black-edition-text">
      //     {this.props.title}
      //   </p>
      // </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            className={`landing-page-collection-${this.props.title
              .split(' ')[0]
              .toLowerCase()}-edition flip-card-front`}
          >
            <p className="landing-page-collection-black-edition-text">
              {this.props.title}
            </p>
          </div>

          <div
            class={`flip-card-back ${this.props.title
              .split(' ')[0]
              .toLowerCase()}`}
          >
            <h1 className="flip-card-back-title">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Edition;
