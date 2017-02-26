import React from 'react';
import SiteLayout from './Layouts/Site';

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='app__container' >
          <SiteLayout />
        </div>
      </div>
    );
  }
}
