import React from 'react';
import { Grid, Button } from '@material-ui/core';
import useWishlists from './usewishlist';
var orderobj = {};
const Wishlist = (props) => {
    return <WishlistComponent  {...props} />
}

const WishlistComponent = (props) => {

    const { classes } = props;
    const { values, setValues, handlers } = useWishlists(props);
    React.useEffect(() => {
        
    // alert(JSON.stringify(props.wishlist))
    if(props&&props.wishlist!==undefined||props&&props.wishlist!==null)
    if (JSON.stringify(props.wishlist) && JSON.stringify(props.wishlist).length > 0) {
        props.wishlist && props.wishlist.wishlistdata && props.wishlist.wishlistdata.nodes.map(val => {
            if (val.skuId === props.sku) {
                values["isactive"] = 2
                setValues({ values, ...values });
                // return false
            }
        })
    }
    }, [])
    // alert(JSON.stringify(props.wishlist))
    return (
        <>
            {values.isactive !== 2 ? <>
                <i class="fa fa-heart-o overall-icons" style={{ color: props.props ? "#d51f63" : "#d51f63" }}
                    onClick={() => {
                        values["product_sku"] = props.sku
                        values["product_id"] = props.productId
                        setValues({ values, ...values });
                        handlers.handelSubmit(2)
                    }}
                ></i></> : <>
                    <i class="fa fa-heart overall-icons" style={{ color: "#d51f63" }}
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