// Code ThemedDecoration Component Here
import React from 'react'

// childrenWithClassName = () => {
//   return React.Children.map(this.props.children, child => {
//   return React.cloneElement(child, {
//     className: 'extra-prop',
//   })
// })
// }

class ThemedParty extends React.Component {

  render(){
    return (
      <div>
        {React.Children.map(this.props.children, child => { return React.cloneElement(child, { className: 'heaven' })})}
      </div>
    )
  }
}

export default ThemedParty
