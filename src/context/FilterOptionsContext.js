import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { useNetworkRequest } from 'hooks/NetworkHooks'
import { PRODUCTLIST, conditions } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import productlist from 'mappers/productlist';
import filterData from 'mappers/filterData'
import { CDN_URL } from 'config';


const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, Material: null, Theme: null, Collection: null, metalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null
        },
        loading: false, error: false, data: [], offset: 0, dataArr: [], first: 24, mappedFilters: []
    },
    setFilters: (filterData) => { },
    setOffset: () => { },
    setFirst: () => { },
    updateProductList: () => { },
}

export const FilterOptionsContext = React.createContext(initialCtx);
export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {
    const [filters, setFilters] = React.useState({
        Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, metalColor: {},
        MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}
    });
    const [offset, setOffset] = React.useState(0)
    const [first, setFirst] = React.useState(24)
    const [dataArr, setDataArr] = React.useState([])
    const [mappedFilters, setMappedFilters] = React.useState([])
    const [{ filterLogic }, setFilterLogic] = React.useState({ filterLogic: () => [] });

    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => t }) }, [filters])
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => [...d, ...t] }) }, [offset])

    var queries = []
    const pathQueries = () => {
        // var queries = []
        Object.keys(filters).map(fk => {
            const filter = filters[fk];
            const fv = Object.keys(filter);
            if (fv.length > 0) {
                if (filter[fv[0]]) {
                    const qt = `${fk}=${fv[0]}`;
                    queries.push(qt);
                }

            }
        })
        const query = encodeURI(queries.join("&"));
        props.history.push({
            pathname: '/stylori',
            search: query !== '' ? query : window.location.search,
        })
    }

    const paramObjects = () => {
        // Destructuring the query parameters from the URL
        let paramsAo = [];
        if (window.location.search) {
            let urlSearchparamsDecode = decodeURI(window.location.search);
            let urlParams = urlSearchparamsDecode.replace('?', '').split('&');
            let urlSplitparamsEqual = urlParams.map(val => {
                let splitval = val.split('=');
                return { [splitval[0]]: splitval[1] }
            })
            paramsAo = urlSplitparamsEqual;
            console.log('val', paramsAo)
        }
        return paramsAo;
    }

    const { loading, error, data, makeRequest } = useGraphql(PRODUCTLIST, () => { }, {});
    const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/filterlist', () => { }, {})

    const updateProductList = () => {
        const conditionFilters = conditions.generateFilters(paramObjects())
        const variables = { ...conditionFilters, offsetvar: offset, firstvar: first }
        makeRequest(variables)
    }


    useEffect(() => setMappedFilters(ntxdata), [ntxdata]);

    useEffect(() => {
        pathQueries();
        updateProductList();
    }, [filters, offset]);

    useEffect(() => {
        const mapped = productlist(data, CDN_URL);
        const newUpdatedList = filterLogic(dataArr, mapped);
        setDataArr(newUpdatedList);
    }, [data]);

    const updateFilters = (filters) => {
        setFilters(filters);
        const bodyvar = '';
        if(!ntx) makeFetch(bodyvar);
    }

    const FilterOptionsCtx = {
        filters, loading, error, data, setFilters: updateFilters, offset, setOffset, dataArr, first, setFirst, mappedFilters
    }

    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters: updateFilters, setOffset, setFirst, updateProductList }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);