import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { CART } from 'queries/cart';
import { ALLORDERS } from 'queries/cart';
import { ALLUSERWISHLISTS } from 'queries/cart';
import { withRouter } from 'react-router-dom';
import { useNetworkRequest } from 'hooks/NetworkHooks'
// import { productsPendants } from 'mappers/dummydata';
// import { object } from 'prop-types';
var orderobj = {}
var orderobj1 = {}
var objallorder = {};
var objwishlist = {};
// let setFilter;
const initialCtx = {
    CartCtx: {
        cartFilters: {
            skuId: '',
            qty: '',
            price: '',
            user_id: '',
            discounted_price: "",
            tax_price: ''
        },
        loading: false, error: false, data: [], allorderdata: [], wishlistdata: []
    },
    setCartFilters: (filterData) => { },
    setallorderdata: () => { },

}


export const CartContext = React.createContext(initialCtx);
export const CartConsumer = CartContext.Consumer;
const Provider = (props) => {
    const [cartFilters, setCartFilters] = React.useState(initialCtx.CartCtx);
    const [allorderdata, setallorderdata] = React.useState([])
    const [wishlistdata, setwishlistdata] = React.useState([])
    // console.log("hdjhjhkjfh", allorderdata)
    var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : '';
    const user_id = cartFilters.user_id ? cartFilters.user_id : ""
    const price = cartFilters.price ? cartFilters.price : ""
    const { loading: crtloading, error: crterror, data: crtdata, makeFetch: addtocart } = useNetworkRequest('/addtocart', { user_id, products }, false)
    const userIds = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ''
    var cartdetails = JSON.parse(localStorage.getItem("cartDetails")) && JSON.parse(localStorage.getItem("cartDetails")).products.length > 0 ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : {}
    const guestlogId = cartFilters.user_id ? cartFilters.user_id : ''
    const { loading: allorderloading, error: allordererror, data: allorder, makeRequest: allordermakeRequest } = useGraphql(ALLORDERS, () => { }, {});
    const { loading: wishlistloading, error: wishlisterror, data: wishlistDATA, makeRequest: wishlistmakeRequest } = useGraphql(ALLUSERWISHLISTS, () => { }, {});
    // const prices = cartFilters.price ? cartFilters.price : ''
    const discounted_price = cartFilters.discounted_price ? cartFilters.discounted_price : ""
    useEffect(() => {
        if (JSON.stringify(crtdata).length > 10) {
            localStorage.setItem('cart_id', JSON.stringify(crtdata))
        }
        // localStorage.setItem('cart_id', JSON.stringify(crtdata))
    }, [crtdata])
    useEffect(() => {
        const orderall = allorder ? allorder && allorder.data && allorder.data.allOrders && allorder.data.allOrders.nodes : ""
        if (orderall && orderall.length > 0) {
            objallorder["allorderdata"] = allorder.data.allOrders
            // localStorage.setItem("allorder", allorder.data.allOrders)
            setallorderdata(objallorder)
        }
    }, [allorder, allorderdata])
    useEffect(() => {
        const wishlistdatas = allorder ? wishlistDATA && wishlistDATA.data && wishlistDATA.data.allUserWhislists && wishlistDATA.data.allUserWhislists.nodes : ""
        if (wishlistdatas && wishlistdatas.length > 0) {
            objwishlist["wishlistdata"] = wishlistDATA.data.allUserWhislists
            // localStorage.setItem("allorder", allorder.data.allOrders)
            localStorage.setItem("a__w_l", wishlistdatas && wishlistdatas.length)
            setwishlistdata(objwishlist)
        }
    }, [wishlistDATA])
    useEffect(() => {
        orderobj["userProfileId"] = userIds
        orderobj1["userprofileId"] = userIds
        allordermakeRequest(orderobj);
        wishlistmakeRequest(orderobj1)
    }, [])
    useEffect(() => {
        if (userIds.length > 0) {
            if (cartdetails && JSON.stringify(cartdetails).length > 0) {

                // const user_id = userIds
                // makeFetch({--login---})
            }
        }

        if (guestlogId.length > 0) {
            localStorage.setItem("user_id", cartFilters.user_id)
            if (JSON.stringify(cartdetails).length > 0) {
                var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : '';
                const user_id = cartFilters.user_id
                var addcart = ({ products, user_id })
                addtocart(addcart)
                orderobj["userProfileId"] = user_id
                allordermakeRequest(orderobj);
            }
        }
        else {
            if (cartFilters.price > 0) {
                var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
                var local_storage_products = []
                if (local_storage && Object.entries(local_storage).length > 0 && local_storage.constructor === Object) {
                    local_storage_products = JSON.parse(localStorage.getItem('cartDetails')).products.map(val => { return val })
                }

                var skuId = cartFilters.skuId;
                var products = [];
                var obj = {};
                var cartId = "";
                var userId = '';
                var obj = { sku_id: '', qty: '', price: '' }
                obj['sku_id'] = skuId;
                obj['qty'] = cartFilters.qty
                obj['price'] = cartFilters.price


                var products_sku_list = () => {
                    if (local_storage_products.length > 0) {
                        local_storage_products.push(obj);
                        return local_storage_products

                    }
                    else {
                        products.push(obj)
                        return products
                    }

                }
                var skuObj = { "cart_id": cartId, "user_id": userId, "products": products_sku_list() }
                localStorage.setItem('cartDetails', JSON.stringify(skuObj));
            }
        }
    }, [user_id, price, cartFilters])

    var skus;
    // const pathQueries = () => {
    //     skus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ''
    // }
    skus = localStorage.getItem("cartDetails") && JSON.parse(localStorage.getItem("cartDetails")).products.length > 0 ? JSON.parse(localStorage.getItem("cartDetails")).products.map(val => val.sku_id) : ''
    const { loading, error, data, makeRequest } = useGraphql(CART, () => { }, {});

    const updateProductList = () => {
        const variables = { "productList": skus };
        makeRequest(variables);
    }
    useEffect(() => {
        // pathQueries();
        setCartFilters(skus)
        updateProductList();
    }, [])

    const CartCtx = {
        cartFilters, loading, error, data, setCartFilters, allorderdata, wishlistdata
    }
    return (
        <CartContext.Provider value={{ CartCtx, setCartFilters, setallorderdata, setwishlistdata }} >
            {props.children}
        </CartContext.Provider>
    )
};

export const CartProvider = withRouter(Provider)