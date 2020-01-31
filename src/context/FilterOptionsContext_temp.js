import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTLIST, conditions } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
// import { productsPendants } from 'mappers/dummydata';
// import { object } from 'prop-types';

// let setFilter;
const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, metalColor: {},
            MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}
        },
        loading: false, error: false, data: []
    },
    setFilters: (filterData) => { }
}

export const FilterOptionsContext = React.createContext(initialCtx);

export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {
    const [filters, setFilters] = React.useState(initialCtx.FilterOptionsCtx.filters);
    const { loading, error, data, makeRequest } = useGraphql(PRODUCTLIST, () => { }, {});



    var offers = [];
    var queries = []
    const pathQueries = () => {

        // var queries = []
        Object.keys(filters).map(fk => {
            const filter = filters[fk];
            const fv = Object.keys(filter);
            if (fv.length > 0) {
                // console.info('filter[fk[0]]', filter[fv[0]], filter, fv)
                if (filter[fv[0]]) {
                    const qt = `${fk}=${fv[0]}`;
                    queries.push(qt);
                }

            }
        })
        // console.info('queries', queries);
        const query = encodeURI(queries.join("&"));
        // console.info('QUERYIES', query);
        props.history.push({
            pathname: '/stylori',
            search: query
        })
    }


    // Destructuring the query parameters from the URL
    let paramsArrayOfObject = [];
    if (window.location.search) {

        let urlSearchparamsDecode = decodeURI(window.location.search);
        let urlParams = urlSearchparamsDecode.replace('?', '').split('&');
        let urlSplitparamsEqual = urlParams.map(val => {
            let splitval = val.split('=');
            return { [splitval[0]]: splitval[1] }
        })
        paramsArrayOfObject = urlSplitparamsEqual;

    }

    const variables = conditions.generateFilters(paramsArrayOfObject);

    const FilterOptionsCtx = { filters, loading, error, data }

    useEffect(() => {
        // console.info('FILTERSS', window.location.search);
        pathQueries();
        makeRequest(variables);
    }, [filters])


    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);