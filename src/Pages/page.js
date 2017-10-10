import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

import About from './about';
import Concepts from './concepts';
import Elsewhere from './elsewhere';
import Menu from './menu';
import Projects from './projects';
import Secret from './secret';
import heartImg from '../Assets/images/heart.png';

class Page extends React.Component {

  renderPage(currentPage) {
    switch (currentPage) {
      case 'concepts':
        return <Concepts {...this.props} />;
      case 'projects':
        return <Projects {...this.props} />;
      case 'about':
        return <About {...this.props} />;
      case 'elsewhere':
        return <Elsewhere {...this.props} />;
      case 'secret':
        return <Secret {...this.props} />;
      default:
        return <Menu {...this.props} />;
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

export default withRouter(Page);
