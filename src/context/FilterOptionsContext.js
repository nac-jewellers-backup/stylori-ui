import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { useNetworkRequest } from 'hooks/NetworkHooks'
import { PRODUCTLIST, conditions } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import productlist from 'mappers/productlist';
import { CDN_URL } from 'config';


const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, Material: null, Theme: null, Collection: null, metalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null 
        },
        sort:'',
        loading: false, error: false, data: [], offset: 0, dataArr: [], first: 24, mappedFilters: []
    },
    setFilters: (filterData) => { },
    setOffset: () => { },
    setFirst: () => { },
    updateProductList: () => { },
    setSort:()=>{}
}

export const FilterOptionsContext = React.createContext(initialCtx);
export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {
    const [filters, setFilters] = React.useState({
        Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, metalColor: {},
        MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}
    });
    const [sort, setSort] = React.useState(initialCtx.FilterOptionsCtx.sort) 
    const [offset, setOffset] = React.useState(0)
    const [first, setFirst] = React.useState(24)
    const [dataArr, setDataArr] = React.useState([])
    const [mappedFilters, setMappedFilters] = React.useState([])
    const [{ filterLogic }, setFilterLogic] = React.useState({ filterLogic: () => [] });

    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => t }) }, [filters])
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => [...d, ...t] }) }, [offset])


    useEffect(()=>{
        console.log('sort', sort)
        if(sort) window.location.search= `sort=${sort.values}`
    }, [sort])

    useEffect(()=>{
        if(window.location.search)
    {
      
      let urlSearchparams = window.location.search;

      let urlSearchparamsDecode = decodeURI(urlSearchparams)
  
      let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')
  
      let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')
      
      let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val =>{ return val.split('=')})
      // let 
      let mapUrlParamsSplitEqual = urlSplitparamsEqual();
  
      mapUrlParamsSplitEqual.map(val=>{
          
        let obj = {}
        obj[val[1]]= true
        let value= val[0]
        filters[value]=obj
        console.log('{[val[0]]:obj}',{value:obj})
          setFilters(filters)
      })
   
        
    //   this.handleChange(()=>{} ,true, ()=>{}, mapUrlParamsSplitEqual)
      
    }
    },[])



    var queries = []
    // const qtfArr = []
    const pathQueries = () => {
        
        // var queries = []
        Object.keys(filters).map(fk => {
            const filter = filters[fk];
            const fv = Object.keys(filter);
            if (fv.length > 0) {
                if (filter[fv[0]]) {
                    const qt = `${fk}=${fv[0]}`;
                    const qtf = {}
                    qtf[`${fk}`] = `${fv[0]}`
                    queries.push(qt);
                    // qtfArr.push(qtf);

                }

            }
        })
        const query = encodeURI(queries.join("&"));

        props.history.push({
            pathname: '/stylori',
            search: query,
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
    const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/filterlist', {}, {})

    console.info('dataResponsed', ntxdata)
    const updateProductList = () => {
        const conditionFilters = conditions.generateFilters(paramObjects())
        const conditionImageColor = {}
        var a = filters.length === 0 ? Object.keys(filters.MetalColor) : ''
        // var a = filters.metalColor ? filters.metalColor : null;
        conditionImageColor["productColor"]=a[0]
        // conditionImageColor["isdefault"]=true
        const variables = { ...conditionFilters, offsetvar: offset, firstvar: first,'conditionImage':{...conditionImageColor}  }
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

    // useEffect(()=>{
    //     setFilters(filters);
    // },[filters])
    var newObj = {}
    const updateFilters = (filters) => {
        setFilters(filters);
     
      
        var len;
        let bodyvar;
         bodyvar = paramObjects();
      if(queries.length===0){
          try {
            Object.keys(filters).map(fk => {
                const filter = filters[fk];
                const fv = Object.keys(filter);
                if (fv.length > 0) {
                    if (filter[fv[0]]) {
                        const qt = `${fk}=${fv[0]}`;
                        const qtf = {}
                        qtf[`${fk}`] = `${fv[0]}`
                        queries.push(qt);
                        // qtfArr.push(qtf);
    
                    }
    
                }
            })
            const query = encodeURI(queries.join("&"));
    
            props.history.push({
                pathname: '/stylori',
                search: query,
            })
            bodyvar = paramObjects();
          } catch (error) {
              console.log(error)
          }
      }
        var k = bodyvar.map(val => Object.values(val));
        var keyy = bodyvar.map(val => Object.keys(val))
        console.log(filters)
        len = keyy.length
        while (len--) {
            var key = keyy[len]
            var toLowerCase = key[0].toLowerCase()
            newObj[toLowerCase] = k[len][0]
        }
        makeFetch(newObj);

        console.log('newObj', filters)
    }
   
    console.log('ntxdataresdata', ntxdata)
    const FilterOptionsCtx = {
        filters,sort, loading, error, data, setFilters: updateFilters, offset, setOffset, dataArr, first, setFirst, mappedFilters
    }

    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters: updateFilters, setOffset, setFirst, updateProductList, setSort }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);