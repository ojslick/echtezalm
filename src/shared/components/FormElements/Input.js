import React from 'react';
import { connect } from 'react-redux';
import { inputData } from '../../../actions';

import './Input.css';

class Input extends React.Component {
  state = {
    email: '',
    password: '',
    voornaam: '',
    achternaam: '',
    errors: {
      email: '',
      password: '',
      voornaam: '',
      message: '',
      achternaam: '',
    },
    error: '',
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.email !== nextState.email) {
  //     return false;
  //   }
  //   if (this.state.password !== nextState.password) {
  //     return false;
  //   }
  //   if (this.state.voornaam !== nextState.voornaam) {
  //     return false;
  //   }
  //   if (this.state.achternaam !== nextState.achternaam) {
  //     return false;
  //   }
  //   if (this.state.errors !== nextState.errors) {
  //     return false;
  //   }
  //   return true;
  // }

  componentDidUpdate() {}

  updateForm(name, value) {
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    );
    switch (name) {
      case 'voornaam':
        errors.voornaam =
          value.length < 1 ? 'Please enter Your First Name' : '';
        break;

      case 'achternaam':
        errors.achternaam =
          value.length < 1 ? 'Please enter Your Last Name' : '';
        break;

      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
    this.props.inputValue(name, value);
    this.props.handleErrors(this.state.errors);
  }

  render() {
    const { errors } = this.state;
    return (
      <>
        <div
          className="form-input-container"
          style={{
            width: this.props.width,
            marginTop: this.props.marginTop,
            position: 'relative',
          }}
        >
          <input
            className={`form-input ${
              errors[this.props.name].length > 0 ? 'error' : ''
            }`}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={(evt) => {
              evt.preventDefault();
              this.updateForm(this.props.name, evt.target.value);
            }}
            autoComplete="new-password"
          />

          {this.props.icon && (
            <img
              src={this.props.icon}
              alt="form-icon"
              className="form-input-icon"
              onClick={this.props.onClick}
            />
          )}
          {errors[this.props.name].length > 0 && (
            <span className="form-error">{errors[this.props.name]}</span>
          )}
        </div>
      </>
    );
  }
}

export default connect(null, { inputData })(Input);
