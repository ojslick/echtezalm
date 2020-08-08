import React from 'react';
import { connect } from 'react-redux';

import { isLoggedIn } from '../../../actions';
import SideBar from './SideBar';
import history from '../../../history';

import cart from './images/cart.svg';
import user from './images/user.svg';
import logo from './images/logo.svg';
import menu from './images/menu.svg';
import userSmall from './images/userSmall.svg';
import order from './images/order.svg';
import box from './images/box.svg';
import logout from './images/logout.svg';
import './Main-Navigation.css';

let logoutTimer;

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
    token: null,
    tokenExpirationDate: null,
  };

  componentDidMount() {
    const storeData = JSON.parse(localStorage.getItem('userData'));
    if (storeData && storeData.token && storeData.expiration) {
      this.props.isLoggedIn({
        token: storeData.userId,
        userId: storeData.token,
        expirationDate: new Date(storeData.expiration),
      });
    }
    const tokenExpirationDate =
      this.props.loggedIn.expirationDate ||
      new Date(new Date().getTime() + 1000 * 60 * 60);
    this.setState({ tokenExpirationDate: tokenExpirationDate });
    this.setState({ screenWidth: window.screen.width });

    if (history.location.pathname === '/') {
      this.setState({ huis: true });
    }
    if (history.location.pathname === '/verzameling') {
      this.setState({ verzameling: true });
    }
    if (history.location.pathname === '/webwinkel') {
      this.setState({ webwinkel: true });
    }
    if (history.location.pathname === '/overons') {
      this.setState({ overOns: true });
    }
    if (history.location.pathname === '/blog') {
      this.setState({ blog: true });
    }
    if (history.location.pathname === '/contact') {
      this.setState({ contact: true });
    }
  }

  logout = () => {
    this.props.isLoggedIn({ token: '', userId: '' });
    localStorage.removeItem('userData');
    this.setState({ tokenExpirationDate: null });
  };

  componentDidUpdate() {
    if (this.props.loggedIn.token && this.props.loggedIn.expirationDate) {
      const remainingTime =
        this.props.loggedIn.expirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(this.logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
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
                <div
                  className={
                    this.props.isLoggedIn
                      ? 'nav-container-align-arrow-down-logged-in'
                      : 'nav-container-align-arrow-down'
                  }
                >
                  <img src={user} alt="user-icon" className="user-icon" />
                  {this.props.loggedIn.token ? (
                    <ul
                      className={`${
                        this.state.close ? 'close-dropdown' : 'nav-dropdown'
                      }`}
                      style={{ marginTop: '10px', width: '100px' }}
                    >
                      <li
                        className={`${
                          this.state.login ? 'nav-text-active' : 'nav-text'
                        }`}
                        onClick={() => {
                          this.handleClick('mijnRekening');
                          history.push('/my-account');
                        }}
                      >
                        Account
                      </li>
                      <li
                        className={`${
                          this.state.login ? 'nav-text-active' : 'nav-text'
                        }`}
                        onClick={() => {
                          this.handleClick('mijnRekening');
                          history.push('/my-orders');
                        }}
                      >
                        Orders
                      </li>
                      <li
                        className={`${
                          this.state.login ? 'nav-text-active' : 'nav-text'
                        }`}
                        onClick={() => {
                          this.handleClick('mijnRekening');
                          history.push('/my-subscription');
                        }}
                      >
                        Subscription
                      </li>
                      <li
                        className={`${
                          this.state.login ? 'nav-text-active' : 'nav-text'
                        }`}
                        onClick={() => {
                          this.handleClick('mijnRekening');
                          this.logout();
                        }}
                      >
                        Log out
                      </li>
                    </ul>
                  ) : (
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
                          this.state.Inschrijven
                            ? 'nav-text-active'
                            : 'nav-text'
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
                  )}
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
          <ul
            className={
              this.props.isLoggedIn
                ? 'nav-container-align-arrow-down-logged-in'
                : 'nav-container-align-arrow-down'
            }
          >
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

            {this.props.loggedIn.token ? (
              <ul className="nav-dropdown">
                <li
                  className={`${
                    this.state.login ? 'nav-text-active' : 'nav-text'
                  }`}
                  onClick={() => {
                    this.handleClick('mijnRekening');
                    history.push('/my-account');
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <img
                      src={userSmall}
                      alt="user-icon"
                      style={{ marginRight: '10px' }}
                    />
                    <p className="">My Account</p>
                  </div>
                </li>
                <li
                  className={`${
                    this.state.login ? 'nav-text-active' : 'nav-text'
                  }`}
                  onClick={() => {
                    this.handleClick('mijnRekening');
                    history.push('/my-orders');
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <img
                      src={order}
                      alt="user-icon"
                      style={{ marginRight: '10px' }}
                    />
                    <p className="">My Orders</p>
                  </div>
                </li>
                <li
                  className={`${
                    this.state.login ? 'nav-text-active' : 'nav-text'
                  }`}
                  onClick={() => {
                    this.handleClick('mijnRekening');
                    history.push('/my-subscription');
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <img
                      src={box}
                      alt="user-icon"
                      style={{ marginRight: '10px' }}
                    />
                    <p className="">My Subscription</p>
                  </div>
                </li>
                <li
                  className={`${
                    this.state.login ? 'nav-text-active' : 'nav-text'
                  }`}
                  onClick={() => {
                    this.handleClick('mijnRekening');
                    this.logout();
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <img
                      src={logout}
                      alt="user-icon"
                      style={{ marginRight: '10px' }}
                    />
                    <p className="">Log out</p>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="nav-dropdown" style={{ display: 'inline-block' }}>
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
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { isLoggedIn })(MainNavigation);
