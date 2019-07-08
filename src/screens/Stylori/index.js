import React, { Component } from 'react';

export default class Stylori extends Component {
    render() {
        return (
            <div>
                Test <button onClick={() => { this.props.history.push('/') }} >Home</button>
            </div>
        )
    }
}