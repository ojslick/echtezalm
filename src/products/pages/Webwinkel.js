import React from 'react';

import Button from '../../shared/components/UIElements/Button';
import Paginate from '../../shared/components/UIElements/Pagination';
import ProductList from '../components/ProductList';
import Edition from '../components/Edition';

import './Webwinkel.css';
import Footer from '../../shared/components/Footer/Footer';

class Webwinkel extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
            <ProductList />
          </div>

          <div className="webwinkel-pagination">
            <Paginate totalItemsCount={450} />
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
            <Edition title="Black Edition" />
            <Edition title="Dutch Edition" />
            <Edition title="Classic Edition" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Webwinkel;
