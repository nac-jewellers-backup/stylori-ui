import React from 'react';
import { Grid, Button } from '@material-ui/core';
import useWishlists from './usewishlist';
var orderobj = {};
const RemoveWishlist = (props) => {
    return <RemoveWishlistComponent  {...props} />
}

const RemoveWishlistComponent = (props) => {
    const { classes } = props;
    const { values, setValues, handlers } = useWishlists(props);

    return (
        <div 
            onClick={() => {
                values["product_sku"] = props.sku
                values["product_id"] = props.productId
                values["add"] = props.add
                setValues({ values, ...values });
                handlers.handelRemove(1)
            }}>
            {props.data} 
        </div>
    )
}


export default RemoveWishlist;