import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {

  static defaultProps = {
    element : 'button',
    componentCSSClassName : 'button',
    disabled : false,
    className : null,
    href : null,
    target : null,
    onClick : null,
    tabIndex : '0'
  };

  render() {
    let Component,
      ComponentChildren,
      classes,
      childClassName;

    classes = [
      this.props.componentCSSClassName,
      this.props.className,
      this.props.disabled ?
        this.props.componentCSSClassName + '--disabled' : null
    ].join(' ');

    childClassName = this.props.componentCSSClassName + '__children';

    ComponentChildren = React.createElement(
        'span',
        {className : childClassName},
        this.props.children
    );

    Component = React.createElement(
      this.props.element,
      {
        className : classes,
        href      : this.props.href,
        target    : this.props.target,
        ref       : 'noopener noreferrer',
        onClick   : this.props.onClick,
        disabled  : this.props.disabled,
        tabIndex  : this.props.tabIndex
      },
      ComponentChildren
    );

    return Component;
  }

};

Button.propTypes = {
  element : PropTypes.oneOf([
    'a',
    'button',
    'input',
    'span',
    'div'
  ]),
  componentCSSClassName : PropTypes.string,
  disabled              : PropTypes.bool,
  className             : PropTypes.string,
  href                  : PropTypes.string,
  target                : PropTypes.string,
  onClick               : PropTypes.func,
  tabIndex              : PropTypes.string,
  children              : PropTypes.any
};
