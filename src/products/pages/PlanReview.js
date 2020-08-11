import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';

import collectionPreview from './images/collection-preview.jpg';
import backArrow from './images/backArrow.svg';

import './PlanReview.css';
import Footer from '../../shared/components/Footer/Footer';
import Button from '../../shared/components/UIElements/Button';

class PlanReview extends React.Component {
  state = { count: 1, subTotal: this.props.collection.price };

  UNSAFE_componentWillMount() {
    if (Object.entries(this.props.collection).length === 0) {
      history.goBack();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCounter = (operation) => {
    if (operation === 'add') {
      this.setState({ count: this.state.count + 1 });
      this.setState({
        subTotal: this.state.subTotal + this.props.collection.price,
      });
    } else {
      if (this.state.count === 1) {
        return;
      } else {
        this.setState({ count: this.state.count - 1 });
        this.setState({
          subTotal: this.state.subTotal - this.props.collection.price,
        });
      }
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
          <div className="product-page-back" onClick={() => history.goBack()}>
            <img src={backArrow} alt="back" />
            <p className="product-page-back-text">Back</p>
          </div>
          <div className="plan-review-flex">
            <div className="plan-review-flex-left">
              <img
                src={collectionPreview}
                alt="collection"
                className="plan-review-image"
              />
            </div>
            <div className="plan-review-flex-right">
              <div className="plan-review-flex-right-plan">
                <h1 className="plan-review-flex-right-plan-plan">Plan</h1>
                <p className="plan-review-flex-right-plan-text">
                  {this.props.collection.products
                    ? 'Premium Custom Box'
                    : `${this.props.collection.name} wine - ${this.props.collection.pieces}`}
                </p>
                <p
                  className="plan-review-flex-right-plan-text-change"
                  onClick={() => history.goBack()}
                >
                  Change
                </p>
              </div>
              <div
                className="plan-review-flex-right-plan"
                style={{ marginTop: '27px' }}
              >
                <h1 className="plan-review-flex-right-plan-plan">
                  Subscription Duration
                </h1>
                <div className="plan-review-flex-right-subscription-details">
                  <div className="plan-review-flex-right-subscription-details-months">
                    <p className="plan-review-flex-right-subscription-details-months-header">
                      Number of Months
                    </p>
                    <div className="custombox-product-details-counter">
                      <p
                        style={{ color: 'white', cursor: 'pointer' }}
                        onClick={() => {
                          this.handleCounter('minus');
                        }}
                      >
                        -
                      </p>
                      <div className="custombox-product-details-counter-number">
                        {this.state.count}
                      </div>
                      <p
                        style={{ color: 'white', cursor: 'pointer' }}
                        onClick={() => {
                          this.handleCounter('add');
                        }}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="plan-review-flex-right-subscription-details-price">
                    <p className="plan-review-flex-right-subscription-details-months-header">
                      Monthly Price
                    </p>
                    <p className="plan-review-flex-right-subscription-details-months-text">
                      €{this.props.collection.price}
                    </p>
                  </div>
                  <div className="plan-review-flex-right-subscription-details-price">
                    <p className="plan-review-flex-right-subscription-details-months-header">
                      Sub Total
                    </p>
                    <p className="plan-review-flex-right-subscription-details-months-text">
                      €{this.state.subTotal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="plan-review-checkout-button">
            <Button
              width="198px"
              background="#AD976E"
              color="#FFFFFF"
              border="none"
              text="Proceed to checkout"
              onClick={() => history.push('/checkout')}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { collection: state.collection };
};

export default connect(mapStateToProps)(PlanReview);
