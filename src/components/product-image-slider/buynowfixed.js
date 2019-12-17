import {
    Grid,
    AppBar,
} from '@material-ui/core';
import React from 'react';
import './product-images.css';
import Buynowbutton from '../Buynow/buynowbutton';


class Buynowfixed extends React.Component {
    render() {
        const { data } = this.props;
        const handleLocalStorage = () => {
            var skuId = data[0].skuId;
            var products = [];
            var cartId = "";
            var userId = "";
            var obj = { sku_id: '', qty: '', price: '' }
            obj['sku_id'] = skuId;
            obj['qty'] = 1
            obj['price'] = data[0].offerPrice[0]
            products.push(obj)
            var skuObj = { "cart_id": cartId, "user_id": userId, "products": products }
            // var skuIdLocalStorage = `products: ${JSON.parse(products)}`
            localStorage.setItem('cartDetails', JSON.stringify(skuObj));
            //    var arr = localStorage.getItem('skuId', skuId);
            //     localStorage.setItem('skuId', skuId);
            window.location.href = "/cart"
        }
        return (
            <div>
                <AppBar color="primary" className="product-page-fixed-footer">
                    <Grid container spacing={12} style={{width:"100%"}}>
                        <Grid item xs={6} >
                          <span className='fixed_grid_price'>5435353</span>
                          <span className='fixed_grid_price'>5435353</span>
                        </Grid>
                        <Grid className="" item xs={6}>
                            </Grid>
                    </Grid>

                    <Grid container spacing={12}>
                        <Grid item xs={6} className='fixed-grid'>
                            <div onClick={handleLocalStorage.bind(this)}>
                                <Buynowbutton sku={data[0].skuId} class='product-footer-buynow ' />
                            </div>
                        </Grid>
                        <Grid className='talk-to-us' item xs={6}><i class="fa fa-comments">
                        </i> &nbsp;Talk To Us</Grid>
                    </Grid>
                </AppBar>

            </div>
        )
    }
}
export default Buynowfixed;