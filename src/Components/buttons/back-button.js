import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class BackButton extends React.Component {

  render() {
    let classes = [
      'branding',
      'branding--back',
      this.props.staySmall ? 'branding--small' : null,
      this.props.extraSmall ? 'branding--x-small' : null
    ];

    return (
      <div
        className={classNames(classes)}
        onKeyPress={this.props.onClick}
        onClick={this.props.onClick}
        role="button"
        tabIndex='0'
      >
        <div className='branding__row'>
            <div className='branding__column'>
                <span className='branding__letter'>b</span>
            </div>
            <div className='branding__column'>
                <span className='branding__letter'>a</span>
            </div>
            <div className='branding__column'>
                <span className='branding__letter' />
            </div>
        </div>
        <div className='branding__row'>
            <div className='branding__column'>
                <span className='branding__letter' />
            </div>
            <div className='branding__column'>
                <span className='branding__letter'>c</span>
            </div>
            <div className='branding__column'>
                <span className='branding__letter'>k</span>
            </div>
        </div>
      </div>
    );
  }
};

BackButton.propTypes = {
  onClick   : PropTypes.func,
  staySmall : PropTypes.bool
};
