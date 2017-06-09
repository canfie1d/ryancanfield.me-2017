import React       from 'react';
import DisplayMenu from './display-menu';
import classNames  from 'classnames';
import PropTypes from 'prop-types';


export default class Display extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuActive    : true,
      activeProject : undefined
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuActive) {
      this.setState({
        menuActive    : true,
        activeProject : this.props.projects[0]
      });
    } else {
      this.setState({
        menuActive : false
      });
    }
  }

  onMenuItemClick(index) {
    let currentProject= this.props.projects[index];

    this.setState({
      activeProject : currentProject
    });

    this.toggleMenu();
  }

  renderProject() {
    if (this.state.activeProject !== undefined) {
      return (
        <iframe
          className='pen-iframe'
          height='100%'
          scrolling='yes'
          title={this.state.activeProject.title}
          src={`//codepen.io/canfie1d/embed/preview/${this.state.activeProject.id}/?theme-id=18046&default-tab=result&embed-version=2&height=500`}
          frameBorder='no'
          allowTransparency='true'
          allowFullScreen='false'
        />
      );
    }
  }

  renderMenuItems() {
    let projectTitles=[];

    for (let i=0; i < this.props.projects.length; i++) {
      projectTitles.push(
        <li key={i} className='display__menu__item' onClick={this.onMenuItemClick}>
          {this.props.projects[i].title}
        </li>
      );
    }

    return projectTitles;
  }

  render() {
    let menuButtonClasses=[
      'display__menu__button',
      this.state.menuActive ? 'display__menu__button--active' : null,
      this.state.activeProject === undefined ? 'display__menu__button--hidden' : null
    ];

    return (
      <div className='display__body'>
        <div className={classNames(menuButtonClasses)} onClick={this.toggleMenu}>
            MENU
        </div>
        <div className='display__inner-bezel'>
          <DisplayMenu
            projects={this.props.projects}
            activeProject={this.state.activeProject}
            onMenuItemClick={this.onMenuItemClick}
            menuActive={this.state.menuActive}
          />
          <div className='display'>
            {this.renderProject()}
          </div>
        </div>
        <div className='display__button' />
        <div className='display__base' />
      </div>
    );
  }
};

Display.propTypes = {
  projects : PropTypes.array
};
