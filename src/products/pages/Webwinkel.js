import React from 'react';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Button from '../../shared/components/UIElements/Button';
import Paginate from '../../shared/components/UIElements/Pagination';
import ProductList from '../components/ProductList';
import EditionList from '../components/EditionList';

import './Webwinkel.css';
import Footer from '../../shared/components/Footer/Footer';

class Webwinkel extends React.Component {
  state = { products: [], collection: [] };

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

    fetchProducts();
    fetchCollection();
  }
  render() {
    return (
      <div className="landing-page-container webwinkel">
        <div
          className="landing-page-background-pic webwinkel animate__animated animate__backInDown"
          style={{ paddingLeft: '10%', paddingRight: '10%' }}
        >
          <h1 className="landing-page-background-pic-text">
            Een bijzondere ervaring van smaak en traditie
          </h1>
          <div
            className="landing-page-button-container animate__animated animate__backInUp"
            style={{ justifyContent: 'center' }}
            onClick={() => window.scrollTo(0, 900)}
          >
            <Button
              width="198px"
              background="#AD976E"
              color="black"
              text="Winkel nu"
              border="none"
              animated
            />
          </div>
        </div>

        <div className="landing-page-collection-container webwinkel">
          <h1 className="landing-page-collection-onze-collectie webwinkel">
            Online winkel
          </h1>
          <p className="landing-page-collection-onze-exclusieve">
            Alleen de beste, speciaal voor jou geselecteerd
          </p>
          <div
            className="webwinkel-products-remaning"
            style={{ marginTop: '30px' }}
          >
            <p className="webwinkel-products-remaning-left">
              12 resultaten beschikbaar
            </p>
            <div className="webwinkel-products-remaning-right">
              <ul className="nav-container-align-arrow-down">
                <li className="nav-text" style={{ marginRight: '5px' }}>
                  Sort by
                </li>

                <div
                  className="nav-text"
                  style={{
                    cursor: 'pointer',
                    transform: 'rotate(90deg)',
                  }}
                >
                  >
                </div>

                <ul className="nav-dropdown">
                  <li className="nav-text">Top selling</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="landing-page-products">
            <div
              className="landing-page-products"
              style={{ minHeight: '450px' }}
            >
              <>
                {this.state.products[0] ? (
                  this.state.products.map((product) => (
                    <div
                      className="animate__animated animate__pulse"
                      key={product.id}
                    >
                      <ProductList
                        key={product.id}
                        price={product.price}
                        name={product.name}
                        prod={product}
                      />
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      marginTop: '72px',
                      height: '424px',
                      width: '265px',
                    }}
                  >
                    <LoadingSpinner container />
                  </div>
                )}
              </>
            </div>
          </div>

          <div className="webwinkel-pagination">
            <Paginate
              totalItemsCount={this.state.products.length}
              itemsCountPerPage={12}
              pageRangeDisplayed={5}
            />
          </div>
        </div>
        <div className="webwinkel-line"></div>
        <h1 className="landing-page-collection-onze-collectie webwinkel">
          Meer pakketplan nodig?
        </h1>
        <p className="landing-page-collection-onze-exclusieve">
          Bekijk onze collectie, waar je voor elk plan het beste krijgt
        </p>
        <div className="landing-page-collection-container webwinkel">
          <div className="landing-page-collection-edition webwinkel">
            {this.state.collection[0] ? (
              this.state.collection.map((collection) => (
                <EditionList key={collection.id} name={collection.name} />
              ))
            ) : (
              <div
                className="edition-list-loading-spinner"
                style={{ width: '360px' }}
              >
                <LoadingSpinner container />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Webwinkel;
