import React       from 'react';
import secretSound from '../Assets/sounds/secret_sound.mp3';
import SecretContent from '../Content/secret-content';

export default class SecretPage extends React.Component {

  render() {
    return (
      <div key='secret-page' className='page__content-container'>
        <main className='page__content'>
          <audio src={secretSound} autoPlay="autoplay" />
          <SecretContent />
        </main>
      </div>
    );
  }
};
