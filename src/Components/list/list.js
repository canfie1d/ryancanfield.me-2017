import React from 'react';
import Icon  from '../icon/icon';

const List = React.createClass({

  displayName: 'List',

  propTypes: {
    listItems : React.PropTypes.array.isRequired
  },

  renderLink(item) {
    if (item.url !== '') {
      return (
        <a className='icon-list__image' href={item.url} target='_blank'>
          <img className='image--logo' src={item.image} alt={item.title} />
        </a>
      );
    }
    return (
      <span className='icon-list__image'>
        <img className='image--logo' src={item.image} alt={item.title} />
      </span>
    );
  },

  renderItems() {
    let items = [];

    for (let i = 0; i < this.props.listItems.length; i++) {
      if (this.props.listItems[i].image) {
        items.push(
          <li key={i} className='icon-list__item'>
            {this.renderLink(this.props.listItems[i])}
            <span className='icon-list__tooltip'>{this.props.listItems[i].title}</span>
        </li>
        );
      } else {
        items.push(
          <li key={i} className='icon-list__item'>
            <span className='icon-list__icon'>
              <Icon className='icon--logo' icon={this.props.listItems[i].icon} color='white' size='x-large' />
            </span>
            <span className='icon-list__tooltip'>{this.props.listItems[i].title}</span>
          </li>
        );
      }
    }

    return items;
  },

  render() {
    return (
      <ul className='icon-list'>
        {this.renderItems()}
      </ul>
    );
  },
});

export default List;
