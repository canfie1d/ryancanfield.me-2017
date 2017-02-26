import React              from 'react';
import { browserHistory } from 'react-router';
import BackButton         from '../Components/buttons/back-button';
import Header             from '../Components/regions/header';
import Footer             from '../Components/regions/footer';
import ConceptsContent    from '../Content/concepts-content';

const ConceptsPage=React.createClass({

  displayName: 'ConceptsPage',

  onBackClick() {
    browserHistory.push('/');
  },

  render() {
    return (
            <main key='concepts-page' className='page__content-container'>
              <Header
                  title='Concepts'
                  icon='Concepts'
              />
              <ConceptsContent />
              <Footer>
                  <BackButton onClick={this.onBackClick} staySmall />
              </Footer>
            </main>
        );
  },

});

export default ConceptsPage;
