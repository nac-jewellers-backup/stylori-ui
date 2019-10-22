import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { CART } from 'queries/cart';
import { withRouter } from 'react-router-dom';
// import { productsPendants } from 'mappers/dummydata';
// import { object } from 'prop-types';

// let setFilter;
const initialCtx = {
    CartCtx: {
        cartFilters: {
           skuId:''
        },
        loading: false, error: false, data: []
    },
    setCartFilters: (filterData) => { }
}

export const CartContext = React.createContext(initialCtx);
export const CartConsumer = CartContext.Consumer;

const Provider = (props) => {
    const [cartFilters, setCartFilters] = React.useState(initialCtx.CartCtx);



    var skuId;
    var skus;
    const pathQueries = () => {
    skuId = localStorage.getItem('cartDetails')
    var id = JSON.parse(skuId);
     skus = id.products[0].sku_id;
    // alert(skuId)
    }
    skuId = localStorage.getItem('cartDetails')
    var id = JSON.parse(skuId);
     skus = id.products[0].sku_id[0];

    const { loading, error, data, makeRequest } = useGraphql(CART, () => { }, {});

    const updateProductList = () => {
        const variables = {"productList":[skus]};
        makeRequest(variables);
    }
    useEffect(() => {
        pathQueries();
        setCartFilters(skus)
        updateProductList();
        console.log('cartFilters',cartFilters)
    }, [cartFilters])
    

    // console.log('variables', variables);
    // const { loading, error, data } = useGraphql(CART, () => { }, variables);
    const CartCtx = {
        cartFilters, loading, error, data, setCartFilters
    }


    return (
        <CartContext.Provider value={{ CartCtx, setCartFilters }} >
            {props.children}
        </CartContext.Provider>
    )
};

export const CartProvider = withRouter(Provider);