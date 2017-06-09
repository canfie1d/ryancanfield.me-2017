import React    from 'react';
import ReactDOM from 'react-dom';
import MenuList from '../Components/list/menu-list';
import { ELSEWHERE_ITEMS } from '../Services/Data';

export default class ElsewhereContent extends React.Component {

  componentDidMount() {
    var component = ReactDOM.findDOMNode(this);

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });
  }

  render() {
    return (
      <main className='page__content page__content--menu page__content--no-header'>
        <MenuList menuItems={ELSEWHERE_ITEMS} />
      </main>
    );
  }
};
