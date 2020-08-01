import React from 'react';
import { connect } from 'react-redux';
import countryList from 'react-select-country-list';

import { isLoggedIn } from '../../../actions';
import Input from '../../../shared/components/FormElements/Input';
import DrowDownInput from '../../../shared/components/FormElements/DropDownInput';
import Button from '../../../shared/components/UIElements/Button';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import history from '../../../history';
import visible from './Images/visible.svg';
import eye from './Images/eye.svg';

import './Register.css';

class Register extends React.Component {
  _isMounted = false;
  state = {
    options: countryList().getData(),
    country: null,
    type: false,
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
    errorMessage: '',
    isLoading: false,
  };

  componentDidMount() {
    this._isMounted = true;
    window.scrollTo(0, 0);
  }

  handleCountrySelect = (value) => {
    this.setState({ country: value.label });
  };

  inputValue = (name, value) => {
    this.setState({ [name]: value });
  };

  handleErrors = (name, error) => {
    this.setState({ errors: { ...this.state.errors, [name]: error } });
  };

  handleSubmit = async () => {
    this._isMounted = true;
    const validateForm = (errors) => {
      const { country, voornaam, achternaam, email, password } = this.state;
      let valid = true;
      if ((country, voornaam, achternaam, email, password)) {
        valid = true;
      } else {
        valid = false;
      }
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));

      return valid;
    };

    if (validateForm(this.state.errors)) {
      console.info('Valid Form');
    } else {
      console.error('Invalid Form');
      this.setState({
        errorMessage: 'Please fill the form correctly',
      });
    }
    try {
      this.setState({ isLoading: true });
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voornaam: this.state.voornaam,
          achternaam: this.state.achternaam,
          country: this.state.country,
          email: this.state.email,
          password: this.state.password,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      this.setState({ isLoading: false });
      // this.props.isLoggedIn({
      //   token: responseData.token,
      //   userId: responseData.userId,
      // });
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: responseData.userId,
          token: responseData.token,
          expiration: tokenExpirationDate.toISOString(),
        })
      );
      const storeData = JSON.parse(localStorage.getItem('userData'));
      if (
        storeData &&
        storeData.token &&
        new Date(storeData.expiration) > new Date()
      ) {
        this.props.isLoggedIn({
          token: storeData.userId,
          userId: storeData.token,
          expirationDate: new Date(storeData.expiration),
        });
      }
      history.push('/');
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
      this.setState({
        errorMessage: err.message || 'Something went wrong, please try again.',
      });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { errorMessage } = this.state;
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
              handleErrors={this.handleErrors}
            />
            <Input
              type="text"
              placeholder="Achternaam"
              width="45%"
              name="achternaam"
              inputValue={this.inputValue}
              handleErrors={this.handleErrors}
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
          {errorMessage.length > 0 ? (
            <span className="invalid-form-error">{errorMessage}</span>
          ) : (
            ''
          )}
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
          {this.state.isLoading && (
            <div style={{ marginTop: '27px', width: '100%' }}>
              <LoadingSpinner />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { inputState: state.inputState };
};

export default connect(mapStateToProps, { isLoggedIn })(Register);
