import React from 'react';

import enterIcon from './Images/enterIcon.svg';
import facebook from './Images/facebook.svg';
import linkedIn from './Images/linkedIn.svg';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-verbind">
          <h1 className="footer-verbind-header">Verbind je met ons</h1>
          <img src={enterIcon} alt="enter-icon" />
        </div>
        <div className="footer-verbind">
          <h1 className="footer-verbind-header">Sitemap</h1>
          <p className="footer-verbind-text">Huis</p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Online winkel
          </p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Voor zaken
          </p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Over ons
          </p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Blog
          </p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Betalen
          </p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Mijn rekening
          </p>
          <p className="footer-verbind-text" style={{ marginTop: '7px' }}>
            Winkelmand
          </p>
        </div>
        <div className="footer-verbind">
          <h1 className="footer-verbind-header">Blog</h1>
          <p className="footer-verbind-text">Lancering van nieuwe website</p>
        </div>
        <div className="footer-verbind">
          <h1 className="footer-verbind-header">Social Media</h1>
          <div className="footer-verbind-social-media">
            <img
              src={facebook}
              alt="facebook-icon"
              style={{ cursor: 'pointer' }}
            />
            <img
              src={linkedIn}
              alt="linkedIn-icon"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
