import React from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTDETAILS, conditions } from 'queries/productdetail';

const initialCtx = {
    ProductDetailCtx: {
        filters: { ringSize: null, metalPurity: null, diamondClarity: null },
        loading: false, error: false, data: []
    },
    setFilters: () => { }
}

export const ProductDetailContext = React.createContext(initialCtx);

export const ProductDetailConsumer = ProductDetailContext.Consumer;

export const ProductDetailProvider = (props) => {
    const { productId } = props;
    const [filters, setFilters] = React.useState({
        ringSize: null,
        metalPurity: null,
        diamondClarity: null,
        productId: 'SE1612'
    });
    // const mappedUrl = (Object.keys(filters)).map(filterkeys => {
    //     return (filterkeys)
    // })
    // Object.values(mappedUrl).map((val => {
    //     let path = val
    //     if (val !== null) props.history.push({
    //         pathname: '/stylori',
    //         search: `${path}`,

    //     })
    // }))
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
