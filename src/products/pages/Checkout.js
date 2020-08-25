import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';

import history from '../../history';

import Input from '../../shared/components/FormElements/Input';
import DropDownInput from '../../shared/components/FormElements/DropDownInput';

import Info from './images/info.svg';
import CartProduct from './images/productCart.jpg';

import './Checkout.css';
import { Checkbox } from 'semantic-ui-react';
import Button from '../../shared/components/UIElements/Button';
import Footer from '../../shared/components/Footer/Footer';

class Checkout extends React.Component {
  state = {
    countryOptions: [{ value: 'Netherlands', label: 'Netherlands' }],
    stateOptions: [
      { value: 'Drenthe', label: 'Drenthe' },
      { value: 'Flevoland', label: 'Flevoland' },
      { value: 'Friesland', label: 'Friesland' },
      { value: 'Gelderland', label: 'Gelderland' },
      { value: 'Groningen', label: 'Groningen' },
      { value: 'Limburg', label: 'Limburg' },
      { value: 'Noord-Brabant', label: 'Noord-Brabant' },
      { value: 'Noord-Holland', label: 'Noord-Holland' },
      { value: 'Overijssel', label: 'Overijssel' },
      { value: 'Utrecht', label: 'Utrecht' },
      { value: 'Zeeland', label: 'Zeeland' },
      { value: 'Zuid-Holland', label: 'Zuid-Holland' },
    ],

    email: '',
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    state: '',
    zipCode: '',
    city: '',
    apartment: '',
    phone: '',
    ageValidation: false,
    saveAddress: false,
    cartItems: [],
    errors: {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      country: '',
      state: '',
      zipCode: '',
      city: '',
      phone: '',
    },
  };

  componentWillMount() {
    window.scrollTo(0, 0);
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    this.props.addToCart(localCartData);
    !JSON.parse(localStorage.getItem('cart'))
      ? localStorage.setItem('cart', JSON.stringify([]))
      : this.setState({
          cartItems: JSON.parse(localStorage.getItem('cart')),
        });
  }

  inputValue = (name, value) => {
    this.setState({ [name]: value });
  };

  handleCountrySelect = (option) => {
    this.setState({ country: option.label });
  };

  handleStateSelect = (option) => {
    this.setState({ state: option.label });
  };

  handleErrors = (name, error) => {
    this.setState({ errors: { ...this.state.errors, [name]: error } });
  };

  handleSubTotal = () => {
    console.log('cartItems', this.state.cartItems);
    const total = this.state.cartItems.map(({ price, count }) =>
      !count ? price * 1 : price * count
    );

    console.log('total', total);

    return total.reduce((a, b) => a + b);
  };

