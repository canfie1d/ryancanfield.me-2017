import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Reducers';

export default function () {
  return createStore(
    reducers,
    applyMiddleware(
      thunk,
      createLogger(),
      routerMiddleware(browserHistory)
    )
  );
}
