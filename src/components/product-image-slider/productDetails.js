import {
  Grid,
  ListItemText,
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  Hidden,
  Typography,
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
    expanded: null,
  };
  handleCheck = (name, val) => {
    var check = true;
    if (name === "Price Breakup") {
      //  val.map(val=>{
      if (
        val &&
        val.length > 0 &&
        val[1] &&
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
    var check = true;

    if (val === "Price Breakup") {
      if (name === "GST") {
        var _gst = gst
          //
          .map((val) => {
            if (
              val.details.length > 0 &&
              val.details[0] &&
              val.details[1] &&
              Number(val.details[0].replace("₹", "").replace(/,/g, "")) >
                Number(val.details[1].replace("₹", "").replace(/,/g, ""))
            )
              return true;
              return 0;
          })
          ?.filter((val) => {
            if (val) {
              return true;
            }
            return 0;
          });
        // alert(checked)
        if (_gst.length > 0) {
          check = true;
        } else {
          check = false;
        }
        return check;
      } else {
        return check;
      }
    }
  };

  productsDetails = (data) => {
    const { classes, isSilver} = this.props;
    // debugger

    const _mapper =
      data && data.length > 0 && data[0] && data[0].productsDetails.length > 0
        ? data[0].productsDetails
        : [];
    const _isSilver = isSilver ? true : false;
    const _mapperChooser = _isSilver
      ? _mapper.length > 0
        ? [_mapper[0]]
        : _mapper
      : _mapper;
     

    return (
      <div>
        <Grid container spacing={12} style={{ paddingRight: "20px" }}>
          {_mapperChooser.map((valueofproductdetail) => {
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
                    className={`overall-boxz ${
                      _isSilver ? classes.overallBoxz : ""
                    }`}
                    style={{
                      boxShadow: _isSilver
                        ? "unset"
                        : "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    <div className={isSilver ? " " : "overall-bo"}>
                      {isSilver ? (
                        <>
                          <div
                            key={valueofproductdetail.name}
                            className={`product-details ${classes.normalfontsSilver}`}
                            style={{ marginBottom: 4 }}
                          >
                            {" "}
                            {this?.props?.isActive ? 
                             ""
                           :<span className={_isSilver && "pd_details"}>
                           {valueofproductdetail?.header}
                         </span>
                            }
                            
                          </div>
                         
                        </>
                      ) : (
                        <>
                          <span
                            key={valueofproductdetail.name}
                            className={`product-details ${classes.normalfonts}`}
                          >
                            {" "}
                            {valueofproductdetail?.header}
                          </span>
                          <hr class="bottom-line"></hr>
                        </>
                      )}

                      {isSilver ? (
                        <p
                          style={{
                            fontSize: "13px",
                            opacity: "0.5",
                            color: "#000",
                            lineHeight: "1.5",
                            marginTop: "0px",
                          }}
                        >
                          {/* {this?.props?.data[0]?.productDescription} */}
                        </p>
                      ) : (
                        ""
                      )}

                      <>
                        {valueofproductdetail.namedetail !== undefined &&
                          valueofproductdetail.namedetail.map((res) => {
                            return (
                              <>
                                {res.name && (
                                  <span>
                                    {res?.details ? (
                                      res?.details?.length === 0 ? (
                                        false
                                      ) : this.handleCheck(
                                          valueofproductdetail.header,
                                          res?.details
                                        ) ? (
                                        <Grid container xs={12} spacing={1}>
                                          <Grid
                                            item
                                            xs={9}
                                            lg={5}
                                            className={`${classes.margindek} ${classes.pds}`}
                                          >
                                            <ListItemText
                                              className={`product-subhead ${
                                                classes.normalfonts
                                              } ${
                                                _isSilver
                                                  ? ` ${classes.pd} ${classes.normalFontsColor}`
                                                  : ""
                                              }`}
                                            >
                                              <span
                                                style={{
                                                  fontSize: "16px",
                                                  fontWeight:700
                                                }}
                                              >
                                                {_isSilver ? (
                                                  <div
                                                    style={{}}
                                                    className={
                                                      "product-subheadsss"
                                                    }
                                                  >
                                                    {res?.name}
                                                  </div>
                                                ) : (
                                                  res?.name
                                                )}
                                              </span>
                                            </ListItemText>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={3}
                                            lg={7}
                                            style={{ alignItems: "center" }}
                                          >
                                            {
                                              // valueofproductdetail.header === 'Price Breakup' &&
                                              isArray(res.details) ? (
                                                <ListItemText
                                                  variant=""
                                                  className={`product-subhead-list ${
                                                    classes.fontgray
                                                  } ${
                                                    _isSilver
                                                      ? classes.normalFontsColor
                                                      : ""
                                                  }`}
                                                >
                                                  {res.details.map(
                                                    (Item, Index) => {
                                                      if (_isSilver) {
                                                        return (
                                                          <b>
                                                            <span
                                                              style={{
                                                                fontSize:
                                                                  "12px",
                                                                textAlign:
                                                                  "left",
                                                              }}
                                                            >
                                                              {" "}
                                                              {valueofproductdetail.header ===
                                                              "Price Breakup" ? (
                                                                res.name !==
                                                                  "GST" &&
                                                                Index === 0 &&
                                                                res.details[
                                                                  Index
                                                                ] !==
                                                                  res.details[
                                                                    Index + 1
                                                                  ] ? (
                                                                  <del>
                                                                    {Item}
                                                                  </del>
                                                                ) : (Index ===
                                                                    0 &&
                                                                    res.name !==
                                                                      "GST") ||
                                                                  (Index ===
                                                                    0 &&
                                                                    !this.handleGst(
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
                                                          </b>
                                                        );
                                                      } else {
                                                        return (
                                                          <span
                                                            style={{
                                                              fontSize: "12px",
                                                              textAlign: "left",
                                                            }}
                                                          >
                                                            {" "}
                                                            {valueofproductdetail.header ===
                                                            "Price Breakup" ? (
                                                              res.name !==
                                                                "GST" &&
                                                              Index === 0 &&
                                                              res.details[
                                                                Index
                                                              ] !==
                                                                res.details[
                                                                  Index + 1
                                                                ] ? (
                                                                <del>
                                                                  {Item}
                                                                </del>
                                                              ) : (Index ===
                                                                  0 &&
                                                                  res.name !==
                                                                    "GST") ||
                                                                (Index === 0 &&
                                                                  !this.handleGst(
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
                                                    }
                                                  )}
                                                </ListItemText>
                                              ) : (
                                                <ListItemText
                                                  variant=""
                                                  className={`product-subhead-list ${
                                                    classes.fontgray
                                                  } ${
                                                    _isSilver
                                                      ? classes.normalFontsColor
                                                      : ""
                                                  }`}
                                                >
                                                   {/* data[0].productsDetails[3].namedetail[1].length > 0  */}
                                                  {
                                                    <span
                                                      style={{
                                                        fontSize:
                                                          !_isSilver && "12px",
                                                        marginLeft: "10px",
                                                        marginTop: 0,
                                                      }}
                                                    >
                                                      {" "}
                                                      {_isSilver ? (
                                                        <span
                                                          style={{
                                                            marginTop: 0,
                                                            marginLeft: -8,
                                                            paddingLeft: -8,
                                                            fontSize: 13,
                                                          }}
                                                        >
                                                          {/* {res.details.toString()} */}

                                                          {res.details
                                                            .toString()
                                                            .includes("-")
                                                            ? res.details
                                                                .toString()
                                                                .split("-")[0]
                                                            : res.details}
                                                        </span>
                                                      ) : (
                                                        res.details
                                                      )}
                                                    </span>
                                                  }
                                                </ListItemText>
                                              )
                                            }
                                          </Grid>
                                        </Grid>
                                      ) : null
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

        {!_isSilver && (
          <Grid container spacing={12} style={{ paddingRight: "20px" }}>
            {data[0]?.productsPendants &&
              data[0]?.productsPendants?.map((val) => (
                <>
                  <div
                    className="overall-boxz"
                    style={{
                      boxShadow:
                        "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
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
        )}
      </div>
    );
  };
  withExpandCollapse = (val) => {
    const { expanded } = this.state;
    const { isSilver } = this.props;
    const { classes } = this.props;
    // const _mapper =
    //   data && data.length > 0 && data[0] && data[0].productsDetails.length > 0
    //     ? data[0].productsDetails
    //     : [];
    // const _isSilver = isSilver ? true : false;
    return (
      <>
        {val.header !== "Price Breakup" ||
        (val.header === "Price Breakup" &&
          val.namedetail[5].name === "Total" &&
          Number(
            val.namedetail[5].details[1].replace(/,/g, "").replace(/₹/g, "")
          ) > 15000) ? (
          <ExpansionPanel
            style={{
              boxShadow:
                // isSilver ? 'unset' :
                "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
              margin: "12px 0px",
              padding: "0 5px 5px 5px",
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
                <Typography className={`subtabs-smrt ${classes.normalfonts}`}>
                  {val.header}
                </Typography>
                {/* <hr class="bottom-line border-line-"></hr> */}
              </div>
            </ExpansionPanelSummary>
            <>
           
              {isSilver ? (
                <p
                  style={{
                    margin: "0px 0px 10px 0px",
                    padding: "0px 10px",
                    fontSize: "12px",
                    opacity: "0.5",
                    color: "#000",
                    lineHeight: "1.5",
                  }}
                >
                  {" "}
                  {this.props.data[0].productDescription}
                </p>
              ) : (
                ""
              )}

              <div style={{ backgroundColor: "fafafa" }}>
                {val.namedetail !== undefined &&
                  val.namedetail.map((res) =>
                    res.details !== null && res.details.length === 0 ? (
                      false
                    ) : (
                      <span>
                        {
                          <>
                            {" "}
                            {res.details &&
                            res.name &&
                            this.handleCheck(val.header, res.details) ? (
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
                                              textAlign: "left",
                                            }}
                                          >
                                            {" "}
                                            {val.header === "Price Breakup" ? (
                                              res.name !== "GST" &&
                                              Index === 0 &&
                                              res.details[Index] !==
                                                res.details[Index + 1] ? (
                                                <del>{Item}</del>
                                              ) : (Index === 0 &&
                                                  res.name !== "GST") ||
                                                (Index === 0 &&
                                                  !this.handleGst(
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
                                          marginLeft: "10px",
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
            </>
          </ExpansionPanel>
        ) : null}
      </>
    );
  };
  withoutExpandCollapse = (val) => {
    // const { expanded } = this.state;
    const { data, isSilver } = this.props;
    const { classes } = this.props;
    // const _mapper =
    //   data && data.length > 0 && data[0] && data[0].productsDetails.length > 0
    //     ? data[0].productsDetails
    //     : [];
    const _isSilver = isSilver ? true : false;
    return (
      <>
        {val.header !== "Price Breakup" ||
        (val.header === "Price Breakup" &&
          val.namedetail[5].name === "Total" &&
          Number(
            val.namedetail[5].details[1].replace(/,/g, "").replace(/₹/g, "")
          ) > 15000) ? (
       
          <>
            <div style={{ width: "100%" }}>
              <Typography
                variant="h1"
                component="h1"
                className={`subtabs-smrt ${
                  _isSilver
                    ? ` ${classes.fontsSmallScreen}`
                    : classes.normalfonts
                }`}
              >
                {val.header}
              </Typography>
              {/* <hr class="bottom-line border-line-"></hr> */}
            </div>

            <div style={{ backgroundColor: "fafafa" }}>
              {val.namedetail !== undefined &&
                val.namedetail.map((res) => {
                  return !Boolean(res.name && res.details) ? null : (
                    <span>
                      {
                        <>
                          {" "}
                          {this.handleCheck(val.header, res.details) ? (
                            <Grid
                              container
                              item
                              xs={12}
                              style={{
                                padding: _isSilver ? 0 : "0px 10px 0px 10px ",
                              }}
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
                                            textAlign: "left",
                                          }}
                                        >
                                          {" "}
                                          {val.header === "Price Breakup" ? (
                                            res.name !== "GST" &&
                                            Index === 0 &&
                                            res.details[Index] !==
                                              res.details[Index + 1] ? (
                                              <del>{Item}</del>
                                            ) : (Index === 0 &&
                                                res.name !== "GST") ||
                                              (Index === 0 &&
                                                !this.handleGst(
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
                                    className={`product-subhead-list `}
                                  >
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        marginLeft: "10px",
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
                  );
                })}
            </div>
          </>
        ) : null}
      </>
    );
  };
  mobileproductsDetails = () => {
    const { expanded } = this.state;
    const { data, isSilver } = this.props;
    const { classes } = this.props;
    const _mapper =
      data && data.length > 0 && data[0] && data[0].productsDetails.length > 0
        ? data[0].productsDetails
        : [];
    const _isSilver = isSilver ? true : false;
    const _mapperChooser = _isSilver
      ? _mapper.length > 0
        ? [_mapper[0]]
        : _mapper
      : _mapper;
    return (
      <div>
        <Container>
          {_mapperChooser.map((val) => {
            return val.namedetail.length === 0
              ? false
              : 
              this.withExpandCollapse(val)
              ;
          })}

          {!_isSilver &&
            data[0]?.productsPendants &&
            data[0]?.productsPendants?.map((val) => (
              <div>
                <ExpansionPanel
                  style={{
                    boxShadow:
                      " 0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                    margin: "12px 0px",
                    padding: "0 5px 5px 5px",
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
  handle = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { data,isSilver } = this.props;
    return (
      <div>
        <Hidden smDown>{this.productsDetails(data)}</Hidden>
        {isSilver ? 
        <Hidden mdUp>{this.productsDetails(data)}</Hidden>
        :
        <Hidden mdUp>{this.mobileproductsDetails()}</Hidden>
        }
        
      </div>
    );
  }
}
ProductDetails.propTypes = {
  productsDetails: PropTypes.func,
  mobileproductsDetails: PropTypes.func,
  handle: PropTypes.func,
};
export default withStyles(styles)(ProductDetails);
