import React        from 'react';
import { connect }  from 'react-redux';
import Display      from '../Components/display/display';
import List         from '../Components/list/list';
import { PROJECTS, CLIENTS } from '../Services/Data';

const mapStateToProps = ({ browser }) => ({ browser });

class ProjectsContent extends React.Component {

  componentDidMount() {
    var component = this.domNode;

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });

  }

  renderDisplay() {
    if (this.props.browser.greaterThan.mediumSmall) {
      return (
        <Display projects={PROJECTS} />
      );
    }
  }

  renderSubtitle() {
    if(this.props.browser.greaterThan.mediumSmall) {
      return (
        <h2 className='page__subtitle'>Clients</h2>
      );
    }
  }

  render() {
    return (
      <main className='page__content' ref={(main) => { this.domNode = main; }}>
        {this.renderDisplay()}
        {this.renderSubtitle()}
        <List listItems={CLIENTS} />
      </main>
    );
  }
};

export default connect(mapStateToProps)(ProjectsContent);
