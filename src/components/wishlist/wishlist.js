import React from 'react';
import { Grid, Button } from '@material-ui/core';
import useWishlists from './usewishlist';
var orderobj = {};
const Wishlist = (props) => {
    return <WishlistComponent  {...props} />
}

const WishlistComponent = (props) => {

    const { classes } = props;
    const { values, setValues, handlers } = useWishlists();
    React.useEffect(() => {

        if (JSON.stringify(props.wishlist) && JSON.stringify(props.wishlist).length > 0) {
            props.wishlist && props.wishlist.wishlistdata && props.wishlist.wishlistdata.nodes.map(val => {
                if (val.skuId === props.sku) {
                    values["isactive"] = 2
                    setValues({ values, ...values });
                    return false
                }
            })
        }
    }, [])
    return (
        <>
            {values.isactive !== 2 ? <>
                <i class="fa fa-heart" style={{ color: "#d51f63", pointer: "cursor", fontSize: "1.2rem" }}
                    onClick={() => {
                        values["product_sku"] = props.sku
                        values["product_id"] = props.productId
                        setValues({ values, ...values });
                        handlers.handelSubmit(2)
                    }}
                ></i></> : <>
                    <i class="fa fa-heart " style={{ color: "red", pointer: "cursor", fontSize: "1.2rem" }}
                        onClick={() => {
                            values["product_sku"] = props.sku
                            values["product_id"] = props.productId
                            setValues({ values, ...values });
                            handlers.handelRemove(1)
                        }}
                    ></i></>}
            {/* {JSON.stringify(props.sku)} */}

        </>
    )
}


export default Wishlist;