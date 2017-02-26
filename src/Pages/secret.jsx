import React       from 'react';
import secretSound from '../Assets/secret_sound.mp3';

const SecretPage = React.createClass({

  displayName: 'SecretPage',

  render() {

    return (
            <div key='secret-page' className='page__content-container'>
                <main className='page__content'>
                    <audio src={secretSound} autoPlay="autoplay" />
                </main>
            </div>
        );
  },

});

export default SecretPage;