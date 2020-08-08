import React from 'react';

import history from '../../history';

import Footer from '../../shared/components/Footer/Footer';
import Button from '../../shared/components/UIElements/Button';

import Box from './images/box.svg';
import Delivery from './images/delivery.svg';
import Titus from './images/titus.svg';

import './Verzameling.css';

const Verzameling = () => {
  return (
    <div
      className="landing-page-container webwinkel"
      style={{ background: '#0F0F0F', minHeight: '100vh' }}
    >
      <div
        className="landing-page-background-pic webwinkel animate__animated animate__backInDown"
        style={{ paddingLeft: '10%', paddingRight: '10%' }}
      >
        <h1 className="landing-page-background-pic-text ">
          Topkwaliteit salmons, aan huis geleverd
        </h1>
        <div
          className="landing-page-button-container animate__animated animate__backInUp"
          style={{ justifyContent: 'center' }}
        >
          <Button
            width="198px"
            background="#AD976E"
            color="black"
            text="Selecteer uw plan"
            border="none"
            onClick={() => history.push('/verzameling/plan')}
          />
        </div>
      </div>
      <h1
        className="landing-page-collection-onze-collectie"
        style={{ marginTop: '50px' }}
      >
        Hoe het werkt
      </h1>
      <div className="landing-page-collection-Eenvoudige">
        <div className="landing-page-collection-Eenvoudige-Inschrijven">
          <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
            <img src={Box} alt="open-icon" />
            <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
              Bouw je eigen doos
            </h1>
            <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
          </div>
          <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
            Kies uit onze selectie en creëer uw perfecte box
          </p>
        </div>
        <div className="landing-page-collection-Eenvoudige-Inschrijven">
          <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
            <img src={Delivery} alt="sushi-icon" />
            <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
              Laat uw doos bezorgen
            </h1>
            <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
          </div>
          <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
            Uw bestelling is klaar om te worden verzonden en bij u afgeleverd
          </p>
        </div>
        <div className="landing-page-collection-Eenvoudige-Inschrijven">
          <div className="landing-page-collection-Eenvoudige-Inschrijven-top">
            <img src={Titus} alt="open-icon" />
            <h1 className="landing-page-collection-Eenvoudige-Inschrijven-header">
              Geniet van je zalmvis
            </h1>
            <div className="landing-page-collection-Eenvoudige-Inschrijven-line"></div>
          </div>
          <p className="landing-page-collection-Eenvoudige-Inschrijven-text">
            Geniet van een smaakvol gerecht bij je favoriete maaltijd
          </p>
        </div>
      </div>
      <div className="collection-use-echtezalm">
        <h1 className="landing-page-collection-onze-collectie">
          Why You Should Use EchteZalm?
        </h1>
        <p className="collection-use-echtezalm-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
          vestibulum malesuada lorem egestas non id. Amet, tincidunt quisque et
          non tincidunt pellentesque. Erat laoreet nisl sed dignissim sit est
          nulla. Id purus, quis porta quis. Sit in nisl viverra nam nulla
          pharetra. Integer tempor tempor, orci gravida blandit morbi cursus
          eget. Vestibulum vitae.
        </p>
        <div className="collection-use-echtezalm-box">
          <div className="collection-use-echtezalm-box-1">
            <h1 className="collection-use-echtezalm-box-1-vitamins">
              Bank of Vitamins
            </h1>
            <p className="collection-use-echtezalm-box-1-salmon">
              Salmon is loaded with vitamins A, D, E and K which has various
              benefits to us
            </p>
          </div>
          <div className="collection-use-echtezalm-box-1">
            <h1 className="collection-use-echtezalm-box-1-vitamins">
              Customizable
            </h1>
            <p className="collection-use-echtezalm-box-1-salmon">
              Customize your box pack anyway you want it
            </p>
          </div>
          <div className="collection-use-echtezalm-box-1">
            <h1 className="collection-use-echtezalm-box-1-vitamins">
              No Commitment
            </h1>
            <p className="collection-use-echtezalm-box-1-salmon">
              Pause or cancel anytime you want with no hidden fee
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: '71px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            width="198px"
            background="#AD976E"
            color="black"
            text="Selecteer uw plan"
            border="none"
            onClick={() => history.push('/verzameling/plan')}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Verzameling;
