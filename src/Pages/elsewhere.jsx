import React              from 'react';
import Header             from '../Components/regions/header';
import ElsewhereContent   from '../Content/elsewhere-content';

export default class ElsewherePage extends React.Component {

  render() {
    return (
      <div key='elsewhere-page' className='page__content-container'>
        <Header
          title='Elsewhere'
          icon='Elsewhere'
        />
        <ElsewhereContent />
      </div>
    );
  }
};
