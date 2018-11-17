import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
            <div className='c-background'>
                {this.props.children}
            </div>
        );
    }
}

export default Background;
