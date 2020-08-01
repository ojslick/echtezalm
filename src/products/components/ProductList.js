import React from 'react';

import ProductItem from '../components/ProductItem';
import product from './images/product.jpg';

import './ProductList.css';

class ProductList extends React.Component {
  state = { addToCart: false };

  handleAddToCart = () => {
    this.setState({ addToCart: true });
  };

  render() {
    return (
      <div className={`product-list ${this.props.className}`}>
        <ProductItem
          src={product}
          productName="Product Name"
          price="€39.95"
          background={this.state.addToCart ? 'black' : '#DAC08E'}
          color={this.state.addToCart ? '#DAC08E' : 'white'}
          border={this.state.addToCart ? '1px solid #DAC08E' : 'none'}
          text={
            this.state.addToCart
              ? 'Toegevoegd aan winkelwagen'
              : 'Voeg toe aan winkelkar'
          }
          onClick={this.handleAddToCart}
        />
        <ProductItem
          src={product}
          price="€39.95"
          productName="Product Name"
          background="#AD976E"
          color="white"
          border="none"
          text="Voeg toe aan winkelkar"
        />
        <ProductItem
          src={product}
          price="€39.95"
          productName="Product Name"
          background="#AD976E"
          color="white"
          border="none"
          text="Voeg toe aan winkelkar"
        />
        <ProductItem
          src={product}
          price="€39.95"
          productName="Product Name"
          background="#AD976E"
          color="white"
          border="none"
          text="Voeg toe aan winkelkar"
        />
      </div>
    );
  }
}

export default ProductList;
