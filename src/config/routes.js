import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  withValidToken,
  userIsAuthenticated,
  userIsNotAuthenticated
} from 'modules/authentication/utils';

import {
  App,
  LandingPage,
  LoginPage,
  DashboardPage,
  PostsPage,
  NotFoundPage,
  NotAuthorizedPage,
} from 'containers';

export default (
  <Route path="/" component={withValidToken(App)}>
    <IndexRoute component={userIsNotAuthenticated(LandingPage)} />
    <Route path="login" component={userIsNotAuthenticated(LoginPage)} />

    <Route path="dashboard" component={userIsAuthenticated(DashboardPage)} />
    <Route path="posts" component={userIsAuthenticated(PostsPage)} />

    <Route path="not-authorized" component={NotAuthorizedPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);