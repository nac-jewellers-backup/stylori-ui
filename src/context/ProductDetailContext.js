import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTDETAILS, conditions, YouMayAlsoLike, youRecentlyViewed } from 'queries/productdetail';
import { withRouter } from 'react-router-dom';

const initialCtx = {
    ProductDetailCtx: {
        filters: {
            productId: '', defaultVariants: { diamondType: '', metalColor: '', purity: '', skuSize: '' }, skuId: ""
        },
        loading: false, error: false, data: [], likedatas: [], viewedddatas: [], price: 0, rating: [],

    },
    setFilters: () => { },
    setlikedata: () => { },
    setrating: () => { }
}

export const ProductDetailContext = React.createContext(initialCtx);

export const ProductDetailConsumer = ProductDetailContext.Consumer;

export const TabsProvider = (props) => {
    const [filters, setFilters] = React.useState(initialCtx.ProductDetailCtx.filters);
    const [likedatas, setlikedata] = React.useState([])
    const [viewedddatas, setvieweddata] = React.useState([])
    const [rating, setrating] = React.useState([])
    debugger
    const [price, setPrice] = React.useState(0)

    let queries = [];
    const pathQueries = () => {


        setFilters(filters)

    };

    useEffect(() => {
        let a = props;

        pathQueries()
    }, [filters])
    let variables;




    console.log('SkuId......', filters)

    const { loading, error, data, makeRequest } = useGraphql(PRODUCTDETAILS, () => { }, {});

    const { loading: likeloading, error: likeerror, data: likedata, makeRequest: likemakeRequest } = useGraphql(YouMayAlsoLike, () => { }, {}, false);
    // youRecentlyViewed


    // "filtersku": {"generatedSku": {"in": ["SB0013-18110000","SB0013-18210000"]}}
    const { loading: viewedloading, error: viewederror, data: vieweddata, makeRequest: viewmakeRequest } = useGraphql(youRecentlyViewed, () => { }, {}, false);


    // useEffect(()=>{
    //     likemakeRequest(vardata)
    // },[])
    useEffect(() => {
        setlikedata(likedata)

    }, [likedata])

    useEffect(() => {
        setvieweddata(vieweddata)
        setrating(rating)
    }, [vieweddata, rating])
    useEffect(() => {
        if (filters.productId === "") {
            if (window.location.search.length > 0) {
                let loc = window.location.search.split('=')

                let productDetailProps = loc[1];
                filters["skuId"] = productDetailProps
                setFilters(filters)
                variables = { conditionfilter: { 'generatedSku': filters["skuId"] } }
            }
            else {
                console.log(window.location.href)
                var urls = window.location.href
                var urlssplit = urls.split('/');
                var urlReplace = urlssplit[urlssplit.length - 1].replace(/-/g, ' ')
                variables = { productnamefilter: { productListByProductId: { 'productName': { equalTo: urlReplace } } }, number: 1 }
            }


        }

        console.log('filtersDefaultvariants', filters.skuId)
        // var metalColors =filters.defaultVariants.metalColor.length>0 ? {productColor:filters.defaultVariants.metalColor  }: null;
        // variables = { conditionfilter: { 'generatedSku': filters["skuId"] }, conditionImage:{...metalColors} }


    }, [])
    useEffect(() => {
        console.log('dataaaaaaaaa', data, Object.entries(data).length !== 0 && data.constructor === Object && data.data.allTransSkuLists && data.data.allTransSkuLists.nodes.length > 0)
        if (Object.entries(data).length !== 0 && data.constructor === Object) {
            if (data.data.allTransSkuLists && data.data.allTransSkuLists.nodes.length > 0) {
                handleProductDetatiContext()


            }

        }
        if(filters.skuId){
           var _sessionStorage = sessionStorage.getItem('skuId')
           var arr = []
          if(_sessionStorage && _sessionStorage.length>0){
            // arr.push(_sessionStorage.split(','))
            arr = _sessionStorage.split(',')
            arr.push(filters.skuId);
           var uniqueArray =  [...new Set(arr)]
           
           var removingCurrentProduct = uniqueArray.filter(val=>
            {
                if(window.location.search.split('=')[1] !== val){
                return val
                }
            }
        )
            debugger
            sessionStorage.setItem('skuId', removingCurrentProduct)
          }
          else{
              sessionStorage.setItem('skuId', filters.skuId)
          }
          let variablesviewed = {}
          variablesviewed["imgcondition"]= {
            "imagePosition": 1,
            "isdefault": true
          }
          if (_sessionStorage && _sessionStorage.indexOf(',') > -1) {
            variablesviewed["filtersku"]= {generatedSku:{in:sessionStorage.getItem('skuId').split(',')}}
          }
          else{
            variablesviewed["filtersku"]= {generatedSku:{in:[sessionStorage.getItem('skuId')]}}
          }
          let variableslike = {}
          let recommended_products= window.location.pathname.split('/')
          
          variableslike['filterdata'] = { "productType": { equalTo: recommended_products[2] } }
          variableslike['filterdata']['transSkuListsByProductId'] = { some: {discountPrice: { lessThan: price-5000, greaterThan: price+5000 }} }
          variableslike['filterdata']["isactive"]= {"equalTo": true}
          variableslike["Conditiondatatranssku"]= {
              "isdefault": true
          }
          variableslike["filterdatatranssku"]= {
            "generatedSku": {
                "notEqualTo": "SB0012-18110000-2.4"
              }
        }
       
      
            
          variableslike['filterdata2'] = { "productType": { equalTo: recommended_products[2] } }
          // variableslike['filterdata2']['transSkuListsByProductId'] = { some: { isdefault: { equalTo: true }} }
          variableslike['filterdata2']["isactive"]= {"equalTo": true}
          variableslike["Conditiondatatranssku2"]= {
            "isdefault": true
        }
        variableslike["filterdatatranssku2"]= {
          "generatedSku": {
              "notEqualTo": "SB0012-18110000-2.4"
            }
      }
     
          let vardata = { ...variableslike }
              console.log('vardata', vardata)
          likemakeRequest(vardata)
          viewmakeRequest(variablesviewed)
        }


    }, [filters])
    useEffect(() => {
        console.log(data, 'datadatadata123')
        if (data && data.allTransSkuLists && data.allTransSkuLists.nodes) setPrice(data.allTransSkuLists.nodes[0].markupPrice)
    }, [loading, error, data])
    const updateProductList = () => {
        console.info('filtersssss', filters)
        if (Object.entries(variables).length !== 0 && variables.constructor === Object) {
            makeRequest(variables);
        }
        else {
            return {}
        }


    }
    console.log('datadata', data)
    const handleProductDetatiContext = () => {
        // filters['defaultVariants'] = {
        //     ...data.allTransSkuLists.nodes[0]
        // }
        if (window.location.search.length > 0) {
            let loc = window.location.search.split('=')
            let productDetailProps = loc[1].split('-')
            filters['productId'] = productDetailProps[0]
        }

        // filters['defaultVariants']['diamondType'] = data.data.allTransSkuLists.nodes[0].diamondType
        // filters['defaultVariants']['metalColor'] = data.data.allTransSkuLists.nodes[0].metalColor
        // filters['defaultVariants']['purity'] = data.data.allTransSkuLists.nodes[0].purity
        // filters['defaultVariants']['skuSize'] = data.data.allTransSkuLists.nodes[0].skuSize
        // setFilters(filters)
        var variants = filters['defaultVariants']
        var metalColors = filters.defaultVariants && filters.defaultVariants.metalColor && filters.defaultVariants.metalColor.length > 0 ? { productColor: filters.defaultVariants.metalColor } : null;
        var ProductVariants = { conditionfilter: { 'productId': filters["productId"], ...variants } }
        var ConditionimagesMetalColor = { conditionImage: metalColors }
        variables = { ...ProductVariants, ...ConditionimagesMetalColor }
    }
    useEffect(() => {
        if (Object.entries(data).length !== 0 && data.constructor === Object) {
            if (data.data.allTransSkuLists && data.data.allTransSkuLists.nodes.length > 0) {
                var conditionValidate = data && data.data && data.data.allTransSkuLists && data.data.allTransSkuLists.nodes 
                debugger
                filters['defaultVariants']['diamondType'] =  data.data.allTransSkuLists.nodes[0].diamondType
                filters['defaultVariants']['metalColor'] =  data.data.allTransSkuLists.nodes[0].metalColor
                filters['defaultVariants']['purity'] =  data.data.allTransSkuLists.nodes[0].purity
                filters['defaultVariants']['skuSize'] = data.data.allTransSkuLists.nodes[0].skuSize
                if (window.location.search.length === 0) {
                    filters['productId'] = data.data.allTransSkuLists.nodes[0].productListByProductId.productId
                }
                setFilters(filters)
            }
        }
    }, [loading, error, data])
    useEffect(() => {

        setFilters(filters)
        pathQueries()
        updateProductList()

    }, [filters]) 

    const ProductDetailCtx = {
        filters, loading, error, data, likedata, likeloading, likeerror, likedatas, vieweddata, viewederror, viewedloading, viewedddatas, rating
    }

    console.info('filtersssassss', filters)
    return (
        <ProductDetailContext.Provider value={{ ProductDetailCtx, setFilters, setlikedata, setvieweddata, setrating }} >
            {props.children}
        </ProductDetailContext.Provider>
    )
};
export const ProductDetailProvider = withRouter(TabsProvider);
