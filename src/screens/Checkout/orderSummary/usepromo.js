import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';

let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : {}
let user_profile_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {}
const usePromo = () => {
    const [values, setValues] = React.useState({
        user_profile_id,
        cart_id,
        vouchercode: null,
    });
    // const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
    const { data, error, loading, makeFetch } = useNetworkRequest('/applyvoucher', {}, false);
    useEffect(() => {

        var m = data.discounted_price ? JSON.stringify(data.discounted_price) : ""
        if (m.length > 2) {
            localStorage.setItem('pro', data.discounted_price)
            localStorage.setItem('prop', data.tax_price)
        }
    }, [data])
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