import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CUSTOMERREVIEWS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';
// const { setGlobalCtx } = React.useContext(GlobalContext);
import { ProductDetailContext } from 'context/ProductDetailContext';

const useRating = (props) => {
    const { setFilters } = React.useContext(ProductDetailContext);
    const [values, setValues] = React.useState({
        user_id: null,
        rate: null,
        product_id: null,
        product_sku: null,
        title: null,
        message: null
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addproductreview', {}, []);
    var variab = {}
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CUSTOMERREVIEWS, () => { }, {});

    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
    }
    variab['productSku'] = values.product_sku
    useEffect(() => {
        var rating = CodData.data ? CodData.data.allCustomerReviews.nodes[0] : ""
        if (rating.length > 0) {
            setFilters({
                rate: CodData.data.allCustomerReviews.nodes[0].rating,
                title: CodData.data.allCustomerReviews.nodes[0].title,
                message: CodData.data.allCustomerReviews.nodes[0].message
            })
        }
    }, [CodData])
    useEffect(() => {
        if (window.location.search) {
            let urlSearchparams = window.location.search;
            let urlSearchparamsDecode = decodeURI(urlSearchparams)
            let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')
            let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')
            let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
            let mapUrlParamsSplitEqual = urlSplitparamsEqual();
            let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : '';
            // console.log('starsSelectedstarsSelected',props.starsSelected)
            mapUrlParamsSplitEqual.map(val => {
                values['product_sku'] = val[1]
                values['user_id'] = user_id
                values['rate'] = '3'
                // setFilters(values)
                setValues({
                    ...values,
                    values
                })
            })
        }
    }, [])
    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const handelSubmit = (e) => {
        let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : '';
        if (user_id.length > 0) {
            makeFetch(values);
            makeRequestCod(variab)

        } else {
            alert("You will be able to review only after purchasing the product")
        }
    }

    const handlers = { handleChange, handleInvalid, handelSubmit };

    return { values, setValues, handlers, data }
}

export default useRating;