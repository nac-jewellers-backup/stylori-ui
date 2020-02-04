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
    //     
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
                {wishlistdata && wishlistdata.nodes.length > 0 ?
                    <>
                        {wishlistdata && wishlistdata.nodes.map(first_map =>
                            <>
                                 {/* {first_map && first_map.productListByProductId && first_map.productListByProductId.transSkuListsByProductId && first_map.productListByProductId.transSkuListsByProductId.nodes.map(thrd_map =>  */}
                                <Grid container spacing={12} xs={12}  style={{paddingBottom:"10px",}}>
                                    {/* <Grid  xs={12}> */}
                                    <Grid item  style={{width:"50%"}} >
                                    <Grid item className="topPaddingwish" style={{paddingRight:"4px",float:"left"}}>
                                          <div className="remove-product">
                                            <RemoveWishlist sku={first_map.skuId} productId={first_map.productId} />
                                        </div>
                                    </Grid>
                                        <div className="wishlist_img" style={{float:"left"}}>
                                            <img className="viewport-img" src={`https://assets.stylori.net/base_images/${first_map.productListByProductId.productImagesByProductId.nodes[0].imageUrl}`
                                            } />
                                         </div></Grid>
                                    <Grid  style={{width:"50%"}}>
                                        <div>
                                            <div className="wislist_title">{first_map.productListByProductId.productName}</div>

                                            <div className="wislist_price">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(first_map.transSkuListBySkuId && first_map.transSkuListBySkuId.markupPrice))}</div>
                                            <div className="add-bag">
                                                <>
                                                    <RemoveWishlist
                                                        sku={first_map.skuId}
                                                        productId={first_map.productId}
                                                        add={first_map.transSkuListBySkuId && first_map.transSkuListBySkuId.markupPrice}
                                                    />
                                                <i className="fa fa-shopping-bag"></i>&nbsp;Add to Bag
                                                    </>
                                                {/* <Button "> */}
                                                {/* onClick={() => {
                                                        this.props.setCartFilters({
                                                            skuId: first_map.skuId,
                                                            qty: 1,
                                                            price: first_map.transSkuListBySkuId && first_map.transSkuListBySkuId.markupPrice
                                                        })
                                                    }} className="add-bag"> */}
                                    {/* </Button> */}
                                            </div>
                                        </div>
                                    </Grid>
                                    {/* </Grid> */}
                                </Grid>
                                {/* )}  */}
                            </>
                        )}</> : <div style={{textAlign: "center", color: "#394578" }}>No wishlist yet</div>}



            </>
        )
    }
}


export default Wishlists;
