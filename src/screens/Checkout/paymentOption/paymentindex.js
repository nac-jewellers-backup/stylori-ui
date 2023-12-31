import React from "react";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import "./payment.css";
import { withStyles } from '@material-ui/core/styles';
import CashonDelivey from "./cashonDelivery";
import Netbanking from "./netBanking";
import { CartContext } from "context";
import cart from "mappers/cart";
import { CheckForCod } from "queries/productdetail";
import { cartCodPincode } from "queries/pincode";
import { API_URL } from "config";
var va = {};


class PaymentIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: "NetBanking",
      disabledCOD: false,
    };
  }

  
  toggleCollapsed = (name) => {
    this.setState({ isActive: [name] })
    // if (name == "CashonDelivey" && this.state.disabledCOD) {
    //   return false;
    // } else this.setState({ isActive: [name] });
  };

  componentDidMount() { 
    if (!this.props.isCodAvailable) {
      this.setState({ isActive: "Netbanking", disabledCOD: true });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isCodAvailable !== this.props.isCodAvailable)
      if (!this.props.isCodAvailable) {
        this.setState({ isActive: "Netbanking", disabledCOD: true });
      }
  }


  render() {
    var a = 1;

    const dataCard1 = this.props.data ? this.props.data : [];

    const GreenCheckbox = withStyles({
      root: {
        color: "#D32564",
        '&$checked': {
          color: "#D32564",
          fill:"#D32564 !important",
        },
        '& .MuiSvgIcon-root':{
          color: "#D32564",
          fill:"#D32564 !important",
        }
      },
      checked: {},
    })((props) => <Checkbox color="default" {...props} />);
   

    return (
      <div className="payment-div" style={{ width: "100%" }}>
        
          <Grid container  lg={12} spacing={2} style={{display:"flex",flexDirection:"column"}}>
            <Grid item lg={6}>
                        <FormGroup column>
                          <FormControlLabel
                               control={<GreenCheckbox
                                checked={this?.state?.isActive == "Netbanking" || "CashonDelivey" || "Creditform" || "Debitform"
                                ? true
                                : false}
                                 onClick={() => this.toggleCollapsed("Netbanking")}
                                 name="Netbanking"
                             
                                  />}
                                  style={{color:"#6D6E71",backgroundColor:"#fff",marginTop:10}}
                                 label="Pay Online"
                                 />
                            {/* <FormControlLabel
                             control={
                                 <GreenCheckbox
                                   checked={ this?.state?.isActive == "CashonDelivey"
                                    ? true
                                     : false}
                                     name="CashonDelivey"  
                                     onClick={() => this.toggleCollapsed("CashonDelivey")}
                                       />
                                       }
                                       style={{color:"#6D6E71",backgroundColor:"#fff",marginTop:10}}
                                     label="Cash on Delivery (COD)"
                                        />
                                        <FormControlLabel
                             control={
                                 <GreenCheckbox
                                   checked={ this?.state?.isActive == "Creditform"
                                    ? true
                                     : false}
                                     name="Creditform"  
                                     onClick={() => this.toggleCollapsed("Creditform")}
                                       />
                                       }
                                       style={{color:"#6D6E71",backgroundColor:"#fff",marginTop:10}}
                                     label="Credit Card"
                                        />
                                         <FormControlLabel
                             control={
                                 <GreenCheckbox
                                   checked={ this?.state?.isActive == "Debitform"
                                    ? true
                                     : false}
                                     name="Debitform"  
                                     onClick={() => this.toggleCollapsed("Debitform")}
                                       />
                                       }
                                       style={{color:"#6D6E71",backgroundColor:"#fff",marginTop:10}}
                                     label="Debit Card"
                                        /> */}
                          </FormGroup>
                          
              {/* <div className="pay-index-subhed" style={{width:"100%"}}>
                <p style={{ background: this.state.isActive == "Creditform" ? "#dfdfdf" : "" }}
                                    style={{ background: "#a8a1a1" }}
                                onClick={() => this.toggleCollapsed('Creditform')}
                                >
                                    <div className="cc-icon"></div> &nbsp; Credit card </p>
                                <p style={{ background: this.state.isActive == "Debitform" ? "#dfdfdf" : "" }}
                                    onClick={() => this.toggleCollapsed('Debitform')}
                                    style={{ background: "#a8a1a1" }}

                                >
                          
                          <div className="dc-icon"></div> &nbsp; Debit card </p>
                        
                <p
                  className={
                    this?.state?.isActive == "Netbanking"
                      ? "selectedcolor"
                      : "unselected"
                  }
                  onClick={() => this.toggleCollapsed("Netbanking")}
                  style={{ background: "#dfdfdf" }}
                >
                  <div className="net-bnk-icon"></div> &nbsp; Pay Online{" "}
                </p>

                <p
                  className={`${
                    this?.state?.isActive == "CashonDelivey"
                      ? "selectedcolor"
                      : "unselected"
                  } 
                            ${
                              this.state.disabledCOD
                                ? "paragraph_onclick"
                                : null
                            }`}
                  onClick={() => this.toggleCollapsed("CashonDelivey")}
                >
                  <div className="code-icon"></div>&nbsp; Cash on Delivery (COD)
                </p>
              </div> */}
            </Grid>
            <Grid item lg={6}>
              <div
                style={{ marginTop: "20px",marginLeft:"-10px" }}
                // className="pay-index-subhed_datas "
              >

             <Netbanking total={this.props?.total}/>
                {/* {this?.state?.isActive == "Creditform" && <Netbanking />}
                {this?.state?.isActive == "Debitform" && <Netbanking />}
                {this?.state?.isActive == "Netbanking" && <Netbanking />}
                {
                  this?.state?.isActive == "CashonDelivey" && <CashonDelivey />
                } */}
              </div>
            </Grid>
          </Grid>
   

        {/* <Hidden mdUp>
          <ExpansionPanel className="respone-div div_DARK"
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head"><div className="cc-icon">&nbsp;</div>Credit card  </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Creditform data={this.props.data} dataCard1={dataCard1}/>
                        </ExpansionPanelDetails> 
                    </ExpansionPanel>

          <ExpansionPanel className="respone-div div_DARK"
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="dc-icon"></div> &nbsp; Debit card </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Debitform data={this.props.data} dataCard1={dataCard1}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel> 

          <ExpansionPanel className="respone-div">
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="py-head">
                {" "}
                <div className="net-bnk-icon"></div> &nbsp; Online Pay{" "}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ padding: "0px" }}>
              <Netbanking />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            className="respone-div"
            disabled={this.state.disabledCOD ? true : false}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="py-head">
                {" "}
                <div className="code-icon"></div>&nbsp; Cash On Delivery (COD){" "}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ padding: "0px" }}>
              <CashonDelivey data={this.props.data} dataCard1={dataCard1} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Hidden> */}
      </div>
    );
  }
}
const Components = (props) => {
  const [codAvailability, setCodAvailability] = React.useState({});
  let {
    CartCtx: { cartFilters, data, loading, error },
  } = React.useContext(CartContext);

  // const { loading:codLoading, error:codError, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});

  var cartId = cartFilters._cart_id
    ? cartFilters._cart_id
    : JSON.parse(localStorage.getItem("cart_id"))
    ? JSON.parse(localStorage.getItem("cart_id")).cart_id
    : null;
    
  const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const json = (response) => {
    return response.json();
  };
  // var codData = {}
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  if (cartId) {
    if (
      data.data.allTransSkuLists.nodes
        .map((val) => {
          return val.productListByProductId.productMaterialsByProductSku.nodes;
        })
        .flat()
        .findIndex((val) => Boolean(val.materialName === "Silver")) > -1
    ) {
      if (codAvailability !== false) {
        setCodAvailability(false);
      }
    } else {
      fetch(`${API_URL}/graphql`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: cartCodPincode,
          variables: { cartId: cartId },
        }),
      })
        .then(status)
        .then(json)
        .then((val) => {
          // alert(JSON.stringify(val))
          if (val.data.allCartAddresses.nodes.length > 0) {
            var pincode = val.data.allCartAddresses.nodes[0].pincode;
            // makeRequestCod({pincode:pincode})
            fetch(`${API_URL}/graphql`, {
              method: "post",
              // body: {query:seoUrlResult,variables:splitHiphen()}
              // body: JSON.stringify({query:seoUrlResult}),

              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query: CheckForCod,
                variables: { pincode: pincode },
              }),
            })
              .then(status)
              .then(json)
              .then((val) => {
                if (mapped && mapped.length > 0 && val) {
                  // const min_cart_value = val.data ? val.data.allPincodeMasters.nodes[0].minCartvalue : null
                  const min_cart_value = 5000;
                  const max_cart_value = val.data
                    ? val.data.allPincodeMasters.nodes[0].maxCartvalue
                    : null;
                  const data = mapped ? mapped : [];
                  var dataCard1;
                  var cart_price;

                  if (data.length > 0) {
                    function myFunc(total, num, discounted_price) {
                      discounted_price =
                        this && this.props.cartFilters.discounted_price
                          ? JSON.stringify(
                              this.props.cartFilters.discounted_price
                            )
                          : "";
                      if (discounted_price.length > 0) {
                        var a = Math.round(total + num);
                        cart_price = a - discounted_price;
                      } else {
                        cart_price = Math.round(total + num);
                      }

                      return cart_price;
                    }
                    dataCard1 =
                      data &&
                      data
                        .map((val) => {
                          return val.dataCard1[0].offerPrice;
                        })
                        .reduce(myFunc);

                    if (min_cart_value && max_cart_value) {
                      if (
                        dataCard1 >= min_cart_value &&
                        dataCard1 <= max_cart_value
                      ) {
                        // var cart_prices = cart_price;
                        setCodAvailability(true);
                        return false;
                      } else {
                        setCodAvailability(false);
                      }
                    }
                    // myFunc()
                  }
                }

                // if(Object.entries(codData).length === 0) setCodData(val)
              });
          }
        });
    }
  }

  //  stopped

  if (Object.keys(data).length === 0) {
    content = window.location.href.toLowerCase().includes("silver") ? (
      <div className="overall-loader">
        <div id="loadingsilver"></div>
      </div>
    ) : (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  } else
    content = (
      <PaymentIndex
        {...props}
        data={mapped}
        cartFilters={cartFilters}
        isCodAvailable={codAvailability}
      />
    );
  return content;
};
export default Components;
