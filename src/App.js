import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { isLoggedIn } from './actions';
import history from './history';
import LandingPage from './products/pages/LandingPage';
import Webwinkel from './products/pages/Webwinkel';
import Login from './user/pages/Auth/Login';
import Register from './user/pages/Auth/Register';
import MainNavigation from './shared/components/Navigation/MainNavigation';

class App extends React.Component {
  state = { token: false, userId: false };

  render() {
    return (
      <Router history={history}>
        <MainNavigation />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/webwinkel" exact component={Webwinkel} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.isLoggedIn.token, userId: state.isLoggedIn.userId };
};

export default connect(mapStateToProps, { isLoggedIn })(App);
