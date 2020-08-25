import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';

import EmptyCart from './EmptyCart';

import history from '../../history';

import './Cart.css';
import Button from '../../shared/components/UIElements/Button';
import Footer from '../../shared/components/Footer/Footer';

import CartProduct from './images/productCart.jpg';
import Trash from './images/trash.svg';

class Cart extends React.Component {
  state = { cartItems: [] };

  componentDidMount() {
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    this.props.addToCart(localCartData);
    !JSON.parse(localStorage.getItem('cart'))
      ? localStorage.setItem('cart', JSON.stringify([]))
      : this.setState({
          cartItems: JSON.parse(localStorage.getItem('cart')),
        });
  }

  handleRemoveItem = (product) => {
    let items = JSON.parse(localStorage.getItem('cart'));
    items = items.filter((item) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(items));
    if (items.length === 0) {
      localStorage.removeItem('cart');
    }
    const cartItems = !JSON.parse(localStorage.getItem('cart'))
      ? []
      : JSON.parse(localStorage.getItem('cart'));

    this.setState({ cartItems });
    this.props.addToCart(cartItems);
  };

  handleSubTotal = () => {
    const total = this.state.cartItems.map(({ price, count }) =>
      !count ? price * 1 : price * count
    );

    return total.reduce((a, b) => a + b);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.cartItems.length > 0 ? (
          <div
            className="cart-page-container"
            style={{ alignItems: 'flex-end' }}
          >
            <div style={{ textAlign: 'center', width: '100%' }}>
              <h1 className="cart-container-header">Your Shopping Cart</h1>
            </div>

            <div className="cart-product-container">
              <div className="cart-product-column-title">
                <div className="cart-product-column-title-product">
                  {`Product(${this.state.cartItems.length})`}
                </div>
                <div className="cart-product-column-title-quantity">
                  Quantity
                </div>
                <div className="cart-product-column-title-price">
                  Unit Price
                </div>
                <div className="cart-product-column-title-sub-total">
                  Sub Total
                </div>
              </div>
              {this.state.cartItems.map((product, index) => (
                <div className="cart-product-column-title-item" key={index}>
                  <div
                    className="cart-product-column-title-product"
                    style={{ display: 'flex' }}
                  >
                    <>
                      <img
                        src={CartProduct}
                        alt="cart-product"
                        className="cart-product-column-title-product-image"
                      />
                      <div className="cart-product-column-title-product-flex">
                        {product.name}
                        <div
                          style={{ display: 'flex', cursor: 'pointer' }}
                          onClick={() => this.handleRemoveItem(product)}
                        >
                          <img
                            src={Trash}
                            alt="trash"
                            style={{ marginRight: '10.52px' }}
                          />
                          <p className="cart-product-column-title-product-remove">
                            Remove
                          </p>
                        </div>
                      </div>
                    </>
                  </div>

                  <div className="cart-product-column-title-quantity">
                    {!product.count ? 1 : product.count}
                  </div>

                  <div className="cart-product-column-title-price">
                    {product.price}
                  </div>

                  <div className="cart-product-column-title-sub-total">
                    {!product.count
                      ? product.price * 1
                      : product.price * product.count}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-product-total-container">
              <div className="cart-product-total-shipping">
                <p className="cart-product-total-shipping-left">
                  Shipping Fee:
                </p>
                <p className="cart-product-total-shipping-right">€20</p>
              </div>
              <div className="cart-product-total-shipping">
                <p className="cart-product-total-shipping-left">Sub Total:</p>
                <p className="cart-product-total-shipping-right">
                  €{this.handleSubTotal()}
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: '50px',
                display: 'flex',
              }}
            >
              <div style={{ marginRight: '15px' }}>
                <Button
                  width="198px"
                  background="none"
                  color="white"
                  text="Continue Shopping"
                  border="1px solid #DAC08E"
                  marginRight="15px"
                  onClick={() => history.push('/webwinkel')}
                />
              </div>

              <Button
                width="198px"
                background="#AD976E"
                color="white"
                text="Checkout"
                border="none"
                onClick={() => history.push('/checkout')}
              />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { cartProducts: state.cart };
};

export default connect(mapStateToProps, { addToCart })(Cart);
