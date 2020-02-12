import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CUSTOMERREVIEWS, USERPROFILES } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';
// const { setGlobalCtx } = React.useContext(GlobalContext);
import { ProductDetailContext } from 'context/ProductDetailContext';

const useRating = (props) => {
    // console.log(props.data)
    const { setrating, ratingcounts, setratingcounts, setratingcountsclear } = React.useContext(ProductDetailContext);
    const [values, setValues] = React.useState({
        user_id: "",
        rate: "",
        product_id: "",
        product_sku: "",
        title: "",
        message: "",
        username: "",
        count: null,
        errortext: {
            rateerr: "",
            ratetitle: "",
            ratemsg: "",
        },
        error: {
            rateerr: false,
            ratetitle: false,
            ratemsg: false,
        },
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addproductreview', {}, false);
    var variab = {}
    // const { setratingcounts } = React.useContext(ProductDetailContext);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CUSTOMERREVIEWS, () => { }, {});
    const { loading: codloadings, error: coderrors, data: CodDataLisen, makeRequestCod: makeRequest } = useCheckForCod(USERPROFILES, () => { }, {});
    const clear = () => {
        props && props.clear_rating_onchange && props.clear_rating_onchange(true)
        setratingcounts({ ratingcounts: [] })
        setValues({
            user_id: "",
            rate: "",
            product_id: "",
            product_sku: "",
            title: "",
            message: "",
            count: null,
            errortext: {
                rateerr: "",
                ratetitle: "",
                ratemsg: "",
            },
            error: {
                rateerr: false,
                ratetitle: false,
                ratemsg: false,
            },
        })
    }
    const count = localStorage.getItem("count") ? localStorage.getItem("count") : ""
    // variab['productSku'] = values.product_sku
    // var rat_sate = values.error&&values.error.rateerr
    useEffect(() => {
        var ratingdataerr = data.message ? data.message : ""
        if (ratingdataerr.length > 0) {
            values["errortext"]["rateerr"] = ""
            values["error"]["rateerr"] = false
            values["errortext"]["ratetitle"] = ""
            values["errortext"]["ratemsg"] = ""
            values["error"]["ratetitle"] = false
            values["error"]["ratemsg"] = false
            setValues({
                ...values,
                values
            })
            if (data.message !== "Already added review for this product") {
                alert(data && data.message)
                // alert("Your review has been sent to our team. Will post it soon. Thanks!")
                clear()
                // props && props.clear_rating_onchange && props.clear_rating_onchange(true)
                // return false
            } else {
                alert(data && data.message)
            }
        }
    }, [data])

    useEffect(() => {
        var rating = CodData.data ? CodData.data.allCustomerReviews.nodes : ""
        if (rating.length > 0) {
            setrating({ CodData })
        }
    }, [CodData])

    useEffect(() => {
        var username = CodDataLisen && CodDataLisen.data && CodDataLisen.data.allUserProfiles && CodDataLisen.data.allUserProfiles.nodes && CodDataLisen.data.allUserProfiles.nodes[0] && CodDataLisen.data.allUserProfiles.nodes[0].firstName && CodDataLisen.data.allUserProfiles.nodes[0].firstName
        if (username) {
            setValues({
                ...values,
                username: username
            })
        }
    }, [CodDataLisen])

    useEffect(() => {
        var userId = { "userId": localStorage.getItem("user_id") }
        // alert(JSON.stringify(userId))
        makeRequest(userId)
        let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : '';
        // if (window.location.search) {
        //     let urlSearchparams = window.location.search;
        //     let urlSearchparamsDecode = decodeURI(urlSearchparams)
        //     let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')
        //     let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')
        //     let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
        //     let mapUrlParamsSplitEqual = urlSplitparamsEqual();
        //     let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : '';
        //     // console.log('starsSelectedstarsSelected',props.starsSelected)
        //     mapUrlParamsSplitEqual.map(val => {
        values['product_sku'] = props.data && props.data[0] && props.data[0].skuId
        if (props.data && props.data[0] && props.data[0].skuId.length > 0) {
            variab['productSku'] = props.data && props.data[0] && props.data[0].skuId
            makeRequestCod(variab)
            // alert(JSON.stringify(variab))
        }
        values['user_id'] = user_id
        values['product_id'] = props.data && props.data[0] && props.data[0].productId
        // setFilters(values)
        setValues({
            ...values,
            values
        })
        // })
        // }
    }, [])
    var check = props.ratingcounts.ratingcounts
    useEffect(() => {
        if (check !== "" && values['error'] && values['errortext']) {
            values["errortext"]["rateerr"] = ""
            values["error"]["rateerr"] = false
            setValues({
                ...values,
                values
            })
        }
    }, [check])
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
        if (values.rate !== "" && values['error'] && values['errortext']) {
            values["errortext"]["rateerr"] = ""
            values["error"]["rateerr"] = false
        }
        if (values.title !== "" && values['error'] && values['errortext']) {
            values["errortext"]["ratetitle"] = ""
            values["error"]["ratetitle"] = false
        }
        if (values.message !== "" && values['error'] && values['errortext']) {
            values["errortext"]["ratemsg"] = ""
            values["error"]["ratemsg"] = false
        }
    }
    const handelSubmit = (e, props) => {

        var rats = props.ratingcounts.ratingcounts ? props.ratingcounts.ratingcounts : ""
        if ((rats > 0) && values.title.length > 0 && values.message.length > 0) {
            let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : '';
            if (user_id.length > 0) {
                // alert(JSON.stringify(data.message))
                var rats = props.ratingcounts.ratingcounts ? props.ratingcounts.ratingcounts : ""
                if (window.location.search) {
                    values['product_sku'] = props.data && props.data[0] && props.data[0].skuId
                    values['user_id'] = user_id
                    values['username'] = values.username
                    values['product_id'] = props.data && props.data[0] && props.data[0].productId
                    if (props.data && props.data[0] && props.data[0].skuId.length > 0) {
                        variab['productSku'] = props.data && props.data[0] && props.data[0].skuId
                        makeRequestCod(variab)
                        // alert(JSON.stringify(variab))
                    }
                    if (rats > 0 || rats !== undefined || rats !== "") {
                        values["errortext"]["rateerr"] = ""
                        values["errortext"]["ratetitle"] = ""
                        values["errortext"]["ratemsg"] = ""
                        values["error"]["ratetitle"] = false
                        values["error"]["ratemsg"] = false
                        values["error"]["rateerr"] = false
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

                }
                // window.location.href = "/login"

            } else {
                // alert("You will be able to review only after purchasing the product")
                // props.location.pathname="/login"
                localStorage.setItem('review_location', `${window.location.href}`)
                props.history.push({ pathname: "/login" })
            }

            values["errortext"]["rateerr"] = ""
            values["error"]["rateerr"] = false
            values["count"] = rats
            setValues({
                ...values,
                values
            })


        } else {
            if (values.title === "" && values['error'] && values['errortext']) {
                values["errortext"]["ratetitle"] = "Enter your title"
                values["error"]["ratetitle"] = true
                setValues({
                    ...values,
                    values,
                })
            }
            if (values.message === "" && values['error'] && values['errortext']) {
                values["errortext"]["ratemsg"] = "Enter your review"
                values["error"]["ratemsg"] = true
                setValues({
                    ...values,
                    values,
                })
            }
            if (rats === "" || rats.length === 0) {
                if (values['error'] && values['errortext']) {
                    values["errortext"]["rateerr"] = "Select star rating"
                    values["error"]["rateerr"] = true
                    setValues({
                        ...values,
                        values,
                    })
                }
            }

            setValues({
                ...values,
                values
            })
            return false
        }
    }
    const handlers = { handleChange, clear, handleInvalid, handelSubmit };
    return { values, setValues, handlers, data }
}

export default useRating;