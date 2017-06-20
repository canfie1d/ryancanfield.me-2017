import { HOVER_MENU_ITEM } from '../Actions/menu-actions';

let currentMenuItem = (state = '', action) => {
  if (action.type === HOVER_MENU_ITEM) {
    return action.currentMenuItem;
  }
  return state;
};

export default currentMenuItem;
