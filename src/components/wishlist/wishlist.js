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

    return (
        <>
        {values.isactive !== 2 ? <>
            <i class="fa fa-heart-o overall-icons" style={{ color: "#d51f63", pointer: "cursor" }}
                onClick={() => {
                    values["product_sku"] = props.sku
                    values["product_id"] = props.productId
                    setValues({ values, ...values });
                    handlers.handelSubmit(2)
                }}
            ></i></> : <>
                <i class="fa fa-heart-o overall-icons" style={{ color: "#d51f63", pointer: "cursor" }}
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