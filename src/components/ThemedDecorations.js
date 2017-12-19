// Code ThemedDecoration Component Here
import React from "react";

class ThemedDecorations extends React.Component {
  render() {
    const childrenToRender = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        className: this.props.theme
      })
    );

    return <div>{childrenToRender}</div>;
  }
}

export default ThemedDecorations;
