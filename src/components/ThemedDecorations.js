import React, {Component} from 'react';

class ThemedDecorations extends Component {
    render(){
        const children = React.Children.map(this.props.children, child => React.cloneElement(child,{className: this.props.theme}))
        return(
            <div>
                {children}
            </div>
        )
    }
}

export default ThemedDecorations;
