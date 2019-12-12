import React from 'react';
import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar,
    Grid,
    Button
} from '@material-ui/core';
import "./accounts.css";
import { CartContext } from 'context'
import RemoveWishlist from 'components/wishlist/removewishlist';
// props.setCartFilters({ skuId: data[0].skuId, qty: 1, price: data[0].offerPrice })
const Wishlists = (props) => {
    const { setCartFilters } = React.useContext(CartContext);
    return <Component setCartFilters={setCartFilters}  {...props} />
}
class Component extends React.Component {
    // handleLocalStorage = (props) => {
    //     debugger
    //     var datas;
    //     const { wishlistdata } = this.props.wishlistdata;
    //     // wishlistdata.nodes[0].productId
    //     if (wishlistdata && wishlistdata.nodes.length > 0) {
    //         wishlistdata && wishlistdata.nodes.map(first_map => {
    //             if (first_map !== null || first_map !== undefined) {
    //                 first_map && first_map.productListByProductId && first_map.productListByProductId.transSkuListsByProductId && first_map.productListByProductId.transSkuListsByProductId.nodes.map(thrd_map => {
    //                     if (thrd_map !== null || thrd_map !== undefined) {
    //                         datas = thrd_map
    //                     }
    //                 })
    //             }
    //         })
    //     }
    //     this.props.setCartFilters({ skuId: wishlistdata.nodes[0].skuId, qty: 1, price: datas.markupPrice })
    //     // return datas
    // }
    render() {
        const { wishlistdata } = this.props.wishlistdata;
        return (
            <>
                {/* {JSON.stringify(this.props.wishlistdata)} */}
                {wishlistdata && wishlistdata.nodes.map(first_map =>
                    <>
                        {/* {first_map && first_map.productListByProductId && first_map.productListByProductId.transSkuListsByProductId && first_map.productListByProductId.transSkuListsByProductId.nodes.map(thrd_map =>  */}
                        <Grid container spacing={12}>
                            <Grid item lg={1}>
                                <div className="remove-product">
                                    <RemoveWishlist sku={first_map.skuId} productId={first_map.productId} />
                                </div>
                            </Grid>
                            <Grid item lg={3}>
                                <div className="wishlist_img">
                                    <img className="viewport-img" src={`https://assets.stylori.net/base_images/${first_map.productListByProductId.productImagesByProductId.nodes[0].imageUrl}`
                                    } />
                                </div></Grid>
                            <Grid item lg={8}>
                                <div>
                                    <div className="wislist_title">{first_map.productListByProductId.productName}</div><br />
                                    <div className="wislist_price">{first_map.productListByProductId.transSkuListsByProductId && first_map.productListByProductId.transSkuListsByProductId.nodes[0].markupPrice}</div><br />
                                    <div onClick={() => {
                                        this.props.setCartFilters({
                                            skuId: first_map.skuId,
                                            qty: 1,
                                            price: first_map.productListByProductId.transSkuListsByProductId && first_map.productListByProductId.transSkuListsByProductId.nodes[0].markupPrice
                                        })
                                        // window.location.pathname = "/cart"
                                    }}>
                                        {/* <RemoveWishlist sku={first_map.skuId} productId={first_map.productId} /> */}
                                        <Button className="add-bag">
                                            <i class="fa fa-shopping-bag"></i>&nbsp;Add to Bag
                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        {/* )}  */}
                    </>
                )}


            </>
        )
    }
}


export default Wishlists;
