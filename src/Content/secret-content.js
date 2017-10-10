import React    from 'react';
import linkImg from '../Assets/images/link.png';
import oldManImg from '../Assets/images/oldman.png';
import fireImg from '../Assets/images/fire.png';
import letterImg from '../Assets/images/letter.png';
import heartImg from '../Assets/images/heart.png';
import itemSound from '../Assets/sounds/fanfare.mp3';

export default class SecretContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itemSelected: false
    };

    this.playTune = this.playTune.bind(this);
    this.renderAudio = this.renderAudio.bind(this);
    this.addHeart = this.addHeart.bind(this);
  }

  componentDidMount() {
    var component = this.domNode;

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });

  }

  addHeart() {
    this.playTune();
    localStorage.setItem('itemCollected', 'heart');
    setTimeout(function() { this.props.history.push('/'); }, 2000);
  }

  addLetter() {
    this.playTune();
    localStorage.setItem('itemCollected', 'letter');
    setTimeout(function() { this.props.history.push('/'); }, 2000);
  }

  playTune() {
    this.setState({itemSelected: true});
  }

  renderAudio() {
    if (this.state.itemSelected) {
      return <audio src={itemSound} autoPlay='autoplay' />;
    }
  }

  render() {
    const itemCollected = localStorage.getItem("itemCollected") === 'letter' ||
      localStorage.getItem("itemCollected") === 'heart';

    return (
      <main className='page__content secret' ref={(main) => { this.domNode = main; }}>
        {this.renderAudio()}
        <div className='secret__row'>
          {itemCollected ? null : <h1 className='title'>TAKE ANY ONE YOU WANT.</h1>}
        </div>
        <div className='secret__row'>
          <img src={fireImg} alt="Fire from Legend of Zelda in 8-bit style" />
          {itemCollected ? null : <img src={oldManImg} alt="The old man in the cave from Legend of Zelda in 8-bit style" /> }
          <img src={fireImg} alt="Fire from Legend of Zelda in 8-bit style" />
        </div>
        {itemCollected ? null : <div className='secret__row'>
          <a onClick={this.playTune} target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/ryancanfield.me-docs/2367-the-legend-of-zelda.nes.save'>
            <img src={letterImg} alt="Letter from Legend of Zelda in 8-bit style" />
          </a>
          <div onClick={this.addHeart}>
            <img src={heartImg} alt="Heart Container from Legend of Zelda in 8-bit style" />
          </div>
        </div>}
        <div className='secret__row'>
          {itemCollected ? null : <img src={linkImg} alt="Link from Legend of Zelda in 8-bit style" />}
        </div>
      </main>
    );
  }
};
