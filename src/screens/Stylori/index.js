import React, { Component } from 'react';
import Header from '../../components/Header/header'

export default class Stylori extends Component {
    render() {
        return (
            <div>
                {/* Test <button onClick={() => { this.props.history.push('/') }} >Home</button> */}
                <Header/>
            </div>
        )
    }
}