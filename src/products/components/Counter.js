import React from 'react';

class Counter extends React.Component {
  state = { count: 1 };

  handleCounter = (operation) => {
    if (operation === 'add' && this.state.count <= 17) {
      this.setState({ count: this.state.count + 1 });
    } else {
      if (this.state.count === 0 && this.state.count >= 0) {
        return;
      } else {
        this.setState({ count: this.state.count - 1 });
      }
    }
  };

  renderCount = () => {
    if (this.state.count === 17) {
      return 17;
    } else if (this.state.count === 0) {
      return 0;
    } else {
      return this.state.count - 1;
    }
  };

  render() {
    return (
      <div className="custombox-product-details-counter">
        <p
          style={{ color: 'white', cursor: 'pointer' }}
          onClick={() => {
            this.handleCounter('minus');
            this.props.count(this.props.name, this.state.count);
            this.props.amountCount();
            this.props.negativeCount();
          }}
        >
          -
        </p>
        <div className="custombox-product-details-counter-number">
          {this.renderCount()}
        </div>
        <p
          style={{ color: 'white', cursor: 'pointer' }}
          onClick={() => {
            this.handleCounter('add');
            this.props.count(this.props.name, this.state.count);
            this.props.amountCount();
          }}
        >
          +
        </p>
      </div>
    );
  }
}

export default Counter;
