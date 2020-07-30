import React from 'react';

import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <>
        {this.props.animated ? (
          <button
            className="btn btn-white btn-animate"
            style={{
              width: this.props.width,
              height: '51px',
              background: this.props.background,
              color: this.props.color,
              border: this.props.border,
              cursor: 'pointer',
              marginTop: this.props.marginTop,
            }}
          >
            {this.props.text}
          </button>
        ) : (
          <button
            style={{
              width: this.props.width,
              height: '51px',
              background: this.props.background,
              color: this.props.color,
              border: this.props.border,
              cursor: 'pointer',
              marginTop: this.props.marginTop,
            }}
            className="button-style"
            onClick={this.props.onClick}
          >
            {this.props.text}
          </button>
        )}
      </>
    );
  }
}

export default Button;
