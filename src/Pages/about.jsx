import React              from 'react';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../Components/buttons/back-button';
import Header             from '../Components/regions/header';
import Footer             from '../Components/regions/footer';
import AboutContent       from '../Content/about-content';

const mapStateToProps = ({ currentMenuItem }) => ({ currentMenuItem });

class AboutPage extends React.Component {

  onBackClick() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div key='about-page' className='page__content-container'>
        <Header
          title='About Me'
          icon='About'
          smallWidth
        />
        <AboutContent />
        <Footer>
          <BackButton onClick={this.onBackClick} staySmall />
        </Footer>
      </div>
    );
  }

};

export default connect(mapStateToProps)(AboutPage);
