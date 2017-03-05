import React    from 'react';
import { connect }        from 'react-redux';
import MenuList from '../Components/list/menu-list';
import Branding from '../Components/branding/branding';

let getPropsFromApplicationState=(state) => {
  return {
    browser : state.browser
  };
};

const MenuPage = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'MenuPage',

  render() {
    const NAV_ITEMS = [
      {
        title    : this.props.browser.greaterThan.mediumSmall ? 'Projects' : 'Clients',
        url      : 'Projects',
        icon     : 'Projects',
        external : false
      },
      {
        title    : 'Concepts',
        url      : 'Concepts',
        icon     : 'Concepts',
        external : false
      },
      {
        title    : 'About Me',
        url      : 'About',
        icon     : 'About',
        external : false
      },
      {
        title    : 'Elsewhere',
        url      : 'Elsewhere',
        icon     : 'Elsewhere',
        external : false
      }
    ];

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
