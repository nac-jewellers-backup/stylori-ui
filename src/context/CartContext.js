import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { CART, FetchSku, FetchCartId } from 'queries/cart';
import { ORDERSUCCESSFUL } from 'queries/cart';
import { ALLORDERS } from 'queries/cart';
import { ALLUSERWISHLISTS } from 'queries/cart';
import { withRouter } from 'react-router-dom';
import { useNetworkRequest } from 'hooks/NetworkHooks'
import { FilterOptionsContext } from 'context/FilterOptionsContext';
import { matchPath } from "react-router";
import { API_URL } from "config"
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
            tax_price: '',
            reload: "",
            jewellery: "",
            _cart_id: {},


        },
        loading: false, error: false, data: [], allorderdata: [], wishlistdata: [], wishlist_count: [], noproducts: false, NewUser: {}
    },
    setCartFilters: (filterData) => { },
    setallorderdata: () => { },
    setwishlist_count: () => { },
    setwishlistdata: () => { },
    setNoproducts: () => { },
    setNewUser: () => { }
    // setCartId:() =>{}
}
export const CartContext = React.createContext(initialCtx);
export const CartConsumer = CartContext.Consumer;
const Provider = (props) => {
    const [cartFilters, setCartFilters] = React.useState(initialCtx.CartCtx);
    const [allorderdata, setallorderdata] = React.useState([])
    const [wishlistdata, setwishlistdata] = React.useState([])
    const [wishlist_count, setwishlist_count] = React.useState([])
    const [noproducts, setNoproducts] = React.useState(false)
    const [NewUser, setNewUser] = React.useState({})
    // const [_cart_id, setCartId] = React.useState([])
    var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : [];
    const user_id = cartFilters.user_id ? cartFilters.user_id : ""
    const price = cartFilters.price ? cartFilters.price : ""
    const { loading: crtloading, error: crterror, data: crtdata, makeFetch: addtocart } = useNetworkRequest('/addtocart', { user_id, products }, false)
    const userIds = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ""
    var cartdetails = JSON.parse(localStorage.getItem("cartDetails")) && JSON.parse(localStorage.getItem("cartDetails")).products.length > 0 &&
        Object.keys(JSON.parse(localStorage.getItem("cartDetails")).products.filter(val => { if (Object.keys(val).length > 0) return val })).length > 0
        ?
        JSON.parse(localStorage.getItem("cartDetails")).products.filter(val => { if (Object.keys(val).length > 0) return val })[0].sku_id
        :
        {}
    // JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : []
    const guestlogId = cartFilters.user_id ? cartFilters.user_id : ''
    const { loading: allorderloading, error: allordererror, data: allorder, makeRequest: allordermakeRequest } = useGraphql(ALLORDERS, () => { }, {}, false);
    const { loading: allorderloadingsuccesful, error: allordererrorsuccesful, data: allordersuccesful, makeRequest: allordermakeRequestSuccessful } = useGraphql(ORDERSUCCESSFUL, () => { }, {}, false);
    const { loading: wishlistloading, error: wishlisterror, data: wishlistDATA, makeRequest: wishlistmakeRequest } = useGraphql(ALLUSERWISHLISTS, () => { }, {}, false);
    const { loading, error, data, makeRequest } = useGraphql(CART, () => { }, {});
    // const prices = cartFilters.price ? cartFilters.price : ''
    const discounted_price = cartFilters.discounted_price ? cartFilters.discounted_price : ""
    const reload = cartFilters.reload ? cartFilters.reload : ""
    const jewellery = cartFilters.jewellery ? cartFilters.jewellery : ""
    // const { setwishlist_count } = React.useContext(FilterOptionsContext);
    // alert(JSON.stringify(wishlist_count,wishlistdata))
    var con_gust = localStorage.getItem('gut_lg') ? JSON.parse(localStorage.getItem('gut_lg')) : ""
    const myStorage = sessionStorage.getItem("user_id");
    const localvalues_check = JSON.parse(localStorage.getItem('gut_lg')) === true ? true : false
    const order_idx = localStorage.getItem('order_id') ? JSON.parse(localStorage.getItem('order_id')) : "yourorder"
    let gut_lg = localStorage.getItem("gut_lg") ? JSON.parse(localStorage.getItem("gut_lg")) : {}
    React.useEffect(() => {
        if (localvalues_check === true) {
            if (con_gust === true) {
                if (!myStorage) {
                    localStorage.clear();
                    sessionStorage.clear();
                }
            }
        }
    }, [])

    // React.useEffect(() => {
    //     var a = window.location.pathname
    //     var b = a.split("/")
    //     if (b[1] === "paymentsuccess") {
    //         localStorage.removeItem("panel")
    //         localStorage.removeItem("cartDetails")
    //         localStorage.removeItem("ship_isactive")
    //         localStorage.removeItem("bil_isactive")
    //     }
    // }, [])
    React.useEffect(() => {
        var obj = {}
        var products = []
        var _cartDetails = {}
        if (!loading && !error) {

            if (data && data.data && data.data.allTransSkuLists && data.data.allTransSkuLists.nodes && data.data.allTransSkuLists.nodes.length > 0) {
                data.data.allTransSkuLists.nodes.map(val => {
                    obj['sku_id'] = val.generatedSku;
                    obj['qty'] = 1
                    obj['price'] = val.markupPrice
                    products.push(obj)
                })
                // { "cart_id": '', "user_id": userId, "products": products_sku_list() }
                _cartDetails['cart_id'] = ''
                _cartDetails['userId'] = ''
                _cartDetails['products'] = products
                if (localvalues_check && localvalues_check === false) {
                    localStorage.removeItem("bil_isactive")
                    localStorage.removeItem("ship_isactive")
                    localStorage.removeItem("select_addres")
                    // window.location.reload()
                    localStorage.setItem('cartDetails', JSON.stringify(_cartDetails))
                }
            }


        }
    }, [loading, error, data])
    useEffect(() => {
        // alert("cart")
        if (jewellery && jewellery === "jewellery") {
            localStorage.removeItem("panel")
            localStorage.removeItem("cartDetails")
            localStorage.removeItem("ship_isactive")
            localStorage.removeItem("bil_isactive")
            window.location.pathname = `/paymentsuccess/${order_idx}`
        }
        if (crtdata && Object.keys(crtdata).length > 0 && crtdata.constructor === Object) {
            localStorage.setItem('cart_id', JSON.stringify(crtdata))
            cartFilters['_cart_id'] = crtdata
            // _cart_id:crtdata
            setCartFilters({ cartFilters })

        }
        if (reload && reload.length > 0) {
            window.location.reload();
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

    // useEffect(() => {

    //     const allordersucces = allordersuccesful ? allordersuccesful && allordersuccesful.data && allordersuccesful.data.allOrders && allordersuccesful.data.allOrders.nodes : ""
    //  alert(JSON.stringify(allordersucces))
    //  if (allordersucces !== undefined && allordersucces !== null && allordersucces.length > 0) {
    //             objallorder["allorderdata"] = allordersucces&&allordersucces.data&&allordersucces.data.allOrders.nodes
    //         setallorderdata(objallorder)
    //     }
    // }, [ allordersuccesful])


    useEffect(() => {
        var obj_aishlist_count = {}
        const wishlistdatas = allorder ? wishlistDATA && wishlistDATA.data && wishlistDATA.data.allUserWhislists && wishlistDATA.data.allUserWhislists.nodes : ""
        if (wishlistdatas && wishlistdatas.length > 0) {
            objwishlist["wishlistdata"] = wishlistDATA.data.allUserWhislists
            // localStorage.setItem("allorder", allorder.data.allOrders)
            // obj_aishlist_count["wishlist_count"] = wishlistdatas && wishlistdatas.length
            // localStorage.setItem("a__w_l", wishlistdatas && wishlistdatas.length)
            setwishlistdata(objwishlist)
            // setwishlist_count(obj_aishlist_count)
            // alert(JSON.stringify(obj_aishlist_count))
        }
        // else {
        //     localStorage.setItem("a__w_l", 0)
        // }
    }, [wishlistDATA, wishlistdata])
    useEffect(() => {
        
        orderobj["userProfileId"] = userIds
        orderobj1["userprofileId"] = userIds
        if (userIds) wishlistmakeRequest(orderobj1)
        orderobj["userProfileId"] = localStorage.getItem('user_id')
        if ((window.location.pathname === '/account-allorders' || window.location.pathname === '/account-addresses' || window.location.pathname === '/account-shoppingcart' || window.location.pathname === '/account-wishlist' || window.location.pathname === "/account-profile") && Object.values(orderobj).length > 0) allordermakeRequest(orderobj);

    }, [wishlistdata])
    const ordersuccessful = async () => {
        var _obj = {}
        _obj["orderId"] = { id: props.match.params.id }
        if (props.match.params.id) await allordermakeRequestSuccessful(_obj);
    }
    // useEffect(() => {
    //     // orderobj["userProfileId"] = userIds
    //     // {
    //     //     "orderId":{"id":"69ec1b00-36d0-11ea-b9b0-a977a389bd8d"}
    //     //   }

    //     // var props.computedMatch.params.id
    //     ordersuccessful()

    // }, [wishlistdata])
    const handleAddToCart = () => {
        if (guestlogId.length > 0) {
            // 
            // alert(JSON.stringify(guestlogId))
            localStorage.setItem("user_id", cartFilters.user_id)

            if (JSON.stringify(cartdetails).length > 0) {

                var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : '';
                const user_id = cartFilters.user_id
                var addcart = ({ products, user_id })
                // alert("hgdhfdhg")
                if (JSON.parse(localStorage.getItem("cartDetails")).products.filter(val => { if (Object.keys(val).length > 0) return val }).length > 0) {
                    addtocart(addcart)
                }
                orderobj["userProfileId"] = user_id
                sessionStorage.setItem("user_id", user_id)
                orderobj["userProfileId"] = localStorage.getItem('user_id')
                if ((window.location.pathname === '/account-allorders' || window.location.pathname === '/account-addresses' || window.location.pathname === '/account-shoppingcart' || window.location.pathname === '/account-wishlist' || window.location.pathname === "/account-profile") && Object.values(orderobj).length > 0) allordermakeRequest(orderobj);
                // allordermakeRequest(orderobj); // CHANGED
                // wishlistmakeRequest(orderobj1) 
            }
        }
        else {


            var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
            var local_storage_products = []
            if (local_storage && Object.entries(local_storage).length > 0 && local_storage.constructor === Object) {
                local_storage_products = JSON.parse(localStorage.getItem('cartDetails')).products.map(val => { return val })
            }
            var skuId = cartFilters.skuId;
            var products = [];
            var productszz = [];
            var obj = {};
            var cartId = "";
            var userId = '';
            var obj = { sku_id: '', qty: '', price: '' }
            obj['sku_id'] = skuId;
            obj['qty'] = cartFilters.qty
            obj['price'] = cartFilters.price
            productszz.push(obj)

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
            // if (userIds.length > 0 && gut_lg !== true) {
            //     var products = productszz;
            //     const user_id = cartFilters.user_id
            //     var addcart = ({ products, user_id })
            //     addtocart(addcart)
            // }
            // alert("1")
            console.log(")")
            if (skuId) localStorage.setItem('cartDetails', JSON.stringify(skuObj));
           
            // window.location.reload()

        }
    }
    useEffect(() => {
        // if (userIds.length > 0) {
        //     if (cartdetails !== null && cartdetails !== undefined && JSON.stringify(cartdetails).length > 0) {
        // const user_id = userIds
        // makeFetch({--login---})
        //     }
        // }
        handleAddToCart()
    }, [user_id, price, cartFilters])

    var skus;
    // const pathQueries = () => {
    //     skus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ''
    // }
    skus = localStorage.getItem("cartDetails") && JSON.parse(localStorage.getItem("cartDetails")).products.length > 0 ?
        JSON.parse(localStorage.getItem("cartDetails")).products.filter(val => { if (Object.keys(val).length > 0) return val }).map(val => val.sku_id) : ''
    // JSON.parse(localStorage.getItem("cartDetails")).products.map(val => val.sku_id) : ''


    const updateProductList = () => {
        
        let variables;
        if (localStorage.getItem('user_id')) {
            const status = (response) => {

                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            }

            const json = (response) => {
                return response.json()
            }
            var a = {}
            let pathnameSplit = window.location.pathname.split('/')
            const splitHiphen = () => {
                if (pathnameSplit[1].indexOf('-')) {
                    return pathnameSplit[1].split('-')
                }
            }


            var _conditionfetchCartId = {
                "UserId": { "userprofileId": localStorage.getItem("user_id") }
            }

            //  alert(JSON.stringify(this.state.checked))
            fetch(`${API_URL}/graphql`, {

                method: 'post',
                // body: {query:seoUrlResult,variables:splitHiphen()}
                // body: JSON.stringify({query:seoUrlResult}),

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: FetchCartId,
                    variables: { ..._conditionfetchCartId },
                })
            })
                .then(status)
                .then(json).then(async val => {

                    if (val && val.data && val.data.allShoppingCarts && val.data.allShoppingCarts.nodes && val.data.allShoppingCarts.nodes.length > 0 &&
                        val.data.allShoppingCarts.nodes[0].status !== "pending") {
                        // alert(val.data.allShoppingCarts.nodes[0].status)
                        // var _get_cart_id = JSON.parse(localStorage.getItem('cart_id')).cart_id
                        // var _cart_id = { cart_id: _get_cart_id }
                        var _user_id = { user_id: localStorage.getItem('user_id') }
                        var session_storage = JSON.parse(sessionStorage.getItem("updatedProduct"))
                        var _products = { products: [session_storage] }
                        var _obj = { ..._user_id, ..._products }
                        fetch(`${API_URL}/addtocart`, {
                            method: 'post',
                            // body: {query:seoUrlResult,variables:splitHiphen()}
                            // body: JSON.stringify({query:seoUrlResult}),

                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                ..._obj,
                            })
                        }).then(status)
                            .then(json)
                            .then(async function (data) {
                                if (data && data.data && data.data.allShoppingCartItems && data.data.allShoppingCartItems.nodes && data.data.allShoppingCartItems.nodes.length > 0) {
                                    var _data = data.data.allShoppingCartItems.nodes.filter(val => { if (val.transSkuListByProductSku) return val }).map(val => { return val.transSkuListByProductSku.generatedSku })
                                    variables = { "productList": _data }

                                    makeRequest(variables);

                                }
                                else {
                                    return []
                                }

                            })
                    }

                    else {

                        // alert(JSON.stringify(val.data.allShoppingCarts.nodes.length>0))
                        // if(val.data.allShoppingCarts.nodes.length>0){
                        if (val && val.data && val.data.allShoppingCarts && val.data.allShoppingCarts.nodes && val.data.allShoppingCarts.nodes.length > 0 && val.data.allShoppingCarts.nodes[0] && val.data.allShoppingCarts.nodes[0].id) {
                            localStorage.setItem("cart_id", JSON.stringify({ cart_id: val.data.allShoppingCarts.nodes[0].id }))
                            var _conditionfetch = {
                                "CartId": { "shoppingCartId": val.data.allShoppingCarts.nodes[0].id }
                            }
                            fetch(`${API_URL}/graphql`, {
                                method: 'post',
                                // body: {query:seoUrlResult,variables:splitHiphen()}
                                // body: JSON.stringify({query:seoUrlResult}),

                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    query: FetchSku,
                                    variables: { ..._conditionfetch },
                                })
                            }).then(status)
                                .then(json)
                                .then(async function (data) {
                                    var _data = data.data.allShoppingCartItems.nodes.filter(val => { if (val.transSkuListByProductSku) return val }).map(val => { return val.transSkuListByProductSku.generatedSku })
                                    variables = { "productList": _data }
                                    makeRequest(variables)

                                })
                        }
                        else {

                            // JSON.parse(sessionStorage.getItem("updatedProduct"))
                            if (sessionStorage.getItem("updatedProduct")) {
                                _user_id = { user_id: localStorage.getItem('user_id') }

                                _products = { products: [JSON.parse(sessionStorage.getItem("updatedProduct"))] }
                                _obj = { ..._user_id, ..._products }
                                fetch(`${API_URL}/addtocart`, {
                                    method: 'post',
                                    // body: {query:seoUrlResult,variables:splitHiphen()}
                                    // body: JSON.stringify({query:seoUrlResult}),

                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        ..._obj,
                                    })
                                }).then(status)
                                    .then(json)
                                    .then(async function (data) {
                                        if (data && data.data && data.data.allShoppingCartItems && data.data.allShoppingCartItems.nodes && data.data.allShoppingCartItems.nodes.length > 0) {
                                            var _data = data.data.allShoppingCartItems.nodes.filter(val => { if (val.transSkuListByProductSku) return val }).map(val => { return val.transSkuListByProductSku.generatedSku })
                                            variables = { "productList": _data }

                                            makeRequest(variables);
                                        }
                                        else {

                                            return val
                                        }

                                    })
                            }
                            else {
                                setNewUser(val)
                                return NewUser
                            }


                            // cartFilters, setCartFilters
                        }

                        // }

                    }

                })


        }
        else {
            // alert("Came as guest user")

            variables = { "productList": skus };

            makeRequest(variables);
        }

    }
    // useEffect(() => {
    //     // pathQueries();
    //     setCartFilters(skus)

    //     updateProductList();
    // }, [])

    const handleAddToCartDidMount = () => {
        if (localStorage.getItem('cart_id') === null) {
            // 
            // alert(JSON.stringify(guestlogId))
            // localStorage.setItem("user_id", cartFilters.user_id)
            if (JSON.stringify(cartdetails).length > 0) {

                var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : '';
                const user_id = cartFilters.user_id
                var addcart = ({ products, user_id })
                // alert("hgdhfdhg")
                if ((JSON.parse(localStorage.getItem("cartDetails")).products.filter(val => { if (Object.keys(val).length > 0) return val }).length > 0)) {
                    addtocart(addcart)
                }
                orderobj["userProfileId"] = user_id
                sessionStorage.setItem("user_id", user_id)
                orderobj["userProfileId"] = localStorage.getItem('user_id')
                if ((window.location.pathname === '/account-allorders' || window.location.pathname === '/account-addresses' || window.location.pathname === '/account-shoppingcart' || window.location.pathname === '/account-wishlist' || window.location.pathname === "/account-profile") && Object.values(orderobj).length > 0) allordermakeRequest(orderobj);
                // allordermakeRequest(orderobj); // CHANGED
                // wishlistmakeRequest(orderobj1) 
            }
        }
        else {


            var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
            var _get_cart_id = JSON.parse(localStorage.getItem('cart_id')).cart_id
            var _cart_id = { cart_id: _get_cart_id }
            var _user_id = { user_id: localStorage.getItem('user_id') }
            var local_storage_products = []
            if (local_storage && Object.entries(local_storage).length > 0 && local_storage.constructor === Object) {
                local_storage_products = JSON.parse(localStorage.getItem('cartDetails')).products.map(val => { return val })
            }
            var _products_array = local_storage.products
            var skuId = cartFilters.skuId;
            var products = [];
            var productszz = [];
            var obj = {};
            var cartId = "";
            var userId = '';
            var obj = { sku_id: '', qty: '', price: '' }
            obj['sku_id'] = skuId;
            obj['qty'] = cartFilters.qty
            obj['price'] = cartFilters.price
            productszz.push(obj)

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

            var skuObj = { "cart_id": cartId, "user_id": userId, "products": _products_array }
            // if (userIds.length > 0 && gut_lg !== true) {
            //     var products = productszz;
            //     const user_id = cartFilters.user_id
            //     var addcart = ({ products, user_id })
            var session_storage = JSON.parse(sessionStorage.getItem("updatedProduct"))
            var _products = { products: [session_storage] }
            var _obj = { ..._user_id, ..._products, ..._cart_id }
            if (JSON.parse(localStorage.getItem("cartDetails")).products.filter(val => { if (Object.keys(val).length > 0) return val }).length > 0) {

                addtocart(_obj)
            }

            // }
            // alert("2")

            localStorage.setItem('cartDetails', JSON.stringify(skuObj));
           
            // window.location.reload()


        }
    }
    useEffect(() => {
        setCartFilters(skus)

        updateProductList();
        ordersuccessful()
        if (window.location.pathname === "/cart") {
            if (Boolean(localStorage.getItem("user_id"))) {
                // if(localStorage.getItem("cart_id") === null){
                if (Boolean(localStorage.getItem("cartDetails"))) {
                    // alert("ya came inn.")
                    handleAddToCartDidMount()
                }

                // } 
            }
        }



    }, [])

    const CartCtx = {
        cartFilters, loading, error, wishlist_count, data, setCartFilters, allorderdata, wishlistdata, allordersuccesful, noproducts, NewUser
    }
    
    return (
        <CartContext.Provider value={{ CartCtx, setwishlist_count, setCartFilters, setallorderdata, setwishlistdata, setNoproducts }} >
            {props.children}
        </CartContext.Provider>
    )
};

export const CartProvider = withRouter(Provider)