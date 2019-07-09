import React, { Component } from 'react';
import Header from '../../components/Header/header'
import Filter from '../../components/Filter/filter'

export default class Stylori extends Component {
    render() {
        return (
            <div>
                {/* Test <button onClick={() => { this.props.history.push('/') }} >Home</button> */}
                <Header/>
                {/* <Filter/> */}
            </div>
        )
    }
}