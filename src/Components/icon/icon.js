import React from 'react';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
  static defaultProps = {
    size : null,
    rotate : null,
    color : null,
    class : null
  }

  render() {
    const IconComponent = require(`./icons/${this.props.icon}`).default;
    const sizeClass = this.props.size ?
      `icon--${this.props.size}` : null;

    const colorClass = this.props.color ?
      `icon--${this.props.color}` : null;

    const rotationClass = this.props.rotate ?
      `icon--rotate-${this.props.rotate}` : null;

    const classes = [
      'icon',
      sizeClass,
      colorClass,
      rotationClass,
      this.props.className,
    ].join(' ').trim();

    return (
      <span className={classes}>
        <IconComponent />
      </span>
    );
  }

};

Icon.PropTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'x-small',
    'small',
    'large',
    'x-large',
    null,
  ]),
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  color: PropTypes.oneOf([
    'black',
    'white',
    'primary',
    'secondary',
    'tertiary',
    'projects',
    'concepts',
    'about',
    'elsewhere',
    'status--success',
    'status--warning',
    'status--error',
    null,
  ]),
  className: PropTypes.string,
};
