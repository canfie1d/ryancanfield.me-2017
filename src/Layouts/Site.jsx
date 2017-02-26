import React from 'react';
import classNames from 'classnames';
import Page from '../Pages/page';

const site = React.createClass({

  displayName: 'SiteLayout',

  getInitialState() {
    return {
      hideFocusOutline : true
    };
  },

  componentDidMount() {
        // calculate the responsive state after the component has been mounted
    window.addEventListener('keydown', this.showFocusOutline);
    window.addEventListener('mousemove', this.hideFocusOutline);
  },

  componentWillUnmount() {
    window.removeEventListener('keydown', this.showFocusOutline);
    window.removeEventListener('mousemove', this.hideFocusOutline);
  },

  showFocusOutline(event) {
    if (this.state.hideFocusOutline && event.keyCode === 9) {
      this.setState ({
        hideFocusOutline : false
      });
    }
  },

  hideFocusOutline() {
    if (!this.state.hideFocusOutline) {
      this.setState ({
        hideFocusOutline : true
      });
    }
  },

  render() {
    const classes = [
      'l--site-wrapper',
      this.state.hideFocusOutline ? 'focus-outline--hidden' : null
    ];

    return (
        <div className={classNames(classes)}>
          <Page />
        </div>
      );
  },

});

export default site;
