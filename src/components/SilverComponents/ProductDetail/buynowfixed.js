import {
    Grid,
    AppBar,
} from '@material-ui/core';
import React from 'react';
import './product-images.css';
import Buynowbutton from '../../Buynow/buynowbutton';
import CommenDialog from '../../../components/Common/Dialogmodel'

class Buynowfixed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modelOpen: false,
        }
    }
    valus = (valueId) => {
        var valus_locl = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : ""

        var vals;
        valus_locl && valus_locl.map(val => {
            const vlx = valueId && valueId
            if (vlx === val.sku_id) {
                vals = 1
                return false
            } else {
                vals = 0
            }

        })
        return vals
    }
    render() {
        const { data } = this.props;
        const canceldeletechecklist = () => {
            this.setState({
                modelOpen: false,
            })
        }

        const handleLocalStorage = () => {
            if (this.valus(this.props.data[0].skuId) === 1) {
                this.props.deleteComment()
              }
            else {
                this.setState({
                    modelOpen: true,
                })
            }
        }
        const deletechecklists = () => {
            var skuId = this.props.data[0].skuId;
            var products = [];
            var cartId = "";
            var userId = "";
            var obj = { sku_id: '', qty: '', price: '' }
            obj['sku_id'] = skuId;
            obj['qty'] = 1
            obj['price'] = this.props.data[0].offerPrice[0]
            products.push(obj)
            var skuObj = { "cart_id": cartId, "user_id": userId, "products": products }
            localStorage.setItem('cartDetails', JSON.stringify(skuObj));
            window.location.href = "/cart"
            this.setState({
                modelOpen: false,
            })
        }
        return (
            <div>
                <AppBar color="primary" className="product-page-fixed-footer">
                    {/* price={data[0].price}
                    offerPrice={data[0].offerPrice} */}
                    {/* <Grid container spacing={12} >
                        <Grid item xs={12} style={{ textAlign: "center",background:"#f9f9f9" }}>
                            <div class="css-ocmcwm eu70xvk2"><span class="css-kqsna2">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(data[0].offerPrice))}</span><span class="css-tg000w">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(data[0].price))}</span></div>
                        </Grid>
                    </Grid> */}
                    <Grid container spacing={12} >
                        <Grid item xs={6} className='fixed-grid' style={{ textAlign: "center", background: "#EBEAEA" }}>
                            <div onClick={handleLocalStorage.bind(this)}>
                                <Buynowbutton sku={data[0].skuId} class='product-footer-buynow' />
                            </div>
                        </Grid>
                        <CommenDialog isOpen={this.state.modelOpen} content={`Verify selected product details before proceeding`} handleClose={canceldeletechecklist.bind(this)} handleSuccess={() => this.props.deleteComment()} negativeBtn="No" positiveBtn="Yes" title="Confirmation" />
                        <Grid className='talk-to-us' item xs={6} style={{ justifyContent: "center", display: "flex" }}><a href="tel:18001020330" style={{ textDecoration: "none", color: "#394578", fontWeight: "600", fontSize: "14px", letterSpacing: "1.5px" }}><i class="fa fa-comments" >
                        </i> &nbsp;Talk To Us</a></Grid>
                    </Grid>
                </AppBar>

            </div>
        )
    }
}
export default Buynowfixed;