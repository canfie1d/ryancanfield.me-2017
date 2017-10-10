import React    from 'react';
import MenuList from '../Components/list/menu-list';
import { ELSEWHERE_ITEMS } from '../Services/Data';

export default class ElsewhereContent extends React.Component {

  componentDidMount() {
    var component = this.domNode;

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });

  }

  render() {
    return (
      <main className='page__content page__content--menu page__content--no-header' ref={(main) => { this.domNode = main; }}>
        <MenuList menuItems={ELSEWHERE_ITEMS} />
      </main>
    );
  }
};
