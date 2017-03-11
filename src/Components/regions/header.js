import React       from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import classNames  from 'classnames';
import Icon        from '../../Components/icon/icon';
import BackButton  from '../../Components/buttons/back-button';

let getPropsFromApplicationState=(state) => {
  return {
    browser : state.browser
  };
};

const Header=connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'Header',

  onBackClick() {
    browserHistory.push('/');
  },

  propTypes : {
    title      : React.PropTypes.string,
    icon       : React.PropTypes.string,
    marginTop  : React.PropTypes.bool,
    smallWidth : React.PropTypes.bool
  },

  renderIcon() {
    if (this.props.browser.greaterThan.extraSmall) {
      let iconSize=this.props.browser.greaterThan.small ? 'x-large' : 'large';

      return (
        <Icon className='page__header__icon' icon={this.props.icon} size={iconSize} color='white' />
      );
    }
  },

  render() {
    let classes=[
      'page__header',
      this.props.smallWidth ? 'page__header--small-width' : null
    ];

    return (
            <header className='header'>
                <div className={classNames(classes)}>
                    <BackButton onClick={this.onBackClick} extraSmall={true} />
                    <h1 className='page__header__title'>{this.props.title}</h1>
                    {this.renderIcon()}
                </div>
            </header>
        );
  },

}));

export default Header;
