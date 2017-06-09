import React       from 'react';
import classNames  from 'classnames';
import { connect } from 'react-redux';
import Icon        from '../../Components/icon/icon';
import PropTypes   from 'prop-types';

const mapStateToProps = ({ browser }) => ({ browser });

class Header extends React.Component {

  renderIcon() {
    if (this.props.browser.greaterThan.extraSmall) {
      let iconSize=this.props.browser.greaterThan.small ? 'x-large' : 'large';

      return (
        <Icon className='page__header__icon' icon={this.props.icon} size={iconSize} color='white' />
      );
    }
  }

  render() {
    let classes=[
      'page__header',
      this.props.smallWidth ? 'page__header--small-width' : null
    ];

    return (
      <header className='header'>
        <div className={classNames(classes)}>
          {this.renderIcon()}
          <h1 className='page__header__title'>{this.props.title}</h1>
        </div>
      </header>
    );
  }

};

export default connect(mapStateToProps)(Header);

Header.PropTypes = {
  title     : PropTypes.string,
  icon      : PropTypes.string,
  marginTop : PropTypes.bool,
  smallWidth: PropTypes.bool
};
