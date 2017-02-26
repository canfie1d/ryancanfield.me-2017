import React              from 'react';
import Header             from '../Components/regions/header';
import ElsewhereContent   from '../Content/elsewhere-content';

const ElsewherePage=React.createClass({

  displayName: 'ElsewherePage',

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
  },

});

export default ElsewherePage;
