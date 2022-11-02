import React from "react";
import "./chckout.css";
import {
  Typography,
  Grid,
  Button,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import "../../components/Checkout/Cart.css";
import "./chckout.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Addressform from "./addressDetails/addressForm";
import ProductList from "./orderSummary/productList";
import LoginRegisterIndex from "./loginRegister";
import { withStyles } from "@material-ui/core/styles";
import PaymentIndex from "./paymentOption/paymentindex";
import styles from "../Checkout/loginRegister/style";
import CartCard from "../../components/Checkout/CartCard";
import { CartContext, ProductDetailContext } from "../../context";
import cart from "../../mappers/cart";
import { CheckForCod } from "queries/productdetail";
import { useCheckForCod } from "hooks/CheckForCodHook";
import Header from "components/SilverComponents/Header";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { withRouter } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import axios from "axios";
import { API_URL } from "config";
import { COUNTRIES } from "queries/home";

var adres = {};
var variab = {};
const CartCardCheck = (props) => {
  const {
    data: CodData,
    makeRequestCod,
  } = useCheckForCod(CheckForCod, () => {}, {});
  let {
    CartCtx: { setCartFilters },
  } = React.useContext(CartContext);
  const [countries,setCountries] = React.useState([])

  React.useEffect(()=>{
    axios
    .post(
      `${API_URL}/graphql`,
      JSON.stringify({
        query: COUNTRIES
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      let main = res?.data?.data?.allMasterCountries?.nodes;
      if(main.length > 0){
        setCountries(main)
      }
     
    })
    .catch((err) => console.log(err));
  },[])

  return (
    <Component
      {...props}
      CodData={CodData}
      makeRequestCod={makeRequestCod}
      setCartFilters={setCartFilters}
      isdatafromstate={props.isdatafromstate}
      countries={countries}
    />
  );
};

var obj_values = {};
class Component extends React.Component {
  state = {
    expanded:
      "panel" +
      (localStorage.getItem("panel") ? localStorage.getItem("panel") : 1),

    mailId: null,
    adres_details: null,
    isActive: false,
    Index: null,
  };
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.fbq("track", "PageView");
    ReactPixel.track("InitiateCheckout");
  }
  googleTagManager(data, step, option) {
    let gData = [];
    let TData = data;

    TData.map((l) => {
      let data = {
        name: l?.prdheader,
        id: l?.skuId,
        price: l?.dataCard1[0].offerPrice,
        category: l?.productType,
        quantity: l?.qty ?? 1,
      };
      gData.push(data);
      return 0;
    });
    const tagManagerArgs = {
      gtmId: "GTM-PW3ZXSF",
      event: "addToCart",
      dataLayer: {
        ecommerce: {
          checkout: {
            actionField: { step: step - 1, option: option },
            products: gData,
          },
        },
      },
    };

    TagManager.initialize(tagManagerArgs);
  }
  handleChange = (panel) => (event) => {
    if (panel === 2) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    if (panel === 1) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    const { expanded } = this.state;
    if (
      (localStorage.getItem("bil_isactive") ||
        localStorage.getItem("ship_isactive")) &&
      adres.value &&
      adres.value.pincode &&
      adres.value.pincode.length > 2 &&
      expanded === "panel" + panel
    ) {
      this.setState({
        expanded: "panel" + 3,
      });
    } else {
      if (expanded > "panel" + panel) {
        this.setState({
          expanded: "panel" + panel,
        });
      }
      if (
        (expanded === "panel3" || expanded === "panel4") &&
        "panel" + panel === "panel2"
      ) {
        localStorage.removeItem("bil_isactive");
        localStorage.removeItem("ship_isactive");
        localStorage.removeItem("select_addres");
      }
    }
    if (Object.keys(adres.value).length <= 0) {
      if (panel === 1) {
        return localStorage.setItem("panel", 1);
      }
      if (panel === 2) {
        return localStorage.setItem("panel", 2);
      }
      localStorage.setItem("panel", 1);
    }
  };

  changePanel = (panel, adres_detail) => {
    if (panel === 2) {
      this.googleTagManager(this.props.data, panel, "Login");
    }

    if (panel === 3) {
      this.googleTagManager(this.props.data, panel, "Address");
    }
    if (panel === 4) {
      this.googleTagManager(this.props.data, panel, "Order Summery");
    }

    if (panel === 2) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      obj_values["adres_details"] = {};
      localStorage.removeItem("select_addres");
    }
    if (panel === 1) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    localStorage.setItem("panel", panel);
    obj_values["adres_details"] = adres_detail;
    this.setState({
      expanded: "panel" + panel,
      expandedlimit: panel,
    });

    if (Object.keys(adres.value).length <= 0 && obj_values.length <= 0) {
      if (panel === 1) {
        return localStorage.setItem("panel", 1);
      }
      if (panel === 2) {
        return localStorage.setItem("panel", 2);
      }
      localStorage.setItem("panel", 1);
    }
  };
  pincodeapi = () => {
    var obj_user = {};
    let user_id = localStorage.getItem("user_id")
      ? localStorage.getItem("user_id")
      : "";
    this.props.makeRequestCod(variab);
    obj_user["user_id"] = user_id;

    this.changePanel(3);
  };

  render() {
    const { expanded } = this.state;
    const { data } = this.props;
    // const { breadcrumsdata, cartsubdata } = this.props.data;
    // let email = localStorage.getItem("email")
    //   ? localStorage.getItem("email")
    //   : "";
    variab["pincode"] = adres.value && adres.value.pincode;

    adres["value"] = localStorage.getItem("select_addres")
      ? JSON.parse(localStorage.getItem("select_addres"))
      : {};

    const enquireLink = () => {
      let ProductIsActiveUrl;
      this.props.data.map((val) => {
        if (val?.isActive === false) {
          ProductIsActiveUrl = val.skuUrl;
        }
        return 0;
      });
      window.open(
        `https://wa.me/919952625252?text=Hi - ${
          window.location.hostname + "/" + ProductIsActiveUrl ?? ""
        }`
      );
    };

    let ProductIsActive = true;
    this.props.data.map((val) => {
      if (val?.isActive === false) {
        ProductIsActive = false;
      }
      return 0;
    });
    return (
      <Grid>
        <Header wishlist={this.props.wishlistdata} isFlag={expanded === "panel4" ? true : false}/>

        <Hidden smDown>
          <Grid container style={{ height: "100vh", marginTop: "-20px",overflowX:"hidden" }}>
            <Grid item container xs={6} style={{ backgroundColor: "#E6E7E8" }}>
              <div style={{ width: "100%", marginLeft: 30 }}>
                <div className="">
                  <div className="">
                    <div
                      className="accordian-item"
                      style={{
                        paddingTop: "20px",
                        borderBottom: "1px solid #6D6E71",
                      }}
                    >
                      <div
                        className="accordion-title-check"
                        onClick={this.handleChange(1)}
                      >
                        <div className="accordion-title2-check">{`1. LOGIN`}</div>
                        <div style={{ cursor: "pointer" }}>
                          {expanded === "panel1" ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </div>
                      </div>
                      {expanded === "panel1" ? (
                        <div className="" style={{ margin: 10 }}>
                          <LoginRegisterIndex changePanel={this.changePanel} />
                        </div>
                      ) : null}
                    </div>
                    <div
                      className="accordian-item"
                      style={{
                        paddingTop: "20px",
                        borderBottom: "1px solid #6D6E71",
                      }}
                    >
                      <div
                        className="accordion-title-check"
                        onClick={this.handleChange(2)}
                      >
                        <div className="accordion-title2-check">{`2. ADD A GIFT MESSAGE`}</div>
                        <div style={{ cursor: "pointer" }}>
                          {expanded === "panel2" ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </div>
                      </div>
                      {expanded === "panel2" ? (
                        <div className="" style={{ margin: 10 }}>
                          <ProductList
                            onClickgift={() => this.pincodeapi()}
                            check={true}
                          />
                          <Button
                            onClick={() => this.pincodeapi()}
                            className="summaryOrder-pay-btn-check"
                            style={{ width: "50%", marginTop: 10 }}
                          >
                            Continue to Delivery Information
                          </Button>
                        </div>
                      ) : null}
                    </div>
                    <div
                      className="accordian-item"
                      style={{
                        paddingTop: "20px",
                        borderBottom: "1px solid #6D6E71",
                      }}
                    >
                      <div
                        className="accordion-title-check"
                        onClick={this.handleChange(3)}
                      >
                        <div className="accordion-title2-check">{`3. DELIVERY/PICKUP INFORMATION`}</div>
                        <div style={{ cursor: "pointer" }}>
                          {expanded === "panel3" ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </div>
                      </div>
                      {expanded === "panel3" ? (
                        <div className="" style={{ margin: 10 }}>
                          <Addressform
                            changePanel={this.changePanel}
                            isCheck={true}
                            countries={this.props.countries}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div
                      className="accordian-item"
                      style={{
                        paddingTop: "20px",
                        borderBottom: "1px solid #6D6E71",
                      }}
                    >
                      <div
                        className="accordion-title-check"
                        onClick={this.handleChange(4)}
                      >
                        <div className="accordion-title2-check">{`4. PAYMENT METHOD`}</div>
                        <div style={{ cursor: "pointer" }}>
                          {expanded === "panel4" ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </div>
                      </div>
                      {expanded === "panel4" ? (
                        <div className="" style={{ margin: 10 }}>
                          <PaymentIndex
                            data={data}
                            CodData={this.props.CodData}
                          />
                          <div style={{ marginTop: 10, marginLeft: "-20px" }}>
                            <Addressform
                              changePanel={this.changePanel}
                              isCheck={true}
                              countries={this.props.countries}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <Grid item container style={{ padding: 20,display:"flex",justifyContent:"space-evenly" }}>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginLeft:"15px",
                    padding:7
                  }}
                >
                  <ArrowLeftIcon fontSize="small" />

                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #f14880",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/stylori")}
                    >
                      Stylori
                    </span>
                  </div>
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft:"15px",
                    padding:7
                  }}
                >
                  <ArrowLeftIcon fontSize="small" />
                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #06ab9f",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/styloriSilver")}
                    >
                      Stylori Silver
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={6}>
              <Grid item xs={12} lg={12}>
                <Grid container>
                  <Grid xs={12} lg={7} />
                </Grid>
                <br />
                <Typography className="checkoutSummary">
                  Order Summary
                </Typography>
                <CartCard
                  data={data}
                  isStateFilterContextQty={this.props.isdatafromstate}
                  isdatafromstate={this.props.isdatafromstate}
                  checkout={true}
                />

                <Hidden smDown>
                  <Grid container>
                    <Grid xs={12} lg={7} />
                    <Grid xs={12} lg={4}>
                      <div
                        style={{ float: "right", marginBottom: "5px" }}
                      ></div>
                    </Grid>
                  </Grid>
                  <br />
                </Hidden>
              </Grid>

              <Hidden mdUp>
                <Grid container style={{ marginTop: "10px" }}>
                  <Grid xs={12} lg={7} />
                  <Grid xs={12} lg={4}>
                    <div style={{ float: "right", marginBottom: "5px" }}>
                      {ProductIsActive ? (
                        <Button
                          onClick={() => this.pincodeapi()}
                          className="summaryOrder-pay-btn"
                        >
                          Continue to Pay
                        </Button>
                      ) : (
                        <Button
                          className="summaryOrder-pay-btn"
                          onClick={enquireLink}
                        >
                          Enquire Now
                        </Button>
                      )}
                    </div>
                  </Grid>
                </Grid>
                <br />
              </Hidden>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item container xs={12}>
              <Grid item xs={12} lg={12} style={{ marginTop: 30 }}>
                <Accordion
                  defaultExpanded
                  elevation={3}
                  style={{
                    border: "0px",
                    outline: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div>
                      <Typography noWrap className="checkoutSummary_mobile">
                        Hide Order Summary
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ display: "block", marginTop: "-70px" }}
                  >
                    <CartCard
                      data={data}
                      isStateFilterContextQty={this.props.isdatafromstate}
                      isdatafromstate={this.props.isdatafromstate}
                      checkout={true}
                    />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
            <Grid item container xs={12} style={{ backgroundColor: "#E6E7E8" }}>
              <div style={{ width: "100%" }}>
                <div className="">
                  <div className="">   
                      {expanded === "panel1" ? (
                        <div className="" style={{ margin: 10 }}>
                          <div className="accordion-title2-check">{`1. LOGIN`}</div>
                          <LoginRegisterIndex changePanel={this.changePanel} />
                        </div>
                      ) : null}
                  
                     
                      {expanded === "panel2" ? (
                        <div className="" style={{ margin: 10 }}>
                           <div
                            className="accordion-title-check"
                            >
                               <div className="accordion-title2-check">{`2. ADD A GIFT MESSAGE`}</div>
                         </div>
                          <ProductList
                            onClickgift={() => this.pincodeapi()}
                            check={true}
                          />
                          <Button
                            onClick={() => this.pincodeapi()}
                            className="summaryOrder-pay-btn-check"
                            style={{ width: "100%", marginTop: 10 }}
                            fullWidth={true}
                          >
                            Continue to Delivery Information
                          </Button>
                        </div>
                      ) : null}
                   
                   
                      {expanded === "panel3" ? (
                        <div className="" style={{ margin: 10 }}>
                            <div
                        className="accordion-title-check"
                        >
                        <div className="accordion-title2-check">{`3. DELIVERY/PICKUP INFORMATION`}</div>
                      </div>
                          <Addressform
                            changePanel={this.changePanel}
                            isCheck={true}
                            countries={this.props.countries}
                          />
                        </div>
                      ) : null}
                 
                    
                      
                      {expanded === "panel4" ? (
                        <div className="" style={{ margin: 10 }}>
                        <div className="accordion-title2-check">{`4. PAYMENT METHOD`}</div>
                          <PaymentIndex
                            data={data}
                            CodData={this.props.CodData}
                          />
                          <div style={{ marginTop: 10, marginLeft: "-20px" }}>
                            <Addressform
                              changePanel={this.changePanel}
                              isCheck={true}
                              countries={this.props.countries}
                            />
                          </div>
                        </div>
                      ) : null}
                
                  </div>
                </div>
              </div>
              <Grid item container spacing={2} style={{padding:10}}>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <ArrowLeftIcon fontSize="small" />

                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #f14880",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/stylori")}
                    >
                      Stylori
                    </span>
                  </div>
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowLeftIcon fontSize="small" />
                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #06ab9f",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/styloriSilver")}
                    >
                      Stylori Silver
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    );
  }
}

const Components = (props) => {
  let {
    CartCtx: { data, loading, error, allorderdata, wishlistdata },
  } = React.useContext(CartContext);

  const {
    ProductDetailCtx: { filters }
  } = React.useContext(ProductDetailContext);

  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  const cartValueEmpty = () => {
    alert("Your cart is empty");
    props.history.push("/jewellery");
  };
  if (
    Object.keys(data).length === 0 ||
    data.data.allTransSkuLists.nodes.length === 0
  )
    content = <div className="overall-loader">{/* {cartValueEmpty() */}</div>;
  else
    content = (
      <CartCardCheck
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        isdatafromstate={filters.quantity}
      />
    );

  if (Object.keys(data).length === 0 && data.constructor === Object)
    content = <div className="overall-loader"> {/* {cartValueEmpty()} */}</div>;
  else if (
    Object.keys(data).length > 0 &&
    data.constructor === Object &&
    data.data &&
    data.data.allTransSkuLists &&
    data.data.allTransSkuLists.nodes &&
    data.data.allTransSkuLists.nodes.length === 0
  ) {
    content = <div className="overall-loader"> {cartValueEmpty} </div>;
  } else {
    content = (
      <CartCardCheck
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        isdatafromstate={filters.quantity}
      />
    );
  }
  return content;
};

export default withRouter(withStyles(styles)(Components));
