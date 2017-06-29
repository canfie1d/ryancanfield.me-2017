import React    from 'react';
import ReactDOM from 'react-dom';
import linkImg from '../Assets/images/link.png';

export default class AboutContent extends React.Component {

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
      <main className='page__content'>
        HERE TAKE THIS
        <img src={linkImg} alt="Link from Legend of Zelda in 8-bit style"/>
      </main>
    );
  }
};
