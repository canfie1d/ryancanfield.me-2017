import React from 'react';
// import './Styles/App.css';
import './App.styl';

export default class App extends React.Component {

  render () {
    console.log('Welcome to Helpful Human\'s React boilerplate. Check the console for the App\'s props.', this.props);
    return (
      <div className={'app'}>
        <div className='app__container' >
          Welcome to Helpful Human's React boilerplate :)
          {this.props.children}
        </div>
      </div>
    );
  }
}
