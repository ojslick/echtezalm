import React from 'react';
import { connect } from 'react-redux';

import { collection, addToCart } from '../../actions';

import history from '../../history';

import BlackEdition from './images/collection.jpg';

import './Plan.css';
import Button from '../../shared/components/UIElements/Button';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Footer from '../../shared/components/Footer/Footer';

class Plan extends React.Component {
  state = { collection: [] };

  componentDidMount() {
    const localCartData = JSON.parse(localStorage.getItem('cart'));
    this.props.addToCart(localCartData);

    window.scrollTo(0, 0);
    const fetchCollection = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/collection/`,
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

      this.setState({ collection: responseData.collection });
    };

    fetchCollection();
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="landing-page-container webwinkel"
          style={{
            background: '#0F0F0F',
            minHeight: '100vh',
            padding: '79px 5%',
          }}
        >
          <h1 className="landing-page-collection-onze-collectie">
            Select Your Box Collection
          </h1>
          <div className="plan-collection-list">
            {this.state.collection[0] ? (
              this.state.collection.map((collection) => (
                <div className="plan-collection-list-box-1" key={collection.id}>
                  <img
                    src={BlackEdition}
                    alt="black-edition"
                    className="plan-collection-list-box-1-image"
                  />
                  <div className="plan-collection-list-box-1-details">
                    <h1 className="plan-collection-list-box-1-details-black">
                      {collection.name}
                    </h1>
                    <p className="plan-collection-list-box-1-details-pieces">
                      {collection.pieces}
                    </p>
                    <h1 className="plan-collection-list-box-1-details-price">
                      {`€${collection.price}`}
                    </h1>
                    <p
                      className="plan-collection-list-box-1-details-see-features"
                      onClick={() => {
                        this.props.collection(collection);
                        history.push('/verzameling/plan/description');
                      }}
                    >
                      See features
                    </p>

                    <div style={{ marginTop: '30px' }}>
                      <Button
                        width="198px"
                        background="#AD976E"
                        color="white"
                        text="Select Plan"
                        border="none"
                        onClick={() => {
                          this.props.collection(collection);
                          history.push('/verzameling/plan/plan-review');
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="edition-list-loading-spinner"
                style={{ width: '360px', height: '593px' }}
              >
                <LoadingSpinner container />
              </div>
            )}
          </div>
          <h1
            className="landing-page-collection-onze-collectie"
            style={{ marginTop: '80px' }}
          >
            Select and Customize Your Box
          </h1>
          <p className="landing-page-collection-onze-exclusieve">
            Choose from our selection of salmon and create your perfect box
          </p>
          <div className="plan-collection-customize-box">
            <div
              className="plan-collection-list-box-1"
              style={{ height: '510px' }}
            >
              <img
                src={BlackEdition}
                alt="black-edition"
                className="plan-collection-list-box-1-image"
              />
              <div className="plan-collection-list-box-1-details">
                <h1 className="plan-collection-list-box-1-details-black">
                  Premium Custom Box
                </h1>
                <h1 className="plan-collection-list-box-1-details-price">
                  <span className="plan-collection-list-box-1-details-price-span">
                    Starting from
                  </span>{' '}
                  €390.95
                </h1>

                <div style={{ marginTop: '30px' }}>
                  <Button
                    width="198px"
                    background="#AD976E"
                    color="white"
                    text="Select Plan"
                    border="none"
                    onClick={() => history.push('/verzameling/plan/custombox')}
                  />
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

export default connect(null, { collection, addToCart })(Plan);
