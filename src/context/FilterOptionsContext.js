import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTLIST, conditions } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import productlist from 'mappers/productlist';
import { CDN_URL } from 'config';
// import { productsPendants } from 'mappers/dummydata';
// import { object } from 'prop-types';

// let setFilter;
const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, material: null, Theme: null, Collection: null, metalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null
        },
        loading: false, error: false, data: [], offset: 0, dataArr: [], first: 24
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
    const [ { filterLogic }, setFilterLogic ] = React.useState({ filterLogic: () => [] });

    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => t }) },[ filters ])
    useEffect(() => { setFilterLogic({ filterLogic: (d,t) => [...d,...t] }) },[ offset ])

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
    const a = [];
    const updateProductList = () => {
        const conditionFilters = conditions.generateFilters(paramObjects())
        const variables = { ...conditionFilters, 'offsetvar': offset, 'firstvar': first }
        makeRequest(variables)
    }

    useEffect(() => console.info('FILTERS', filters), [filters]);

    useEffect(() => {
        pathQueries();
        updateProductList();
    }, [filters, offset])

    useEffect(() => {
        // const mapped = productlist(data, CDN_URL);
        // console.log('dataArr',dataArr)
        // const newUpdatedList = [...dataArr, ...mapped];
        // console.info('LISTUPDATE', a, data, mapped, newUpdatedList, dataArr)
        // setDataArr(newUpdatedList);
  
        if(window.location.search !== ''){
            const mapped = productlist(data, CDN_URL);
            console.log('dataArr',dataArr)
            // const newUpdatedList = [...dataArr, ...mapped];
            const newUpdatedList = filterLogic(dataArr, mapped);
            console.info('PROPERDATA',newUpdatedList)
            console.info('LISTUPDATE', a, data, mapped, newUpdatedList, dataArr)
            setDataArr(newUpdatedList);   
        }
      
    }, [data]);

    useEffect(()=>{
        if(window.location.search === ''){
            setDataArr([])
            const mapped = productlist(data, CDN_URL);
            const newUpdatedList = [...dataArr, ...mapped];
            console.info('LISTUPDATE', a, data, mapped, newUpdatedList, dataArr)
            setDataArr(newUpdatedList);   
        }
    },[ data ])

    useEffect(() => console.info('DATAARRA', dataArr), [dataArr])

    const FilterOptionsCtx = {
        filters, loading, error, data, setFilters, offset, setOffset, dataArr, first, setFirst
    }

    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters, setOffset, setFirst, updateProductList }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);