import React              from 'react';
import { Link }           from 'react-router';
import { connect }        from 'react-redux';
import { toggleMenuItem } from '../../Actions/menu-actions';
import MenuIcon           from './menu-icon.js';

const mapStateToProps = ({ currentMenuItem, browser }) => ({ currentMenuItem, browser });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuItem: (item) => dispatch(toggleMenuItem(item))
  };
}

class MenuList extends React.Component {
  constructor (props) {
    super(props);
    this.activeMenuItem = this.activeMenuItem.bind(this);
    this.inactiveMenuItem = this.inactiveMenuItem.bind(this);
  }

  componentWillUnmount() {
    this.inactiveMenuItem();
  }

  activeMenuItem(title) {
    this.props.toggleMenuItem(title);
  }

  inactiveMenuItem() {
    this.props.toggleMenuItem('');
  }

  renderItems() {
    let items=[];

    for (let i = 0; i < this.props.menuItems.length; i++) {
      if (this.props.menuItems[i].external) {
        items.push(
          <li key={i} className='menu__item'>
            <a
              key={i}
              href={this.props.menuItems[i].url}
              target={this.props.menuItems[i].url !== 'mailto:ryancanfield@me.com' ? '_blank' : '_self'}
              className='menu__link menu__link--external'
              onMouseOver={this.activeMenuItem.bind(null, this.props.menuItems[i].title)}
              onMouseOut={this.inactiveMenuItem}
              onClick={this.inactiveMenuItem}
              onTouchEnd={this.inactiveMenuItem}
              onFocus={this.activeMenuItem.bind(null, this.props.menuItems[i].title)}
              onBlur={this.inactiveMenuItem}
            >
              {this.props.menuItems[i].title}
            </a>
          </li>
        );
      } else {
        items.push(
          <li key={i} className='menu__item'>
            <Link
              key={i}
              to={'/' + this.props.menuItems[i].url}
              className='menu__link'
              onFocus={this.activeMenuItem.bind(null, this.props.menuItems[i].url)}
              onBlur={this.inactiveMenuItem}
              onMouseOver={this.activeMenuItem.bind(null, this.props.menuItems[i].url)}
              onMouseOut={this.inactiveMenuItem}
              onMouseDown={this.inactiveMenuItem}
              onTouchStart={this.inactiveMenuItem}
              >
              {this.props.menuItems[i].title}
            </Link>
          </li>
        );
      }
    }

    return items;
  }

  renderIcon() {
    if (this.props.browser.greaterThan.extraSmall) {
      return (
        <MenuIcon
          icon={this.props.currentMenuItem}
          color={this.props.currentMenuItem ? this.props.currentMenuItem.toLowerCase() : null}
          menuHovered={this.props.currentMenuItem !== ''}
        />
      );
    }
  }

  render() {
    return (
      <nav className='menu'>
        <ul className='menu__list'>
          {this.renderItems()}
        </ul>
        {this.renderIcon()}
      </nav>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
