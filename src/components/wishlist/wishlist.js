import React from 'react';
import { Grid, Button } from '@material-ui/core';
import useWishlists from './usewishlist';
import styles from './style'
var orderobj = {};
const Wishlist = (props) => {
    return <WishlistComponent  {...props} />
}

const WishlistComponent = (props) => {

    const classes = styles();
    
    const { values, setValues, handlers } = useWishlists(props);

    const isSilver = props.isSilver ? true : false
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
                {isSilver && <span style={{paddingRight:"5px"}} onClick={() => {
                        values["product_sku"] = props.sku
                        values["product_id"] = props.productId
                        setValues({ values, ...values });
                        handlers.handelSubmit(2)
                    }}>Save  </span>}<i   className={`fa fa-heart-o overall-icons ${props.props ? classes.colorTheme : classes.colorTheme} ${isSilver ? classes.silverColor : ''}`}
                    onClick={() => {
                        values["product_sku"] = props.sku
                        values["product_id"] = props.productId
                        setValues({ values, ...values });
                        handlers.handelSubmit(2)
                    }}
                ></i></> : <>
                    {isSilver && <span style={{paddingRight:"5px"}} onClick={() => {
                            values["product_sku"] = props.sku
                            values["product_id"] = props.productId
                            setValues({ values, ...values });
                            handlers.handelRemove(1)
                        }}>Saved</span>}<i className={`fa fa-heart overall-icons ${classes.colorTheme} ${isSilver ? classes.silverColor : ''}`}
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