import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { CartContext } from 'context'
var orderobj = {};
const useWishlists = (props) => {
    const [values, setValues] = React.useState({
        user_id: "",
        product_id: "",
        add: "",
        product_sku: "",
        // isactive: 1
    });
    const [invalids, setInvalids] = React.useState({ user_id: false, product_id: false, product_sku: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addwishlist', {}, []);
    const { data: removedata, makeFetch: removemakeFetch, } = useNetworkRequest('/removewishlist', {}, []);
    const { setCartFilters } = React.useContext(CartContext);
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {};
    const check_gustlog = localStorage.getItem("true") ? localStorage.getItem("true") : {}
    // useEffect(() => {
    //     // orderobj["product_sku"] = sku
    //     setValues(orderobj);
    // }, [])
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
        makeFetch(values)
    }

    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const handelSubmit = (num) => {
        if (user_id.length > 0 && check_gustlog === "false") {
            values["isactive"] = num
            values["user_id"] = user_id
            setValues({ values, ...values });
            // makeFetch(values);
        } else {
            alert("Please login your email Id")
            window.location.href = "/login" 
        }
        // changePanel(3)
    }
    const handelRemove = (num) => {
        if (user_id.length > 0 && check_gustlog === "false") {
            values["isactive"] = num
            values["user_id"] = user_id
            setValues({ values, ...values }); 
                setCartFilters({
                    skuId: values.product_sku, 
                    qty: 1,
                    price: values.add
                })
                window.location.pathname = "/cart"
            removemakeFetch(values);
        }

        // changePanel(3)
    }

    const handlers = { handleChange, handleInvalid, handelRemove, handelSubmit };

    return { values, handlers, setValues }
}

export default useWishlists;