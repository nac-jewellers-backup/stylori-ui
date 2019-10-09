import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTDETAILS, conditions } from 'queries/productdetail';
import { withRouter } from 'react-router-dom';

const initialCtx = {
    ProductDetailCtx: {
        filters: { ringSize: null, metalPurity: null, diamondClarity: null },
        loading: false, error: false, data: []
    },
    setFilters: () => { }
}

export const ProductDetailContext = React.createContext(initialCtx);

export const ProductDetailConsumer = ProductDetailContext.Consumer;

export const TabsProvider = (props) => {
    const [filters, setFilters] = React.useState({
        ringSize: '',
        metalPurity: '',
        diamondClarity: '',
    });

    let queries = [];
    const pathQueries = () => {
        debugger
        queries.push(filters);
        const url = encodeURI(queries.join("&"));
        props.history.push({
            pathname: '/pricingPage',
            search: url,
        })

        // if(queries.length>0){
        //     const url = encodeURI(queries.join("&"));
        //     props.history.push({
        //         pathname: '/pricingPage',
        //         search: url,
        //     })
        // }
    };
    useEffect(() => {
        pathQueries()
    }, [filters])




    const variables = {
        condition: conditions.generateCondition({ filters })
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
export const ProductDetailProvider = withRouter(TabsProvider);
