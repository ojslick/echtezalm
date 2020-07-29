import React from 'react';

import SideBar from './SideBar';
import history from '../../../history';

import cart from './images/cart.svg';
import user from './images/user.svg';
import logo from './images/logo.svg';
import menu from './images/menu.svg';

import './Main-Navigation.css';

class MainNavigation extends React.Component {
  state = {
    huis: false,
    verzameling: false,
    webwinkel: false,
    overOns: false,
    blog: false,
    contact: false,
    mijnRekening: false,
    login: false,
    Inschrijven: false,
    close: false,
    screenWidth: '',
    visible: false,
  };

  componentDidMount() {
    this.setState({ screenWidth: window.screen.width });
  }

  toggleSideBar = (e) => {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  };

  handleClick = (tab) => {
    if (tab === 'huis') {
      this.setState({
        huis: true,
        verzameling: false,
        webwinkel: false,
        overOns: false,
        blog: false,
        contact: false,
        mijnRekening: false,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'webwinkel') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: true,
        overOns: false,
        blog: false,
        contact: false,
        mijnRekening: false,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'verzameling') {
      this.setState({
        huis: false,
        verzameling: true,
        webwinkel: false,
        overOns: false,
        blog: false,
        contact: false,
        mijnRekening: false,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'overOns') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: false,
        overOns: true,
        blog: false,
        contact: false,
        mijnRekening: false,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'blog') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: false,
        overOns: false,
        blog: true,
        contact: false,
        mijnRekening: false,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'contact') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: false,
        overOns: false,
        blog: false,
        contact: true,
        mijnRekening: false,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'mijnRekening') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: false,
        overOns: false,
        blog: false,
        contact: false,
        mijnRekening: true,
        login: false,
        Inschrijven: false,
      });
    } else if (tab === 'login') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: false,
        overOns: false,
        blog: false,
        contact: false,
        mijnRekening: false,
        login: true,
        Inschrijven: false,
      });
    } else if (tab === 'Inschrijven') {
      this.setState({
        huis: false,
        verzameling: false,
        webwinkel: false,
        overOns: false,
        blog: false,
        contact: false,
        mijnRekening: false,
        login: false,
        Inschrijven: true,
      });
    }
  };

  closeDropDown = () => {
    this.setState({ close: !this.state.close });
  };

  render() {
    return (
      <div className="main-nav-container">
        <div className="logo-container">
          {this.state.screenWidth < 768 ? (
            <React.Fragment>
              <img
                src={menu}
                alt="logo"
                className="menu-icon"
                onClick={this.toggleSideBar}
              />
              <SideBar
                isVisible={this.state.visible}
                handleClick={() => this.toggleSideBar()}
              />
              <img
                src={logo}
                alt="logo"
                className="logo-box"
                onClick={() => history.push('/')}
              />

              <div className="right-menu-nav">
                <div className="user-nav-dropdown">
                  <img src={user} alt="user-icon" className="user-icon" />
                  <ul
                    className={`${
                      this.state.close ? 'close-dropdown' : 'nav-dropdown'
                    }`}
                    style={{ marginTop: '10px' }}
                  >
                    <li
                      className={`${
                        this.state.login ? 'nav-text-active' : 'nav-text'
                      }`}
                      onClick={() => {
                        this.handleClick('mijnRekening');
                        history.push('/login');
                      }}
                    >
                      Log in
                    </li>
                    <li
                      className={`${
                        this.state.Inschrijven ? 'nav-text-active' : 'nav-text'
                      }`}
                      onClick={() => {
                        this.handleClick('mijnRekening');
                        history.push('/register');
                      }}
                      style={{ marginTop: '10px' }}
                    >
                      Inschrijven
                    </li>
                  </ul>
                </div>

                <img src={cart} alt="cart-icon" className="cart-icon" />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img
                src={logo}
                alt="logo"
                className="logo-box"
                onClick={() => history.push('/')}
              />
              <img src={cart} alt="cart-icon" className="cart-icon" />
            </React.Fragment>
          )}
        </div>
        <div className="nav-container">
          <p
            className={`${this.state.huis ? 'nav-text-active' : 'nav-text'}`}
            onClick={() => {
              this.handleClick('huis');
              history.push('/');
            }}
          >
            Huis
          </p>
          <p
            className={`${
              this.state.verzameling ? 'nav-text-active' : 'nav-text'
            }`}
            onClick={() => {
              this.handleClick('verzameling');
              history.push('/verzameling');
            }}
          >
            Verzameling
          </p>
          <p
            className={`${
              this.state.webwinkel ? 'nav-text-active' : 'nav-text'
            }`}
            onClick={() => {
              this.handleClick('webwinkel');
              history.push('/webwinkel');
            }}
          >
            Webwinkel
          </p>
          <p
            className={`${this.state.overOns ? 'nav-text-active' : 'nav-text'}`}
            onClick={() => {
              this.handleClick('overOns');
              history.push('/overons');
            }}
          >
            Over ons
          </p>
          <p
            className={`${this.state.blog ? 'nav-text-active' : 'nav-text'}`}
            onClick={() => {
              this.handleClick('blog');
              history.push('/blog');
            }}
          >
            Blog
          </p>
          <p
            className={`${this.state.contact ? 'nav-text-active' : 'nav-text'}`}
            onClick={() => {
              this.handleClick('contact');
              history.push('/contact');
            }}
          >
            Contact
          </p>
          <ul className="nav-container-align-arrow-down">
            <li
              className={`${
                this.state.mijnRekening ? 'nav-text-active' : 'nav-text'
              }`}
              style={{ marginRight: '5px' }}
              onClick={() => this.handleClick('mijnRekening')}
            >
              Mijn rekening
            </li>

            <div
              className={`${
                this.state.mijnRekening ? 'nav-text-active' : 'nav-text'
              }`}
              onClick={() => this.handleClick('mijnRekening')}
              style={{
                cursor: 'pointer',
                transform: 'rotate(90deg)',
              }}
            >
              >
            </div>

            <ul className="nav-dropdown">
              <li
                className={`${
                  this.state.login ? 'nav-text-active' : 'nav-text'
                }`}
                onClick={() => {
                  this.handleClick('mijnRekening');
                  history.push('/login');
                }}
              >
                Log in
              </li>
              <li
                className={`${
                  this.state.Inschrijven ? 'nav-text-active' : 'nav-text'
                }`}
                onClick={() => {
                  this.handleClick('mijnRekening');
                  history.push('/register');
                }}
              >
                Inschrijven
              </li>
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainNavigation;
