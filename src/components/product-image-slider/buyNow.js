import {
  Button,
  Hidden,
  Container,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./product-images.css";
import ProductPrice from "./productPrice";
import PriceTabs from "./priceTabs";
import PropTypes from "prop-types";
import Buynowbutton from "../Buynow/buynowbutton";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import { NavLink } from "react-router-dom";
import { ProductDetailContext } from "context/ProductDetailContext";
import { useCheckForCod } from "hooks/CheckForCodHook";
import { CheckForCod } from "queries/productdetail";
import { CartContext } from "context";
import { withRouter } from "react-router";
import CommenDialog from "../Common/Dialogmodel";
import Buynowfixed from "components/SilverComponents/ProductDetail/buynowfixed";
import SilverProductPrice from "./silverProductPrice";

const inputsearch = (
  props,
  state,
  handleChanges,
  handleCodChange,
  customstylingsmallscreen
) => {
  const { data, isSilver } = props;
  const { classes } = props;

  // const [] = React.useState()

  return (
    <div
      className={isSilver ? classes.searchCheckSilver : classes.searchCheck}
      style={{}}
    >
      {data[0].ProductContactNum.map((val) => (
        <Grid
          container
          spacing={12}
          className={isSilver ? classes.shadowSilver : classes.shadow}
          item
          xs={12}
        >
          <Grid item xs={isSilver ? 6 : 7} lg={4} sm={7}>
            {/* <input
                            placeholder='&#xf041; &nbsp; Enter Pin Code'
                            className='buynow-search'
                            type="text"
                            value={state.values}
                            onChange={(event) => { handleChanges(event) }}
                            onKeyPress={(e) => { if (!(e.which >= 48 && e.which <= 57)) e.preventDefault(); }}
                        /> */}
            <input
              onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
              type="tel"
              placeholder="Enter Pincode"
              maxLength={6}
              className={`buynow-search ${isSilver ? `${'pincode-cust-silver'} ${classes.rating__}` : 'pincode-cust'}`}
              value={state.values}
              onChange={(event) => {
                handleChanges(event);
              }}
              onKeyPress={(e) => {
                if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
              }}
            />

          </Grid>
          <Grid item xs={isSilver ? 5 : 5} lg={3} sm={5}>
            <Button
              style={{ color: "#fff", marginLeft: props.isSilver ? 8 : 0 }}
              className={
                state.pincodeNotFound ||
                state.CheckForCodtitle === "COD Not Available"
                  ? "pincodeNotFound"
                  : state.CheckForCodtitle === "COD is Available"
                  ? "selectedGreen"
                  : props.isSilver
                  ? customstylingsmallscreen
                    ? classes.searchButtonSilver2
                    : classes.searchButtonSilver
                  : "search-button"
              }
              onClick={() => {
                handleCodChange();
              }}
            >
              {state.pincodeNotFound ? (
                <>
                  <i
                    class="fa fa-close"
                    style={{ paddingRight: "3px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  Pincode not found
                </>
              ) : state.CheckForCodtitle === "COD Not Available" ? (
                <>
                  <i
                    class="fa fa-close"
                    style={{ paddingRight: "3px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  COD Not Available
                </>
              ) : state.CheckForCodtitle === "COD is Available" ? (
                <>
                  <i
                    class="fa fa-check"
                    style={{ paddingRight: "3px" }}
                    aria-hidden="true"
                  ></i>
                  {state.CheckForCodtitle}
                </>
              ) : (
                state.CheckForCodtitle
              )}
            </Button>
          </Grid>

          {!props.isSilver && (
            <Hidden smDown>
              <Grid
                container
                item
                justify="center"
                xs={12}
                sm={12}
                lg={5}
                className="content"
                style={{ margin: "auto" }}
              >
                <b className={`ships-by ${classes.normalfonts}`}>
                  <span
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      display: "flex",
                      alignContent: "center",
                    }}
                  >
                    <i style={{ fontSize: "20px" }} class="fa fa-truck"></i>
                    &nbsp;&nbsp;{val.shipby}
                  </span>
                </b>
              </Grid>
            </Hidden>
          )}
          {/* <label style={{ fontWeight: 'bold', color: 'rgba(185, 74, 72, 1)' }}>{(state.isRequired && 'Please fill out this field') || (state.pincodeNotFound && 'Pincode not found')}</label> */}
        </Grid>
      ))}
    </div>
  );
};

const Buydetails = (
  props,
  state,
  handleChanges,
  handleCodChange,
  canceldeletechecklist,
  deletechecklists,
  handleLocalStorage
) => {
  const { data } = props;
  const { classes } = props;

  return (
    <div>
      {data[0].ProductContactNum.map((val) => (
        <>
          <Grid container spacing={12} style={{ padding: "0 10px" }}>
            <Grid item xs={12} lg={4} style={{}}>
              {/* <NavLink to="/cart" style={{ textDecoration: 'none' }} onClick={handleLocalStorage.bind(this)}> */}
              <div onClick={handleLocalStorage.bind(this)}>
                <Buynowbutton
                  sku={data[0].skuId}
                  class={`buynow-button ${classes.buttons}`}
                  button="buynow-btn-cont"
                />
              </div>
              {/* </NavLink> */}
              <CommenDialog
                isOpen={state.modelOpen}
                content={`Verify selected product details before proceeding`}
                handleClose={canceldeletechecklist}
                handleSuccess={deletechecklists}
                negativeBtn="No"
                positiveBtn="Yes"
                title="Confirmation"
              />
            </Grid>

            <Grid
              item
              container
              alignContent="center"
              alignItems="center"
              xs={12}
              lg={8}
              style={{ padding: "0px 0px 0px 25px" }}
            >
              <Grid>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  className={`buy-subheaders nd-hlp ${classes.normalfonts}`}
                  style={{ letterSpacing: 2 }}
                >
                  Need Help ?
                </Grid>
              </Grid>
              <Grid container>
                <Grid item className={`buy-subheaders ${classes.normalfonts}`}>
                  <Typography>
                    <i class="fa fa-phone overall-icons" aria-hidden="true"></i>
                    &nbsp;
                  </Typography>
                  <Typography className={classes.TypoListed}>
                    {val.telephone}
                  </Typography>
                </Grid>

                <Grid item className={`buy-subheaders ${classes.normalfonts}`}>
                  <Typography>
                    <i
                      class="fa fa-whatsapp overall-icons"
                      aria-hidden="true"
                    ></i>
                    &nbsp;
                  </Typography>
                  <Typography className={classes.TypoListed}>
                    {val.phonenum}
                  </Typography>
                </Grid>

                <Grid
                  item
                  style={{ cursor: "pointer !important" }}
                  className={`buy-subheaders ${classes.normalfonts}`}
                >
                  <Typography>
                    <i
                      class="fa fa-comments-o overall-icons"
                      aria-hidden="true"
                    ></i>
                    &nbsp;
                  </Typography>
                  <Typography className={classes.TypoListed}>
                    {val.chat}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {inputsearch(props, state, handleChanges, handleCodChange)}
        </>
      ))}
    </div>
  );
};

// SILVER PRODUCT DETAIL PAGE

const BuydetailsSilverdetailpage = (
  props,
  state,
  handleChanges,
  handleCodChange,
  canceldeletechecklist,
  deletechecklists,
  handleLocalStorage
) => {
  const { data, isSilver } = props;
  const { classes } = props;

  return (
    <div>
      {data[0].ProductContactNum.map((val) => (
        <>
          <Grid container>
            <Grid item xs={12}>
              {inputsearch(props, state, handleChanges, handleCodChange)}
            </Grid>
          </Grid>
          <Grid container spacing={12} style={{ padding: "0 10px" }}>
            <Grid item xs={12} lg={4} style={{}}>
              {/* <NavLink to="/cart" style={{ textDecoration: 'none' }} onClick={handleLocalStorage.bind(this)}> */}
              {/* <div onClick={handleLocalStorage.bind(this)}>
                                <Buynowbutton sku={data[0].skuId} class={`buynow-button ${classes.buttons}`} button='buynow-btn-cont' />
                            </div> */}
              {/* </NavLink> */}
              {/* <CommenDialog isOpen={state.modelOpen} content={`Verify selected product details before proceeding`} handleClose={canceldeletechecklist} handleSuccess={deletechecklists} negativeBtn="No" positiveBtn="Yes" title="Confirmation" /> */}
            </Grid>

            <Grid
              item
              container
              alignContent="center"
              alignItems="center"
              xs={12}
              lg={12}
              style={{ padding: "20px 0px 0px 0px" }}
            >
              <Grid>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  className={`buy-subheaders nd-hlp ${classes.normalfonts} ${classes.normalFontsColor2}`}
                  style={{ paddingBottom: "5px", letterSpacing: "2px" }}
                >
                  <b>NEED HELP ?</b>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  lg={3}
                  xs={12}
                  className={`buy-subheaders ${classes.normalfonts} ${isSilver ? classes.normalfontsSilvercontact : ''}`}
                >
                  <Typography>
                    <i class="fa fa-phone overall-icons" aria-hidden="true"></i>
                    &nbsp;
                  </Typography>
                  <Typography className={classes.TypoListed}>
                    {val.telephone}
                  </Typography>
                </Grid>

                <Grid
                  container
                  item
                  lg={3}
                  xs={12}
                  justify="flex-start"
                  className={`buy-subheaders ${classes.normalfonts} ${isSilver ? classes.normalfontsSilvercontact : ''}`}
                >
                  <Typography>
                    <i
                      class="fa fa-whatsapp overall-icons"
                      aria-hidden="true"
                    ></i>
                    &nbsp;
                  </Typography>
                  <Typography className={classes.TypoListed}>
                    {val.phonenum}
                  </Typography>
                </Grid>

                <Grid
                  item
                  lg={12}
                  xs={12}
                  style={{ cursor: "pointer !important" }}
                  className={`buy-subheaders ${classes.normalfonts} ${
                    isSilver ? classes.chatNowSilverGrid : ""
                  }`}
                >
                  {!isSilver && (
                    <Typography>
                      <i
                        class="fa fa-comments-o overall-icons"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                    </Typography>
                  )}
                  <Typography
                    className={`${classes.TypoListed} ${
                      isSilver ? classes.chatNowSilver : ""
                    }`}
                  >
                    {isSilver ? `${val.chat} NOW` : val.chat}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      ))}
    </div>
  );
};

//

const PriceBuynow = (props) => {
  const { loading, error, data: CodData, makeRequestCod } = useCheckForCod(
    CheckForCod,
    () => {},
    {}
  );
  const {
    ProductDetailCtx: { filters },
    setFilters,
  } = React.useContext(ProductDetailContext);
  const { setCartFilters } = React.useContext(CartContext);

  return (
    <Component
      setCartFilters={setCartFilters}
      setFilters={setFilters}
      filters={filters}
      quantity={filters.quantity}
      makeRequestCod={makeRequestCod}
      CodData={CodData}
      {...props}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showimage:
        this.props &&
        this.props.data &&
        this.props.data.length > 0 &&
        this.props.data[0] &&
        this.props.data[0].fadeImages &&
        this.props.data[0].fadeImages.arrOfurls &&
        this.props.data[0].fadeImages.arrOfurls.length > 0 &&
        this.props.data[0].fadeImages.arrOfurls[0]
          ? this.props.data[0].fadeImages.arrOfurls[0]
          : [],
      open: false,
      values: "",
      pincodeValues: {},
      CheckForCodtitle: "Check for COD",
      isRequired: false,
      pincodeNotFound: false,
      modelOpen: false,
      ringSize:
        this.props &&
        this.props.data &&
        this.props.data[0] &&
        this.props.data[0].productsDetails &&
        this.props.data[0].productsDetails[0].namedetail &&
        this.props.data[0].productsDetails[0].namedetail[3] &&
        this.props.data[0].productsDetails[0].namedetail[3].details,
    };
  }
  // valus = (valueId) => {
  //   var valus_locl = localStorage.getItem("cartDetails")
  //     ? JSON.parse(localStorage.getItem("cartDetails")).products
  //     : "";

  //   var vals;
  //   valus_locl &&
  //     valus_locl.map((val) => {
  //       const vlx = valueId && valueId;
  //       if (vlx === val.sku_id) {
  //         vals = 1;
  //         return false;
  //       } else {
  //         vals = 0;
  //       }
  //     });
  //   return vals;
  // };
   valus = (valueId) => {
        
        var valus_locl = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : ""
        
        var vals;

        if (valus_locl) {
            let productIds = valus_locl.map((val) => {
              return val.sku_id;
            });
            productIds.indexOf(valueId) > -1 ? vals= 1 : vals= 0
          }
          return vals
    }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    var variab = {};
    variab["pincode"] = this.state.values;
    if (prevProps.CodData !== this.props.CodData) {
      // Here i have handeled the "check for COD" condition because the response is not setting to the props instantly
      if (this.props.CodData.data.allPincodeMasters.nodes.length > 0) {
        if (
          this.props.data[0].price >=
            this.props.CodData.data.allPincodeMasters.nodes[0].minCartvalue ||
          this.props.data[0].price <=
            this.props.CodData.data.allPincodeMasters.nodes[0].maxCartvalue
        ) {
          this.setState({ CheckForCodtitle: "COD Not Available" });
        } else {
          this.setState({ CheckForCodtitle: "COD is Available" });
        }
      } else {
        this.setState({ pincodeNotFound: true });
      }
    }
  }

  openModel = () => {
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty: 1,
      price: this.props.data[0].offerPrice,
    });
    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        skuId: this.props.data[0].skuId,
        qty: 1,
        price: this.props.data[0].offerPrice,
      })
    );
    window.location.pathname = "/cart";
  };

  handleLocalStorage = () => {
    if (this.valus(this.props.data[0].skuId) === 1) {
      // this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })
      // sessionStorage.setItem('updatedProduct', JSON.stringify({ sku_id: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice }));
      window.location.pathname = "/cart";
    } else {
      this.setState({
        modelOpen: true,
      });
    }
  };

  canceldeletechecklist = () => {
    this.setState({
      modelOpen: false,
    });
  };

  deletechecklists = () => {
    // this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })

    // sessionStorage.setItem('updatedProduct', JSON.stringify({ sku_id: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice }));
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty:
        this.props.quantity &&
        this.props.data &&
        this.props.quantity[this.props.data[0].skuId]
          ? this.props.quantity[this.props.data[0].skuId]
          : 1,
      price: this.props.data[0].offerPrice,
    });

    const _qty =
      this.props.quantity &&
      this.props.data &&
      this.props.quantity[this.props.data[0].skuId]
        ? this.props.quantity[this.props.data[0].skuId]
        : 1;
    this.props.setFilters({
      ...this.props.filters,
      quantity: _qty,
    });
    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;

    if (!localStorageQuantity) {
      if (
        localStorageQuantity &&
        !localStorageQuantity[this.props.data[0].skuId]
      ) {
        let _obj = {};
        localStorageQuantity[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
        this.props.filters.quantity[this.props.data[0].skuId] = _qty;
      } else {
        let _obj = {};
        _obj[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(_obj));
        this.props.filters.quantity[this.props.data[0].skuId] = _qty;
      }
    } else {
      localStorageQuantity[this.props.data[0].skuId] = _qty;
      localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
      this.props.filters.quantity[this.props.data[0].skuId] =
        localStorageQuantity[this.props.data[0].skuId];
    }
    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        sku_id: this.props.data[0].skuId,
        qty:
          this.props.quantity &&
          this.props.data &&
          this.props.quantity[this.props.data[0].skuId]
            ? this.props.quantity[this.props.data[0].skuId]
            : 1,
        price: this.props.data[0].offerPrice,
      })
    );
    window.location.pathname = "/cart";

    this.setState({
      modelOpen: false,
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChanges = (e) => {
    this.setState({
      values: e.target.value,
      CheckForCodtitle: "Check for COD",
      pincodeNotFound: false,
      isRequired: false,
    });
  };
  handleCodChange = () => {
    if (this.state.values) {
      this.setState({ isRequired: false });
      var variab = {};
      variab["pincode"] = this.state.values;
      if (
        Object.entries(variab).length !== 0 &&
        variab.constructor === Object
      ) {
        this.props.makeRequestCod(variab);

        // this.setState({pincodeValues:this.props.CodData})
        // console.log('variables',variables,queryvariables,data)
        // console.info('objectdataobject', data, data[0].price> state.pincodeValues.data.allPincodeMasters.nodes[0].maxCartvalue, props.CodData)
      } else {
        return {};
      }
    } else {
      this.setState({ isRequired: true });
      // alert('Please enter the pincode')
    }
  };
  render() {
    let { showimage } = this.state;
    const { classes, data, isSilver } = this.props;

    return (
      <div>
        <Hidden smDown>
          {isSilver
            ? BuydetailsSilverdetailpage(
                this.props,
                this.state,
                this.handleChanges,
                this.handleCodChange,
                this.canceldeletechecklist,
                this.deletechecklists,
                this.handleLocalStorage
              )
            : Buydetails(
                this.props,
                this.state,
                this.handleChanges,
                this.handleCodChange,
                this.canceldeletechecklist,
                this.deletechecklists,
                this.handleLocalStorage
              )}
        </Hidden>

        <Hidden mdUp>
          <div style={{ marginTop: "10px" }}>
            {isSilver ? (
              <SilverProductPrice
                data={this.props.data}
                wishlist={this.props.wishlist}
                pincode={inputsearch}
                allProps={this.props}
                allState={this.state}
                handleChanges={this.handleChanges}
                handleCodChange={this.handleCodChange}
              />
            ) : (
              <ProductPrice
                data={this.props.data}
                wishlist={this.props.wishlist}
                isSilver={isSilver}
              />
            )}
            <PriceTabs
              data={this.props.data}
              wishlist={this.props.wishlist}
              isSilver={isSilver}
            />
            {!isSilver &&
              inputsearch(
                this.props,
                this.state,
                this.handleChanges,
                this.handleCodChange
              )}

            <Buynowfixed
              deleteComment={this.deletechecklists}
              data={this.props.data}
              onClick={this.handleLocalStorage.bind(this)}
              isSilver={isSilver}
            />
          </div>
        </Hidden>
      </div>
    );
  }
}
PriceBuynow.propTypes = {
  Buydetails: PropTypes.func,
};

export default withStyles(styles)(withRouter(PriceBuynow));
