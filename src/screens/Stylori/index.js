import React, { Component } from 'react';
<<<<<<< HEAD
import ProductDescription from '../../components/productDescription';
export default class Stylori extends Component {
    render() {
        return (
            <>
                <ProductDescription />

            </>

=======
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
>>>>>>> 9eed70acc8a2c18bef32fb565af4be38bf8393ab
        )
    }
}