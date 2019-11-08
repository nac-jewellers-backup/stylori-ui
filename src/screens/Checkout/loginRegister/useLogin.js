import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';

const useLogin = () => {
    const [values, setValues] = React.useState({
        password: null,
        email: null,
        roles: ["user"]
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/signin', {}, []);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});

    React.useEffect(() => {
        debugger
        var a = data.userprofile ? data.userprofile : ""
        if (JSON.stringify(a).length > 10) {
            var bbn = data.userprofile.id ? data.userprofile.id : ""
            if (bbn || bbn !== undefined) {
                localStorage.setItem("email",data.userprofile.email)
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

    const doLogin = () => {
        makeFetch(values);
    }

    const handlers = { handleChange, handleInvalid, doLogin };

    return { values, handlers ,data}
}

export default useLogin;