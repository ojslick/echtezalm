import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import LandingPage from './products/pages/LandingPage';
import MainNavigation from './shared/components/Navigation/MainNavigation';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <MainNavigation />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
