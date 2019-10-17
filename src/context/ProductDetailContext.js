import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTDETAILS, conditions } from 'queries/productdetail';
import { withRouter } from 'react-router-dom';

const initialCtx = {
    ProductDetailCtx: {

        filters: { productId: '', defaultVariants: { diamondType: '', metalColor: '', purity: ''} },
        loading: false, error: false, data: []
    },
    setFilters: () => { }
}

export const ProductDetailContext = React.createContext(initialCtx);

export const ProductDetailConsumer = ProductDetailContext.Consumer;

export const TabsProvider = (props) => {
    const [filters, setFilters] = React.useState(initialCtx.ProductDetailCtx.filters);

    let queries = [];
    const pathQueries = () => {


        setFilters(filters)

    };

    useEffect(() => {
        let a = props;

        pathQueries()
    }, [filters])


    if (filters.productId === "") {
        let productDetailProps = props.location.state;
        let productId = productDetailProps.productId;
        let defaultVariants = productDetailProps.defaultVariant;
        filters['productId'] = productId;
        filters['defaultVariants'] = defaultVariants
    }


    
    // {
    //     "conditionfilter": {"diamondType": "SI GH","purity":"18K","metalColor": "White" },
    //     "filter": {"productId": "SB0010"}
    //   }
    // const { loading, error, data } = useGraphql(PRODUCTDETAILS, () => { }, variables);
    const { loading, error, data, makeRequest } = useGraphql(PRODUCTDETAILS, () => { }, {});
    const updateProductList = () => {
        const variables = { 'conditionfilter': filters.defaultVariants, 'filter': { "productId": filters.productId } }
        makeRequest(variables);
    }
    
    useEffect(() => {
        setFilters(filters)
        pathQueries()
        updateProductList()
    }, [filters])
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
