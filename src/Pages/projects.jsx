import React              from 'react';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../Components/buttons/back-button';
import Header             from '../Components/regions/header';
import Footer             from '../Components/regions/footer';
import ProjectsContent    from '../Content/projects-content';

let getPropsFromApplicationState=(state) => {
  return {
    browser : state.browser
  };
};

const ProjectsPage=connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'ProjectsPage',

  onBackClick() {
    browserHistory.push('/');
  },

  render() {
    return (
      <div key='projects-page' className='page__content-container'>
        <Header
          title={this.props.browser.greaterThan.mediumSmall ? 'Projects' : 'Clients'}
          icon='Projects'
        />
        <ProjectsContent />
        <Footer>
          <BackButton onClick={this.onBackClick} staySmall />
        </Footer>
      </div>
    );
  },

}));

export default ProjectsPage;
