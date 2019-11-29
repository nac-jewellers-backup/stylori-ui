import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';
import { CartContext } from 'context'
const useLogin = (changePanel) => {
    const [values, setValues] = React.useState({
        password: null,
        email: null,
        user_id:null,
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
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    const { setCartFilters } = React.useContext(CartContext);
    React.useEffect(() => {
        debugger
        var a = CodData ? CodData : ""
        if (JSON.stringify(a).length > 10) {
            localStorage.setItem("vals", JSON.stringify(CodData))
            changePanel(3)
        }
    }, [CodData])
    React.useEffect(() => {
        var ms = data && data.message
        var user_id = data && data.userprofile && data.userprofile.id
        if (ms) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = '!Invalid password'
            setValues({
                ...values,
                values,
            })
            // return false
        } else {
            var a = data.userprofile ? data.userprofile : ""
        if (JSON.stringify(a).length > 10) {
            values['error']['passerr'] = false
            values['errortext']['passerr'] = ''
            setValues({
                ...values,
                values,
            })
            var bbn = data && data.userprofile && data.userprofile.id ? data.userprofile.id : ""
            if (bbn.length > 0 || bbn !== undefined) {
                localStorage.setItem("email", data.userprofile.email)
                var obj = {}
                var bb = data.userprofile.id ? data.userprofile.id : ""
                obj['userprofileId'] = bb
                localStorage.setItem('user_id', bb)
                setValues({user_id:data.userprofile.id})
                setCartFilters({user_id})
                makeRequestCod(obj);
                // changePanel(3)
            }
        }
        }

    }, [data])
    const handleChange = (type, value) => {
        if (values.email !== null || type === 'email') {
            values['error']['emerr'] = false
            values['errortext']['emerr'] = ''
        }
        if (values.password !== null) {
            values['error']['passerr'] = false
            values['errortext']['passerr'] = ''
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
        if (values.email === null) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Email is required'
            setValues({
                ...values,
                values,
            })
        }
        if (values.password === null) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'Password is required'
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

    return { values, handlers, data }
}

export default useLogin;