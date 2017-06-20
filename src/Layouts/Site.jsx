import React from 'react';
import classNames from 'classnames';
import Page from '../Pages/page';

export default class site extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFocusOutline: true
    };
    this.hideFocusOutline = this.hideFocusOutline(this);
    this.showFocusOutline = this.showFocusOutline(this);
  }

  componentDidMount() {
   // calculate the responsive state after the component has been mounted
    window.addEventListener('keydown', this.showFocusOutline);
    window.addEventListener('mousemove', this.hideFocusOutline);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.showFocusOutline);
    window.removeEventListener('mousemove', this.hideFocusOutline);
  }

  showFocusOutline(event) {
    if (this.state.hideFocusOutline && event.keyCode === 9) {
      this.setState ({
        hideFocusOutline : false
      });
    }
  }

  hideFocusOutline() {
    if (!this.state.hideFocusOutline) {
      this.setState ({
        hideFocusOutline : true
      });
    }
  }

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
  }
};
