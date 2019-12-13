import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';

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
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    React.useEffect(() => {
        var a = CodData ? CodData : ""
        if (JSON.stringify(a).length > 10) {
            localStorage.setItem("vals", JSON.stringify(CodData))
            window.location.href=localStorage.getItem('review_location')
            // window.history.push()
        }
    }, [CodData])
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
            var bbn = data.userprofile.id ? data.userprofile.id : ""
            if (bbn.length > 0 || bbn !== undefined) {
                localStorage.setItem("email", data.userprofile.email)
                var obj = {}
                var bb = data.userprofile.id ? data.userprofile.id : ""
                obj['userprofileId'] = bb
                localStorage.setItem('user_id', bb)
                makeRequestCod(obj);
                // changePanel(3)
            }
        }
        }

    }, [data])
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
        let lastAtPos = values.email.lastIndexOf('@');
        let lastDotPos = values.email.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && values.email.indexOf('@@') == -1 && lastDotPos > 2 && (values.email.length - lastDotPos) > 2)) {
            debugger
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

    return { values, handlers,setValues, data }
}

export default useLogin;