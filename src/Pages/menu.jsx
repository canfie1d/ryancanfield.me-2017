import React    from 'react';
import { connect }        from 'react-redux';
import MenuList from '../Components/list/menu-list';
import Branding from '../Components/branding/branding';
import { NAV_ITEMS } from '../Services/Data';

let getPropsFromApplicationState=(state) => {
  return {
    browser : state.browser
  };
};

const MenuPage = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'MenuPage',

  render() {
    return (
            <div key='menu-page' className='page__content-container'>
                <Branding />
                <main className='page__content page__content--menu page__content--no-header'>
                    <MenuList menuItems={NAV_ITEMS} />
                </main>
            </div>
        );
  },

}));

export default MenuPage;
