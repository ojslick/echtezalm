import React from 'react';

import Edition from '../components/Edition';
import ProductList from '../components/ProductList';
import Button from '../../shared/components/UIElements/Button';
import Footer from '../../shared/components/Footer/Footer';

import openIcon from './images/open.svg';
import sushi from './images/sushi.svg';
import fish from './images/fish.svg';
import bike from './images/bike.svg';
import star from './images/star.svg';
import arrowLeft from './images/arrowleft.svg';
import arrowRight from './images/arrowright.svg';

import './LandingPage.css';

class LandingPage extends React.Component {
  state = { scrollHeight: '' };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('scroll', this.updateDimensions);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ scrollHeight: window.scrollY });
  };
  render() {
    return (
      <React.Fragment>
        <div className="landing-page-container">
          <div className="landing-page-red-bar-timer">
            <p className="landing-page-red-bar-timer-text">
              03d: 03u: 24m tot volgende verzending
            </p>
          </div>
          <div className="landing-page-background-pic">
            <h1 className="landing-page-background-pic-text animate__animated animate__backInLeft ">
              Een bijzondere ervaring van smaak en traditie
            </h1>

            <div className="landing-page-button-container animate__animated animate__backInRight">
              <Button
                width="40%"
                background="#FFFFFF"
                color="black"
                text="Begin"
                border="none"
                animated
              />

              <Button
                width="40%"
                background="#AD976E"
                color="white"
                text="Verzameling"
                border="none"
                animated
              />
            </div>
          </div>
          <div className="landing-page-collection-container">
            <div className="landing-page-collection-salmon">
              {this.state.scrollHeight >= 424 ? (
                <div className="landing-page-collection-salmon-left animate__animated animate__flipInX ">
                  <h1 className="landing-page-collection-salmon-left-header">
                    Echte zalm; een delicatesse of een mooi gelegenheidscadeau.
                  </h1>
                  <div className="landing-page-collection-salmon-left-text-box">
                    <p className="landing-page-collection-salmon-left-text">
                      Deze traditioneel gerookte zalm is een bijzondere beleving
                      van smaak en traditie. Een zalm die anders wordt gerookt
                      dan de koud gerookte zalm die je kent van speciaalzaken of
                      supermarkten. Deze zalm is anders, lekkerder en exclusief.
                      De traditionele manier van roken en stomen houdt in dat de
                      zalm op de huid wordt gerookt bij een temperatuur van 80
                      graden, waardoor zowel de structuur als de smaak van de
                      zalm behouden blijft. Dit maakt de zalm tot een
                      smakelijke, gezonde traktatie en een delicatesse van hoge
                      kwaliteit voor iedereen die van sfeer en gezelligheid
                      houdt; de Bourgondische manier van leven.
                    </p>
                  </div>
                </div>
              ) : (
                ''
              )}
              {this.state.scrollHeight >= 424 ? (
                <div className="landing-page-collection-salmon-right animate__animated animate__flipInX"></div>
              ) : (
                ''
              )}
            </div>
            <div style={{ marginTop: '83px' }}>
              <h1 className="landing-page-collection-onze-collectie">
                Onze collectie
              </h1>
              <p className="landing-page-collection-onze-exclusieve">
                Onze exclusieve collectie speciaal voor jou
              </p>
            </div>
            <div className="landing-page-collection-edition">
              <Edition title="Black Edition" />
              <Edition title="Dutch Edition" />
              <Edition title="Classic Edition" />
            </div>
            <h1 className="landing-page-collection-onze-collectie margintop">
              Bekijk onze WebShop
            </h1>
            <p className="landing-page-collection-onze-exclusieve">
              Hier kunt u uw verse gerookte zalm bestellen
            </p>
            <div
              className="landing-page-products"
              style={{ minHeight: '450px' }}
            >
              {this.state.scrollHeight >= 1700 ? (
                <ProductList className="animate__animated animate__pulse" />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="landing-page-line"></div>
          <h1
            className="landing-page-collection-onze-collectie"
            style={{ marginTop: '27px' }}
          >
            Eenvoudige abonnementsgids
          </h1>
          <p className="landing-page-collection-onze-exclusieve">
            Inschrijven was nog nooit zo eenvoudig
          </p>
          <div className="landing-page-collection-Eenvoudige">
            <div className="landing-page-collection-Eenvoudige-Inschrijven">
              <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
                <img src={openIcon} alt="open-icon" />
                <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
                  Inschrijven
                </h1>
                <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
              </div>
              <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
                Registreer om toegang te krijgen tot meer vanaf onze website
              </p>
            </div>
            <div className="landing-page-collection-Eenvoudige-Inschrijven">
              <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
                <img src={sushi} alt="sushi-icon" />
                <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
                  Selecteer een collectie
                </h1>
                <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
              </div>
              <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
                We hebben een geweldige collectie zalmvissen, we hebben iets
                voor je
              </p>
            </div>
            <div className="landing-page-collection-Eenvoudige-Inschrijven">
              <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
                <img src={fish} alt="open-icon" />
                <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
                  Verse salmons
                </h1>
                <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
              </div>
              <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
                We zorgen ervoor dat we alleen de meest verse salmons voor u
                leveren
              </p>
            </div>
            <div className="landing-page-collection-Eenvoudige-Inschrijven">
              <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
                <img src={bike} alt="open-icon" />
                <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
                  Laat uw doos bezorgen
                </h1>
                <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
              </div>
              <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
                Laat je maandelijkse Box van Echte thuisbezorgen
              </p>
            </div>
          </div>
          <div className="landing-page-collection-reviews">
            <h1 className="landing-page-collection-onze-collectie">
              Wat onze klanten denken
            </h1>
            <div className="landing-page-collection-stars">
              <img src={star} alt="favorite-icon" />
              <img src={star} alt="favorite-icon" />
              <img src={star} alt="favorite-icon" />
              <img src={star} alt="favorite-icon" />
              <img src={star} alt="favorite-icon" />
            </div>
            <p className="landing-page-collection-review-header">
              My favourite place to make order{' '}
            </p>
            <div className="landing-page-collection-review-slide">
              <img
                src={arrowLeft}
                alt="arrow-left"
                style={{ cursor: 'pointer' }}
              />
              <div className="landing-page-collection-review-text-container">
                <p className="landing-page-collection-review-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pulvinar arcu non a, fringilla mi donec vulputate. Quis in
                  dignissim ac risus. Amet purus gravida massa venenatis. Diam
                  viverra malesuada lacus, ante sed pharetra. Vitae cum ornare
                  metus, vel, pharetra morbi eget vel. Massa sapien sed
                  scelerisque ullamcorper ante id aliquam tortor et. Lectus
                  mollis non vel quis eget mus.
                </p>
              </div>
              <img
                src={arrowRight}
                alt="arrow-right"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p className="landing-page-collection-review-user-name">
              User Name
            </p>
          </div>
          <div className="landing-page-collection-blog">
            <h1 className="landing-page-collection-blog-header">Blog</h1>
            <p className="landing-page-collection-blog-header-text">
              Bekijk meer geweldige inhoud van ons
            </p>

            <div className="landing-page-collection-blog-header-blog-list-container">
              <div className="landing-page-collection-blog-header-blog-list-left">
                <div className="landing-page-collection-blog-header-blog-list-item">
                  <div className="landing-page-collection-blog-header-blog-list-item-date">
                    <p className="landing-page-collection-blog-header-blog-list-item-date-day">
                      20
                    </p>
                    <p className="landing-page-collection-blog-header-blog-list-item-date-month">
                      Aug
                    </p>
                  </div>
                  <div className="landing-page-collection-blog-header-blog-list-item-bar"></div>
                  <div className="landing-page-collection-blog-header-blog-list-item-text-box">
                    <p className="landing-page-collection-blog-header-blog-list-item-text">
                      44 gezondheidsvoordelen van het eten van zalm met Bruine
                      rijst en het recept en de beste koks die er zijn.
                    </p>
                  </div>
                </div>
                <div className="landing-page-collection-blog-header-blog-list-item">
                  <div className="landing-page-collection-blog-header-blog-list-item-date">
                    <p className="landing-page-collection-blog-header-blog-list-item-date-day">
                      20
                    </p>
                    <p className="landing-page-collection-blog-header-blog-list-item-date-month">
                      Aug
                    </p>
                  </div>
                  <div className="landing-page-collection-blog-header-blog-list-item-bar"></div>
                  <div className="landing-page-collection-blog-header-blog-list-item-text-box">
                    <p className="landing-page-collection-blog-header-blog-list-item-text">
                      44 gezondheidsvoordelen van het eten van zalm met Bruine
                      rijst en het recept en de beste koks die er zijn.
                    </p>
                  </div>
                </div>
                <div className="landing-page-collection-blog-header-blog-list-item">
                  <div className="landing-page-collection-blog-header-blog-list-item-date">
                    <p className="landing-page-collection-blog-header-blog-list-item-date-day">
                      20
                    </p>
                    <p className="landing-page-collection-blog-header-blog-list-item-date-month">
                      Aug
                    </p>
                  </div>
                  <div className="landing-page-collection-blog-header-blog-list-item-bar"></div>
                  <div className="landing-page-collection-blog-header-blog-list-item-text-box">
                    <p className="landing-page-collection-blog-header-blog-list-item-text">
                      44 gezondheidsvoordelen van het eten van zalm met Bruine
                      rijst en het recept en de beste koks die er zijn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="landing-page-collection-blog-header-blog-list-right">
                <div className="landing-page-collection-blog-header-blog-list-item">
                  <div className="landing-page-collection-blog-header-blog-list-item-date">
                    <p className="landing-page-collection-blog-header-blog-list-item-date-day">
                      20
                    </p>
                    <p className="landing-page-collection-blog-header-blog-list-item-date-month">
                      Aug
                    </p>
                  </div>
                  <div className="landing-page-collection-blog-header-blog-list-item-bar"></div>
                  <div className="landing-page-collection-blog-header-blog-list-item-text-box">
                    <p className="landing-page-collection-blog-header-blog-list-item-text">
                      44 gezondheidsvoordelen van het eten van zalm met Bruine
                      rijst en het recept en de beste koks die er zijn.
                    </p>
                  </div>
                </div>
                <div className="landing-page-collection-blog-header-blog-list-item">
                  <div className="landing-page-collection-blog-header-blog-list-item-date">
                    <p className="landing-page-collection-blog-header-blog-list-item-date-day">
                      20
                    </p>
                    <p className="landing-page-collection-blog-header-blog-list-item-date-month">
                      Aug
                    </p>
                  </div>
                  <div className="landing-page-collection-blog-header-blog-list-item-bar"></div>
                  <div className="landing-page-collection-blog-header-blog-list-item-text-box">
                    <p className="landing-page-collection-blog-header-blog-list-item-text">
                      44 gezondheidsvoordelen van het eten van zalm met Bruine
                      rijst en het recept en de beste koks die er zijn.
                    </p>
                  </div>
                </div>
                <div className="landing-page-collection-blog-header-blog-list-item">
                  <div className="landing-page-collection-blog-header-blog-list-item-date">
                    <p className="landing-page-collection-blog-header-blog-list-item-date-day">
                      20
                    </p>
                    <p className="landing-page-collection-blog-header-blog-list-item-date-month">
                      Aug
                    </p>
                  </div>
                  <div className="landing-page-collection-blog-header-blog-list-item-bar"></div>
                  <div className="landing-page-collection-blog-header-blog-list-item-text-box">
                    <p className="landing-page-collection-blog-header-blog-list-item-text">
                      44 gezondheidsvoordelen van het eten van zalm met Bruine
                      rijst en het recept en de beste koks die er zijn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
