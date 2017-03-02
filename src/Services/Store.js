/* eslint-disable */
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Reducers';
import { responsiveStoreEnhancer } from 'redux-responsive';

let middleware = [ thunk, routerMiddleware(browserHistory) ];

if (process.env.NODE_ENV !== 'production') {
  let logger = createLogger();
  middleware = [ ...middleware, logger ];
}

export default function () {
  return createStore(
    reducers,
    responsiveStoreEnhancer,
    applyMiddleware(...middleware)
  );
}
