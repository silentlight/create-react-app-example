import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';

import configureStore from './config/initializers/store';
import configureApi from './config/initializers/api';
import registerServiceWorker from './config/initializers/service_worker';
import routes from './config/routes';

// Load main styles
import './index.css';

// Configure store
const initialState = {};
const store = configureStore(initialState);

// Configure api
configureApi(store);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      render={
        // Scroll to top when going to a new page, imitating default browser behaviour
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
