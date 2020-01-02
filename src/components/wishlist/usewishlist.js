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
        isactive: null,
    });
    const [invalids, setInvalids] = React.useState({ user_id: false, product_id: false, product_sku: false });
    // const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addwishlist', {}, [], false);
    // const { data: removedata, makeFetch: removemakeFetch, } = useNetworkRequest('/removewishlist', {}, [], false);
    const { setCartFilters, setwishlistdata } = React.useContext(CartContext);
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
        // makeFetch(values)
    }

    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const makeFetch = () => {
        fetch('https://api.stylori.net/addwishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(values)
        }).then((response) => {
            return response.json();
        })
            .then((myData) => {
                console.log(myData);
            });
    }
    // const removemakeFetch = () => {
    //     debugger
    //     fetch('https://api.stylori.net/removewishlist', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: JSON.stringify(values)
    //     }).then((response) => {
    //         return response.json();
    //     })
    //         .then((myJson) => {
    //             console.log(myJson);
    //         });
    // }

    const handelSubmit = (num) => {
        setwishlistdata({
            wishlistdata: values.isactive
        })
        if (user_id.length > 0 && check_gustlog === "false") {
            values["isactive"] = num
            values["user_id"] = user_id
            setValues({ values, ...values });
            makeFetch()
        } else {
            alert("Please login your email Id")
            localStorage.setItem('review_location', `${window.location.href}`)
            // localStorage.setItem('wishlist', 0)
            window.location.href = "/login"
        }
        // changePanel(3)

    }
    const handelRemove = (num) => {
        setwishlistdata({
            wishlistdata: values.isactive
        })
        if (user_id.length > 0 && check_gustlog === "false") {
            values["isactive"] = num
            values["user_id"] = user_id
            setValues({ values, ...values });
            setCartFilters({
                skuId: values.product_sku,
                qty: 1,
                price: values.add
            })
            if ((JSON.stringify(values.add) && JSON.stringify(values.add).length > 0) && (window.location.pathname.split("-")[0] === "/account")) {
                window.location.pathname = "/cart"
            } else {
                if (window.location.pathname.split("-")[0] === "/account") {
                    window.location.reload();
                }
            }
            fetch('https://api.stylori.net/removewishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(values)
            }).then((response) => {
                return response.json();
            })
                .then((myJson) => {
                    console.log(myJson);
                });

        }
        // changePanel(3)
      
    }

    const handlers = { handleChange, handleInvalid, handelRemove, handelSubmit };

    return { values, handlers, setValues }
}

export default useWishlists;