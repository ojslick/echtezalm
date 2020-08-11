import React from 'react';
import { connect } from 'react-redux';

import { collection } from '../../actions/';
import history from '../../history';

import Counter from '../components/Counter';
import Button from '../../shared/components/UIElements/Button';

import custombox from './images/custombox.jpg';
import './CustomBox.css';
import Footer from '../../shared/components/Footer/Footer';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

class CustomBox extends React.Component {
  state = {
    selectedProducts: {},
    products: [],
    amount: 0,
    productsListCount: 17,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
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
    };

    fetchProducts();
  }

  handleSelectedProduct = (name, value) => {
    if (this.state.productsListCount > 0) {
      this.setState({
        selectedProducts: { ...this.state.selectedProducts, [name]: value },
      });
    }
  };

  handleAmountCount = (name, value) => {
    if (this.state.productsListCount > 0)
      this.setState({
        amount: this.state.amount + value,
        productsListCount: this.state.productsListCount - 1,
      });
  };

  handleNegativeCount = (name, value) => {
    if (this.state.productsListCount === 17) {
      this.setState({
        amount: this.state.amount,
        productsListCount: this.state.productsListCount,
      });
    } else {
      this.setState({
        amount: this.state.amount - value,
        productsListCount: this.state.productsListCount + 1,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="landing-page-container webwinkel"
          style={{
            background: '#0F0F0F',
            minHeight: '80vh',
            padding: '79px 10%',
          }}
        >
          <h1 className="landing-page-collection-onze-collectie">
            Select Your Items
          </h1>
          <div className="custombox-price-container">
            <p className="custombox-price">€{this.state.amount}</p>
            <div className="custombox-price-proceed">
              <p className="custombox-price-proceed-remaining">
                {this.state.productsListCount} Selection(s) Remaining
              </p>
              <Button
                width="47%"
                background="#AD976E"
                color="#FFFFFF"
                border="none"
                text="Proceed to Plan"
                onClick={() => {
                  history.push('/verzameling/plan/plan-review');
                  this.props.collection({
                    price: this.state.amount,
                    products: this.state.selectedProducts,
                  });
                }}
              />
            </div>
          </div>
          <div className="custombox-products-container">
            {this.state.products[0] ? (
              this.state.products.map((prod) => {
                return (
                  <div
                    className="custombox-product"
                    style={{ marginTop: '20px' }}
                    key={prod.id}
                  >
                    <img
                      src={custombox}
                      alt="custom-box"
                      className="custombox-product-image"
                    />
                    <div className="custombox-product-details">
                      <p className="custombox-product-details-product-name">
                        {prod.name}
                      </p>
                      <Counter
                        count={this.handleSelectedProduct}
                        name={prod.name.split(' ').join('')}
                        amountCount={() =>
                          this.handleAmountCount(
                            prod.name.split(' ').join(''),
                            prod.price
                          )
                        }
                        negativeCount={() =>
                          this.handleNegativeCount(
                            prod.name.split(' ').join(''),
                            prod.price
                          )
                        }
                      />
                      <p className="custombox-product-details-counter-text">
                        See details
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  height: '328px',
                  width: '261px',
                  marginTop: '20px',
                }}
              >
                <LoadingSpinner container />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(null, { collection })(CustomBox);
