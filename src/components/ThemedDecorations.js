// Code ThemedDecoration Component Here
import React from "react";

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithWrapper = React.Children.map(
      this.props.children,
      child => {
        return <div className={this.props.theme}>{child}</div>;
      }
    );
    return <div>{childrenWithWrapper}</div>;
  }
}

// In the components/ThemedDecorations.js file, create a ThemedDecorations React component.
// This component renders out all of its children, while adding a className prop to every child.
