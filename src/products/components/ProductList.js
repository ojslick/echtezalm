import React from 'react';

import ProductItem from '../components/ProductItem';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import productImg from './images/product.jpg';

import './ProductList.css';

class ProductList extends React.Component {
  state = { addToCart: false, products: [] };

  async componentDidMount() {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/products/`,
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

    this.setState({ products: responseData.products });
  }

  handleAddToCart = () => {
    this.setState({ addToCart: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.products[0] ? (
          <div className={`product-list ${this.props.className}`}>
            {this.state.products.map((product) => (
              <ProductItem
                key={product.id}
                src={productImg}
                productName={product.name}
                price={`€${product.price}`}
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
            ))}
          </div>
        ) : (
          <div style={{ marginTop: '72px', height: '424px' }}>
            <LoadingSpinner container />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ProductList;
