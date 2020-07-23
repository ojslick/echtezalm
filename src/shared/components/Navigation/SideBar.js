import React from 'react';

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
        >
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
                // history.push('/help');
              }}
            >
              Huis
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                // history.push('/help');
              }}
            >
              Verzameling
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                // history.push('/help');
              }}
            >
              Webwinkel
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                // history.push('/help');
              }}
            >
              Over ons
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                // history.push('/help');
              }}
            >
              Blog
            </div>
            <div
              className="item"
              onClick={async () => {
                await this.props.handleClick();
                // history.push('/help');
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
