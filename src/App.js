import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { isLoggedIn } from './actions';
import history from './history';
import LandingPage from './products/pages/LandingPage';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

const Webwinkel = React.lazy(() => import('./products/pages/Webwinkel'));
const Product = React.lazy(() => import('./products/pages/Product'));
const Verzameling = React.lazy(() => import('.//products/pages/Verzameling'));
const Plan = React.lazy(() => import('./products/pages/Plan'));
const PlanDescription = React.lazy(() =>
  import('./products/pages/PlanDescription')
);
const Login = React.lazy(() => import('./user/pages/Auth/Login'));
const Register = React.lazy(() => import('./user/pages/Auth/Register'));

class App extends React.Component {
  state = { token: false, userId: false };

  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<LoadingSpinner />}>
          <MainNavigation />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/webwinkel" exact component={Webwinkel} />
            <Route path="/webwinkel/product" exact component={Product} />
            <Route path="/verzameling" exact component={Verzameling} />
            <Route path="/verzameling/plan" exact component={Plan} />
            <Route
              path="/verzameling/plan/description"
              exact
              component={PlanDescription}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.isLoggedIn.token, userId: state.isLoggedIn.userId };
};

export default connect(mapStateToProps, { isLoggedIn })(App);
