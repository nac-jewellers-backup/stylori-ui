import React from "react";
import "./ordersummary.css";
import {
  Container,
  Button,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Hidden
} from "@material-ui/core";
import { Input } from "../../../components/InputComponents/TextField/Input";
import { withStyles } from "@material-ui/core/styles";
import useGift from "./usegift";
import Promo from "./promocode";
import { API_URL } from "../../../config";
import { ALLGIFT, UPDATEGIFT } from "../../../queries/cart";

const styles = (theme) => ({
  cart: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      boxShadow: "none",
      marginBottom: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "95%",
      boxShadow: "none",
    },
  },
});
const Productlist = (props) => {
  return <ProductlistComponent {...props} />;
};

const ProductlistComponent = (props) => {
  const { handlers, values, val, data, setval,emailerr } = useGift();
  const { classes } = props;
  let value = localStorage.getItem("select_addres")
    ? JSON.parse(localStorage.getItem("select_addres"))
    : {};
  const { expanded1, expanded2, expanded3 } = val;
  const [show, setShow] = React.useState(true);
  const [msgedit, Setmegedit] = React.useState([]);
  const [id, setId] = React.useState("");
  const [emailedit, Setemailedit] = React.useState([]);
  const cardIds = JSON.parse(localStorage.getItem("cart_id"))?.cart_id;

  const handleChange1 = (panel) => (event) => {
    var values = val.expanded1 === panel ? null : panel;
    val["expanded1"] = values;
    setval({ val, ...val });
  };
  const handleChange2 = (panel) => (event) => {
    var values = val.expanded2 === panel ? null : panel;
    val["expanded2"] = values;
    setval({ val, ...val });
  };
  const handleChange3 = (panel) => (event) => {
    var values = val.expanded3 === panel ? null : panel;
    val["expanded3"] = values;
    setval({ val, ...val });
  };
  const gotogift = () => {
    handlers.handleSubmit();
  };
  const editmsgform = () => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: UPDATEGIFT,
        variables: {
          cartId: cardIds,
          id: id,
          message: msgedit,
          giftTo: emailedit,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const display = () => {
    setShow(!show);
  };

  return (
    <Grid>
      <div className="pt-sm">
        {props.check ? (
            <div>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                {/* {props.order ? (
                  " "
                ) : (
                  <h4
                    style={{
                      textAlign: "center",
                      color: "gray",
                      fontSize: "14px",
                    }}
                  >
                    Gift Wrap
                  </h4>
                )} */}
                <br />
                <div style={{ display: show ? "block" : "none" }}>
                  <form action="javascript:void(0)" onSubmit={() => gotogift()}>
                    {props.pay ? (
                      ""
                    ) : (
                      <label
                        style={{
                          color: "gray",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        Add a Special Message!&nbsp;
                        <b style={{ color: "#c1c1c1" }}>(Optional)</b>
                      </label>
                    )}

                    <Input
                      checkoutgift={true}
                      msg={true}
                      multiline={true}
                      helperText="Message is required"
                      placeholder="Message"
                      name="message"
                      type="text"
                      value={values.message}
                      required
                      maxLength={255}
                      rowsMax={7}
                      disabled={
                        (data && data.message === "Success") ||
                        values.haveAlready
                          ? true
                          : false
                      }
                      onChange={(e) =>
                        handlers.handleChange("message", e.target.value)
                      }
                    />
                    {props.pay ? (
                      ""
                    ) : (
                      <>
                        <span
                          style={{
                            float: "right",
                            color: "gray",
                            fontSize: "12px",
                          }}
                        >
                          Max : 255
                        </span>

                        <br />
                        <Hidden mdUp>
                          <br />
                        </Hidden>
                        <label
                          style={{
                            color: "gray",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          Gift Recipient’s Email!&nbsp;
                          <b style={{ color: "#c1c1c1" }}>(Optional)</b>
                        </label>
                        <Input
                          checkoutgift={true}
                          helperText="To is required"
                          placeholder="To"
                          name="to"
                          type="text"
                          value={values.gift_to}
                          required
                          disabled={
                            (data && data.message === "Success") ||
                            values.haveAlready
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handlers.handleChange("gift_to", e.target.value)
                          }
                        />
                        <span style={{ fontSize: "12px", color: "red" }}>
                          {emailerr.length > 0 && emailerr}
                        </span>
                      </>
                    )}

                    {/* <div className="login-butn">
                      {(data && data.message === "Success") ||
                      values.haveAlready ? (
                        <>
                          <Button
                            style={{ filter: "grayscale(5)" }}
                            disabled
                            className="apply-b"
                            type="submit"
                          >
                            Saved
                          </Button>
                          {props.giftedit && (
                            <Button
                              style={{
                                color: "gray",
                                float: "right",
                                textTransform: "capitalize",
                              }}
                              onClick={display}
                            >
                              Edit
                            </Button>
                          )}
                        </>
                      ) : (
                        <>
                          {values.gift_to || values.message ? (
                            <Button className="apply-b" type="submit">
                              Save
                            </Button>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </div> */}

                    {/* <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <span style={{ color: "gray", whiteSpace: "nowrap" }}>
                          Send order updates to the Gift Recipient
                        </span>
                      }
                    /> */}
                  </form>
                </div>

                <div style={{ display: show ? "none" : "block" }}>
                  <form action="javascript:void(0)" onSubmit={editmsgform}>
                    <label
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Add a Special Message!&nbsp;
                      <b style={{ color: "#c1c1c1" }}>(Optional)</b>
                    </label>
                    <Input
                      checkoutgift={true}
                      msg={true}
                      multiline={true}
                      helperText="Message is required"
                      placeholder="Message"
                      name="message"
                      type="text"
                      value={msgedit}
                      required
                      maxLength={255}
                      onChange={(e) => Setmegedit(e.target.value)}
                    />
                    <span
                      style={{
                        float: "right",
                        color: "gray",
                        fontSize: "14px",
                      }}
                    >
                      Max : 255
                    </span>

                    <br />
                    <Hidden mdUp>
                      <br />
                    </Hidden>
                    <label
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Gift Recipient’s Email!&nbsp;
                      <b style={{ color: "#c1c1c1" }}>(Optional)</b>
                    </label>
                    <Input
                      checkoutgift={true}
                      helperText="To is required"
                      placeholder="To"
                      name="to"
                      type="text"
                      value={emailedit}
                      required
                      onChange={(e) => Setemailedit(e.target.value)}
                    />

                    <div className="login-butn">
                      <Button className="apply-b" type="submit">
                        Save
                      </Button>
                    </div>
                  </form>
                </div>
              </Grid>
            </Grid>
            </div>
        ) : (
          <div>
            <Grid container spacing={12}>
              <Grid item xs={12} lg={4} sm={6}>
                <ExpansionPanel
                  style={{ marginTop: "12px" }}
                  class="extra-box"
                  className={classes.cart}
                  square
                  expanded={expanded1 === 1}
                  onChange={handleChange1(1)}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expandIcon={
                      <span className="side-arrow-symbol ">
                        <i class="fa fa-sort-up sml"></i>
                      </span>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="order-ship"
                  >
                    <h5 className="title" style={{ textAlign: "center" }}>
                      {" "}
                      Shipping Address
                    </h5>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className="order-ship pdng">
                    <div style={{ width: "100%" }}>
                      <p className="dis-phn btm">
                        {/* {aa ? aa + ' ' : ""} */}
                        {value && value.firstname}
                        &nbsp;
                        {value && value.lastname}
                      </p>
                      <p className="dis-phn btm">
                        <div
                          style={{
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {value && value.addressline1}
                        </div>
                        {value && value.city} <br />
                        {value.state + "-"}
                        {value && value.pincode}
                        <br />
                        IN
                      </p>
                      <p className="dis-phn">
                        Phone : +91{" "}
                        {value.contactNumber
                          ? value.contactNumber
                          : value.contactno}{" "}
                      </p>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>

              <Grid item xs={12} lg={4} sm={6}>
                <ExpansionPanel
                  square
                  class="extra-box"
                  style={{ marginTop: "12px" }}
                  className={classes.cart}
                  expanded={expanded2 === 1}
                  onChange={handleChange2(1)}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expandIcon={
                      <span className="side-arrow-symbol">
                        <i class="fa fa-sort-up sml"></i>
                      </span>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="order-ship"
                  >
                    <h5 className="title" style={{ textAlign: "center" }}>
                      {" "}
                      Gift Wrap
                    </h5>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className="order-ship pdng">
                    <div style={{ width: "100%" }}>
                      <form
                        action="javascript:void(0)"
                        onSubmit={() => handlers.handleSubmit()}
                      >
                        <Input
                          name="from"
                          type="text"
                          value={values.gift_from}
                          placeholder="From"
                          required
                          disabled={
                            (data && data.message === "Success") ||
                            values.haveAlready
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handlers.handleChange("gift_from", e.target.value)
                          }
                          helperText="From is required"
                        />
                        <Input
                          helperText="To is required"
                          placeholder="To"
                          name="to"
                          type="text"
                          value={values.gift_to}
                          required
                          disabled={
                            (data && data.message === "Success") ||
                            values.haveAlready
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handlers.handleChange("gift_to", e.target.value)
                          }
                        />
                        <Input
                          helperText="Message is required"
                          placeholder="Message"
                          name="message"
                          type="text"
                          value={values.message}
                          required
                          disabled={
                            (data && data.message === "Success") ||
                            values.haveAlready
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handlers.handleChange("message", e.target.value)
                          }
                        />
                        <div className="login-butn">
                          {(data && data.message === "Success") ||
                          values.haveAlready ? (
                            <Button
                              style={{ filter: "grayscale(5)" }}
                              disabled
                              className="apply-b"
                              type="submit"
                            >
                              Saved
                            </Button>
                          ) : (
                            <Button className="apply-b" type="submit">
                              Save
                            </Button>
                          )}
                        </div>
                      </form>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid item xs={12} lg={4} sm={6}>
                <ExpansionPanel
                  style={{ marginTop: "12px" }}
                  className={classes.cart}
                  square
                  class="extra-box"
                  expanded={expanded3 === 1}
                  onChange={handleChange3(1)}
                >
                  <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expandIcon={
                      <span className="side-arrow-symbol">
                        <i class="fa fa-sort-up sml"></i>
                      </span>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="order-ship"
                  >
                    <h5 className="title" style={{ textAlign: "center" }}>
                      {" "}
                      Promo Code
                    </h5>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}
                    className="order-ship pdng"
                  >
                    <Promo />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
          </div>
        )}
        {/* <Checkoutcard /> */}
      </div>
    </Grid>
  );
};
export default withStyles(styles)(Productlist);
