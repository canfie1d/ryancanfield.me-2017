import React from 'react';

export default class Landing extends React.Component {
  render () {
    return (
      <div>
      Hello! I am the landing page!
      <button onClick={this.props.addNumber}>Add</button>
      val: {this.props.number}
      <button onClick={this.props.subtractNumber}>Subtract</button>
      </div>
    )
  }
}
