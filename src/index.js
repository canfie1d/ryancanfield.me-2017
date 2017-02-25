import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import createStore from './Services/Store';

import App from './App';
import Landing from './Containers/Landing';

const store = createStore();

// Inject stylus loader into webpack.config.dev.js
// var req = require.context(, false, /\.styl$/);

// var req = require.context("style-loader!css-loader!stylus-loader../somedir", false, /\.js$/);

require('style-loader!css-loader!stylus-loader!../../config/webpack.config.dev.js');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        {/*<Route path='somepage' component={SomePage} />*/}
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
