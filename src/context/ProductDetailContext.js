import React from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTDETAILS, conditions } from 'queries/productdetail';

const initialCtx = {
    ProductDetailCtx: {
        filters: { ringSize: null, metalPurity: null, diamondClarity: null },
        loading: false, error: false, data: []
    },
    setFilters: () => null
}

export const ProductDetailContext = React.createContext(initialCtx);

export const ProductDetailConsumer = ProductDetailContext.Consumer;

export const ProductDetailProvider = (props) => {
    const { productId } = props;

    const [filters, setFilters] = React.useState({ ringSize: null, metalPurity: null, diamondClarity: null, productId:'SE1612' });
    const variables = {
        condition: conditions.generateCondition({ ...filters, productId })
    };
    const { loading, error, data } = useGraphql(PRODUCTDETAILS, () => { }, variables);
    const ProductDetailCtx = {
        filters, loading, error, data
    }

    return (
        <ProductDetailContext.Provider value={{ ProductDetailCtx, setFilters }} >
            {props.children}
        </ProductDetailContext.Provider>
    )
};