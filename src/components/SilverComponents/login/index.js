import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import facebook from "../../../assets/facebook.svg";
import gmail from "../../../assets/gmail.svg";
import { AiOutlineMobile } from "react-icons/ai";
import { useNetworkRequest } from "hooks/index";
import { makeStyles } from "@material-ui/core";
import { SimpleSnackbar } from "../Alert";
import { Clear } from "@material-ui/icons";
import "index.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import useLogin from "screens/Checkout/loginRegister/useLogin";
import { API_URL, FACEBOOK_APP_ID } from "../../../config";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mobile: {
    marginLeft: "150px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
}));

function Login(props) {
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
    alertSev: "",
    cls: false,
  });

  useEffect(() => {
    setCondition({ ...condition, alert: false });
  }, []);


  const { handlers } = useLogin(() => props.handleClose());

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
            alertSev: "success",
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
          if (fetchValue.accessToken) {
            localStorage.setItem("accessToken", fetchValue.accessToken);
            localStorage.setItem("user_id", fetchValue.user.id);
            localStorage.setItem("email", fetchValue.user.email);
            
              props.handleClose();
          
          }
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
          firstName: response.first_name,
          lastName: response.last_name,
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
            localStorage.setItem("user_id", fetchValue.userprofile.id);
            localStorage.setItem("email", fetchValue.userprofile.email);
            localStorage.setItem("true",true)
            props.handleClose();
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
          id: response?.sub,
          ...response,
          firstName: response?.givenName,
          lastName: response?.familyName,
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
            localStorage.setItem("user_id", fetchValue.userprofile.id);
            localStorage.setItem("email", fetchValue.userprofile.email);
            localStorage.setItem("true",true)
            handlers.VerifyOTP(fetchValue)
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
  const isIamValideToLogin = () => {
    let isValid = true;
    let error = { ...values.error }; // Make a copy of the error object
    console.log(values,"values");
    if (values.email === "") {
      isValid = false;
      error.email = "Enter Email Id";
    } else if (!values.email.match(email_regex)) {
      isValid = false;
      error.email = "Email Id is invalid";
    }
    else if (values.password === "") {
      isValid = false;
      error.password = "Enter Password";
    }   

    setValues({ ...values, error }); // Update the error messages
    return isValid;
  };

  // const isIamValideToLogin = () => {
  //   let isValid = true;
  //   let error = values.error;

  //   if (values.email === "") {
  //     isValid = false;
  //     error.email = "Enter Email Id";
  //   }

  //   if (values.email && !values.email.match(email_regex)) {
  //     isValid = false;
  //     error.email = "Email Id is invalid";
  //   }

  //   if (values.password === "") {
  //     isValid = false;
  //     error.password = "Enter Password";
  //   }

  //   if (values.email !== "" && values.password !== "") {
  //     isValid = true;
  //   }

  //   setValues({ ...values, error });
  //   return isValid;
  // };

  const onSubmit = () => {
    if (isIamValideToLogin()) {
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

  const onClose = () => {
    setCondition({ ...condition, alert: false });
  };

  const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest(
    "/api/auth/signin",
    {},
    []
  );

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem("email", data.userprofile.email);
      var bb = data.userprofile.id ? data.userprofile.id : "";
      localStorage.setItem("user_id", bb);
      sessionStorage.setItem("user_id", bb);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("check_dlt", false);
      localStorage.setItem("isedit", 1);
      localStorage.setItem("true", false);
      setCondition({
        ...condition,
        alert: true,
        alertMsg: "Login Success",
        alertSev: "success",
      });
      setTimeout(function () {
        //Start the timer
        setCondition({ ...condition, cls: true }); //After 1 second, set render to true
      }, 1000);
    } else if (data?.message) {
      setCondition({
        ...condition,
        alert: true,
        alertMsg: data.message,
        alertSev: "error",
      });
    }
  }, [data]);

  useEffect(() => {
    if (condition.cls === true) {
      if(props.handleClose){
        props.handleClose();
      }
    }
  }, [condition.cls]);

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent className="slide">
          <Grid constainer style={{ display: "flex", flexDirection: "column" }}>
            <Grid
              item
              style={{ backgroundColor: "#E6E7E8", padding: 30 }}
              xs={12}
            >
              <IconButton
                style={{ position: "absolute", right: 5, top: 2 }}
                onClick={props.handleClose}
              >
                <Clear />
              </IconButton>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  src="static/media/Stylorilogo.svg"
                  style={{ width: "30%", height: "30%" }}
                  alt="images"
                  loading="lazy"
                ></img>
                <Box className="divider" />
                <img
                  src="static/media/stylori_silver_logo.svg"
                  style={{ width: "30%", height: "30%" }}
                  alt="images"
                  loading="lazy"
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
                            alt="facebbok"
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
                  {/* <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (                      
                    )}
                  /> */}
                </Grid>
                <Grid item xs={12} lg={6} className={classes.mobile}>
                  {condition.isMobile ? (
                    <Button
                      className="button"
                      variant="contained"
                      fullWidth
                      style={{ padding: 10 }}
                      startIcon={
                        <AiOutlineMobile style={{ color: "#E28CAB" }} />
                      }
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
                      startIcon={
                        <AiOutlineMobile style={{ color: "#E28CAB" }} />
                      }
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
                          type="tel"
                          value={number.otp}
                          onChange={(e) =>
                            handleMobileChange(e.target.value.replace(/\D/g,""), "otp")
                          }
                          
                          fullWidth
                        />
                        {number.error.otp !== "" && (
                          <Typography
                            style={{ fontSize: "10px", color: "red" }}
                          >
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
                          type="tel"
                          value={number.mobile}
                          onChange={(e) =>
                            handleMobileChange(e.target.value.replace(/\D/g,""),"mobile")
                          }
                          pattern="[0-9]*"
                          fullWidth
                        />
                        {number.error.mobile !== "" && (
                          <Typography
                            style={{ fontSize: "10px", color: "red" }}
                          >
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
                          <Typography
                            style={{ fontSize: "10px", color: "red" }}
                          >
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
                      <Typography onClick={() => { window.location.href = '/forgotPassword' }}>
                        Forget password?
                      </Typography>
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ color: "#fff", backgroundColor: "#6D6E71" }}
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
          </Grid>
        </DialogContent>
        {condition.alert ? (
          <SimpleSnackbar
            severity={condition?.alertSev}
            message={condition?.alertMsg}
            open={condition?.alert}
            handleClose={onClose}
          />
        ) : null}
      </Dialog>
    </div>
  );
}

export default Login;


