import React from "react";
import "./address.css";
import { Grid, Button, Typography, Select, MenuItem } from "@material-ui/core";
import { Input } from "../../../components/InputComponents/TextField/Input";
// import Checkboxes from '../../../components/InputComponents/CheckBox/CheckBox';
import SimpleSelect from "../../../components/InputComponents/Select/Select";
import SimpleSelect2 from "../../../components/InputComponents/Select/SimpleSelect";
import Addressdetails from "./addressDetails";
import Addressforms from "./Addressforms";
import axios from "axios";
import { COUNTRIES } from "queries/home";
import { API_URL } from "config";

const Addressform = (props) => {
  return <AddressComponent {...props} />;
};

const AddressComponent = (props) => {
  const { values, handle, setValues } = Addressforms(() =>
    props.changePanel(4, values.selest_my_address)
  );

  const cl = (
    <input
      onChange={() =>
        setValues({
          values,
          ...values,
          checkValue: !values.checkValue,
        })
      }
      type="checkbox"
      checked={values.checkValue}
    />
  );

  var isedit = localStorage.getItem("isedit");
  const aa = localStorage.getItem("m")
    ? localStorage.getItem("m")
    : values.addressOne.salutation;

  const [countryCode, setCountryCode] = React.useState([]);

  React.useEffect(() => {
    axios
      .post(
        `${API_URL}/graphql`,
        JSON.stringify({
          query: COUNTRIES,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        let main = res?.data?.data?.allMasterCountries?.nodes;
        if (main.length > 0) {
          setCountryCode(main);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid>
      <div>
        {(isedit === "1" ? true : false) && values.addrs === true ? (
          <div className="pt-sm">
            <form
              onSubmit={(e) => {
                handle.handleSubmit(e);
              }}
              action="javascript:void(0)"
            >
              {localStorage.getItem("valuessetdata") ||
              localStorage.getItem("vals") ? (
                <h5 className="title"> Edit Address</h5>
              ) : (
                ""
              )}
              <p class="form-group tp" style={{ width: "480px" }}>
                {/* {localStorage.getItem("valuessetdata") || localStorage.getItem("vals") ? "" : <>{cl}</>} */}
                {window.location.pathname.split("-")[0] === "/account" ||
                values.edit_addresId === true ? (
                  ""
                ) : (
                  <>{cl}</>
                )}
                {/* {JSON.stringify(values.errortext && values.errortext.pinerr)} */}
              </p>{" "}
              <Grid container xs={12} lg={12}>
                <Grid item xs={12} lg={12}>
                  {window.location.pathname.split("-")[0] === "/account" ||
                  values.hidebilling === true ||
                  values.addrs === true ? (
                    ""
                  ) : (
                    <>
                      <h5 className="title">Shipping Address</h5>
                      <>
                        {!values.checkValue &&
                          "If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form."}
                        {values.checkValue &&
                          "If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form."}
                      </>
                    </>
                  )}

                  {props.isCheck ? (
                    <div>
                      <h5
                        className="title"
                        style={{
                          color: "#6D6E71",
                          marginBottom: "0px",
                          height: "30px",
                        }}
                      >
                        Shipping Address
                      </h5>
                      <Grid
                        container
                        style={{ display: "flex", flexDirection: "row" }}
                        spacing={3}
                      >
                        <Grid item container xs={6}>
                          <Grid item xs={12}>
                            {/* <Grid item xs={4}>
                                           <SimpleSelect
                                               val={'1'}
                                               name={aa ? [aa] : ['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                           </Grid> */}
                            {/* <Grid xs={8}> */}
                            <Input
                              name="firstname"
                              // className='text-ad'
                              type="text"
                              value={values.addressOne.firstname}
                              placeholder="First name"
                              short
                              required
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "firstname",
                                  event.target.value.replace(/[^a-z]/gi, "")
                                )
                              }
                              helperText="First name is required"
                            />
                            {/* </Grid> */}
                          </Grid>
                          <Grid item xs={12}>
                            <Input
                              // className='text-ad'
                              type="text"
                              name="lastname"
                              value={values.addressOne.lastname}
                              placeholder="Last name"
                              required
                              short
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "lastname",
                                  event.target.value.replace(/[^a-z]/gi, "")
                                )
                              }
                              helperText="Last name is required"
                            />
                          </Grid>
                          <Grid item container xs={12}>
                            {/* <Grid item xs={4}>
                                           <SimpleSelect name={['+91']} selectData={['+91']}
                                               disabled={'disabled'}
                                               value={values.addressOne.country_code} />
                                           </Grid> */}
                            {/* <Grid item xs={8}> */}
                            <Input
                              //  className='text-ad'
                              type="tel"
                              name="contactno"
                              short
                              onKeyPress={(e) =>
                                handle.handleKeyPress(e, "contactno")
                              }
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "contactno",
                                  event.target.value
                                )
                              }
                              placeholder="Mobile number"
                              value={values.addressOne.contactno}
                              helperText="Please enter your  mobile number"
                              minLength={4}
                              required
                            />
                            {/* </Grid> */}
                          </Grid>
                          <Grid item xs={12}>
                            <Input
                              type="text"
                              placeholder="Address"
                              name="addressline1"
                              short
                              // className='text-ad'
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "addressline1",
                                  event.target.value
                                )
                              }
                              value={values.addressOne.addressline1}
                              helperText="Address is required"
                              required
                            />
                          </Grid>
                        </Grid>

                        <Grid item container xs={6}>
                          <Grid item xs={12}>
                            <SimpleSelect2
                              selectData={props.countries}
                              name="country"
                              placeholder="Country"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "country",
                                  event.target.value
                                )
                              }
                              value={values.addressOne.country}
                              helperText="Country is required1"
                              InputProps={{
                                readOnly: true,
                              }}
                              required
                              short
                            />

                            <label className="errtext">
                              {" "}
                              {values.addressOne &&
                                values.addressOne.errortext &&
                                values.addressOne.errortext.country}
                            </label>
                          </Grid>
                          <Grid item container xs={12}>
                            {/* <Grid item xs={4}>
                                           <SimpleSelect name={values.addressOne.country ? values.addressOne.country : ""} selectData={['India']}
                                               disabled={'disabled'} />
                                           </Grid> */}
                            {/* <Grid item xs={8}> */}
                            <Input
                              // className='text-ad'
                              type="tel"
                              name="pincode"
                              short
                              maxLength="6"
                              placeholder="Pin code/Zip code"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "pincode",
                                  event.target.value.replace(/\D/g, ""),
                                  "pincode1"
                                )
                              }
                              value={values.addressOne.pincode}
                              // onKeyPress={(e) =>
                              //   handle.handleKeyPress(e, "pincode")
                              // }
                              helperText="Pin Code is required"
                              required
                            />
                            <label className="errtext">
                              {" "}
                              {values.addressOne &&
                                values.addressOne.errortext &&
                                values.addressOne.errortext.pinerr}
                            </label>
                            {/* </Grid> */}
                          </Grid>
                          <Grid item xs={12}>
                            <Input
                              type="text"
                              name="state"
                              short
                              // className='text-ad'
                              placeholder="State"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "state",
                                  event.target.value
                                )
                              }
                              value={values?.addressOne?.state}
                              helperText="State is required"
                              InputProps={{
                                readOnly: true,
                              }}
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Input
                              // className='text-ad'
                              type="text"
                              name="city"
                              short
                              placeholder="City"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressOne",
                                  "city",
                                  event.target.value
                                )
                              }
                              value={values.addressOne.city}
                              helperText="City is required"
                              InputProps={{
                                readOnly: true,
                              }}
                              required
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  ) : (
                    <div>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          lg={6}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                          }}
                        >
                          <Input
                            name="firstname"
                            // className="text-f"
                            type="text"
                            value={values.addressOne.firstname}
                            placeholder="First name"
                            required
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "firstname",
                                event.target.value.replace(/[^a-z]/gi, "")
                              )
                            }
                            helperText="First name is required"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          lg={6}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                          }}
                        >
                          <Input
                            // className="text-f"
                            type="text"
                            name="lastname"
                            value={values.addressOne.lastname}
                            placeholder="Last name"
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "lastname",
                                event.target.value.replace(/[^a-z]/gi, "")
                              )
                            }
                            required
                            helperText="Last name is required"
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} lg={6} style={{ marginTop: 10 }}>
                          <SimpleSelect2
                            selectData={countryCode}
                            name="country"
                            placeholder="Select a country" // Placeholder text you want to add
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "country",
                                event.target.value
                              )
                            }
                            value={values.addressOne.country}
                            helperText="Country is required"
                            InputProps={{
                              readOnly: true,
                            }}
                            required
                          />
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={6}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                          }}
                        >
                          <Input
                            // className="text-f"
                            type="tel"
                            required
                            name="pincode"
                            maxLength="6"
                            placeholder="Pin code/Zip code"
                            helperText="Pin Code is required"
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "pincode",
                                event.target.value.replace(/\D/g, ""),
                                "pincode1"
                              )
                            }
                            value={values.addressOne.pincode}
                            // onKeyPress={(e) =>
                            //   handle.handleKeyPress(e, "pincode")
                            // }
                            // helperText="Pin Code is required"
                            // required
                          />
                          <label className="errtext">
                            {" "}
                            {values.addressOne &&
                              values.addressOne.errortext &&
                              values.addressOne.errortext.pinerr}
                          </label>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                          <Input
                            type="text"
                            placeholder="Address"
                            name="addressline1"
                            onChange={(event) => {
                              const inputValue = event.target.value.trim(); // Remove leading and trailing spaces
                              const hasAlphanumeric = /[a-zA-Z0-9]/.test(
                                inputValue
                              ); // Check for at least one alphanumeric

                              if (hasAlphanumeric || inputValue === "") {
                                handle.handleChange(
                                  "addressOne",
                                  "addressline1",
                                  inputValue
                                );
                              }
                            }}
                            value={values.addressOne.addressline1}
                            helperText="Address is required"
                            required
                          />
                        </Grid>
                      </Grid>

                      {/* <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                          <Input
                            type="text"
                            placeholder="Address"
                            name="addressline1"
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "addressline1",
                                event.target.value.replace(/^\s*$/, "")
                              )
                            }
                            value={values.addressOne.addressline1}
                            helperText="Address is required"
                            required
                          />
                        </Grid>
                      </Grid> */}
                      <Grid container spacing={2}>
                        <Grid item xs={6} lg={6}>
                          <Input
                            style={{
                              float: "left",
                              width: "99%",
                              background: "rgba(192, 192, 192, 0.41)",
                            }}
                            type="text"
                            name="state"
                            placeholder="State"
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "state",
                                event.target.value
                              )
                            }
                            value={values?.addressOne?.state}
                            helperText="State is required"
                            InputProps={{
                              readOnly: true,
                            }}
                            required
                          />
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={6}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                          }}
                        >
                          <Input
                            className="text-f"
                            type="text"
                            name="city"
                            placeholder="City"
                            style={{ background: "rgba(192, 192, 192, 0.41)" }}
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "city",
                                event.target.value
                              )
                            }
                            value={values.addressOne.city}
                            helperText="City is required"
                            InputProps={{
                              readOnly: true,
                            }}
                            required
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                          }}
                        >
                          <Input
                            // style={{ fontSize: "10px", paddingLeft: "16px" }}
                            className="text-f"
                            type="tel"
                            name="contactno"
                            onKeyPress={(e) =>
                              handle.handleKeyPress(e, "contactno")
                            }
                            onChange={(event) =>
                              handle.handleChange(
                                "addressOne",
                                "contactno",
                                event.target.value
                              )
                            }
                            placeholder="Mobile number"
                            value={values.addressOne.contactno}
                            helperText="Please enter your mobile number"
                            // maxLength={10}
                            minLength={4}
                            required
                          />
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </Grid>

                {/*  */}
                {/*  */}
                {/* {localStorage.getItem("valuessetdata") || localStorage.getItem("vals") ? "" : <> */}
                {window.location.pathname.split("-")[0] === "/account" ||
                values.edit_addresId === true ? (
                  ""
                ) : (
                  <>
                    <Grid container item lg={1} />
                    {!values.checkValue ? (
                      <Grid item xs={12} lg={12}>
                        <br />
                        <br />
                        <h5 className="title"> Billing Address</h5>
                        <Grid
                          container
                          style={{ display: "flex", flexDirection: "row" }}
                          spacing={2}
                        >
                          <Grid item container xs={6}>
                            <Grid item container xs={12}>
                              {/* <Grid item xs={4}>
                                           <SimpleSelect
                                               val={'1'}
                                               name={aa ? [aa] : ['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                           </Grid> */}
                              {/* <Grid xs={8}> */}
                              <Input
                                name="firstname"
                                //    className='text-f'
                                type="text"
                                value={values.addressOne.firstname}
                                placeholder="First name"
                                required
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "firstname",
                                    event.target.value.replace(/[^a-z]/gi, "")
                                  )
                                }
                                helperText="First name is required"
                              />
                              {/* </Grid> */}
                            </Grid>
                            <Grid item xs={12}>
                              <Input
                                //    className='text-f'
                                type="text"
                                name="lastname"
                                value={values.addressOne.lastname}
                                placeholder="Last name"
                                required
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "lastname",
                                    event.target.value.replace(/[^a-z]/gi, "")
                                  )
                                }
                                helperText="Last name is required"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Input
                                type="text"
                                name="state"
                                placeholder="State"
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "state",
                                    event.target.value
                                  )
                                }
                                value={values?.addressOne?.state}
                                helperText="State is required"
                                InputProps={{
                                  readOnly: true,
                                }}
                                required
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Input
                                //    className='text-f'
                                type="text"
                                name="city"
                                placeholder="City"
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "city",
                                    event.target.value
                                  )
                                }
                                value={values.addressOne.city}
                                helperText="City is required"
                                InputProps={{
                                  readOnly: true,
                                }}
                                required
                              />
                            </Grid>
                          </Grid>

                          <Grid item container xs={6}>
                            <Grid item container xs={12}>
                              {/* <Grid item xs={4}>
                                           <SimpleSelect name={values.addressOne.country ? values.addressOne.country : ""} selectData={['India']}
                                               disabled={'disabled'} />
                                           </Grid> */}
                              {/* <Grid item xs={8}> */}
                              <Input
                                //    className='text-f'
                                type="tel"
                                name="pincode"
                                maxLength="6"
                                placeholder="Pin code/Zip code"
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "pincode",
                                    event.target.value.replace(/\D/g, ""),
                                    "pincode1"
                                  )
                                }
                                value={values.addressOne.pincode}
                                // onKeyPress={(e) =>
                                //   handle.handleKeyPress(e, "pincode")
                                // }
                                // helperText="Pin Code is required"
                                // required
                              />
                              <label className="errtext">
                                {" "}
                                {values.addressOne &&
                                  values.addressOne.errortext &&
                                  values.addressOne.errortext.pinerr}
                              </label>
                              {/* </Grid> */}
                            </Grid>
                            <Grid item xs={12}>
                              <Input
                                type="text"
                                placeholder="Address"
                                name="addressline1"
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "addressline1",
                                    event.target.value
                                  )
                                }
                                value={values.addressOne.addressline1}
                                helperText="Address is required"
                                required
                              />
                            </Grid>
                            <Grid item container xs={12}>
                              {/* <Grid item xs={4}>
                                           <SimpleSelect name={['+91']} selectData={['+91']}
                                               disabled={'disabled'}
                                               value={values.addressOne.country_code} />
                                           </Grid> */}
                              {/* <Grid item xs={8}> */}
                              <Input
                                //    className='text-f'
                                type="tel"
                                name="contactno"
                                onKeyPress={(e) =>
                                  handle.handleKeyPress(e, "contactno")
                                }
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "contactno",
                                    event.target.value
                                  )
                                }
                                placeholder="Mobile number"
                                value={values.addressOne.contactno}
                                helperText="Please enter your mobile number"
                                // maxLength={10}
                                minLength={4}
                                required
                              />
                              {/* </Grid> */}
                            </Grid>
                            <Grid item xs={12}>
                              <Input
                                // className='text-f'
                                type="text"
                                name="country"
                                placeholder="Country"
                                onChange={(event) =>
                                  handle.handleChange(
                                    "addressOne",
                                    "country",
                                    event.target.value
                                  )
                                }
                                value={values.addressOne.country}
                                helperText="Country is required"
                                InputProps={{
                                  readOnly: true,
                                }}
                                required
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* <Grid container spacing={12}>
                                                <Grid item xs={4} lg={4}>
                                                    <SimpleSelect val={"2"} name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                                </Grid>
                                                <Grid item xs={4} lg={4}>
                                                    <Input
                                                        name="firstnametwo"
                                                        className='text-f'
                                                        type="text"
                                                        value={values.addressTwo.firstname}
                                                        placeholder="First name"
                                                        required
                                                        onChange={(event) => handle.handleChange('addressTwo', 'firstname', event.target.value)}
                                                        helperText="First name is required"
                                                    />
                                                </Grid>
                                                <Grid item xs={4} lg={4}>
                                                    <Input
                                                        className='text-f'
                                                        type="text"
                                                        name="lastnametwo"
                                                        value={values.addressTwo.lastname}
                                                        placeholder="Last name"
                                                        required onChange={(event) => handle.handleChange('addressTwo', 'lastname', event.target.value)}
                                                        helperText="Last name is required"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={12}>
                                                <Grid item xs={6} lg={6}>
                                                    <SimpleSelect name={values.addressTwo.country ? values.addressTwo.country : ""} selectData={['India']}
                                                        disabled={'disabled'} />
                                                </Grid>
                                                <Grid item xs={6} lg={6}>
                                                    <Input
                                                        className='text-f'
                                                        type="tel"
                                                        name='pincodetwo'
                                                        placeholder="Pin code/Zip code"
                                                        onChange={(event) => handle.handleChange('addressTwo', 'pincode', event.target.value, 'pincode2')}
                                                        value={values.addressTwo.pincode}
                                                        onKeyPress={(e) => handle.handleKeyPress(e, "pincode")}
                                                        helperText="Pin code is required"
                                                        required
                                                    />
                                                    <label className='errtext'> {values.addressOne && values.addressTwo.errortext && values.addressTwo.errortext.pinerr1}</label>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={12}>
                                                <Grid item xs={12} lg={12}>
                                                    <Input
                                                        type="text"
                                                        placeholder="Address"
                                                        name='addressline1two'
                                                        onChange={(event) => handle.handleChange('addressTwo', 'addressline1', event.target.value)}
                                                        value={values.addressTwo.addressline1}
                                                        helperText="Address is required"
                                                        required />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={12}>
                                                <Grid item xs={6} lg={6}>
                                                    <Input
                                                        style={{ float: "left", width: "99%", background: "rgba(192, 192, 192, 0.41)" }}
                                                        type="text"
                                                        name='statetwo'
                                                        placeholder="State"
                                                        onChange={(event) => handle.handleChange('addressTwo', 'state', event.target.value)}
                                                        value={values.addressTwo.state}
                                                        helperText="State is required"
                                                        InputProps={{
                                                            readOnly: true,
                                                        }} required />
                                                </Grid>
                                                <Grid item xs={6} lg={6}>
                                                    <Input
                                                        className='text-f'
                                                        type="text"
                                                        name='citytwo'
                                                        placeholder="City"
                                                        style={{ background: "rgba(192, 192, 192, 0.41)" }}
                                                        onChange={(event) => handle.handleChange('addressTwo', 'city', event.target.value)}
                                                        value={values.addressTwo.city}
                                                        helperText="City is required"
                                                        InputProps={{
                                                            readOnly: true,
                                                        }} required />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={12}>
                                                <Grid item xs={3} lg={3}>
                                                    <SimpleSelect name={['+91']} selectData={['+91']}
                                                        disabled={'disabled'} />
                                                    <Input
                                                    className='text-f'
                                                    type="text"
                                                    name="bill_country_code"
                                                    value={values.addressTwo.bill_country_code}
                                                    onChange={(event) => handle.handleChange(event, "bill_country_code")}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "bill_country_code")}
                                                    placeholder="+ 91"
                                                    isNumber
                                                    maxLength={2}
                                                    minLength={2}
                                                    required
                                                 />
                                                </Grid>
                                                <Grid item xs={9} lg={9}>
                                                    <Input
                                                        className='text-f'
                                                        type="tel"
                                                        name='contactnotwo'
                                                        onChange={(event) => handle.handleChange('addressTwo', 'contactno', event.target.value)}
                                                        onKeyPress={(e) => handle.handleKeyPress(e, "contactno")}
                                                        placeholder="Mobile number"
                                                        value={values.addressTwo.contactno}
                                                        helperText="Please enter your 10 digit mobile number"
                                                        isNumber
                                                        maxLength={10}
                                                        minLength={10}
                                                        required />
                                                </Grid>
                                            </Grid> */}
                      </Grid>
                    ) : null}
                  </>
                )}
                {/* </>} */}
              </Grid>
              {/* <div style={{float:"right"}}>
                                
                            </div> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 10,
                }}
              >
                {values.edit_addresId === true ? (
                  <Button
                    onClick={() => handle.redirectFormss()}
                    style={{
                      borderRadius: "0px",
                      padding: "6px 8px",
                      lineHeight: "1.75",
                      border: "1px solid #394578",
                    }}
                    className=""
                  >
                    Cancel
                  </Button>
                ) : (
                  ""
                )}{" "}
                &nbsp;
                <Button
                  type="submit"
                  className="apply-b"
                  style={{
                    background: props.isCheck ? "#d51f63 !important" : "",
                    border: props.isCheck ? "1px solid #d51f63 !important" : "",
                  }}
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <Addressdetails
            open={values.open}
            setOpen={values.setOpen}
            handleClose={handle.handleClose}
            handleOpen={handle.handleOpen}
            Delete_address={handle.Delete_address}
            selectaddreses={handle.selectaddreses}
            values={values}
            setValues={setValues}
            changevalue={props.changePanel}
            redirectForm1={handle.redirectForm1}
            redirectForm={handle.redirectForm}
            isCheck={props?.isCheck}
          />
        )}
      </div>
    </Grid>
  );
};
export default Addressform;
