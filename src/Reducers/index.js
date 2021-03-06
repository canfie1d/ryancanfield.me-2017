import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import currentMenuItem from './menu-reducer';

export default combineReducers({
  browser: createResponsiveStateReducer({
    extraSmall: 479,
    mediumSmall: 639,
    small: 767,
    medium: 1023,
    large: 1279,
    extraLarge: 1399,
  }),
  currentMenuItem,
  routing: routerReducer
});
