import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { CART } from 'queries/cart';
import { withRouter } from 'react-router-dom';
import { useNetworkRequest } from 'hooks/NetworkHooks'
// import { productsPendants } from 'mappers/dummydata';
// import { object } from 'prop-types';

// let setFilter;
const initialCtx = {
    CartCtx: {
        cartFilters: {
            skuId: '',
            qty: '',
            price: '',
            user_id: ''
        },
        loading: false, error: false, data: []
    },
    setCartFilters: (filterData) => { }
}

export const CartContext = React.createContext(initialCtx);
export const CartConsumer = CartContext.Consumer;

const Provider = (props) => {
    const [cartFilters, setCartFilters] = React.useState(initialCtx.CartCtx);
    var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : '';
    const user_id = cartFilters.user_id ? cartFilters.user_id : ""
    const price = cartFilters.price ? cartFilters.price : ""
    const { loading: crtloading, error: crterror, data: crtdata, makeFetch: addtocart } = useNetworkRequest('/addtocart', { user_id, products }, false)
    const userIds = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ''
    var cartdetails = JSON.parse(localStorage.getItem("cartDetails")) ? JSON.parse(localStorage.getItem("cartDetails")).products[0].price : ''
    const guestlogId = cartFilters.user_id ? cartFilters.user_id : ''
    // const prices = cartFilters.price ? cartFilters.price : ''
    useEffect(() => {
        if (crtdata.length > 0) {
            localStorage.setItem('cart_id', JSON.stringify(crtdata))
        }
        // localStorage.setItem('cart_id', JSON.stringify(crtdata))
    }, [crtdata])
    useEffect(() => {
        if (userIds.length > 0) {
            if (JSON.stringify(cartdetails).length > 0) {
                // const user_id = userIds
                // makeFetch({--login---})
            }
        }
        if (guestlogId.length > 0) {
            localStorage.setItem("user_id", cartFilters.user_id)
            if (JSON.stringify(cartdetails).length > 0) {
                debugger
                var products = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : '';
                const user_id = cartFilters.user_id
                var addcart = ({ products, user_id })
                console.log('verifiedMaill', addcart)
                addtocart(addcart)
            }
        }
        else {
            if (cartFilters.price > 0) {
                var skuId = cartFilters.skuId;
                var products = [];
                var obj = {};
                var cartId = "";
                var userId = '';
                var obj = { sku_id: '', qty: '', price: '' }
                obj['sku_id'] = skuId;
                obj['qty'] = cartFilters.qty
                obj['price'] = cartFilters.price
                products.push(obj)
                var skuObj = { "cart_id": cartId, "user_id": userId, "products": products }
                localStorage.setItem('cartDetails', JSON.stringify(skuObj));
            }
        }
    }, [user_id ,price])

    var skus;
    // const pathQueries = () => {
    //     skus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ''
    // }
    skus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ''
    const { loading, error, data, makeRequest } = useGraphql(CART, () => { }, {});

    const updateProductList = () => {
        const variables = { "productList": [skus] };
        makeRequest(variables);
    }
    useEffect(() => {
        // pathQueries();
        setCartFilters(skus)
        updateProductList();
    }, [])

    const CartCtx = {
        cartFilters, loading, error, data, setCartFilters
    }

    return (
        <CartContext.Provider value={{ CartCtx, setCartFilters }} >
            {props.children}
        </CartContext.Provider>
    )
};

export const CartProvider = withRouter(Provider)