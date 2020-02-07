import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { CartContext } from 'context'
import { API_URL, HOME_PAGE_URL, CDN_URL } from '../../config';
import { CART, FetchSku, FetchCartId } from 'queries/cart';

var orderobj = {};
var orderobj_cart = {};
const useWishlists = (props) => {
    const [values, setValues] = React.useState({
        user_id: "",
        product_id: "",
        add: "",
        product_sku: "",
        isactive: null,
    });
    const [invalids, setInvalids] = React.useState({ user_id: false, product_id: false, product_sku: false });
    // const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addwishlist', {}, [], false);
    // const { data: removedata, makeFetch: removemakeFetch, } = useNetworkRequest('/removewishlist', {}, [], false);
    const { setCartFilters, setwishlistdata } = React.useContext(CartContext);
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {};
    const check_gustlog = localStorage.getItem("true") ? localStorage.getItem("true") : {}
    // useEffect(() => {
    //     // orderobj["product_sku"] = sku
    //     setValues(orderobj);
    // }, []) 
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
        // makeFetch(values)
    }

    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const makeFetch = () => {
        fetch(`${API_URL}/addwishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(values)
        }).then((response) => {
            return response.json();
        })

    }
    // const removemakeFetch = () => {
    //     
    //     fetch('https://api.stylori.net/removewishlist', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: JSON.stringify(values)
    //     }).then((response) => {
    //         return response.json();
    //     })
    //         .then((myJson) => {
    //             console.log(myJson);
    //         });
    // }

    const handelSubmit = (num) => {

        setwishlistdata({
            wishlistdata: values.isactive
        })
        if (user_id.length > 0 && check_gustlog === "false") {
            values["isactive"] = num
            values["user_id"] = user_id
            setValues({ values, ...values });
            makeFetch()
        } else {
            alert("Please login your email Id")
            localStorage.setItem('review_location', `${window.location.href}`)
            // localStorage.setItem('wishlist', 0)
            window.location.href = "/login"
        }
        // changePanel(3)

    }
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
    const handelRemove = (num) => {
        setwishlistdata({
            wishlistdata: values.isactive
        })
        if (user_id.length > 0 && check_gustlog === "false") {
            values["isactive"] = num
            values["user_id"] = user_id
            setValues({ values, ...values });
            orderobj_cart['skuId'] = values.product_sku
            orderobj_cart['qty'] = 1
            orderobj_cart['price'] = values.add
            var _products_obj = {}
            var _products = []
            var _obj = {}
            setCartFilters(orderobj_cart)
            var _conditionfetchCartId = {
                "UserId": { "userprofileId": localStorage.getItem("user_id") }
            }

            fetch(`${API_URL}/removewishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(values)
            }).then((myJson) => {
                {
                    values.add &&
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
                        }).then(status)
                            .then(json)
                            .then(val => {
                                if (val && val.data && val.data.allShoppingCarts && val.data.allShoppingCarts.nodes && val.data.allShoppingCarts.nodes.length > 0 &&
                                    val.data.allShoppingCarts.nodes[0].status === "paid") {
                                    // alert(val.data.allShoppingCarts.nodes[0].status)
                                    // var _get_cart_id = JSON.parse(localStorage.getItem('cart_id')).cart_id
                                    // var _cart_id = { cart_id: _get_cart_id }
                                    var _user_id = { user_id: localStorage.getItem('user_id') }

                                    _products_obj['sku_id'] = values.product_sku
                                    _products_obj['price'] = values.add
                                    _products_obj['qty'] = 1


                                    _products = { products: [_products_obj] }
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
                                    })


                                }
                                else {
                                    // alert("not paid")
                                    if (val && val.data && val.data.allShoppingCarts && val.data.allShoppingCarts.nodes && val.data.allShoppingCarts.nodes.length > 0 && val.data.allShoppingCarts.nodes[0] && val.data.allShoppingCarts.nodes[0].id) {

                                        localStorage.setItem("cart_id", JSON.stringify({ cart_id: val.data.allShoppingCarts.nodes[0].id }))
                                        var _conditionfetch = {
                                            "CartId": { "shoppingCartId": val.data.allShoppingCarts.nodes[0].id }
                                        }
                                        // var _products_obj = {}
                                        _products_obj['sku_id'] = values.product_sku
                                        _products_obj['price'] = values.add
                                        _products_obj['qty'] = 1
                                        var _cart_id = { cart_id: val.data.allShoppingCarts.nodes[0].id }


                                        _products = { products: [_products_obj] }
                                        _obj = { ..._user_id, ..._products, ..._cart_id }

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
                                        }).then(val => {
                                            if ((JSON.stringify(values.add) && JSON.stringify(values.add).length > 0) && (window.location.pathname.split("-")[0] === "/account")) {
                                                window.location.pathname = `/account${'-shoppingcart'}`
                                            } else {
                                                if (window.location.pathname.split("-")[0] === "/account") {
                                                    window.location.reload();
                                                }
                                            }
                                        })

                                    }
                                    else {
                                        if (values && values.product_sku && Object.values(values.product_sku).length > 0 && values.add && Object.values(values.add).length > 0) {
                                            _user_id = { user_id: localStorage.getItem('user_id') }
                                            _products_obj['sku_id'] = values.product_sku
                                            _products_obj['price'] = values.add
                                            _products_obj['qty'] = 1
                                            _products = { products: [_products_obj] }
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
                                            })
                                        }
                                        else {
                                            return {
                                                "data": {
                                                    "allShoppingCarts": {
                                                        "nodes": []
                                                    }
                                                }
                                            }
                                        }
                                    }

                                }
                            });
                }
            })

        }
        // changePanel(3)

    }

    const handlers = { handleChange, handleInvalid, handelRemove, handelSubmit };

    return { values, handlers, setValues }
}

export default useWishlists;