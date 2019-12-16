import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';
import { CartContext } from 'context'
import Addressforms from '../addressDetails/Addressforms'

var obj = {}
var obj1 = {}
var val = {};
const useLogin = (changePanel) => {
    const [values, setValues] = React.useState({
        password: "",
        email: "",
        roles: ["user"],
        errortext: {
            emerr: "",
            passerr: "",
        },
        error: {
            passerr: false,
            emerr: false,
        }
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/signin', {}, []);
    const { setCartFilters } = React.useContext(CartContext);
    const { setValues: addressetValues } = Addressforms();
    const pathnames = window.location.pathname === "/login"
    const { loading: codloading, error: coderror, data: addresData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    React.useEffect(() => {

        var ms = data && data.message
        if (ms && values['error'] && values['errortext']) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'Invalid password!'
            setValues({
                ...values,
                values,
            })
            // return false
        } else {
            var a = data.userprofile ? data.userprofile : ""
            if (JSON.stringify(a).length > 10 && values['error'] && values['errortext']) {
                values['error']['passerr'] = false
                values['errortext']['passerr'] = ""
                setValues({
                    ...values,
                    values,
                })
                var bbn = data && data.userprofile && data.userprofile.id ? data.userprofile.id : ""
                if (bbn.length > 0 || bbn !== undefined) {
                    localStorage.setItem("email", data.userprofile.email)
                    var bb = data.userprofile.id ? data.userprofile.id : ""
                    obj['userprofileId'] = bb
                    obj1['user_id'] = bb
                    makeRequestCod(obj);
                    localStorage.setItem('user_id', bb)
                    // setValues({user_id:data.userprofile.id})
                    // changePanel(3)
                }
            }
        }

    }, [data])
    React.useEffect(() => {
        var a = addresData ? addresData : ""
        if (JSON.stringify(a).length > 10) {
            setCartFilters(obj1)
            // localStorage.setItem("vals", JSON.stringify(addresData))
            localStorage.setItem("true", false)
            localStorage.setItem("check_dlt", false)
            val["addressvalues"] = addresData
            val["addrs"] = false
            addressetValues(val)
            localStorage.setItem("c_k_l", true)
            if (!pathnames) {
                changePanel(2)
                return false
            } else {
                if (localStorage.getItem('review_location') && localStorage.getItem('review_location').length > 0) {
                    window.location.href = localStorage.getItem('review_location')
                    return false
                } else {
                    window.location.href = "/home"
                    return false
                }
            }
            window.location.reload();
        }
    }, [addresData])
    // React.useEffect(() => {
    //     if (user_id.length > 0) {
    //         obj['userprofileId'] = user_id
    //         makeRequestCod(obj);
    //     }
    // }, [])
    const handleChange = (type, value) => {
        if (values.email !== "" && values['error'] && values['errortext']) {
            values['error']['emerr'] = false
            values['errortext']['emerr'] = ""
        }
        if (values.password !== "" && values['error'] && values['errortext']) {
            values['error']['passerr'] = false
            values['errortext']['passerr'] = ""
        }
        setValues({
            ...values,
            [type]: value
        })
        // makeFetch(values)
    }

    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    // const vl = data && data.message
    const errmsg = data.message ? data.message : ""
    const auth = data.userprofile ? data.userprofile.id : ""
    const handelSubmit = (e) => {
debugger
        if (values.email === "" && values['error'] && values['errortext']) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Email is required'

            setValues({
                ...values,
                values,
            })
        }
        if (values.password === "" && values['error'] && values['errortext']) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'Password is required'
            setValues({
                ...values,
                values,
            })
            return false
        }
        if (values.email === "" && values['error'] && values['errortext']) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Email is required'

            setValues({
                ...values,
                values,
            })
            return false
        }
        var emailvld = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (!emailvld.test(values.email)) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'An email address must contain a single @/.'
            setValues({
                ...values,
                values,
            })
            return false
        }
        makeFetch(values);
        // changePanel(3)

    }

    const handlers = { handleChange, handleInvalid, handelSubmit };

    return { values, handlers, setValues, data }
}

export default useLogin;