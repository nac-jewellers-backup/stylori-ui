import React from 'react';
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
        Offers: null, Availability: null, ProductType: null, style: null, material: null, Theme: null, Collection: null, metalColor: null,
        MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null
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

// Object.values(filters).map((val=>{
//     let path = val
//     if(val!==null) props.history.push({
//         pathname: '/stylori',
//         search: `${path}`,
        
        
//       })
// }))
// debugger
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