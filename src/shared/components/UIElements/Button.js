import React from 'react';

import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <button
        style={{
          width: this.props.width,
          height: '51px',
          background: this.props.background,
          color: this.props.color,
          border: this.props.border,
          cursor: 'pointer',
        }}
        className="button-style"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
