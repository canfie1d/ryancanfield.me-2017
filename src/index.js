import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import createStore from './Services/Store';
import './App.styl';

const store = createStore;

render(
  <Provider store={store}>
    <Router history={createHistory}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('root')
);
