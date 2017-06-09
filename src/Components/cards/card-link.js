import React from 'react';
import PropTypes from 'prop-types';

export default class CardLink extends React.Component {

  render() {
    return (
      <a href={this.props.url} target='_blank' rel='noopener noreferrer' className='card__link'>
          <div className='card__row'>
              <div className='card__column'>
                  <img src={this.props.imageUrl} className='card__image' alt='presentational card' role="presentation" />
              </div>
              <div className='card__column'>
                  <span className='card__title'>
                      {this.props.title}
                  </span>
                  <p className='card__description'>
                      {this.props.description}
                  </p>
                  <span className='card__length'>
                      {this.props.length}
                  </span>
              </div>
          </div>
      </a>
    );
  }
};

CardLink.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  length: PropTypes.string
};
