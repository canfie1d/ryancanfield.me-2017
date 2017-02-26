import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Reducers';
import { responsiveStoreEnhancer } from 'redux-responsive';

export default function () {
  return createStore(
    reducers,
    responsiveStoreEnhancer,
    applyMiddleware(
      thunk,
      createLogger(),
      routerMiddleware(browserHistory)
    )
  );
}
