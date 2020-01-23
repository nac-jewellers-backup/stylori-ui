import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { CartContext } from 'context'

const usePromo = (props) => {
    
    let { CartCtx: { setCartFilters, cartFilters } } = React.useContext(CartContext);
    // const { setCartFilters } = React.useContext(CartContext);
    let user_profile_id = cartFilters && cartFilters.user_id && cartFilters.user_id.length > 0 ? cartFilters.user_id : localStorage.getItem("user_id")
    // alert(JSON.stringify(cartFilters).cartFilters&&cartFilters._cart_id&&cartFilters._cart_id.cart_id)
    let cart_id = cartFilters._cart_id && Object.keys(cartFilters._cart_id).length > 0 ?JSON.stringify( cartFilters)._cart_id.cart_id : JSON.parse(localStorage.getItem("cart_id")) && JSON.parse(localStorage.getItem("cart_id")).cart_id
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
            setCartFilters({
                discounted_price: data.price_response.discount,
                tax_price: 1000
            })
            // localStorage.setItem('pro', data.discounted_price)
            // localStorage.setItem('prop', data.tax_price)
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

    return { data, values, handlers }
}

export default usePromo;