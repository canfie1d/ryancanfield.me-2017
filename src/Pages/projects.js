import React              from 'react';
import { connect }        from 'react-redux';
import BackButton         from '../Components/buttons/back-button';
import Header             from '../Components/regions/header';
import Footer             from '../Components/regions/footer';
import ProjectsContent    from '../Content/projects-content';

const mapStateToProps = ({ browser }) => ({ browser });

class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div key='projects-page' className='page__content-container'>
        <Header
          title={this.props.browser.greaterThan.mediumSmall ? 'Projects' : 'Clients'}
          icon='projects'
        />
        <ProjectsContent />
        <Footer>
          <BackButton onClick={this.onBackClick} staySmall />
        </Footer>
      </div>
    );
  }

};

export default connect(mapStateToProps)(ProjectsPage);
