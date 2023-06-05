import React, { useEffect, useState } from "react";
import frequently_Style from "./style";
import InfoIcon from "@material-ui/icons/Info";
import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import { CustomizedCheckbox } from "components/checkbox";
import axios from "axios";
import { API_URL } from "config";
import { CDN_URL } from "config";
import CurrencyConversion from "utils/CurrencyConversion";
import { SnackBar } from "components/snackbarAlert/SnackBar";
import "./index.css";

export default function FrequentlyBrought(props) {
  const { offer = "(25% offer on offer)", price = "$ 14 751" } = props;
  const classes = frequently_Style();
  const [open, SetOpen] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState();
  const [button, setButton] = useState("Add to Cart");
  let user_ids = localStorage.getItem("user_id") ?? "";
  let car_id = JSON.parse(localStorage.getItem("cart_id"));
  let cartDetails = JSON.parse(localStorage.getItem("cartDetails"));

  useEffect(() => {
    const products = cartDetails?.products?.map((val) => val?.sku_id);
    if (products?.includes(props?.data?.[0]?.skuId)) {
      setButton("In Cart");
    }
  }, []);

  // Handle Combo Click
  const handleAddComboCart = () => {
    if (localStorage.getItem("user_id") === null) {
      const addedCombo = state?.comboProduct?.filter(
        (val) => val?.product_id !== props?.productId && val?.isChecked === true
      );
      const comboFromLocal = localStorage.getItem("comboProducts");
      let toSessionStorageCombo = [];
      let guestComboCheckOut = [];
      const guestCombo = localStorage.getItem("guestComboCheckOut");
      if (guestCombo) {
        guestComboCheckOut = JSON.parse(guestCombo);
      }
      const combo_products = {
        main_product: props?.productId,
        combo_products: addedCombo?.map((val) => {
          return { product_id: val?.product_id };
        }),
      };
      guestComboCheckOut.push(combo_products);
      localStorage.setItem(
        "guestComboCheckOut",
        JSON.stringify(guestComboCheckOut)
      );
      if (!comboFromLocal) {
        toSessionStorageCombo = state?.comboProduct?.map(
          (val) => val?.generated_sku
        );
      } else {
        const newlyAdded = state?.comboProduct?.map(
          (val) => val?.generated_sku
        );
        const oldCombo = JSON.parse(comboFromLocal);
        toSessionStorageCombo = [...oldCombo, ...newlyAdded];
      }
      const comboProductstoApi = localStorage.getItem("comboProductstoApi");
      let totalCombo = {};
      if (!comboProductstoApi) {
        totalCombo = {
          combo_products: {
            [props?.productId]: addedCombo?.map((val) => {
              return {
                product_id: val?.product_id,
              };
            }),
          },
          products: [],
        };
      } else {
        debugger;
        const parsedComboApi = JSON.parse(comboProductstoApi);
        parsedComboApi.combo_products[props?.productId] = addedCombo?.map(
          (val) => {
            return {
              product_id: val?.product_id,
            };
          }
        );
        totalCombo = parsedComboApi;
      }

      localStorage.setItem(
        "comboProducts",
        JSON.stringify(toSessionStorageCombo)
      );
      localStorage.setItem("comboProductstoApi", JSON.stringify(totalCombo));
      window.location.pathname = "/cart";
      // console.log("totalCombo",totalCombo);
    } else {
      if (button === "Add to Cart") {
        const addedCombo = state?.comboProduct?.filter(
          (val) =>
            val?.product_id !== props?.productId && val?.isChecked === true
        );
        const combo_products = {
          main_product: props?.productId,
          combo_products: addedCombo?.map((val) => {
            return { product_id: val?.product_id };
          }),
        };
        sessionStorage.setItem("comboProducts", JSON.stringify(combo_products));
        const params = {
          cart_id: car_id?.cart_id,
          user_id: user_ids,
          combo_products: [combo_products],
          products: [],
        };
        const status = (response) => {
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
          } else {
            return Promise.reject(new Error(response.statusText));
          }
        };
        fetch(`${API_URL}/addtocart`, {
          method: "post",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart_id: car_id?.cart_id,
            user_id: user_ids,
            combo_products: [combo_products],
            products: [],
          }),
        })
          .then(status)
          .then(async function (data) {
            window.location.pathname = "/cart";
          });
      } else {
        window.location.pathname = "/cart";
      }
    }
  };

  const handleInitiateCall = async () => {
    const paramsCombo = {
      product_id: props?.productId,
    };
    await axios
      .post(`${API_URL}/fetch_combo_offer`, paramsCombo)
      .then((res) => {
        setState({
          comboProduct: res?.data?.comboProducts?.map((val, i) => {
            const productId = val?.product_images?.[0]?.imageUrl?.split("/");
            return {
              title: val?.product_name,
              img: `${CDN_URL}${productId?.[0]}/${productId?.[1]}/1000X1000/${productId?.[2]}`,
              markupPrice: val?.markup_price,
              isChecked: true,
              product_id: val?.product_id,
              generated_sku: val?.generated_sku,
            };
          }),
          comboType: res?.data?.discount_type,
          offerTypeRate: res?.data?.discount_value,
          totalPrice: res?.data?.totalPrice,
          offerPrice: Number(res?.data?.offerPrice),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // API call and initial state
  useEffect(() => {
    handleInitiateCall();
  }, []);

  // Get the data type for the display
  const getOfferTypeData = (type, value) => {
    if (type?.toLowerCase() === "percentage") {
      return `(Get ${value}% off on Combo)`;
    } else {
      return `(Get flat ${value} off on Combo)`;
    }
  };

  // check validation
  const validation = (statement) => {
    const data = state?.comboProduct?.filter(
      (val, i) => val?.isChecked === false
    );
    if (data?.length > 0 && statement === false) {
      return false;
    } else {
      return true;
    }
  };

  // handle check selection
  const handleCheck = (e, i) => {
    const validate = validation(e.target.checked);
    if (!validate) {
      setError(true);
    } else {
      const newState = state?.comboProduct;
      const changeItem = state?.comboProduct[i];
      changeItem["isChecked"] = e.target.checked;
      newState.splice(i, 1, changeItem);
      let total = state?.totalPrice;
      if (!e.target.checked) {
        total -= changeItem.markupPrice;
      } else {
        total += changeItem.markupPrice;
      }
      let offerPrice = 0;
      if (state?.comboType?.toLowerCase() === "percentage") {
        offerPrice = (total * (100 - state?.offerTypeRate)) / 100;
      } else {
        offerPrice = total - state?.offerTypeRate;
      }
      setState({
        ...state,
        comboProduct: newState,
        totalPrice: total,
        offerPrice: offerPrice,
      });
    }
  };

  // Error snack bar open
  const handleCloseError = () => {
    setError(false);
  };

  // Mobile screen checkbox switch
  const onOffer = () => {
    SetOpen(true);
  };
  const onClose = () => {
    SetOpen(false);
  };

  return (
    <Box
      className={classes.TotalFrequentBox}
      style={{ display: state ? "block" : "none" }}
    >
      <Box>
        <Typography className={classes.headTitle}>
          Frequently brought together
        </Typography>
      </Box>

      <Hidden xsDown>
        {/* <Grid container className={classes.totalImg}> */}
        {/* <Grid item md={6} sm={6}> */}
        {/* <Grid container> */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {state?.comboProduct?.map((val, index, arr) => {
            return (
              <>
                <div item style={{ display: "flex", alignItems: "center" }}>
                  <img src={val?.img} alt="" className={classes.imgSx} />
                </div>
                {val?.img.length > 2 && index !== arr.length - 1 && (
                  <Box className={classes.plusSx}>+</Box>
                )}
              </>
            );
          })}
          <div style={{ paddingLeft: "25px" }}>
            <Typography className={classes.linked}>
              {getOfferTypeData(state?.comboType, state?.offerTypeRate)}
            </Typography>
            <div className={classes.alignItems}>
              <Typography
                style={{ fontSize: "24px" }}
                className={classes.priceSx}
              >
                {CurrencyConversion(state?.offerPrice)}
              </Typography>
              <Typography
                style={{ textDecoration: "line-through" }}
                className={classes.priceSx}
              >
                {CurrencyConversion(state?.totalPrice)}
              </Typography>
            </div>
            <Button
              className={classes.added}
              variant="contained"
              onClick={() => handleAddComboCart()}
            >
              {button}
            </Button>
          </div>
        </div>
        {/* </Grid> */}
        <Box className={classes.textImg}>
          {state?.comboProduct?.map((x, index) => {
            return (
              <Box className={classes.product} key={index}>
                {index === 0 && (
                  <div className={classes.info}>
                    <InfoIcon />
                  </div>
                )}
                {index > 0 && (
                  <CustomizedCheckbox
                    checked={x?.isChecked}
                    onChange={(e) => handleCheck(e, index)}
                    className={classes.checkbox}
                  />
                )}
                <Typography
                  style={{
                    color: index !== 0 ? "rgb(6, 171, 159)" : "#000",
                  }}
                  className={classes.details}
                >
                  {index !== 0 ? `Combo Product ${index}` : "This item:"}
                </Typography>
                <Typography className={classes.details}>{x?.title}</Typography>
                <Typography className={classes.detailsPrice}>
                  {CurrencyConversion(x?.markupPrice)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {state?.comboProduct?.map((val, index, arr) => {
                return (
                  <Box className={classes.totalImagesPlus}>
                    <img src={val?.img} alt="" class="imageSmall" />
                    {val?.img.length > 2 && index !== arr.length - 1 && (
                      <span className={classes.plusSx}>+</span>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {!open && (
            <Box className={classes.discountSx}>
              <Box className={classes.buySx}>
                <Typography className={classes.buyPriceSx}>
                  Buy all three
                </Typography>
                <Typography
                  style={{ fontSize: "24px" }}
                  className={classes.priceSx}
                >
                  {CurrencyConversion(state?.offerPrice)}
                </Typography>
                <Typography
                  style={{ textDecoration: "line-through" }}
                  className={classes.priceSx}
                >
                  {CurrencyConversion(state?.totalPrice)}
                </Typography>
                <div className={classes.more}>
                  <IconButton className={classes.downsx} onClick={onOffer}>
                    <ExpandMoreIcon />
                  </IconButton>
                </div>
              </Box>
              <Box>
                <Typography
                  className={classes.linkedSx}
                  style={{ paddingBottom: "0px" }}
                >
                  {getOfferTypeData(state?.comboType, state?.offerTypeRate)}
                </Typography>
              </Box>
            </Box>
          )}

          {open && (
            <Box sx={{ position: "relative", paddingTop: "44px" }}>
              <div className={classes.close}>
                <IconButton className={classes.closedialogSx} onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </div>

              <Box className={classes.drowDown}>
                <Box>
                  {state?.comboProduct?.map((x, index) => {
                    return (
                      <Box className={classes.productSx} key={index}>
                        {index === 0 && (
                          <div className={classes.info}>
                            <InfoIcon />
                          </div>
                        )}
                        {index > 0 && (
                          <CustomizedCheckbox
                            checked={x?.isChecked}
                            onChange={(e) => handleCheck(e, index)}
                            className={classes.checkbox}
                          />
                        )}
                        <Typography
                          style={{
                            color: index !== 0 ? "rgb(6, 171, 159)" : "#000",
                            textAlign: "initial",
                          }}
                          className={classes.details}
                        >
                          {index !== 0
                            ? `Combo Product ${index}`
                            : "This item:"}{" "}
                          <span className={classes.details}>{x?.title}</span>
                          <span
                            style={{
                              color: "rgb(58,69,120)",
                              fontSize: "14px",
                              fontWeight: 600,
                            }}
                            className={classes.details}
                          >
                            {CurrencyConversion(x?.markupPrice)}
                          </span>
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
                <Box>
                  <Typography
                    className={classes.linkedSx}
                    style={{ paddingBottom: "0px" }}
                  >
                    {getOfferTypeData(state?.comboType, state?.offerTypeRate)}
                  </Typography>
                  <div
                    className={classes.alignItems}
                    style={{ justifyContent: "center", gap: "0px" }}
                  >
                    <Typography
                      className={classes.priceSx}
                      style={{ color: "#000" }}
                    >
                      Total Price
                    </Typography>
                    <Typography
                      style={{ fontSize: "24px" }}
                      className={classes.priceSx}
                    >
                      {CurrencyConversion(state?.offerPrice)}
                    </Typography>
                    <Typography
                      style={{ textDecoration: "line-through" }}
                      className={classes.priceSx}
                    >
                      {CurrencyConversion(state?.totalPrice)}
                    </Typography>
                  </div>

                  <Button className={classes.addedSx}>Add to Cart</Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Hidden>
      <SnackBar
        handleClose={handleCloseError}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classNameCloseIcon={"closeIcon"}
        classNames={"snackBar"}
        message={"Atleast one combo offer should be selected to continue"}
        open={error}
      />
    </Box>
  );
}
