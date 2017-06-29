import React from 'react';
import classNames from 'classnames';
/* eslint-disable no-unused-vars */
import About from './about';
import Concepts from './concepts';
import Elsewhere from './elsewhere';
import Menu from './menu';
import Projects from './projects';
import Secret from './secret';
import heartImg from '../Assets/images/heart.png';

/* eslint-enable no-unused-vars */

export default class Page extends React.Component {

  renderPage(currentPage) {
    switch (currentPage) {
      case 'Concepts':
        return <Concepts />;
      case 'Projects':
        return <Projects />;
      case 'About':
        return <About />;
      case 'Elsewhere':
        return <Elsewhere />;
      case 'secret':
        return <Secret />;
      default:
        return <Menu />;
    }

  }

  renderHeart() {
    const itemCollected = localStorage.getItem("itemCollected");
    
    if (itemCollected === 'heart') {
      return (
        <div className='heart-container'>
          <img src={heartImg} alt='Heart Container in 8-bit style' />
        </div>
      );
    }
  }

  render() {
    let currentPage = window.location.pathname.slice(1);
    let pageClass = `${currentPage}-page`;

    let classes=[
      'page',
      pageClass
    ];

    return (
      <div className={classNames(classes)}>
        {this.renderHeart()}
        {this.renderPage(currentPage)}
      </div>
    );
  }
};
