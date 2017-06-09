import React    from 'react';
import ReactDOM from 'react-dom';
import CardLink from '../Components/cards/card-link';
import { CARD_LINKS } from '../Services/Data';

export default class ConceptsContent extends React.Component {

  componentDidMount() {
    var component=ReactDOM.findDOMNode(this);

    component.style.opacity=0;
    window.requestAnimationFrame(() => {
      component.style.transition='opacity 2500ms';
      component.style.opacity=1;
    });
  }

  renderCardLinks() {
    let links=[];

    for (let i=0; i < CARD_LINKS.length; i++) {

      links.push(
        <li key={i} className='card__item'>
          <CardLink
            title={CARD_LINKS[i].title}
            description={CARD_LINKS[i].description}
            imageUrl={CARD_LINKS[i].imageUrl}
            url={CARD_LINKS[i].url}
            length={CARD_LINKS[i].length}
          />
        </li>
      );
    };

    return links;
  }

  render() {
    return (
      <main className='page__content'>
        <ul className='card__list'>
          {this.renderCardLinks()}
        </ul>
      </main>
    );
  }
};
