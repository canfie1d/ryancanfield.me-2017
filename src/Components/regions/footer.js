import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {

  renderChildren() {
    if(this.props.childArray) {
      let children = [];

      for (let i = 0; i < this.props.childArray.length; i++) {
        children.push(
          <div key={i} className='footer__column'>{this.props.childArray[i]}</div>
        );
      }

      return children;
    }

    return <div className='footer__column'>{this.props.children}</div>;
  }

  render() {
    return (
      <footer>
        <div className='footer'>
          {this.renderChildren()}
        </div>
      </footer>
    );
  }

};

Footer.PropTypes = {
  childArray : PropTypes.array
};
