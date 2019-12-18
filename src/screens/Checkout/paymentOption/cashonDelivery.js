import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './payment.css';
import SimpleSelect from '../../../components/InputComponents/Select/Select';
import { CartContext } from 'context'
import cart from 'mappers/cart'
import { useNetworkRequest } from 'hooks/index';
var obj = {}
let gut_lg = localStorage.getItem("gut_lg") ? JSON.parse(localStorage.getItem("gut_lg")) : {}

class CashonDelivey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res_data: null
        }

    }
    makeFetch = async (props) => {
        const bb = this.props && this.props.dataCard1
        // if (bb.length <0) {
        //    return
        // } else {
        await fetch('https://api.stylori.net/createorder', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        }).then(function async(response) {
            alert('Order Placed Successfully')
        }).then(function (data) {
            console.log('data', data)
        });
        localStorage.removeItem("cartDetails")
        localStorage.removeItem("panel")
        if (gut_lg === true) {
            localStorage.removeItem("user_id")
            localStorage.removeItem("cart_id")
            localStorage.removeItem("isedit")
            localStorage.removeItem("gut_lg")

            localStorage.removeItem("select_addres")
            localStorage.removeItem("email")
            localStorage.removeItem("a__c_t")
            // localStorage.removeItem("gut_lg")
        }
        // }
        window.location.pathname = "/jewellery"
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.res_data !== prevState.res_data) {
            // in 1.6.2 there will not execute
            alert(this.state.res_data)
        }
    }
    render() {
        let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : ""
        let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
        const data = this.props.data ? this.props.data : ""
        // var { data:coddata, error, loading, makeFetch} = useNetworkRequest('/api/auth/signin', {}, false);
        var dataCard1;
        if (data.length > 0 && data !== undefined && data !== null) {
            dataCard1 = this.props.data && this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);
            function myFunc(total, num, discounted_price) {
                discounted_price = this && this.props.cartFilters.discounted_price ? JSON.stringify(this.props.cartFilters.discounted_price) : ""
                if (discounted_price.length > 0) {
                    var a = Math.round(total + num);
                    var cart_price = (a - discounted_price)
                } else {
                    var cart_price = Math.round(total + num);
                }
                return cart_price
            }
        }
        obj['payment_mode'] = "COD"
        obj['user_id'] = user_id
        obj['cart_id'] = cart_id
        // alert(JSON.stringify(dataCard1))
        return (
            <div>
                <Grid spacing={12} container lg={12} xs={12} style={{ width: "100%" }}>
                    <Grid item lg={12} xs={12}>
                        <div className="amout-pay"> Amount Payable </div>
                        <div className="credit-btn-div">
                            <span className="rups">
                                {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(dataCard1))}
                               </span>&nbsp;
                            <Button className="credit-button" type="submit"
                                onClick={() => this.makeFetch(this.props)}
                            >Place COD order</Button>
                        </div>

                    </Grid>
                    <div className="code-btn-top">
                        COD orders are subject to telephonic verification.
                        </div>
                </Grid>

            </div>
        )
    }
}
const Components = props => {
    let { CartCtx: { cartFilters, data, loading, error } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <CashonDelivey {...props} data={mapped} cartFilters={cartFilters} />
    return content
}
export default (Components)

