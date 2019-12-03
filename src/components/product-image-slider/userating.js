import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CUSTOMERREVIEWS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';
// const { setGlobalCtx } = React.useContext(GlobalContext);
import { ProductDetailContext } from 'context/ProductDetailContext';

const useRating = (props) => {
    const { setrating, setregisterurl } = React.useContext(ProductDetailContext);
    const [values, setValues] = React.useState({
        user_id: "",
        rate: "",
        product_id: "",
        product_sku: "",
        title: "",
        message: "",
        errortext: {
            rateerr: "",
        },
        error: {
            rateerr: false,
        },
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addproductreview', {}, false);
    var variab = {}
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CUSTOMERREVIEWS, () => { }, {});

    const count = localStorage.getItem("count") ? localStorage.getItem("count") : ""
    // variab['productSku'] = values.product_sku
    useEffect(() => {
        var ratingdataerr = data.message ? data.message : ""
        if (ratingdataerr.length > 0) {
            alert(JSON.stringify(data.message))
        }
    }, [data])

    useEffect(() => {
        var rating = CodData.data ? CodData.data.allCustomerReviews.nodes : ""
        if (rating.length > 0) {
            setrating({ CodData })
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
                debugger
                values['product_sku'] = val[1]
                if (val[1].length > 0) {
                    variab['productSku'] = val[1]
                    makeRequestCod(variab)
                    // alert(JSON.stringify(variab))
                }
                values['user_id'] = user_id
                debugger
                var a = window.location.search.split('=')
                var b = a[1].split('-')[0]
                values['product_id'] = b
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
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
    }
    const handelSubmit = (e, props) => {
        var rats = props.ratingcounts.ratingcounts ? props.ratingcounts.ratingcounts : ""
        debugger
        if (rats > 0 || rats !== "") {
            let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : '';
            if (user_id.length > 0) {
                // alert(JSON.stringify(data.message))
                var rats = props.ratingcounts.ratingcounts ? props.ratingcounts.ratingcounts : ""
                values["errortext"]["rateerr"] = ""
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
                        if (val[1].length > 0) {
                            variab['productSku'] = val[1]
                            makeRequestCod(variab)
                            // alert(JSON.stringify(variab))
                        }
                        if (rats > 0 || rats !== undefined || rats !== "") {
                            // alert(JSON.stringify(rats))
                            values['rate'] = props.ratingcounts.ratingcounts ? JSON.stringify(props.ratingcounts.ratingcounts) : ""
                            setValues({
                                ...values,
                                values
                            })
                            makeFetch(values);
                        }
                        // setFilters(values)
                        setValues({
                            ...values,
                            values
                        })
                    })
                }
                // window.location.href = "/login"

            } else {
                // alert("You will be able to review only after purchasing the product")
                // props.location.pathname="/login"
                localStorage.setItem('review_location', `${window.location.href}`)
                props.history.push({ pathname: "/login" })
            }
            setValues({
                ...values,
                values
            })
        } else {
            values["errortext"]["rateerr"] = "Rate this"
            setValues({
                ...values,
                values
            })
            return false
        }
    }

    const handlers = { handleChange, handleInvalid, handelSubmit };

    return { values, setValues, handlers, data }
}

export default useRating;