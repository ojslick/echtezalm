import React from 'react';
import ReactStarRating from 'react-star-ratings-component';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';

import history from '../../history';

import Footer from '../../shared/components/Footer/Footer';

import Button from '../../shared/components/UIElements/Button';
import backArrow from './images/backArrow.svg';
import salmon from './images/salmon.svg';

import './Product.css';

class PlanDescription extends React.Component {
  state = {
    description: true,
    review: false,
    count: 0,
    starCount: 3.5,
  };

  UNSAFE_componentWillMount() {
    if (Object.entries(this.props.collection).length === 0) {
      history.goBack();
    }
  }

  componentDidMount() {
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    this.props.addToCart(localCartData);

    window.scrollTo(0, 0);
    if (Object.entries(this.props.collection).length === 0) {
      history.goBack();
    }
  }

  handleColorChange = (name) => {
    if (name === 'description') {
      this.setState({ description: true });
      this.setState({ review: false });
    } else {
      this.setState({ description: false });
      this.setState({ review: true });
    }
  };

  handleCounter = (operation) => {
    if (operation === 'add') {
      this.setState({ count: this.state.count + 1 });
    } else {
      if (this.state.count === 0) {
        return;
      } else {
        this.setState({ count: this.state.count - 1 });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="product-page-container">
          <div
            className="product-page-back"
            onClick={() => history.push('/webwinkel')}
          >
            <img src={backArrow} alt="back" />
            <p className="product-page-back-text">Back</p>
          </div>
          <div className="product-page-pictures">
            <div className="product-page-pictures-left">
              <img
                src={salmon}
                alt="salmon"
                className="product-page-pictures-left-displayed-pic"
              />

              <div className="product-page-pictures-left-small-pics-container">
                <img
                  src={salmon}
                  className="product-page-pictures-left-small-pics"
                  alt="salmon"
                />
                <img
                  src={salmon}
                  className="product-page-pictures-left-small-pics"
                  alt="salmon"
                />
                <img
                  src={salmon}
                  className="product-page-pictures-left-small-pics"
                  alt="salmon"
                />
              </div>
            </div>
            <div className="product-page-pictures-right">
              <h1 className="product-page-pictures-right-product-title">
                {this.props.collection.name}
              </h1>
              <ul className="product-page-pictures-right-product-description-container">
                <li className="product-page-pictures-right-product-description">
                  {this.props.collection.highlight}
                </li>
              </ul>
              <p className="product-page-pictures-right-product-price">
                {`€${this.props.collection.price}`}
              </p>
              <div className="product-page-pictures-right-product-add-to-cart">
                <Button
                  width="65%"
                  background="#AD976E"
                  color="#FFFFFF"
                  border="none"
                  text="Select Plan"
                  onClick={() => history.push('/verzameling/plan/custombox')}
                />
              </div>
            </div>
          </div>
          <div className="product-page-pictures-right-product-toggle-review">
            <Button
              width="47%"
              background={this.state.description ? '#AD976E' : '#0f0f0f'}
              color={this.state.description ? '#FFFFFF' : '#AD976E'}
              border={this.state.description ? 'none' : '1px solid #FFFFFF'}
              text="Omschrijving"
              onClick={() => this.handleColorChange('description')}
            />
            <Button
              width="47%"
              background={this.state.review ? '#AD976E' : '#0f0f0f'}
              color={this.state.review ? '#FFFFFF' : '#AD976E'}
              border={this.state.review ? 'none' : '1px solid #FFFFFF'}
              text="Recensies"
              onClick={() => this.handleColorChange('review')}
            />
          </div>
          <div className="product-page-pictures-right-product-toggle-review-or-description">
            {this.state.description ? (
              <p className="product-page-pictures-right-product-toggle-review-or-description-text">
                {this.props.collection.description}
              </p>
            ) : (
              <div className="product-page-pictures-right-product-toggle-review-or-description-reviews">
                <ReactStarRating
                  numberOfStar={5}
                  numberOfSelectedStar={4}
                  colorFilledStar="#DAC08E"
                  colorEmptyStar="white"
                  starSize="20px"
                  bo
                  spaceBetweenStar="10px"
                  disableOnSelect={true}
                  onSelectStar={(val) => {
                    console.log(val);
                  }}
                />
                <h3 className="product-page-pictures-right-product-toggle-review-or-description-reviews-name">
                  Titel
                </h3>
                <p className="product-page-pictures-right-product-toggle-review-or-description-reviews-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas id molestie viverra sapien, mauris, quis senectus.
                  Turpis at suscipit et tempor dolor praesent tellus. Aliquet
                  facilisi etiam erat mauris nunc integer dolor nibh ut. Gravida
                  commodo purus, praesent enim, aliquet augue vel. Luctus odio
                  ve
                </p>
                <p className="product-page-pictures-right-product-toggle-review-or-description-reviews-date">
                  22 Sept 2020 door{' '}
                  <span className="product-page-pictures-right-product-toggle-review-or-description-reviews-by">
                    Angel Raymond
                  </span>
                </p>
                <div className="product-page-pictures-right-product-toggle-review-line"></div>
                <div style={{ marginTop: '39px' }}>
                  <Button
                    width="171px"
                    background="#0f0f0f"
                    color="#C1C1C1"
                    border="1px solid #FFFFFF"
                    text="Meer laden"
                  />
                </div>
              </div>
            )}
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

export default connect(mapStateToProps, { addToCart })(PlanDescription);