  render() {
    console.log('state', this.state);
    return (
      <React.Fragment>
        <div className="checkout-container">
          <h1 className="checkout-header">Checkout</h1>
          <div className="checkout-body-flex">
            <div className="checkout-body-flex-left">
              <p className="checkout-body-flex-left-contact-information">
                Contact Information
              </p>
              <Input
                type="email"
                placeholder="Your email"
                width="100%"
                name="email"
                inputValue={this.inputValue}
                handleErrors={this.handleErrors}
                marginTop="30px"
              />
              <div className="checkout-body-flex-left-contact-delivery">
                <img src={Info} alt="info" style={{ marginRight: '14px' }} />
                <p className="checkout-body-flex-left-contact-delivery-text">
                  Delivery usually takes between 1 - 2 days
                </p>
              </div>
              <p
                className="checkout-body-flex-left-contact-information"
                style={{ marginTop: '50px' }}
              >
                Shipping Address
              </p>
              <div className="checkout-body-flex-left-shipping-name">
                <Input
                  type="text"
                  placeholder="First name"
                  width="47.5%"
                  name="voornaam"
                  inputValue={this.inputValue}
                  handleErrors={this.handleErrors}
                  marginTop="30px"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  width="47.5%"
                  name="achternaam"
                  inputValue={this.inputValue}
                  handleErrors={this.handleErrors}
                  marginTop="30px"
                />
              </div>
              <Input
                type="text"
                placeholder="Company (optional)"
                width="100%"
                name="company"
                inputValue={this.inputValue}
                marginTop="30px"
              />
              <div className="checkout-body-flex-left-shipping-name">
                <DropDownInput
                  options={this.state.countryOptions}
                  value={this.state.value}
                  onChange={this.handleCountrySelect}
                  placeholder="Country"
                />
                <DropDownInput
                  options={this.state.stateOptions}
                  value={this.state.value}
                  onChange={this.handleStateSelect}
                  placeholder="State"
                />
                <Input
                  type="text"
                  placeholder="ZIP code"
                  width="30%"
                  name="zipCode"
                  inputValue={this.inputValue}
                  handleErrors={this.handleErrors}
                  marginTop="30px"
                />
              </div>
              <Input
                type="text"
                placeholder="City"
                width="100%"
                name="city"
                inputValue={this.inputValue}
                handleErrors={this.handleErrors}
                marginTop="30px"
              />
              <Input
                type="text"
                placeholder="Apartment, Suite, etc (optional)"
                width="100%"
                name="apartment"
                inputValue={this.inputValue}
                marginTop="30px"
              />
              <Input
                type="number"
                placeholder="Phone"
                width="100%"
                name="phone"
                inputValue={this.inputValue}
                handleErrors={this.handleErrors}
                marginTop="30px"
              />
              <div className="checkout-checkbox-container">
                <div
                  style={{
                    display: 'flex',
                    height: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Checkbox
                    onClick={() => this.setState({ ageValidation: true })}
                  />

                  <p className="checkout-checkbox-text">
                    I agree i am over 18 year old{' '}
                  </p>
                </div>
              </div>
              <div
                className="checkout-checkbox-container"
                style={{ marginTop: '16px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    height: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Checkbox />

                  <p className="checkout-checkbox-text">Save this address</p>
                </div>
              </div>
              <div
                style={{
                  marginTop: '29px',
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

                {this.state.ageValidation ? (
                  <Button
                    width="198px"
                    background="#AD976E"
                    color="white"
                    text="Continue to payment"
                    border="none"
                    onClick={() => history.push('/payment')}
                  />
                ) : (
                  <Button
                    width="198px"
                    background="#AD976E"
                    color="white"
                    text="Continue to payment"
                    border="none"
                    disable
                  />
                )}
              </div>
            </div>
            <div className="checkout-body-flex-right">
              <div className="checkout-body-flex-right-product-list">
                <div className="checkout-body-flex-right-product-list-top">
                  {this.state.cartItems.map((product) => (
                    <div
                      className="checkout-body-flex-right-product-list-top-product-container"
                      style={{ marginTop: '15px' }}
                    >
                      <div className="checkout-body-flex-right-product-list-top-product-left">
                        <img
                          src={CartProduct}
                          alt="product"
                          className="checkout-body-flex-right-product-list-top-img"
                        />
                        <p className="checkout-body-flex-right-product-list-top-product-name">
                          {product.name}
                        </p>
                      </div>
                      <p className="checkout-body-flex-right-product-list-top-product-price">
                        €{product.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="checkout-body-flex-right-bottom">
                  <div className="checkout-body-flex-right-bottom-shipping">
                    <p className="checkout-body-flex-right-bottom-shipping-left">
                      Shipping Fee:
                    </p>
                    <p className="checkout-body-flex-right-bottom-shipping-right">
                      €20
                    </p>
                  </div>
                  <div className="checkout-body-flex-right-bottom-shipping">
                    <p className="checkout-body-flex-right-bottom-shipping-left">
                      Sub Total:
                    </p>
                    <p className="checkout-body-flex-right-bottom-shipping-right">
                      €{this.handleSubTotal()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('store', state);
  return { cartItems: state.cart };
};

export default connect(mapStateToProps, { addToCart })(Checkout);
