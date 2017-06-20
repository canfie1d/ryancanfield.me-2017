import React              from 'react';
import Button             from '../Components/buttons/button';
import { browserHistory } from 'react-router';

export default class Page404 extends React.Component {

  onMenuClick() {
    browserHistory.push('/');
  }

  render() {
    const style1 = {
      textAlign: 'center',
      marginTop: '200px',
      fontSize: '180px',
      fontWeight: 'bold',
    };

    const style2 = {
      textAlign: 'center',
      fontSize: '20px',
    };

    return (
      <div>
        <h1 style={style1}>{'404'}</h1>
        <h2 style={style2}>{'Page Not Found'}</h2>
        <Button element='a' onClick={this.onMenuClick}>
          Back
        </Button>
      </div>
    );
  }
};
