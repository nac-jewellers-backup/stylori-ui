import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { CartContext } from 'context'

let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : {}
let user_profile_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {}
const usePromo = (props) => {
    const { setCartFilters } = React.useContext(CartContext);
    const [values, setValues] = React.useState({
        user_profile_id,
        cart_id,
        vouchercode: null,
    });
    // const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
    const { data, error, loading, makeFetch } = useNetworkRequest('/applyvoucher', {}, false);
    useEffect(() => {
        if (data.message === "Enter valid coupon") {
            alert("Enter valid coupon")
            // return false
        }
        if (data.message === "Applied Successfully") {
            var m = data.discounted_price ? JSON.stringify(data.discounted_price) : ""
            if (m.length > 2) {
                setCartFilters({
                    discounted_price: data.discounted_price,
                    tax_price: data.tax_price
                })
                // localStorage.setItem('pro', data.discounted_price)
                // localStorage.setItem('prop', data.tax_price)
            }
            alert("Your Promo code applied Successfully")
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