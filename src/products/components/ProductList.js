import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';

import ProductItem from '../components/ProductItem';
import productImg from './images/product.jpg';

import './ProductList.css';

class ProductList extends React.Component {
  state = { addToCart: false, products: [] };

  handleAddToCart = () => {
    this.setState({ addToCart: true });
  };

  render() {
    return (
      <React.Fragment>
        <ProductItem
          src={productImg}
          productName={this.props.name}
          price={`€${this.props.price}`}
          background={this.state.addToCart ? 'black' : '#DAC08E'}
          color={this.state.addToCart ? '#DAC08E' : 'white'}
          border={this.state.addToCart ? '1px solid #DAC08E' : 'none'}
          text={
            this.state.addToCart
              ? 'Toegevoegd aan winkelwagen'
              : 'Voeg toe aan winkelkar'
          }
          onClick={() => {
            this.handleAddToCart();
            this.props.onClick();
          }}
          prod={this.props.prod}
        />
      </React.Fragment>
    );
  }
}

export default connect(null, { addToCart })(ProductList);
