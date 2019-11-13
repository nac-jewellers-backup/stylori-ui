import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';

const useLogin = (changePanel) => {
    const [values, setValues] = React.useState({
        password: null,
        email: null,
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
        var a = data.userprofile ? data.userprofile : ""
        if (JSON.stringify(a).length > 10) {
            var bbn = data.userprofile.id ? data.userprofile.id : ""
            if (bbn || bbn !== undefined) {
                localStorage.setItem("email", data.userprofile.email)
                var obj = {}
                var bb = data.userprofile.id ? data.userprofile.id : ""
                obj['userprofileId'] = bb
                localStorage.setItem('user_id', bb)
                makeRequestCod(obj);
            }

        }
    }, [data])

    React.useEffect(() => {
        var a = CodData ? CodData : ""
        if (JSON.stringify(a).length > 10) {
            localStorage.setItem("vals", JSON.stringify(CodData))
        }
    }, [CodData])
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
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
        if (values.email === null) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Mail is Required'
            setValues({
                ...values,
                values,
            })
            return false
        }
        if (values.password === null) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'password is Required'
            setValues({
                ...values,
                values,
            })
            return false
        }
        makeFetch(values);
        if (errmsg.length > 0) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'Invalid Password!'
            setValues({
                ...values,
                values,
            })
            return false
        }
        if (auth.length > 0) {
            changePanel(3)
        }

    }

    const handlers = { handleChange, handleInvalid, handelSubmit };

    return { values, handlers, data }
}

export default useLogin;