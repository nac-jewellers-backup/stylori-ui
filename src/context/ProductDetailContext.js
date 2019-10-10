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
        queries.push(filters);
        const url = encodeURI(queries);
        if (filters.length > 0) {
            props.history.push({
                pathname: '/pricingPage',
                search: url,
            })
        }
    };

    useEffect(() => {
        pathQueries()
    }, [filters])

    let paramsArrayOfObject = [];
    debugger
    if (window.location.search) {
        let urlSearchparams = window.location.search;
        let urlSearchparamsDecode = decodeURI(urlSearchparams)
        let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')
        let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')
        let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
        debugger
        let mapUrlParamsSplitEqual = urlSplitparamsEqual();
        let paramsMapUrlSetState = () => mapUrlParamsSplitEqual.map(val => {
            let obj = {};
            var nameFilter = val[0]
            if (val[0] == 'metalColor') {
                var keyNameFilter = val[1].split(' ')
                obj[nameFilter] = keyNameFilter[1]
            } else {
                var keyNameFilter = val[1]
                obj[nameFilter] = keyNameFilter
            }
            paramsArrayOfObject.push(obj)
        }
        )
        paramsMapUrlSetState()
    }

    const variables = conditions.generateFilters(paramsArrayOfObject);

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
