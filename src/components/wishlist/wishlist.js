import React from "react";
import useWishlists from "./usewishlist";
import styles from "./style";

const Wishlist = (props) => {
  return <WishlistComponent {...props} />;
};

const WishlistComponent = (props) => {
  const classes = styles();
  const { values, setValues, handlers } = useWishlists(props);

  const isSilver = props.isSilver ? true : false;
  const customClassName = props.class ? props.class : "";
  React.useEffect(() => {
    // alert(JSON.stringify(props.wishlist))
    if ((props && props.wishlist !== undefined) || (props && props.wishlist !== null))
      if (JSON.stringify(props.wishlist) && JSON.stringify(props.wishlist).length > 0) {
        props.wishlist &&
          props.wishlist.wishlistdata &&
          props.wishlist.wishlistdata.nodes.map((val) => {
            if (val.skuId === props.sku) {
              values["isactive"] = 2;
              setValues({ values, ...values });
              // return false
            }
            return 0;
          });
      }
      // eslint-disable-next-line
  }, []);
  // alert(JSON.stringify(props.wishlist))
  let a = props.isSilverbool ? "fa fa-heart overall-icons" : "fa fa-heart-o overall-icons";
  return (
    <>
      {values?.isactive !== 2 ? (
        <>
          {isSilver && props.label && (
            <span
              style={{
                letterSpacing: props.class || props.classMobile ? "2.5px" : "unset",
                fontSize: props.class ? "13px" : "unset",
                paddingRight: "5px",
              }}
              onClick={() => {
                values["product_sku"] = props.sku;
                values["product_id"] = props.productId;
                setValues({ values, ...values });
                handlers.handelSubmit(2);
              }}
            >
              {props.label}
            </span>
          )}
          <i
            className={`${a} ${isSilver ? classes.silverTheme : classes.colorTheme} ${isSilver ? classes.silverColor : ""} ${
              classes[customClassName]
            }`}
            onClick={() => {
              values["product_sku"] = props.sku;
              values["product_id"] = props.productId;
              setValues({ values, ...values });
              handlers.handelSubmit(2);
            }}
          ></i>
        </>
      ) : (
        <>
          {isSilver && props.labelAdded && (
            <span
              style={{
                letterSpacing: props.class ? "2.5px" : "unset",
                fontSize: props.class ? "13px" : "unset",
                paddingRight: "5px",
              }}
              onClick={() => {
                values["product_sku"] = props.sku;
                values["product_id"] = props.productId;
                setValues({ values, ...values });
                handlers.handelRemove(1);
              }}
            >
              {props.labelAdded}
            </span>
          )}
          <i
            className={`fa fa-heart overall-icons ${classes.colorTheme} ${isSilver ? classes.silverColor : ""} ${
              classes[customClassName]
            }`}
            onClick={() => {
              values["product_sku"] = props.sku;
              values["product_id"] = props.productId;
              setValues({ values, ...values });
              handlers.handelRemove(1);
            }}
          ></i>
        </>
      )}
      {/* {JSON.stringify(props.sku)} */}
    </>
  );
};

export default Wishlist;
