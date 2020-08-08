import React from 'react';

import { connect } from 'react-redux';

import { product } from '../../actions';

import history from '../../history';
import Button from '../../shared/components/UIElements/Button';

import './ProductItem.css';

class ProductItem extends React.Component {
  render() {
    return (
      <div
        className="product-card-container"
        onClick={() => {
          history.push('/webwinkel/product');
          this.props.product(this.props.prod);
        }}
        style={{ cursor: 'pointer' }}
      >
        <img src={this.props.src} alt="product" className="product-card" />
        <div className="product-card-body">
          <>
            <h1 className="product-card-body-product-name">
              {this.props.productName}
            </h1>
            <p className="product-card-body-product-price">
              {this.props.price}
            </p>
          </>

          <div className="product-card-body-product-button">
            <Button
              width="100%"
              background={this.props.background}
              color={this.props.color}
              border={this.props.border}
              text={this.props.text}
              onClick={this.props.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { product })(ProductItem);
