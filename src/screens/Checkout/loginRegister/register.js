import { Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./loginRegisters.css";
import { Input } from "../../../components/InputComponents/TextField/Input";
import SimpleSelect from "../../../components/InputComponents/Select/Select";
import useRegister from "./useregister";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API_URL } from "config";
import { COUNTRIES } from "queries/home";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import EyeIcon from "./EyeIcon";

const Register = (props) => {
  return <RegisterComponent {...props} />;
};

const RegisterComponent = (props) => {
  let email = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "";
  const { values, setValues, handlers, data, valuesadrees } = useRegister(() =>
    props.changePanel(2)
  );

  // var cc = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ""
  // var ccc = data.message ? data.message : ""
  const paths = window.location.pathname.split("-")[0] === "/account";
  const pathreg = window.location.pathname === "/registers";
  const salutation = localStorage.getItem("m") ? localStorage.getItem("m") : "";
  let user_ids = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : "";

  const [countryCode, setCountryCode] = React.useState();
  const [countryNum, setCountryNum] = React.useState();

  const [mobile, setMobile] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const handleMobileChange = (event) => {
    const value = event.target.value;
    setMobile(value);
  };

  const validateMobileNumber = () => {
    if (mobile.length < 10) {
      console.log(mobile);
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleMobileBlur = () => {
    validateMobileNumber();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateMobileNumber();

    if (!isError) {
      // Perform form submission
      console.log(mobile);
    }
  };
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
      oldpassworderror: false,
      oldpasswordText: "",
      passwordError: false,
      confirmpasswordError: false,
      passwordHelperText: "",
      confirmpasswordHelper: "",
    });
  };
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    password: false,
    confirmpassword: false,
  });
  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field],
    }));
  };
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
        let main = res?.data?.data;
        let countries = [];
        let country_code = [];
        main.allMasterCountries.nodes.map((_) => {
          let obj = {};
          let obj2 = {};
          obj.label = _.nicename;
          obj.value = _.nicename;
          obj2.label = `${"+"}${_.phonecode}`;
          obj2.value = `${"+"}${_.phonecode}`;
          countries.push(obj);
          country_code.push(obj2);
        });
        setCountryCode(countries);
        setCountryNum(country_code);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-sm">
      <form
        onSubmit={(e) => {
          handlers.handleSubmit(e);
        }}
        action="javascript:void(0)"
      >
        <Grid container>
          <Grid
            item
            xs={12}
            lg={window.location.pathname === "/registers" || paths ? 12 : 6}
          >
            <Grid class="topPaddingwish">
              {window.location.pathname.split("-")[0] !== "/account" && (
                <h5 className="title">
                  {window.location.pathname.split("-")[0] === "/account" ? (
                    ""
                  ) : (
                    <>
                      {window.location.pathname === "/registers"
                        ? "Register"
                        : "New user registration"}
                    </>
                  )}
                </h5>
              )}
              {console.log(valuesadrees.salutation, "valuesadrees.salutation")}
              <Grid container spacing={12}>
                {paths && (
                  <Grid item lg={2} xs={4}>
                    <SimpleSelect
                      value={valuesadrees.salutation}
                      name={
                        salutation && salutation.length > 0
                          ? salutation
                          : valuesadrees.salutation
                      }
                      selectData={[
                        { label: "Mr", value: "Mr" },
                        { label: "Mrs", value: "Mrs" },
                        { label: "Ms", value: "Ms" },
                      ]}
                      onChange={(e) =>
                        handlers.handlesetvaluesadrees(
                          "salutation",
                          e.target.value
                        )
                      }
                      required
                      helperText="Select salutation"
                    />
                  </Grid>
                )}
                {paths && (
                  <>
                    <Grid
                      item
                      lg={5}
                      xs={6}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        marginTop: 10,
                      }}
                    >
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="firstname"
                        value={valuesadrees.firstname}
                        placeholder="First name*"
                        // onChange={(e) =>
                        //   handlers.handlesetvaluesadrees(
                        //     "firstname",
                        //     e.target.value.replace(/[^a-z]/gi, "")
                        //   )
                        // }

                        onChange={(e) => {
                          const inputValue = e.target.value;
                          let processedValue = inputValue.replace(
                            /[^a-z ]/gi,
                            ""
                          ); // Allow space along with alphabetic characters

                          if (inputValue.trim().length === 0) {
                            processedValue = ""; // Empty the value if the input is empty
                          } else if (
                            inputValue.trim().length === 1 &&
                            inputValue.trim() === " "
                          ) {
                            processedValue = " "; // Allow only a space as the first character
                          }

                          handlers.handlesetvaluesadrees(
                            "firstname",
                            processedValue
                          );
                        }}
                        className="text-f"
                        helperText="First name is required"
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      lg={5}
                      xs={6}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        marginTop: 10,
                      }}
                    >
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="lastname"
                        value={valuesadrees.lastname}
                        placeholder="Last name"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          let processedValue = inputValue.replace(
                            /[^a-z ]/gi,
                            ""
                          ); // Allow space along with alphabetic characters

                          if (inputValue.trim().length === 0) {
                            processedValue = ""; // Empty the value if the input is empty
                          } else if (
                            inputValue.trim().length === 1 &&
                            inputValue.trim() === " "
                          ) {
                            processedValue = " "; // Allow only a space as the first character
                          }

                          handlers.handlesetvaluesadrees(
                            "lastname",
                            processedValue
                          );
                        }}
                        className="text-f"
                        helperText="Last name is required"
                        required
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              {/* <h5>Personal Information</h5> */}
              {paths ? (
                <Input
                  style={{
                    background: "rgba(192, 192, 192, 0.41)",
                    width: "100%",
                  }}
                  value={email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <>
                  <Input
                    margin="normal"
                    // variant="outlined"
                    // type="email"
                    name="email"
                    value={values.email}
                    error={values.error && values.error.emerr ? true : false}
                    // helperText={values.errortext && values.errortext.emerr}
                    placeholder="Enter your email id"
                    onChange={(e) =>
                      handlers.handleChange("email", e.target.value)
                    }
                    helperText="Email is required"
                    required
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.emerr}
                  </label>
                </>
              )}
              {paths ? (
                <Grid container spacing={12}>
                  <Grid item xs={6} sm={4} lg={4}>
                    <Input
                      margin="normal"
                      // variant="outlined"
                      type="password"
                      name="password"
                      value={"........"}
                      // helperText={values.errortext && values.errortext.passerr}
                      placeholder="Enter your password"
                      onChange={(e) =>
                        handlers.handleChange("password", e.target.value)
                      }
                      style={{
                        background: "rgba(192, 192, 192, 0.41)",
                        marginRight: "10px",
                      }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />{" "}
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    class="leftPad"
                    style={{
                      textAlign: "center",
                      color: "#337ab7",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <NavLink to="/changepassword"> Change password </NavLink>{" "}
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Input
                    autoComplete="off"
                    margin="normal"
                    // variant="outlined"
                    // type="password"
                    type={passwordVisibility.password ? "text" : "password"}
                    fullWidth
                    name="email"
                    value={values.password}
                    error={values.error && values.error.passerr ? true : false}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Enter your password"
                    helperText="Password is required"
                    required
                    InputProps={{
                      endAdornment: (
                        <EyeIcon
                          isVisible={passwordVisibility.password}
                          toggleVisibility={() =>
                            togglePasswordVisibility("password")
                          }
                        />
                      ),
                    }}
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.passerr}
                  </label>
                  {/* <Input
                    margin="normal"
                    // variant="outlined"
                    type="password"
                    name="password"
                    value={values.password}
                    error={values.error && values.error.passerr ? true : false}
                    // helperText={values.errortext && values.errortext.passerr}
                    placeholder="Enter your password"
                    onChange={(e) =>
                      handlers.handleChange("password", e.target.value)
                    }
                    helperText="Password is required"
                    required
                  />

                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.passerr}
                  </label> */}
                </>
              )}
              {paths ? (
                ""
              ) : (
                <>
                  <Input
                    autoComplete="off"
                    margin="normal"
                    // variant="outlined"
                    type={
                      passwordVisibility.confirmpassword ? "text" : "password"
                    }
                    // type="password"
                    fullWidth
                    name="confirmpassword"
                    value={values.confirmpassword}
                    error={values.confirmpasswordError ? true : false}
                    onChange={(e) =>
                      handleChange("confirmpassword", e.target.value)
                    }
                    placeholder="Enter confirm password"
                    helperText="Confirm password is required"
                    InputProps={{
                      endAdornment: (
                        <EyeIcon
                          isVisible={passwordVisibility.confirmpassword}
                          toggleVisibility={() =>
                            togglePasswordVisibility("confirmpassword")
                          }
                        />
                      ),
                    }}
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.cnfpasserr}
                  </label>

                  {/* <Input
                    margin="normal"
                    // variant="outlined"
                    type="password"
                    name="confirmpassword"
                    value={values.confirmpassword}
                    error={
                      values.error && values.error.cnfpasserr ? true : false
                    }
                    // helperText={values.errortext && values.errortext.cnfpasserr}
                    placeholder="Enter your confirm password1"
                    onChange={(e) =>
                      handlers.handleChange("confirmpassword", e.target.value)
                    }
                    helperText="Confirm password is required"
                    required
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.cnfpasserr}
                  </label> */}
                </>
              )}
              <Grid container spacing={12}>
                {!paths && (
                  <Grid item lg={4} xs={4}>
                    <SimpleSelect
                      style={{ marginTop: "17.4px !important" }}
                      value={valuesadrees.salutation}
                      name={["Select"]}
                      selectData={[
                        { label: "Mr", value: "Mr" },
                        { label: "Mrs", value: "Mrs" },
                        { label: "Ms", value: "Ms" },
                      ]}
                      onChange={(e) =>
                        handlers.handlesetvaluesadrees(
                          "salutation",
                          e.target.value
                        )
                      }
                      required
                      helperText="Select salutation"
                    />
                  </Grid>
                )}
                {!paths && (
                  <>
                    <Grid item lg={4} xs={4}>
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="firstname"
                        value={values.firstname}
                        error={
                          values.error && values.error.firstname ? true : false
                        }
                        // helperText={values.errortext && values.errortext.firstname}
                        placeholder="First name*"
                        onChange={(e) =>
                          handlers.handleChange(
                            "firstname",
                            e.target.value.replace(/[^a-z]/gi, "")
                          )
                        }
                        className="text-f"
                        required
                        helperText="First Name is required"
                      />
                      <label className="errtext">
                        {" "}
                        {values.errortext && values.errortext.firstname}
                      </label>
                    </Grid>
                    <Grid item lg={4} xs={4}>
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="lastname"
                        value={values.lastname}
                        error={
                          values.error && values.error.lastname ? true : false
                        }
                        // helperText={values.errortext && values.errortext.lastname}
                        placeholder="Last name*"
                        onChange={(e) =>
                          handlers.handleChange(
                            "lastname",
                            e.target.value.replace(/[^a-z]/gi, "")
                          )
                        }
                        className="text-f"
                        // helperText=""
                        required
                        helperText="Last Name is required"
                      />
                    </Grid>
                  </>
                )}
              </Grid>

              {paths && (
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={12}>
                    <Grid item xs={6} lg={6}>
                      <SimpleSelect
                        name="country"
                        required
                        placeholder="Select your country"
                        selectData={countryCode ?? []}
                        onChange={(event) =>
                          handlers.handlesetvaluesadrees(
                            "country",
                            event.target.value
                          )
                        }
                        helperText="Country is required"
                        value={valuesadrees.country ?? ""}
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
                        type="tel"
                        name="pincode"
                        placeholder="Pin Code/Zip Code"
                        required
                        onChange={(e) =>
                          handlers.handlesetvaluesadrees(
                            "pincode",
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                        value={valuesadrees.pincode}
                        // onKeyPress={(e) => handle.handleKeyPress(e, "pincode")}
                        helperText="Pin code is required"
                        maxLength={6}
                        minLength={4}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={12}>
                    <Grid item xs={3} lg={3}>
                      <SimpleSelect
                        placeholder="Country"
                        name={"country_code"}
                        selectData={countryNum ?? []}
                        onChange={(event) =>
                          handlers.handlesetvaluesadrees(
                            "country_code",
                            event.target.value
                          )
                        }
                        value={valuesadrees.country_code}
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      xs={9}
                      lg={9}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                      }}
                    >
                      <Input
                        className="text-f"
                        type="tel"
                        name="contactno"
                        onBlur={handleMobileBlur}
                        onChange={(event) =>
                          handlers.handlesetvaluesadrees(
                            "contactno",
                            event.target.value
                          )
                        }
                        // onKeyPress={(e) => handle.handleKeyPress(e, "contactno")}
                        placeholder="Phone*"
                        value={valuesadrees.contactno}
                        helperText="Enter your valid mobile number"
                        isNumber
                        minLength={4}
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}

              <div className="login-butn">
                {paths || pathreg ? (
                  ""
                ) : (
                  <Button
                    className="back-b"
                    onClick={() => {
                      props.change();
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button className="apply-b" type="submit">
                  {paths ? "Save" : "Register"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Register;
