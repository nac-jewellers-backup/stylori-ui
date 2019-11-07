import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';


const usePromo = () => {
    const [values, setValues] = React.useState({
        promocode: null,
    });
    // const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
    const { data, error, loading, makeFetch } = useNetworkRequest('/api/auth/signup', {}, false);
    // useEffect(() => {
    //     var v = data.email ? data.email : ""
    //     if (v.length > 0) {
    //         localStorage.setItem("email", data.email)
    //     }
    // }, [data])
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        makeFetch(values);
    }

    const handlers = { handleSubmit, handleChange };

    return { values, handlers }
}

export default usePromo;