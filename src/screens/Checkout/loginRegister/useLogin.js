import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';

const useLogin = () => {
    const [values, setValues] = React.useState({
        password: null,
        email: "nac@dinesh.com",
        roles: ["user"]
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/signin', {}, []);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    // React.useEffect(() => {
    //     // localStorage.setItem('l',JSON.stringify(data))
    //     const a = data? data: ""
    //     if (a) {
    //         makeRequestCod(data.userprofile.id);
    //     }
    // }, [data])
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

    return { values, handlers }
}

export default useLogin;