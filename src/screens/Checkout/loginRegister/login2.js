import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import facebook from "../../../assets/facebook.svg";
import gmail from "../../../assets/gmail.svg";
import { AiOutlineMobile } from "react-icons/ai";
import { useNetworkRequest } from "hooks/index";
import { makeStyles } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import "index.css";
import { useGoogleLogin } from "@react-oauth/google";
import useLogin from "./useLogin";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { API_URL, FACEBOOK_APP_ID } from "../../../config";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mobile: {
    marginLeft: "150px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
}));

function Login2(props) {
  const history = useHistory();
  const classes = useStyles();

  let url = API_URL;
  const [values, setValues] = useState({
    email: "",
    password: "",
    roles: ["user"],
    error: {
      email: "",
      password: "",
    },
  });

  const [number, setNumber] = useState({
    mobile: "",
    otp: "",
    otpemail: "",
    error: {
      mobile: "",
      otp: "",
      otpemail: "",
    },
  });

  const [condition, setCondition] = useState({
    isMobile: false,
    isOtp: false,
    alert: false,
    alertMsg: "",
    cls: false,
  });

  const { handlers } = useLogin(() => props.changePanel(2));

  const ValidateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };

  // Send OTP
  const SendOTP = () => {
    window.scrollTo(0, 0);
    if (
      number?.mobile &&
      number?.mobile?.length === 10 &&
      ValidateEmail(number.otpemail)
    ) {
      let error = number.error;
      error.otpemail = "";
      error.mobile = "";
      setNumber({ ...number, error });
      let body = {
        mobile_no: number.mobile,
        email: number.otpemail,
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${API_URL}/send_otp`, opts)
        .then((res) => {
          res.json();
        })
        .then((fetchValue) => {
          setCondition({
            ...condition,
            isOtp: true,
            alert: true,
            alertMsg: "OTP success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (!ValidateEmail(number.otpemail)) {
        let error = number.error;
        error.otpemail = "Please enter valid email id";
        setNumber({ ...number, error });
      }

      if (number?.mobile?.length !== 10) {
        let error = number.error;
        error.mobile = "Please enter valid number";
        setNumber({ ...number, error });
      }
    }
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (number?.otp && number?.otp?.length === 6) {
      let error = number.error;
      error.otp = "";
      setNumber({ ...number, error });
      let body = {
        mobile_no: number.mobile,
        otp: number.otp,
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${API_URL}/verify_otp`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          handlers.VerifyOTP(fetchValue);
          setCondition({
            ...condition,
            alert: true,
            alertMsg: "OTP validated",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let error = number.error;
      error.otp = "Please enter valid OTP";
      setNumber({ ...number, error });
    }
  };

  const ResendOtp = () => {
    let body = {
      mobile_no: number.mobile,
    };
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(`${API_URL}/send_otp`, opts)
      .then((res) => res.json())
      .then((fetchValue) => {
        setCondition({ ...condition, isOtp: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const email_regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleChange = (value, key) => {
    let error = values.error;
    error[key] = "";
    setValues({ ...values, [key]: value, error });
  };

  const handleMobileChange = (value, key) => {
    let error = number.error;
    error[key] = "";
    setNumber({ ...number, [key]: value, error });
  };

  const responseFacebook = (response) => {
    if (response) {
      let body = {
        type: "facebook",
        mediaBody: {
          ...response,
          firstName: response.given_name,
          lastName: response.familyName,
        },
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${url}/api/auth/mediasignin`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          if (fetchValue.accessToken) {
            localStorage.setItem("accessToken", fetchValue.accessToken);
            localStorage.setItem("user_id", fetchValue.user.id);
            localStorage.setItem("email", fetchValue.user.email);
            handlers.FacebookLogin(fetchValue);
          } else {
            if (typeof response.email === "undefined") {
              setValues({
                ...values,
                first_name: response.first_name,
                last_name: response.last_name,
                userId: response.id,
              });
            } else {
            }
          }
        })
        .catch(console.error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${access_token}` },
        })
        .then((res) => responseGoogle(res.data));
    },
  });

  const responseGoogle = (response) => {
    if (response) {
      let body = {
        type: "google",
        mediaBody: {
          id: response?.googleId,
          ...response?.profileObj,
          firstName: response?.profileObj?.givenName,
          lastName: response?.profileObj?.familyName,
        },
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${url}/api/auth/mediasignin`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          if (fetchValue.accessToken) {
            handlers.VerifyOTP(fetchValue);
          }
        })
        .catch(console.error);
    }
  };

  const isIamValideToLogin = () => {
    let isValid = true;
    let error = values.error;

    if (values.email === "") {
      isValid = false;
      error.email = "Enter the Email id";
    }

    if (values.email && !values.email.match(email_regex)) {
      isValid = false;
      error.email = "Email Id is invalid";
    }

    if (values.password === "") {
      isValid = false;
      error.password = "Enter Password";
    }

    if (values.email !== "" && values.password !== "") {
      isValid = true;
    }

    setValues({ ...values, error });
    return isValid;
  };

  const onSubmit = () => {
    if (isIamValideToLogin) {
      let obj_values = {};
      let _password = values.password;
      let _email = values.email;
      let _roles = values.roles;
      obj_values = { password: _password, email: _email, roles: _roles };
      makeFetch(obj_values);
    } else {
    }
  };

  const onRegister = () => {
    history.replace("/registers");
  };

  const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest(
    "/api/auth/signin",
    {},
    []
  );

  useEffect(() => {
    var ms = data && data.message;
    if (ms && data.auth === false) {
      let error = values.error;
      error.password = ms;
      setValues({ ...values, error });
    } else if (ms && data.auth === undefined) {
      let error = values.error;
      error.email = ms;
      setValues({
        ...values,
        error,
      });
    } else {
      if (data?.accessToken) {
        handlers.VerifyOTP(data);
        localStorage.setItem("check_dlt", false);
        localStorage.setItem("isedit", 1);
        localStorage.setItem("true", false);
      }
    }
  }, [data]);

  return (
    <div>
      <Grid constainer style={{ display: "flex", flexDirection: "column" }}>
        <Grid item style={{ backgroundColor: "#E6E7E8", padding: 30 }} xs={12}>
          <IconButton
            style={{ position: "absolute", right: 5, top: 2 }}
            onClick={props.handleClose}
          >
            <Clear />
          </IconButton>
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              alt="images"
              loading="lazy"
              src="static/media/Stylorilogo.svg"
              style={{ width: "30%", height: "30%" }}
            ></img>
            <Box className="divider" />
            <img
              alt="images"
              loading="lazy"
              src="static/media/stylori_silver_logo.svg"
              style={{ width: "30%", height: "30%" }}
            ></img>
          </Box>
          <Box display="flex" justifyContent="center">
            <p className="textMain">
              WELCOME TO THE <span className="textSide">STYLORI</span> FAM!
            </p>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography>
              Login to shop for the best of both worlds :)
            </Typography>
          </Box>
          <Divider style={{ backgroundColor: "#111" }} />
          <Grid container spacing={1} style={{ marginTop: 10 }}>
            <Grid item xs={12} lg={6}>
              <FacebookLogin
                appId={FACEBOOK_APP_ID}
                autoLoad={false}
                callback={responseFacebook}
                fields="name,email,first_name,last_name"
                render={(renderProps) => (
                  <Button
                    className="button"
                    variant="contained"
                    fullWidth
                    onClick={renderProps.onClick}
                    startIcon={
                      <img
                        src={facebook}
                        alt="facebook"
                        loading="lazy"
                        style={{ width: "60%", height: "60%" }}
                      />
                    }
                  >
                    Sign in with Facebook
                  </Button>
                )}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Button
                className="button"
                variant="contained"
                fullWidth
                onClick={() => login()}
                startIcon={
                  <img
                    src={gmail}
                    alt="gmail"
                    loading="lazy"
                    style={{ width: "60%", height: "60%" }}
                  />
                }
              >
                Sign in with Google
              </Button>
            </Grid>
            <Grid item xs={12} lg={6} className={classes.mobile}>
              {condition.isMobile ? (
                <Button
                  className="button"
                  variant="contained"
                  fullWidth
                  style={{ padding: 10 }}
                  startIcon={<AiOutlineMobile style={{ color: "#E28CAB" }} />}
                  onClick={() =>
                    setCondition({
                      ...condition,
                      isMobile: !condition.isMobile,
                      isOtp: false,
                    })
                  }
                >
                  Sign in with Email
                </Button>
              ) : (
                <Button
                  className="button"
                  variant="contained"
                  fullWidth
                  style={{ padding: 10 }}
                  startIcon={<AiOutlineMobile style={{ color: "#E28CAB" }} />}
                  onClick={() =>
                    setCondition({
                      ...condition,
                      isMobile: !condition.isMobile,
                      isOtp: false,
                    })
                  }
                >
                  Sign in with OTP
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ backgroundColor: "#fff", padding: 30 }} xs={12}>
          <Box display="flex" justifyContent="center">
            {condition.isMobile ? (
              <Typography className="login">OTP Login</Typography>
            ) : (
              <Typography className="login">
                Email Login For Registered Users
              </Typography>
            )}
          </Box>
          {condition.isMobile ? (
            <div>
              {condition.isOtp ? (
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Enter OTP"
                      type="number"
                      value={number.otp}
                      onChange={(e) =>
                        handleMobileChange(e.target.value, "otp")
                      }
                      fullWidth
                    />
                    {number.error.otp !== "" && (
                      <Typography style={{ fontSize: "10px", color: "red" }}>
                        {number.error.otp}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ color: "#fff", backgroundColor: "#6D6E71" }}
                      onClick={() => ValidateOtp()}
                    >
                      Validate OTP
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ color: "#fff", backgroundColor: "#6D6E71" }}
                      onClick={() => ResendOtp()}
                    >
                      Resend OTP
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Mobile Number"
                      type="number"
                      value={number.mobile}
                      onChange={(e) =>
                        handleMobileChange(e.target.value, "mobile")
                      }
                      fullWidth
                    />
                    {number.error.mobile !== "" && (
                      <Typography style={{ fontSize: "10px", color: "red" }}>
                        {number.error.mobile}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-start-adornment"
                      placeholder="Email address"
                      value={number.otpemail}
                      onChange={(e) =>
                        handleMobileChange(e.target.value, "otpemail")
                      }
                      fullWidth
                    />
                    {number.error.otpemail !== "" && (
                      <Typography style={{ fontSize: "10px", color: "red" }}>
                        {number.error.otpemail}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ color: "#fff", backgroundColor: "#6D6E71" }}
                      onClick={() => SendOTP()}
                    >
                      Send OTP
                    </Button>
                  </Grid>
                </Grid>
              )}
            </div>
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  id="standard-start-adornment"
                  placeholder="Email address"
                  value={values.email}
                  onChange={(e) => handleChange(e.target.value, "email")}
                  fullWidth
                />
                {values.error.email !== "" && (
                  <Typography style={{ fontSize: "10px", color: "red" }}>
                    {values.error.email}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-start-adornment"
                  placeholder="Password"
                  type="password"
                  value={values.password}
                  onChange={(e) => handleChange(e.target.value, "password")}
                  fullWidth
                />
                {values.error.password !== "" && (
                  <Typography style={{ fontSize: "10px", color: "red" }}>
                    {values.error.password}
                  </Typography>
                )}
                <span className="forgotPassword">
                  <Typography onClick={() => onRegister()}>
                    Forget password?
                  </Typography>
                </span>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    color: "#fff",
                    backgroundColor: props.isGuest ? "#d51f63" : "#6D6E71",
                  }}
                  onClick={() => onSubmit()}
                >
                  LOG IN
                </Button>
                <span className="signup">
                  <Typography style={{ paddingTop: 10 }}>
                    New To Stylori ?
                    <span
                      style={{ fontWeight: 700, cursor: "pointer" }}
                      onClick={onRegister}
                    >
                      Sign Up
                    </span>
                  </Typography>
                </span>
              </Grid>
            </Grid>
          )}
        </Grid>
        {props.isGuest ? (
          <Grid item xs={12} style={{ paddingTop: 10 }}>
            <Divider style={{ border: "1px solid #6D6E71", marginTop: 20 }} />
            <Typography className="checkout-new">
              Guest Checkout ? Not Ready to become a Member Yet ?
            </Typography>
            {condition.isMobile ? (
              <Button
                className="button-check"
                variant="contained"
                fullWidth
                style={{ padding: 10, marginTop: 10 }}
                onClick={() =>
                  setCondition({
                    ...condition,
                    isMobile: !condition.isMobile,
                    isOtp: false,
                  })
                }
              >
                Continue with Email
              </Button>
            ) : (
              <Button
                className="button-check"
                variant="contained"
                fullWidth
                style={{ padding: 10, marginTop: 10 }}
                onClick={() =>
                  setCondition({
                    ...condition,
                    isMobile: !condition.isMobile,
                    isOtp: false,
                  })
                }
              >
                Continue as Guest
              </Button>
            )}
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default Login2;
