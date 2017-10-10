/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Reducers';
import { responsiveStoreEnhancer } from 'redux-responsive';

let middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  let logger = createLogger({collapsed:true});
  middleware = [ ...middleware, logger ];
}

export default createStore(
  reducers,
  responsiveStoreEnhancer,
  applyMiddleware(...middleware)
);

