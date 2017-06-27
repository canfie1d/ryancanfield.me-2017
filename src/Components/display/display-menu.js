import React       from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class displayMenu extends React.Component {

  renderMenuItems() {
    let projects = [];

    for (let i = 0; i < this.props.projects.length; i++) {
      projects.push(
        <li key={i} tabIndex='0' className='display__menu__item' onClick={this.props.onMenuItemClick.bind(null, i)}>
          {this.props.projects[i].title}
        </li>
      );
    }

    return projects;
  }

  render() {
    let classes = classNames({
      'display__menu__wrapper': true,
      'display__menu__wrapper--active': this.props.menuActive
    });

    return (
      <div className={classes}>
        <div className='display__menu'>
          <ul className='display__menu__list'>
            {this.renderMenuItems()}
          </ul>
        </div>
      </div>
    );
  }
};

displayMenu.propTypes = {
  projects: PropTypes.array,
  activeProject: PropTypes.object,
  onMenuItemClick: PropTypes.func,
  menuActive: PropTypes.bool
};
