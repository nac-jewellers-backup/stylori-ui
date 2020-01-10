import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './payment.css';
import SimpleSelect from '../../../components/InputComponents/Select/Select';
import { CartContext } from 'context'
import cart from 'mappers/cart'
import { useNetworkRequest } from 'hooks/index';
import { API_URL, HOME_PAGE_URL, CDN_URL } from '../../../config';

var obj = {}
var obj_user = {}
let gut_lg = localStorage.getItem("gut_lg") ? JSON.parse(localStorage.getItem("gut_lg")) : {}
let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""

class CashonDelivey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res_data: null
        }
    }
    makeFetch = async (props) => {
        debugger
        const bb = this.props && this.props.dataCard1
        // if (bb.length <0) {
        //    return
        // } else {
        await fetch(`${API_URL}/createorder`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        }).then(res => {
            alert(
                'Order Placed Successfully'
            ) 
            return res.json();
        })
            .then(resdata => {
                console.log('datasssss', resdata)
               
                if (resdata !== null && resdata !== undefined) {
                    localStorage.setItem("order_id", JSON.stringify(resdata.order.id))
                }
           })
            .catch(err => {
                // console.log(err)
            });

        localStorage.removeItem("cart_id")
        if (gut_lg === true) {
            localStorage.clear();
            // localStorage.removeItem("gut_lg")
        }
        // } 

        obj_user["user_id"] = user_id
        obj_user["jewellery"] = "jewellery"
        this.props.setCartFilters(obj_user)
        // window.location.pathname = "/jewellery"

    }
    componentDidMount() {

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
        var discounted_price = this.props.cartFilters.discounted_price ? this.props.cartFilters.discounted_price : ""
        // var { data:coddata, error, loading, makeFetch} = useNetworkRequest('/api/auth/signin', {}, false);
        var dataCard1;
        if (data.length > 0 && data !== undefined && data !== null) {
            dataCard1 = this.props.data && this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);
            function myFunc(total, num) {
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
                                {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(dataCard1 - discounted_price))}
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
    let { CartCtx: { setCartFilters, cartFilters, data, loading, error } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <CashonDelivey {...props} data={mapped} cartFilters={cartFilters} setCartFilters={setCartFilters} />
    return content
}
export default (Components)

