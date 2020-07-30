import React from 'react';

import Input from '../../../shared/components/FormElements/Input';
import Button from '../../../shared/components/UIElements/Button';
import history from '../../../history';
import visible from './Images/visible.svg';
import eye from './Images/eye.svg';

import './Login.css';

class Login extends React.Component {
  state = {
    type: false,
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
      message: '',
    },
  };

  inputValue = (name, value) => {
    this.setState({ [name]: value });
  };

  handleErrors = (name, error) => {
    this.setState({ errors: { ...this.state.errors, [name]: error } });
  };

  handleSubmit = () => {
    const validateForm = (errors) => {
      const { email, password } = this.state;

      let valid = true;

      if ((email, password)) {
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
        errors: {
          ...this.state.errors,
          message: 'Please fill the form correctly',
        },
      });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h1 className="login-container-welkom">Welkom terug</h1>
        <p className="login-container-nieuw">
          Nieuw bij Echtezalm?{' '}
          <span
            style={{ color: '#AD976E', cursor: 'pointer' }}
            onClick={() => history.push('/register')}
          >
            Registreer hier
          </span>
        </p>

        <div className="login-form-container">
          <Input
            type="text"
            placeholder="jouw e-mailadres"
            width="100%"
            name="email"
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
          <Button
            width="100%"
            marginTop="30px"
            text="Log In"
            background="#AD976E"
            color="white"
            border="none"
            onClick={this.handleSubmit}
          />
          <p className="login-form-forgot-password">Wachtwoord vergeten?</p>
          <div style={{ marginTop: '44px' }}>
            <p className="login-form-door-verder">
              Door verder te gaan accepteert u onze
            </p>
            <p className="login-form-door-verder">
              <span style={{ color: '#AD976E', cursor: 'pointer' }}>
                Gebruiksvoorwaarden
              </span>{' '}
              en{' '}
              <span style={{ color: '#AD976E', cursor: 'pointer' }}>
                Privacybeleid
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
