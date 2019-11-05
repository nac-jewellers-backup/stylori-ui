import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { PRODUCTDETAILS, conditions } from 'queries/productdetail';
import { withRouter } from 'react-router-dom';

const initialCtx = {
    ProductDetailCtx: {

        filters: { productId: '', defaultVariants: { diamondType: '', metalColor: '', purity: '', skuSize: '' }, skuId: '' },
        loading: false, error: false, data: []
    },
    setFilters: () => { }
}

export const ProductDetailContext = React.createContext(initialCtx);

export const ProductDetailConsumer = ProductDetailContext.Consumer;

export const TabsProvider = (props) => {
    const [filters, setFilters] = React.useState(initialCtx.ProductDetailCtx.filters);

    let queries = [];
    const pathQueries = () => {


        setFilters(filters)

    };

    useEffect(() => {
        let a = props;

        pathQueries()
    }, [filters])
    let variables;






    const { loading, error, data, makeRequest } = useGraphql(PRODUCTDETAILS, () => { }, {});
    useEffect(() => {
        if (filters.productId === "") {
            if(window.location.search.length>0){
                let loc = window.location.search.split('=')

                let productDetailProps = loc[1];
                filters["skuId"] = productDetailProps
                setFilters(filters)
                variables = { conditionfilter: { 'generatedSku': filters["skuId"] } }
            }
            else {
var urls = window.location.href
var urlssplit = urls.split('/');
var urlReplace = urlssplit[urlssplit.length-1].replace(/-/g, ' ')
variables = { productnamefilter: { productListByProductId:{'productName':{equalTo: urlReplace}} }, number:1 }
            }
            

        }
       
        // var metalColors =filters.defaultVariants.metalColor.length>0 ? {productColor:filters.defaultVariants.metalColor  }: null;
        // variables = { conditionfilter: { 'generatedSku': filters["skuId"] }, conditionImage:{...metalColors} }
        
 
    }, [])
    useEffect(() => {
    
        if (Object.entries(data).length !== 0 && data.constructor === Object) {
            if (data.data.allTransSkuLists && data.data.allTransSkuLists.nodes.length > 0) {
                handleProductDetatiContext()


            }

        }

    }, [filters])
    const updateProductList = () => {
       if(Object.entries(variables).length !== 0 && variables.constructor === Object){
        makeRequest(variables);
       }
       else{
           return {}
       }
       
        
    }
    const handleProductDetatiContext = () => {
        // filters['defaultVariants'] = {
        //     ...data.allTransSkuLists.nodes[0]
        // }
        if(window.location.search.length>0){
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
        var metalColors =filters.defaultVariants.metalColor.length>0 ? {productColor:filters.defaultVariants.metalColor  }: null;
        var ProductVariants = {conditionfilter: { 'productId': filters["productId"],  ...variants  }}
        var ConditionimagesMetalColor =  {conditionImage:metalColors}
        variables = { ...ProductVariants,...ConditionimagesMetalColor } 



    }
    useEffect(()=>{
        if (Object.entries(data).length !== 0 && data.constructor === Object) {
            if (data.data.allTransSkuLists && data.data.allTransSkuLists.nodes.length > 0) {
             filters['defaultVariants']['diamondType'] = data.data.allTransSkuLists.nodes[0].diamondType
        filters['defaultVariants']['metalColor'] = data.data.allTransSkuLists.nodes[0].metalColor
        filters['defaultVariants']['purity'] = data.data.allTransSkuLists.nodes[0].purity
        filters['defaultVariants']['skuSize'] = data.data.allTransSkuLists.nodes[0].skuSize
        if(window.location.search.length===0){
            filters['productId']=data.data.allTransSkuLists.nodes[0].productListByProductId.productId
        }
        setFilters(filters)
            }}
    }, [loading, error, data])
    useEffect(() => {

        setFilters(filters)
        pathQueries()
        updateProductList()

    }, [filters])

    const ProductDetailCtx = {
        filters, loading, error, data
    }

    return (
        <ProductDetailContext.Provider value={{ ProductDetailCtx, setFilters }} >
            {props.children}
        </ProductDetailContext.Provider>
    )
};
export const ProductDetailProvider = withRouter(TabsProvider);
