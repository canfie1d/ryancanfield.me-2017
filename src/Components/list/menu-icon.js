import React from 'react';
import Icon from '../icon/icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class MenuIcon extends React.Component {
  static defaultProps = {
    icon : null
  };

  renderIcon() {
    let iconColor=() => {
      let icon  = this.props.icon;
      let color = this.props.color;

      switch (icon) {
        case 'projects':
          return color;
        case 'concepts':
          return color;
        case 'about':
          return color;
        case 'elsewhere':
          return color;
        default:
          return 'white';
      }
    };

    let classes = [
      'menu-icon',
      this.props.menuHovered ? 'menu-icon--active' : null
    ];

    return (
      <div className={classNames(classes)}>
        <Icon
          className='menu__icon'
          icon={this.props.icon !== '' && this.props.icon !== null ? this.props.icon : "blank"}
          size='x-large'
          color={iconColor()}
        />
      </div>
    );
  }

  render() {
    return this.renderIcon();
  }

};

MenuIcon.PropTypes = {
  icon : PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  menuHovered: PropTypes.bool.isRequired
};
