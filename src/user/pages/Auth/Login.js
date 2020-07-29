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
          />
          <Input
            type={this.state.type ? 'text' : 'password'}
            placeholder="Je wachtwoord"
            width="100%"
            name="password"
            marginTop="30px"
            onClick={() => this.setState({ type: !this.state.type })}
            icon={this.state.type ? eye : visible}
          />
          <Button
            width="100%"
            marginTop="30px"
            text="Log In"
            background="#AD976E"
            color="white"
            border="none"
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
