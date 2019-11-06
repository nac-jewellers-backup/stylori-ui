import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { useNetworkRequest } from 'hooks/NetworkHooks'
import { PRODUCTLIST, conditions, seoUrlResult } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import productlist from 'mappers/productlist';
import { CDN_URL } from 'config';
import { matchPath } from "react-router";
import { createApolloFetch } from 'apollo-fetch';
import { NetworkContext } from 'context/NetworkContext';
import { bool } from 'prop-types';
import { filterParams } from 'mappers';

const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, Material: null, Theme: null, Collection: null, metalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null
        },
        sort: '',
        loading: false, error: false, data: [], offset: 0, dataArr: [], first: 24, mappedFilters: []
    },
    setFilters: (filterData) => { },
    setOffset: () => { },
    setFirst: () => { },
    updateProductList: () => { },
    setSort: () => { }
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
    const [LoadingSeoQuery, setLoadingSeoQurey] = React.useState(true)
    const [ErrorSeoQuery, setErrorSeoQuery] = React.useState(false)
    const [DataSeoQuery, setDataSeoQuery] = React.useState([])
    const [paramsAo, setParamsAo] = React.useState([])
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => t }) }, [filters])
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => [...d, ...t] }) }, [offset])
    const { NetworkCtx: { graphqlUrl: uri } } = React.useContext(NetworkContext);
    const client = createApolloFetch({ uri });


    const { loading, error, data, makeRequest } = useGraphql(PRODUCTLIST, () => { }, {});
    const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/filterlist', {}, {})
    const { loading: seoloading, error: seoError, data: seoData, makeRequest: makeRequestSeo } = useGraphql(seoUrlResult, () => { }, {});



    useEffect(() => {
        console.log('sort', sort)
        if (sort) window.location.search = `sort=${sort.values}`
    }, [sort])

    useEffect(() => {
        debugger
        if (window.location.search) {

            let urlSearchparams = window.location.search;

            let urlSearchparamsDecode = decodeURI(urlSearchparams)

            let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')

            let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')

            let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
            // let 
            let mapUrlParamsSplitEqual = urlSplitparamsEqual();

            mapUrlParamsSplitEqual.map(val => {

                let obj = {}
                obj[val[1]] = true
                let value = val[0]
                filters[value] = obj
                console.log('{[val[0]]:obj}', { value: obj })
                setFilters(filters)
            })


            //   this.handleChange(()=>{} ,true, ()=>{}, mapUrlParamsSplitEqual)

        }
       
        else if(window.location.pathname !== "jewellery"){

            // window.location.pathname=window.location.pathname
            matchPath(`/${window.location.pathname }`, {
                path: ":listingpage",
              
            });
            // paramObjects(window.location.pathname)
            debugger
           var seo = seoUrlFetch(window.location.pathname)
            
    
           if(!seoloading) updateProductList()

console.log('seooooooooooo',seo, seoData, seoError, seoloading)
           
            
        }
        else{
            matchPath(`/${mappedFilters.seo_url }`, {
                path: ":listingpage",
    
            });
        }

    }, [])

    useEffect(()=>{console.log('seoDataseoDataseoDataseoData',seoData)},[seoData])

    var queries = []
    const qtfArr = []
    const pathQueries = () => {

        // var queries = []
        if (window.location.search) {
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
    }

    const paramObjects = (filtersparms) => {
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
        else if (filtersparms !== undefined && filtersparms !== "jewellery") {
            debugger

            const filterdata = window.location.pathname
            const splitslash = filterdata && filterdata.replace('/', '')
            const splitNtxData = filterdata && splitslash.split('-')
            // const a = filterdata && splitNtxData.map(val => {
            //     const valPlusSplit = val.replace(/[+]/g, " ")
            //     return valPlusSplit
            // })

            console.log('hey man cool... :)', splitNtxData)
            return paramsAo = splitNtxData
        }
        console.log('paramsAo', paramsAo)
        setParamsAo(paramsAo)
        return paramsAo;

    }




    console.info('dataResponsed', ntxdata)
    const seoUrlFetch = async  (seourlcomponentmount)  => {

        const conditionfiltersSeo = { seofilter: { seoUrl: { in: paramObjects( seourlcomponentmount && seourlcomponentmount.length !== "" ? seourlcomponentmount : mappedFilters.seo_url) } } }
         const _data = await  makeRequestSeo(conditionfiltersSeo)
        console.log('paramObjects', paramObjects(mappedFilters.seo_url), DataSeoQuery, conditionfiltersSeo, )
       
        console.log('DataSeoQuery', DataSeoQuery)
        
    }

    const updateProductList = () => {
        // console.info('objecobjecobject',mappedFilters.seo_url !== "jewellery")
        if (window.location.search || window.location.pathname.replace('/', '') === "jewellery") {
            const conditionFilters = conditions.generateFilters(paramObjects())
            const conditionImageColor = {}
            var a = filters && filters.length === 0 ? Object.keys(filters.MetalColor) : ''
            // var a = filters.metalColor ? filters.metalColor : null;
            conditionImageColor["productColor"] = a[0]
            // conditionImageColor["isdefault"]=true
            const variables = { ...conditionFilters, offsetvar: offset, firstvar: first, 'conditionImage': { ...conditionImageColor } }
            debugger;
            makeRequest(variables)

        }

        else {
            // ////////////////////////////////////////////////////////////////////////////////////////////////
            console.log('vanakkamNanba', window.location.pathname.replace('/', ''), window.location.pathname, paramObjects(mappedFilters.seo_url), seoData)
            console.info('i have came in brother', 'else()')
            seoUrlFetch()

        }


    }

    // useEffect(() => {
    //     console.info('objecobjecobject1', ntxdata.seo_url !== "jewellery", DataSeoQuery)
    //     // Start from here........ 
    //     //paramObjects(mappedFilters.seo_url) is not updating
    //     if (ntxdata.seo_url !== 'jewellery') {
    //         paramObjects(mappedFilters.seo_url)
    //         console.log(DataSeoQuery, paramObjects(mappedFilters.seo_url).length, 'DataSeoQuery')
    //         console.log('vanakkamNanba2', window.location.pathname.replace('/', ''), window.location.pathname)
    //         seoUrlFetch()
    //     }

    // }, [ntxdata.seo_url])
    useEffect(() => { setMappedFilters(ntxdata) }, [ntxdata]);

    useEffect(() => {
        pathQueries();
        updateProductList();

    }, [filters, offset]);
    useEffect(() => {
        setDataSeoQuery(seoData)
        console.log(seoData, 'vaadaa')

    }, [seoData, seoloading, seoError])
    useEffect(() => {
        const mapped = productlist(data, CDN_URL);
        const newUpdatedList = filterLogic(dataArr, mapped);
        setDataArr(newUpdatedList);
    }, [data]);

    useEffect(()=>{
if((Object.entries(DataSeoQuery).length !== 0 && DataSeoQuery.constructor === Object)){
    var paramsfilter = (Object.entries(DataSeoQuery).length !== 0 && DataSeoQuery.constructor === Object && DataSeoQuery.data.allSeoUrlPriorities) && DataSeoQuery.data.allSeoUrlPriorities.nodes.map(val => {
        var a = {}

        a[val.attributeName.replace(/\s/g, '')] = val.attributeValue
        return a

    })
    console.info('muthaakannasekuramvaadaa', paramsfilter)
    if((Object.entries(seoData).length !== 0 && DataSeoQuery.constructor === Object) ){
        const conditionFilters = conditions.generateFilters(paramsfilter.splice(1))

        console.info('objectparamsfilterconditionFilters',conditionFilters )
    const conditionImageColor = {}
    var a = filters && filters.length === 0 ? Object.keys(filters.MetalColor) : ''
    // var a = filters.metalColor ? filters.metalColor : null;
    conditionImageColor["productColor"]=a[0]
    // conditionImageColor["isdefault"]=true
    const variables = { ...conditionFilters, offsetvar: offset, firstvar: first,'conditionImage':{...conditionImageColor}  }
    debugger;
    makeRequest(variables)
    }
}
    },[seoData])
    var newObj = {}
    const updateFilters = async (filters) => {
        setFilters(filters);

        debugger
        var len;
        let bodyvar;
        //  bodyvar = paramObjects();
        if (window.location.search) {
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
        }
        else {
            try {
                Object.keys(filters).map(fk => {
                    const filter = filters[fk];
                    const fv = Object.keys(filter);
                    if (fv.length > 0) {
                        if (filter[fv[0]]) {
                            const qt = `${fk}=${fv[0]}`;
                            const qtf = {}
                            qtf[`${fk}`] = `${fv[0]}`
                            // queries.push(qt);
                            qtfArr.push(qtf);

                        }

                    }
                })
                const query = encodeURI(queries.join("&"));


                // bodyvar = paramObjects();
            } catch (error) {
                console.log(error)
            }
            console.log('qtf', qtfArr)
            var k = qtfArr.map(val => Object.values(val));
            var keyy = qtfArr.map(val => Object.keys(val))
            console.log(filters)
            len = keyy.length
            while (len--) {
                var key = keyy[len]
                var toLowerCase = key[0].toLowerCase()
                newObj[toLowerCase] = k[len][0]
            }
            await makeFetch(newObj);
            //    props.history.push({
            //     pathname: `/stylori${mappedFilters.seo_url   ?`/${mappedFilters.seo_url}` : '' }`,

            // })
            try {


                if (ntxdata.seo_url === "jewellery") {
                    setMappedFilters(ntxdata)
                    //     console.log('Object.values(ntxdata.seo_url)==="jewellery"',Boolean(mappedFilters.seo_url !== "jewellery") === true, ntxdata.seo_url, ntxdata, mappedFilters, mappedFilters.seo_url !== "jewellery"  )
                    //     debugger

                    //     do{

                    //         setMappedFilters(ntxdata)
                    //         console.log('Object.values(ntxdata.seo_url)==="jewellery"',ntxdata.seo_url==="jewellery", ntxdata.seo_url, ntxdata, mappedFilters )

                    //    }  while(ntxdata.seo_url !== "jewellery") 
                    // while(Boolean(mappedFilters.seo_url !== "jewellery") === true){

                    //     setMappedFilters(ntxdata)
                    //     console.log('Object.values(ntxdata.seo_url)==="jewellery"',ntxdata.seo_url==="jewellery", ntxdata.seo_url, ntxdata, mappedFilters )

                    // }

                }

            } catch (error) {
                console.log(error)
            }

            console.log('ntxdataresdata1', ntxdata.seo_url, mappedFilters.seo_url, ntxdata)

        }


        console.log('newObj', filters)
    }
    useEffect(() => {
        console.info('i have came in brother', 'seoUrlFetch()')
        if ((Object.entries(ntxdata).length !== 0 && ntxdata.constructor === Object)) {
            // if(ntxdata.seo_url !=="jewellery" ){
            props.history.push({
                pathname: `${mappedFilters.seo_url ? `/${mappedFilters.seo_url}` : ''}`

            })
            paramObjects(mappedFilters.seo_url)

            seoUrlFetch()
            console.info('object', DataSeoQuery, 'pazahakkam')

            // }
        }
    }, [ntxdata])
    useEffect(() => {
        if (paramObjects(mappedFilters.seo_url).length > 0) {
            setParamsAo(paramObjects(mappedFilters.seo_url))
        }
    }, [ntxdata, filters, mappedFilters, seoData])
    // useEffect(() => {
    //     matchPath(`/${window.location.pathname?window.location.pathname : mappedFilters.seo_url}`, {
    //         path: ":listingpage",

    //     });
    // })
    console.log('ntxdataresdata', ntxdata.seo_url, mappedFilters.seo_url)
    const FilterOptionsCtx = {
        filters, sort, loading, error, data, setFilters: updateFilters, offset, setOffset, dataArr, first, setFirst, mappedFilters
    }

    return (
        <FilterOptionsContext.Provider value={{ FilterOptionsCtx, setFilters: updateFilters, setOffset, setFirst, updateProductList, setSort }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);
