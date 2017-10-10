import React from 'react';
import BackButton from '../Components/buttons/back-button';
import Header from '../Components/regions/header';
import Footer from '../Components/regions/footer';
import ConceptsContent from '../Content/concepts-content';

export default class ConceptsPage extends React.Component {

  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick() {
    this.props.history.push('/');
  }

  render() {
    return (
      <main key='concepts-page' className='page__content-container'>
        <Header
          title='Concepts'
          icon='concepts'
        />
        <ConceptsContent />
        <Footer>
          <BackButton onClick={this.onBackClick} staySmall />
        </Footer>
      </main>
    );
  }
};
