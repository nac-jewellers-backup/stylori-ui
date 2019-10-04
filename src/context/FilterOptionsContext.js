import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTLIST, conditions } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import { productsPendants } from 'mappers/dummydata';
import { object } from 'prop-types';

// let setFilter;
const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, material: null, Theme: null, Collection: null, metalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null
        },
        loading: false, error: false, data: []
    },
    setFilters: (filterData) => { }
}

export const FilterOptionsContext = React.createContext(initialCtx);

export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {
    // const  productId  = '';
    const [filters, setFilters] = React.useState({
        Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, metalColor: {},
        MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}
    });


    // const mappedQueryUrl = ( Object.keys(filters)).map(filterkeys=>{return(
    //  filterkeys
    // //  (Object.values(filters)).map(filterValues=>{return(
    // //     filterkeys
    // //  )})
    //     )
    // })


    // console.log(mappedQueryUrl)

    //--------------------- Filters url ----------------------
    // let offers = []    
    // let val ;
    Object.keys(filters).map((k => {
        // Object.keys(filters[k]) !== null && offers.push(Object.keys(filters[k]))
        // console.log(Object.keys(filters[k]))
        console.log('FILTERS',filters)
    }))
    // var filterkeysObj = filtersKeys.map((k)=>{
    //     return k
    var offers = [];
debugger
    const pathQueries = () => {
        let queries = []
        Object.keys(filters).map(fk => {
            const filter = filters[fk];
            const fv = Object.keys(filter);
            if(fv.length > 0){
                const qt = `${fk}=${fv[0]}`;
                queries.push(qt);
            }
        })
        const query = encodeURI(queries.join("&"));
        console.info('QUERYIES',query);
        props.history.push({
            pathname: '/stylori',
            search: query,
        })
    }

    // })  



    // const pathQueries = () => {
    //     if (val !== null && val.length !== 0) {
    //         filterkeysObj.map((k)=>{
    //             val = filters[k];
    //         })
    //         props.history.push({
    //             pathname: '/stylori',
    //             search: `${Object.keys(val)}`,
    //         })
    //     }
    // }
    useEffect(() => {
        console.info('FILTERS',filters);
        pathQueries()
    }, [filters])
    // React.useEffect ( () => props.history.push(path))


    const variables = {
        condition: conditions.generateCondition({ ...filters })
    };
    const { loading, error, data } = useGraphql(PRODUCTLIST, () => { }, variables);
    const FilterOptionsCtx = {
        filters, loading, error, data, setFilters
    }


    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);