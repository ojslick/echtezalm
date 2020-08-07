import React from 'react';
import ReactStarRating from 'react-star-ratings-component';

import history from '../../history';

import Button from '../../shared/components/UIElements/Button';
import backArrow from './images/backArrow.svg';
import salmon from './images/salmon.svg';

import './Product.css';
import ProductList from '../components/ProductList';
import Footer from '../../shared/components/Footer/Footer';

class Product extends React.Component {
  state = { description: true, review: false, count: 0, starCount: 3.5 };

  componentDidMount() {
    window.scrollTo(0, 0);
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
                />
                <img
                  src={salmon}
                  className="product-page-pictures-left-small-pics"
                />
                <img
                  src={salmon}
                  className="product-page-pictures-left-small-pics"
                />
              </div>
            </div>
            <div className="product-page-pictures-right">
              <h1 className="product-page-pictures-right-product-title">
                Wild Caught Colossal Salmon
              </h1>
              <ul className="product-page-pictures-right-product-description-container">
                <li className="product-page-pictures-right-product-description">
                  amet commodo rutrum. Id justo eget massa ma amet commodo
                  rutrum. Id justo eget massa ma amet commodo rutrum.
                </li>
              </ul>
              <p className="product-page-pictures-right-product-price">
                €39.95
              </p>
              <div className="product-page-pictures-right-product-add-to-cart">
                <div className="product-page-pictures-right-product-add-to-cart-left">
                  <div className="product-page-pictures-right-product-add-to-cart-left-counter">
                    <p
                      style={{ color: 'white', cursor: 'pointer' }}
                      onClick={() => this.handleCounter('minus')}
                    >
                      -
                    </p>
                    <div className="product-page-pictures-right-product-add-to-cart-left-counter-number">
                      {this.state.count}
                    </div>
                    <p
                      style={{ color: 'white', cursor: 'pointer' }}
                      onClick={() => this.handleCounter('add')}
                    >
                      +
                    </p>
                  </div>
                </div>
                <Button
                  width="65%"
                  background="#AD976E"
                  color="#FFFFFF"
                  border="none"
                  text="Voeg toe aan winkelkar"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur amet faucibus amet commodo rutrum. Id justo eget
                massa massa lorem aliquam magna sem. Facilisi consectetur sit
                viverra elit sit purus faucibus. Turpis vitae tempus ac sagittis
                tellus pulvinar enim. Etiam in mattis at rhoncus risus. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
                amet faucibus amet commodo rutrum. Id justo eget massa massa
                lorem aliquam magna sem. Facilisi consectetur sit viverra elit
                sit purus faucibus. Turpis vitae tempus ac sagittis tellus
                pulvinar enim. Etiam in mattis at rhoncus risus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Consectetur amet
                faucibus amet commodo rutrum. Id justo eget massa massa lorem
                aliquam magna sem. Facilisi consectetur sit viverra elit sit
                purus faucibus. Turpis vitae tempus ac sagittis tellus pulvinar
                enim. Etiam in mattis at rhoncus risus
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
              </div>
            )}
          </div>
          <h1 className="landing-page-collection-onze-collectie">
            Klanten kochten ook
          </h1>
          <div className="product-page-product-list">
            <ProductList />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Product;
