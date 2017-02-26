import React from 'react';
import classNames from 'classnames';
/* eslint-disable no-unused-vars */
import About from './about';
import Concepts from './concepts';
import Elsewhere from './elsewhere';
import Menu from './menu';
import Projects from './projects';
import Secret from './secret';
/* eslint-enable no-unused-vars */

const Page = React.createClass({

  displayName: 'Page',

  renderPage(currentPage) {

    switch (currentPage) {
      case '/':
        return <Menu />;
      case '/Concepts':
        return <Concepts />;
      case '/Projects':
        return <Projects />;
      case '/About':
        return <About />;
      case '/Elsewhere':
        return <Elsewhere />;
      case '/Secret':
        return <Secret />;
      default:
        return <Menu />;
    }

  },

  render() {
    let currentPage = window.location.pathname;
    let pageClass = `${currentPage}-page`;

    let classes=[
      'page',
      pageClass
    ];

    return (
      <div className={classNames(classes)}>
        {this.renderPage(currentPage)}
      </div>
    );
  },

});

export default Page;
