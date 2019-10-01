import React from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTLIST, conditions } from 'queries/productListing';
import { withRouter } from 'react-router-dom';

// let setFilter;
const initialCtx = {
    FilterOptionsCtx: {
        filters: { Offers: null, Availability: null, ProductType: null, style:null, material:null, Theme:null, Collection:null, metalColor:null,
                    MetalPurity:null, Occasion:null, NoOfStones:null, Gender:null, stoneColor:null, stoneShape:null
                },
        loading: false, error: false, data: []
    },
    setFilters: (filterData) => {}
}

export const FilterOptionsContext = React.createContext(initialCtx);

export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {
    // const  productId  = '';
    const [filters, setFilters] = React.useState({ Offers: null, Availability: null, ProductType: null, style:null, material:null, Theme:null, Collection:null, metalColor:null,
        MetalPurity:null, Occasion:null, NoOfStones:null, Gender:null, stoneColor:null, stoneShape:null});
        // setFilter = (filterData) =>{
        //     console.log(filterData)
        //     debugger
        //     // setFilters({[filterName]:filterValue})
        // }
    const variables = {
        condition: conditions.generateCondition({ ...filters })
    };
    const { loading, error, data } = useGraphql(PRODUCTLIST, () => { }, variables);
    const FilterOptionsCtx = {
        filters, loading, error, data, setFilters
    }
    
    // if(filters.Offers !== null && filters.Availability !== null && filters.ProductType !== null && filters.style !==null && filters.material !==null && filters.Theme !==null && filters.Collection !==null && filters.metalColor !==null &&
    //     filters.MetalPurity !==null && filters.Occasion !==null && filters.NoOfStones !==null && filters.Gender !==null && filters.stoneColor !==null && filters.stoneShape !== null){




     
    // Filters mapped starts

    // let mappedfilters =  {};
    // Object.keys(filters).map(f => {
    //     let filter = filters[f];
    //     let activefilters = Object.keys(filter).filter(k => filter[k])
    //     mappedfilters[f] = activefilters;
    // });
    // let filtercondition = btoa(JSON.stringify(mappedfilters));
    // if (props.history) props.history.push(filtercondition);

    // Filters mapped ends





// filters = btoa(filters)
// "eyJjb2xsZWN0aW9ucyI6WyJHb2xkIiwiU29saXRhaXJlIl0sInRoZW1lIjpbIkZhc2hpb24iLCJDaGljIl19"
// encodeURI(filters)
// "eyJjb2xsZWN0aW9ucyI6WyJHb2xkIiwiU29saXRhaXJlIl0sInRoZW1lIjpbIkZhc2hpb24iLCJDaGljIl19"

        // }
    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);