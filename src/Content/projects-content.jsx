import React        from 'react';
import ReactDOM     from 'react-dom';
import { connect }  from 'react-redux';
import Display      from '../Components/display/display';
import List         from '../Components/list/list';
import { PROJECTS, CLIENTS } from '../Services/Data';

let getPropsFromApplicationState = (state) => {
  return {
    browser : state.browser
  };
};

const ProjectsContent = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'ProjectsContent',

  componentDidMount() {
    var component = ReactDOM.findDOMNode(this);

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });
  },

  renderDisplay() {
    if (this.props.browser.greaterThan.mediumSmall) {
      return (
        <Display projects={PROJECTS} />
      );
    }
  },

  renderSubtitle() {
    if(this.props.browser.greaterThan.mediumSmall) {
      return (
        <h2 className='page__subtitle'>Clients</h2>
      );
    }
  },

  render() {
    return (
      <main className='page__content'>
        {this.renderDisplay()}
        {this.renderSubtitle()}
        <List listItems={CLIENTS} />
      </main>
    );
  },

}));

export default ProjectsContent;
