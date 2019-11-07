import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';


const useGift = () => {
    const [values, setValues] = React.useState({
        to: null,
        from: null,
        message: null,
    });
    const [val, setval] = React.useState({
        expanded1: "panel1",
        expanded2: "panel2",
        expanded3: "panel3",
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
        debugger
        // e.preventDefault();
        makeFetch(values);
    }

    const handlers = { handleSubmit, handleChange };

    return { values, handlers,val }
}

export default useGift;