// Code ThemedDecoration Component Here

import React from 'react';

class ThemedDecoration extends React.Component {
  render() {
    return (
      <div>{React.Children.map(this.props.children, c => (React.cloneElement(c, {className: this.props.theme})))}</div>
    )
  }
}

export default ThemedDecoration
