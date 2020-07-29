import React from 'react';
import { connect } from 'react-redux';
import countryList from 'react-select-country-list';

import Input from '../../../shared/components/FormElements/Input';
import DrowDownInput from '../../../shared/components/FormElements/DropDownInput';
import Button from '../../../shared/components/UIElements/Button';
import history from '../../../history';
import visible from './Images/visible.svg';
import eye from './Images/eye.svg';

import './Register.css';

class Register extends React.Component {
  state = {
    options: countryList().getData(),
    value: null,
    type: false,
    email: '',
    password: '',
    voornaam: '',
    achternaam: '',
    errors: '',
  };

  handleCountrySelect = (value) => {
    this.setState({ value });
  };

  inputValue = (name, value) => {
    this.setState({ [name]: value });
  };

  handleErrors = (errors) => {
    this.setState({ errors: errors });
  };

  handleSubmit = () => {};

  render() {
    console.log(this.state);
    return (
      <div className="register-container">
        <h1 className="register-container-welkom">
          Welkom bij Fresh Smoked Salmon
        </h1>
        <p className="register-container-nieuw">
          Al aangemeld{' '}
          <span
            style={{ color: '#AD976E', cursor: 'pointer' }}
            onClick={() => history.push('/login')}
          >
            Hier inloggen
          </span>
        </p>
        <div className="register-form-container">
          <div className="login-form-name">
            <Input
              type="text"
              placeholder="Voornaam"
              width="45%"
              name="voornaam"
              inputValue={this.inputValue}
            />
            <Input
              type="text"
              placeholder="Achternaam"
              width="45%"
              name="achternaam"
              inputValue={this.inputValue}
            />
          </div>
          <DrowDownInput
            options={this.state.options}
            value={this.state.value}
            onChange={this.handleCountrySelect}
          />
          <Input
            type="text"
            placeholder="Jouw email"
            width="100%"
            name="email"
            marginTop="30px"
            inputValue={this.inputValue}
            handleErrors={this.handleErrors}
          />
          <Input
            type={this.state.type ? 'text' : 'password'}
            placeholder="Je wachtwoord"
            width="100%"
            name="password"
            marginTop="30px"
            onClick={() => this.setState({ type: !this.state.type })}
            icon={this.state.type ? eye : visible}
            inputValue={this.inputValue}
            handleErrors={this.handleErrors}
          />
          <p className="register-form-text">
            Ik ontvang graag het laatste Freshly Fish nieuws en weet wanneer de
            volgende visdoos verschijnt!
          </p>
          <Button
            width="100%"
            marginTop="30px"
            text="Inschrijven"
            background="#AD976E"
            color="white"
            border="none"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { inputState: state.inputState };
};

export default connect(mapStateToProps)(Register);
