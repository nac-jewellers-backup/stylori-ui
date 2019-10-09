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
    const [filters, setFilters] = React.useState({
        Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, metalColor: {},
        MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}
    });

   

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
            search: query !== '' ? query : window.location.search,
        })
    }


    useEffect(() => {
        // console.info('FILTERSS', window.location.search);
        pathQueries()
    }, [filters])
  

    // console.log('queries', props.location.search)

// Destructuring the query parameters from the URL
let paramsArrayOfObject = [];
if(window.location.search)
{
  let urlSearchparams = window.location.search;

  let urlSearchparamsDecode = decodeURI(urlSearchparams)

  let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')

  let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')
  
  let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val =>{ return val.split('=')})
  // let 
  let mapUrlParamsSplitEqual = urlSplitparamsEqual();


  let paramsMapUrlSetState = () => mapUrlParamsSplitEqual.map(val=>
    
    {
        let obj ={};
      var nameFilter = val[0]
      var keyNameFilter = val[1]
      obj[nameFilter]=keyNameFilter
      paramsArrayOfObject.push(obj)
    //   console.log('val',mapUrlParamsSplitEqual)
    
    }
    )
    paramsMapUrlSetState()
    // console.log('val',paramsArrayOfObject)
  
}


    const variables = {
        
        condition: conditions.generateCondition({ paramsArrayOfObject })
    };
    
    // console.log('variables', variables);
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