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
import { API_URL, CDN_URL } from "config"

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
    check_img = (imges) => {
        var image_urls;
        const width = window.innerWidth;
        var browser_type = JSON.parse(localStorage.getItem('browserDetails'))
        var resolution = 500
        if (imges && imges.length > 0) {
            var _resolutions = width < 960 ? `${resolution * 2}X${resolution * 2}` : `${resolution}X${resolution}`
            var url_split = imges && imges.split('/')
            var extension_split = url_split && url_split[url_split.length - 1]
            var browser_type_append = extension_split && extension_split.split('\.')[0].concat(`${browser_type && browser_type.browser_type}`)
            url_split[url_split && url_split.length - 1] = browser_type_append
            url_split.splice(2, 0, _resolutions);
            var url_construct = url_split.join().replace(/\,/g, '/')
            image_urls = `${CDN_URL}${url_construct}`
            return image_urls
        }

    }
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
                                <Grid container spacing={12} xs={12} style={{ paddingBottom: "10px", }}>
                                    {/* <Grid  xs={12}> */}
                                    <Grid sm={2} lg={2} item class="topPaddingwish" style={{ paddingRight: "4px", marginBottom: "12px", float: "left" }}>
                                        <RemoveWishlist sku={first_map.skuId} productId={first_map.productId}
                                            data={
                                                <>
                                                    <div className="remove-product">
                                                    </div>
                                                </>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={5} sm={3} lg={3}>
                                        <div className="wishlist_img" >
                                            <img className="viewport-img" src={this.check_img(first_map.productListByProductId.productImagesByProductId.nodes[0].imageUrl)
                                            } />
                                        </div></Grid>
                                    <Grid item xs={12} sm={5} lg={5}
                                        style={{ paddingLeft: "15px" }}
                                    >
                                        <div>
                                            <div className="wislist_title">{first_map.productListByProductId.productName}</div>

                                            <div className="wislist_price">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(first_map.transSkuListBySkuId && first_map.transSkuListBySkuId.markupPrice))}</div>
                                            <div className="add-bag">
                                                <>
                                                    <RemoveWishlist
                                                        sku={first_map.skuId}
                                                        productId={first_map.productId}
                                                        add={first_map.transSkuListBySkuId && first_map.transSkuListBySkuId.markupPrice}
                                                        data={
                                                            <><i class="fa fa-shopping-bag"></i>&nbsp;Add to Bag</>
                                                        }
                                                    />

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
                        )}</> : <div style={{ textAlign: "center", color: "#394578" }}>No wishlist yet</div>}



            </>
        )
    }
}


export default Wishlists;

