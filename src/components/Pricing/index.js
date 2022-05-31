import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import "../product-image-slider/product-images.css";
import styles from "./style";
import "./pricing.css";
import CurrencyConversion from "utils/CurrencyConversion";

export default function Pricing(props) {
  const classes = styles();
  let path = window.location.pathname.split("/").pop();
  const { globalContext, quantity } = props;
  const product_quantity = quantity ? quantity : 1;

  const isSilver = globalContext && globalContext.pathName ? true : false;
  return (
    <div>
      {props.title ? (
        <Typography
          className={`pricing  ${
            (props.title != null) & (props.title !== "") ? "" : "shine"
          } ${path === "stylori" && "pricingTitle"}`}
        >
          {props.title}
        </Typography>
      ) : (
        ""
      )}
      {/*  */}
      <Grid
        spacing={12}
        style={{ padding: isSilver ? 0 : 0 }}
        container
        lg={12}
      >
        {window.location.pathname !== "/cart" &&
        window.location.pathname.split("-")[0] !== "/account" &&
        window.location.pathname !== "/checkout" ? (
          <Grid container>
            {isSilver && (
              <Grid
                item
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
                className={classes.alignval}
              >
                {props.price ? (
                  <Typography
                    style={{ display: "flex", width: "100%", padding: 0 }}
                    className={classes.resetpadd}
                  >
                    <Typography
                      style={{ fontSize: "22px" }}
                      className={`${
                        (props.price != null) & (props.price !== "")
                          ? ""
                          : "shine"
                      } ${classes.colorMain} ${classes.h6FontSize} ${
                        classes.offerPricePadding
                      } ${isSilver ? classes.pricesilver : ""}`}
                    >
                      {props.offerPrice === props.price ? (
                        ""
                      ) : (
                        <del>
                          {isSilver
                            ? ""
                            : `
                          ${CurrencyConversion(product_quantity * props.price)}
                            
                            `}
                        </del>
                      )}
                    </Typography>
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            )}
            <Grid item xs={isSilver && 12}>
              {props.offerPrice ? (
                <div>
                  <Hidden mdUp>
                    <Typography>
                      <Typography
                        className={`${
                          (props.offerPrice != null) & (props.offerPrice !== "")
                            ? ""
                            : "shine"
                        } ${classes.colorMain} ${classes.h6FontSize} ${
                          classes.offerPricePadding
                        } ${isSilver ? classes.pricesilver : ""}`}
                      >
                        { CurrencyConversion(product_quantity * props.offerPrice)}
                        &nbsp; &nbsp;
                      </Typography>
                      <div style={{ marginTop: "-10px" }}>
                        <span className={classes.pricesilver}>
                          {props.offerPrice === props.price ? (
                            ""
                          ) : (
                            <del
                              style={{ fontSize: "14px", fontWeight: "bold" }}
                            >
                              {isSilver
                                ? `
                            ${CurrencyConversion (product_quantity * props.price)
                            }
                            `
                                : ""}
                            </del>
                          )}
                        </span>
                        &nbsp;
                        {props?.offerDiscount && isSilver && (
                          <span
                            style={{
                              color: "#06A296",
                              fontWeight: "bold",
                              fontSize: "14px",
                              // marginTop: 8,
                              // position: "absolute",
                            }}
                          >
                            ({props?.offerDiscount}){" "}
                          </span>
                        )}
                      </div>
                    </Typography>
                  </Hidden>
                  <Hidden smDown>
                    <Typography style={{ display: "flex", width: "100%" }}>
                      <Typography
                        className={`${
                          (props.offerPrice != null) & (props.offerPrice !== "")
                            ? ""
                            : "shine"
                        } ${classes.colorMain} ${classes.h6FontSize} ${
                          classes.offerPricePadding
                        } ${isSilver ? classes.pricesilver : ""}`}
                      >
                        { CurrencyConversion(product_quantity * props.offerPrice)}
                        &nbsp;
                        <span>
                          {props.offerPrice === props.price ? (
                            ""
                          ) : (
                            <del
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              {isSilver
                                ? `
                            ${ CurrencyConversion(product_quantity * props.price)}
                            `
                                : ""}
                            </del>
                          )}
                        </span>
                        &nbsp;
                        {props?.offerDiscount && isSilver && (
                          <span
                            style={{
                              color: "#06A296",
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                              // marginTop: 8,
                              // position: "absolute",
                            }}
                          >
                            ({props?.offerDiscount}){" "}
                          </span>
                        )}
                      </Typography>
                    </Typography>
                  </Hidden>
                </div>
              ) : (
                ""
              )}
            </Grid>
            {!isSilver && (
              <Grid
                item
                style={{ display: "flex", alignItems: "center" }}
                className={classes.alignval}  
              >
                {props.price ? (
                  <Typography
                    style={{ display: "flex", width: "100%" }}
                    className={classes.resetpadd}
                  >
                    <Typography
                      style={{ fontSize: "0.9rem",marginTop: props.isMobile ? '-19px' :'0'}}
                      className={`pricing-p${
                        (props.price != null) & (props.price !== "")
                          ? ""
                          : "shine"
                      } ${classes.deletePrice} ${classes.dis}`}
                    >
                      {props.offerPrice === props.price ? (
                        ""
                      ) : (
                        <del>
                         {CurrencyConversion(product_quantity * props.price)}
                        </del>
                      )}
                    </Typography>
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            )}
          </Grid>
        ) : (      
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",height:"25px"}}>
            <Grid
              item
              xs={12}
              lg={
                window.location.pathname !== "/cart" &&
                window.location.pathname.split("-")[0] !== "/account" &&
                window.location.pathname !== "/checkout"
                  ? 2
                  : 12
              }
              style={{margin:5}}
            >
              {props.price ? (
                <Typography style={{ display: "flex", width: "100%" }}>
                  <Typography
                    className={`pricing-p${
                      (props.price != null) & (props.price !== "")
                        ? ""
                        : "shine"
                    } ${classes.deletePrice} ${classes.dis}`}
                  >
                    {props.offerPrice === props.price ? (
                      ""
                    ) : (
                      <del>
                        {CurrencyConversion(product_quantity * props.price)}
                      
                      </del>
                    )}
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            <Grid
              item
              xs={
                window.location.pathname !== "/cart" &&
                window.location.pathname.split("-")[0] !== "/account" &&
                window.location.pathname !== "/checkout"
                  ? 6
                  : 12
              }
              style={{margin:5}}
            >
              {props.offerPrice ? (
                <Typography style={{ display: "flex", width: "100%" }}>
                  <Typography
                    className={`${
                      (props.offerPrice != null) & (props.offerPrice !== "")
                        ? ""
                        : "shine"
                    } ${classes.colorMain} ${
                      classes.offerPricePadding
                    } `}
                  >
                    {CurrencyConversion(product_quantity * props.offerPrice)}
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            {!props.withOffer && (
             <Grid
            item
            xs={12}
            lg={
              window.location.pathname.split("-")[0] !== "/account" &&
              window.location.pathname !== "/cart" &&
              window.location.pathname.split("-")[1] !== "allorders"
                ? 6
                : 12
            }
            style={{ display: "flex", alignItems: "normal",margin:5 }}
          >
            <Hidden smDown>
              {props.offerDiscount ? (
                <span
                  className={props.check ? '' : `discount_count`}
                  style={{
                    fontSize:props.check ? '' : '12px',
                    minInlineSize:"max-content"
                    // min-inline-size: max-content;
                  }}
                >
                  {props.check ? "" : `(${props.offerDiscount})`}
                </span>
              ) : (
                <Typography style={{ display: "flex" }}>
                  <Typography
                    variant="caption"
                    component="p"
                    className={`${
                      (props.save != null) & (props.save !== "") ? "" : "shine"
                    } ${classes.colorMain}  `}
                  >
                    {path === "stylori" && "You save"} {props.save}
                  </Typography>
                </Typography>
              )}
            </Hidden>
             </Grid>
             )}
          </div>
        )}
        {/* {!props.withOffer && (
          <Grid
            item
            xs={12}
            lg={
              window.location.pathname.split("-")[0] !== "/account" &&
              window.location.pathname !== "/cart" &&
              window.location.pathname.split("-")[1] !== "allorders"
                ? 6
                : 6
            }
            style={{ display: "flex", alignItems: "normal" }}
          >
            <Hidden smDown>
              {props.offerDiscount ? (
                <span
                  className={`discount ${classes.backgsecondary} ${classes.off}`}
                >
                  {props.offerDiscount}
                </span>
              ) : (
                <Typography style={{ display: "flex" }}>
                  <Typography
                    variant="caption"
                    component="p"
                    className={`${
                      (props.save != null) & (props.save !== "") ? "" : "shine"
                    } ${classes.colorMain}  `}
                  >
                    {path === "stylori" && "You save"} {props.save}
                  </Typography>
                </Typography>
              )}
            </Hidden>
          </Grid>
        )} */}
      </Grid>

      {/*  */}
    </div>
  );
}
