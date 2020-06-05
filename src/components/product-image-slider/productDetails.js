import {
    Grid,
    ListItemText,
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    Hidden,
    Typography
  } from "@material-ui/core";
  import PropTypes from "prop-types";
  import React from "react";
  import "./product-images.css";
  import { withStyles } from "@material-ui/core/styles";
  import styles from "./style";
  import { isArray } from "util";
  import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
  
  class ProductDetails extends React.Component {
    state = {
      expanded: null
    };
    handleCheck = (name, val) => {

      var check = true;
      if (name === "Price Breakup") {
        //  val.map(val=>{
        if (val &&
          val.length > 0 && val[1] &&
          Number(val[1].replace("₹", "").replace(/,/g, "")) !== 0
        ) {
          check = true;
        } else check = false;
      } else {
        check = true;
      }
      return check;
    };
  
    handleGst = (name, val, gst) => {
        var check = true
        
      if (val === "Price Breakup") {
        if (name === "GST") {
            
          var _gst = gst
          // 
            .map(val => {
              if (
                val.details.length > 0 && val.details[0] && val.details[1] &&
                Number(val.details[0].replace("₹", "").replace(/,/g, "")) >
                  Number(val.details[1].replace("₹", "").replace(/,/g, ""))
              )
                return true;
            })
            .filter(val => {
              if (val) {
                return true;
              }
            });
          ;
          // alert(checked)
          if (_gst.length > 0) {
            check = true;
          } else {
            check = false;
          }
          return check
        }
        else {
            return check
        }
      }
    };
  
    productsDetails = data => {
      const { classes } = this.props;
      return (
        <div>
          <Grid container spacing={12} style={{ paddingRight: "20px" }}>
            {data &&
              data.length > 0 &&
              data[0] &&
              data[0].productsDetails &&
              data[0].productsDetails.map(valueofproductdetail => {
                return valueofproductdetail.namedetail.length === 0 ? (
                  false
                ) : (
                  <>
                    {valueofproductdetail.header !== "Price Breakup" ||
                    (valueofproductdetail.header === "Price Breakup" &&
                      valueofproductdetail.namedetail[5].name === "Total" &&
                      Number(
                        valueofproductdetail.namedetail[5].details[1]
                          .replace(/,/g, "")
                          .replace(/₹/g, "")
                      ) > 15000) ? (
                      <div
                        className="overall-boxz"
                        style={{
                          boxShadow:
                            "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
                        }}
                      >
                        <div className="overall-bo">
                          <span
                            key={valueofproductdetail.name}
                            className={`product-details ${classes.normalfonts}`}
                          >
                            {" "}
                            {valueofproductdetail.header}
                          </span>
                          <hr class="bottom-line"></hr>
                          <>
                            {valueofproductdetail.namedetail !== undefined &&
                              valueofproductdetail.namedetail.map(res => {
                                return (
                                  <>
                                    {res.name && (
                                      <span>
                                        {res.details !== null &&
                                        res.details.length === 0 ? (
                                          false
                                        ) : this.handleCheck(
                                            valueofproductdetail.header,
                                            res.details
                                          ) ? (
                                          <Grid container item xs={12}>
                                            <Grid xs={4} lg={4}>
                                              <ListItemText
                                                variant=""
                                                className={`product-subhead ${classes.normalfonts}`}
                                              >
                                                <span
                                                  style={{ fontSize: "12px" }}
                                                >
                                                  {" "}
                                                  {res.name}
                                                </span>
                                              </ListItemText>
                                            </Grid>
                                            <Grid
                                              container
                                              item
                                              xs={8}
                                              style={{ alignItems: "center" }}
                                            >
                                              {// valueofproductdetail.header === 'Price Breakup' &&
                                              isArray(res.details) ? (
                                                <ListItemText
                                                  variant=""
                                                  className={`product-subhead-list ${classes.fontgray}`}
                                                >
                                                  {res.details.map(
                                                    (Item, Index) => {
                                                      return (
                                                        <span
                                                          style={{
                                                            fontSize: "12px",
                                                            textAlign: "left"
                                                          }}
                                                        >
                                                          {" "}
                                                          {valueofproductdetail.header ===
                                                          "Price Breakup" ? (
                                                            res.name !== "GST" &&
                                                            Index === 0 &&
                                                            res.details[Index] !==
                                                              res.details[
                                                                Index + 1
                                                              ] ? (
                                                              <del>{Item}</del>
                                                            ) : Index === 0 &&
                                                             ( res.name !== "GST") || ((Index === 0 ) &&  !this.handleGst(
                                                                res.name,
                                                                valueofproductdetail.header,
                                                                valueofproductdetail.namedetail
                                                              )) ? (
                                                              ""
                                                            ) : (
                                                              Item
                                                            )
                                                          ) : (
                                                            Item
                                                          )}{" "}
                                                        </span>
                                                      );
                                                    }
                                                  )}
                                                </ListItemText>
                                              ) : (
                                                <ListItemText
                                                  variant=""
                                                  className={`product-subhead-list ${classes.fontgray}`}
                                                >
                                                  {/* {data[0].productsDetails[3].namedetail[1].length > 0} */}
                                                  {
                                                    <span
                                                      style={{
                                                        fontSize: "12px",
                                                        marginLeft: "10px"
                                                      }}
                                                    >
                                                      {" "}
                                                      {res.details}
                                                    </span>
                                                  }
                                                </ListItemText>
                                              )}
                                            </Grid>
                                          </Grid>
                                        ) : null}
                                      </span>
                                    )}
                                  </>
                                );
                              })}
                          </>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
          </Grid>
  
          <Grid container spacing={12} style={{ paddingRight: "20px" }}>
            {data[0].productsPendants.map(val => (
              <>
                <div
                  className="overall-boxz"
                  style={{
                    boxShadow:
                      "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
                  }}
                >
                  <div className="overall-bo">
                    <span
                      key={val.name}
                      className={`product-details ${classes.normalfonts}`}
                    >
                      {val.header}
                    </span>
                    {/* <hr class="bottom-line"></hr> */}
                    <Grid
                      item
                      xs={12}
                      className={`product-subhead ${classes.normalfonts}`}
                    >
                      <span style={{ fontSize: "12px" }}>
                        {val.name.join(" ")}
                      </span>
                    </Grid>
                  </div>
                </div>
              </>
            ))}
          </Grid>
        </div>
      );
    };
    mobileproductsDetails = () => {
      const { expanded } = this.state;
      const { data } = this.props;
      const { classes } = this.props;
      return (
        <div>
          <Container>
            {data[0].productsDetails.map(val => {
              return val.namedetail.length === 0 ? (
                false
              ) : (
                <>
                  {val.header !== "Price Breakup" ||
                  (val.header === "Price Breakup" &&
                    val.namedetail[5].name === "Total" &&
                    Number(
                      val.namedetail[5].details[1]
                        .replace(/,/g, "")
                        .replace(/₹/g, "")
                    ) > 15000) ? (
                    <ExpansionPanel
                      style={{
                        boxShadow:
                          "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                        margin: "12px 0px",
                        padding: "0 5px 5px 5px"
                      }}
                      expanded={expanded === val.header}
                      onChange={this.handle(val.header)}
                      key={val.name}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <div style={{ width: "100%" }}>
                          <Typography
                            className={`subtabs-smrt ${classes.normalfonts}`}
                          >
                            {val.header}
                          </Typography>
                          {/* <hr class="bottom-line border-line-"></hr> */}
                        </div>
                      </ExpansionPanelSummary>
                      <div style={{ backgroundColor: "fafafa" }}>
                        {val.namedetail !== undefined &&
                          val.namedetail.map(res =>
                            res.details !== null && res.details.length === 0 ? (
                              false
                            ) : (
                              <span>
                                {
                                  <>
                                    {" "}
                                    {this.handleCheck(val.header, res.details) ? (
                                      <Grid
                                        container
                                        item
                                        xs={12}
                                        style={{ padding: "0px 10px 0px 10px " }}
                                      >
                                        <Grid xs={4} lg={4}>
                                          <ListItemText
                                            variant=""
                                            className={`product-subhead ${classes.normalfonts}`}
                                          >
                                            <span style={{ fontSize: "12px" }}>
                                              {" "}
                                              {res.name}
                                            </span>
                                          </ListItemText>
                                        </Grid>
                                        <Grid
                                          container
                                          item
                                          xs={8}
                                          style={{ alignItems: "center" }}
                                        >
                                          {isArray(res.details) ? (
                                            <ListItemText
                                              variant=""
                                              className={`product-subhead-list ${classes.fontgray}`}
                                            >
                                              {res.details.map((Item, Index) => {
                                                return (
                                                  <span
                                                    style={{
                                                      fontSize: "12px",
                                                      textAlign: "left"
                                                    }}
                                                  >
                                                    {" "}
                                                    {val.header ===
                                                    "Price Breakup" ? (
                                                      res.name !== "GST" &&
                                                      Index === 0 &&
                                                      res.details[Index] !==
                                                        res.details[Index + 1] ? (
                                                        <del>{Item}</del>
                                                      ) : Index === 0 &&
                                                      ( res.name !== "GST") || ((Index === 0 ) &&  !this.handleGst(
                                                         res.name,
                                                         val.header,
                                                         val.namedetail
                                                       )) ? (
                                                        ""
                                                      ) : (
                                                        Item
                                                      )
                                                    ) : (
                                                      Item
                                                    )}{" "}
                                                  </span>
                                                );
                                              })}
                                            </ListItemText>
                                          ) : (
                                            <ListItemText
                                              variant=""
                                              className={`product-subhead-list ${classes.fontgray}`}
                                            >
                                              <span
                                                style={{
                                                  fontSize: "12px",
                                                  marginLeft: "10px"
                                                }}
                                              >
                                                {" "}
                                                {res.details}
                                              </span>
                                            </ListItemText>
                                          )}
                                        </Grid>
                                      </Grid>
                                    ) : null}
                                  </>
                                }
                              </span>
                            )
                          )}
                      </div>
                    </ExpansionPanel>
                  ) : null}
                </>
              );
            })}
  
            {data[0].productsPendants.map(val => (
              <div>
                <ExpansionPanel
                  style={{
                    boxShadow:
                      " 0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                    margin: "12px 0px",
                    padding: "0 5px 5px 5px"
                  }}
                  expanded={expanded === "panel"}
                  onChange={this.handle("panel")}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div style={{ width: "100%" }}>
                      <Typography
                        className={`product-details-smrt ${classes.normalfonts}`}
                      >
                        {val.header}
                      </Typography>
                      {/* <hr class="bottom-line border-line-"></hr> */}
                    </div>
                  </ExpansionPanelSummary>
  
                  <div
                    style={{ padding: "10px", backgroundColor: "antiquewhite" }}
                  >
                    <Grid container spacing={12}>
                      <Grid
                        item
                        xs={12}
                        className={`product-subhead ${classes.normalfonts}`}
                      >
                        <span style={{ fontSize: "12px" }}>
                          {val.name.join(" ")}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                </ExpansionPanel>
              </div>
            ))}
          </Container>
        </div>
      );
    };
    handle = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false
      });
    };
    render() {
      const { data } = this.props;
      return (
        <div>
          <Hidden smDown>{this.productsDetails(data)}</Hidden>
  
          <Hidden mdUp>{this.mobileproductsDetails()}</Hidden>
        </div>
      );
    }
  }
  ProductDetails.propTypes = {
    productsDetails: PropTypes.func,
    mobileproductsDetails: PropTypes.func,
    handle: PropTypes.func
  };
  export default withStyles(styles)(ProductDetails);
  
