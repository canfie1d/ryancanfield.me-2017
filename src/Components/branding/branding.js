import React       from 'react';
import { connect } from 'react-redux';

let getPropsFromApplicationState = (state) => {
  return {
    currentMenuItem : state.menu.currentMenuItem,
    browser : state.browser
  };
};

let Branding = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'Branding',

  onClick() {
    console.log("        IT'S A SECRET        ");
    console.log("        TO EVERYBODY.        ");
    console.log("        🔥   👹   🔥         ");
    console.log("                             ");
    console.log("    ryancanfield.me/secret   ");
  },

  letterWrapFactory(string) {
    let newArray= [];

    for(let i = 0; i < string.length; i++) {
      newArray.push(
        <div key={i} className='branding__column'>
          <span className='branding__letter'>{string[i]}</span>
        </div>
      );
    }

    return newArray;
  },

  renderBlankTiles(count) {
    let tiles = [];

    for(let i = 0; i < count; i++) {
      tiles.push(
        <div key={i} className='branding__column'>
          <span className='branding__letter'/>
        </div>
      );
    }

    return tiles;
  },

  renderRemainingLetters() {
    if (this.props.browser.greaterThan.medium) {
      return this.letterWrapFactory('ield');
    }
  },

  renderLastRow() {
    if (this.props.browser.lessThan.large) {
      return (
        <div className='branding__row'>
          {this.letterWrapFactory('ield')}
        </div>
      );
    }
  },

  render() {
    let letterTextColor = 'branding__letter--' + this.props.currentMenuItem;

    let classes = [
      'branding__letter',
      letterTextColor,
    ].join(' ').trim();

    return (
      <div className='branding' onClick={this.onClick}>
        <div className='branding__row'>
          <div className='branding__column'>
            <span className={classes}>r</span>
          </div>
          <div className='branding__column'>
            <span className={classes}>y</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>a</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>n</span>
          </div>
          {this.props.browser.greaterThan.medium ? this.renderBlankTiles(4) : null}
        </div>
        <div className='branding__row'>
          <div className='branding__column'>
            <span className='branding__letter'>c</span>
          </div>
          <div className='branding__column'>
            <span className={classes}>a</span>
          </div>
          <div className='branding__column'>
            <span className={classes}>n</span>
          </div>
          <div className='branding__column'>
            <span className='branding__letter'>f</span>
          </div>
          {this.renderRemainingLetters()}
        </div>
        {this.renderLastRow()}
      </div>
    );
  },

}));

export default Branding;
