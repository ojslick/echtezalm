import React from 'react';

import history from '../../../history';

import cancel from './images/close.svg';

import './SideBar.css';

class SideBar extends React.Component {
  state = { visible: false };
  visible = () => {
    if (this.props.isVisible) {
      return 'visible';
    } else {
      return '';
    }
  };

  handleDropDown = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={`ui sidebar ${this.visible()} inverted overlay animating right vertical menu`}
        >
          <img
            src={cancel}
            alt="cancel icon"
            onClick={this.props.handleClick}
            className="cancel"
          />
          <div className="sidebar-items">
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                history.push('/');
              }}
            >
              Huis
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                history.push('/verzameling');
              }}
            >
              Verzameling
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                history.push('/webwinkel');
              }}
            >
              Webwinkel
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                history.push('/overons');
              }}
            >
              Over ons
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                history.push('/blog');
              }}
            >
              Blog
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                history.push('/contact');
              }}
            >
              Contact
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
