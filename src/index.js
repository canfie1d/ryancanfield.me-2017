import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import createStore from './Services/Store';
import './App.styl';
import WebFont from "webfontloader";

let config: WebFont.Config = {
  google: {
    families: [
      "Lato:400,900"
    ]
  }
};

WebFont.load(config);

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('root')
);
