import React from 'react';

import history from '../../history';

import Shopper from './images/shopper.svg';

import './EmptyCart.css';
import Button from '../../shared/components/UIElements/Button';

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-page-container">
        <h1 className="cart-container-header">Your Shopping Cart</h1>
        <div className="cart-empty-cart-pic-container">
          <img src={Shopper} alt="cart-shopper" />
        </div>
        <p className="cart-empty-cart-text">Your cart is empty</p>
        <p className="cart-empty-cart-webshop">
          Goto our webshop and add an item to your cart
        </p>

        <Button
          width="198px"
          background="#AD976E"
          color="white"
          text="Continue Shopping"
          border="none"
          marginTop="56px"
          onClick={() => history.push('/webwinkel')}
        />
      </div>
    );
  }
}

export default Cart;
