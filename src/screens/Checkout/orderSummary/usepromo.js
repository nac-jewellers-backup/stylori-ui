import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { CartContext } from 'context'
import { SnackBar } from "components/snackbarAlert/SnackBar"

const usePromo = (props) => {
    
    let { CartCtx: { setCartFilters, cartFilters } } = React.useContext(CartContext);
    // const { setCartFilters } = React.useContext(CartContext);
    let user_profile_id = cartFilters && cartFilters.cartFilters && cartFilters.cartFilters.user_id && cartFilters.cartFilters.user_id && cartFilters.cartFilters.user_id.length > 0 ? cartFilters.cartFilters.user_id : localStorage.getItem("user_id")
    // alert(JSON.stringify(cartFilters).cartFilters&&cartFilters._cart_id&&cartFilters._cart_id.cart_id)
    let cart_id = cartFilters && cartFilters.cartFilters && cartFilters.cartFilters._cart_id && cartFilters.cartFilters._cart_id.cart_id ? cartFilters.cartFilters._cart_id.cart_id : JSON.parse(localStorage.getItem("cart_id")) && JSON.parse(localStorage.getItem("cart_id")).cart_id
    const [values, setValues] = React.useState({
        user_profile_id,
        cart_id,
        vouchercode: null,
       
    });
    const [open, setOpen] = React.useState(false)
    

    // const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
    const { data, error, loading, status, makeFetch } = useNetworkRequest('/applyvoucher', {}, false);
    useEffect(() => {
        if (data && Object.entries(data).length > 0 && data.constructor === Object) {
            
            if (data.status === "200") {
                setCartFilters({
                    discounted_price: data.price_response.discount,
                    tax_price: Math.round(data.price_response.discount),
                    coupon_type: data.coupon_type,
                    gross_amount:data.price_response.gross_amount,
                    discounted_amount:data.price_response.discounted_price,
                    vouchercode:values.vouchercode
                })
            }
            // alert(data.message)
            // alert(JSON.stringify(data))
            setOpen(true)
            
        }

    }, [data])
    const handleClose = () => {
        setOpen(false)
    }
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
    }
    const handleSubmit = (e) => {
        
        // let { CartCtx: { setCartFilters, cartFilters } } = React.useContext(CartContext);
    // const { setCartFilters } = React.useContext(CartContext);
    let user_profile_id = cartFilters && cartFilters.cartFilters && cartFilters.cartFilters.user_id && cartFilters.cartFilters.user_id && cartFilters.cartFilters.user_id.length > 0 ? cartFilters.cartFilters.user_id : localStorage.getItem("user_id")
    // alert(JSON.stringify(cartFilters).cartFilters&&cartFilters._cart_id&&cartFilters._cart_id.cart_id)
    let cart_id = cartFilters && cartFilters.cartFilters && cartFilters.cartFilters._cart_id && cartFilters.cartFilters._cart_id.cart_id ? cartFilters.cartFilters._cart_id.cart_id : JSON.parse(localStorage.getItem("cart_id")) && JSON.parse(localStorage.getItem("cart_id")).cart_id
        // e.preventDefault();
        setValues({
            ...values,
            user_profile_id: user_profile_id
        })
        setValues({
            ...values,
            cart_id: cart_id
        })
        makeFetch(values);
    }

    const handlers = { handleSubmit, handleChange, handleClose };

    return { data, values, handlers, open  }
}

export default usePromo;