import React from 'react';
import './loginRegisters.css';
import { withRouter } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import styles from './style';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import useLogin from './useLogin';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = (props) => {
    return <LoginComponent  {...props} />
}
const useStyle = makeStyles(theme => ({
    helperinput: {
        '& .MuiFormHelperText-root': {
            color: "#e53935",
        }
    }
}))
const LoginComponent = (props) => {
    let url = "https://api-staging.stylori.com";
    const classes1 = useStyle();
    const { classes } = props;
    const { values, handlers, setValues, data } = useLogin(() => props.changePanel(2));
    const [open, setopen] = React.useState(false);
    const email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [loginInfo, setLoginInfo] = React.useState({
        email: "",
        first_name: "",
        last_name: "",
        phone_no: "",
        userId: "",
        error: {
            email: false,
            first_name: false,
            last_name: false
        },
        email_error_msg: "",
        first_name_invalid: "Enter the first name",
        last_name_invalid: "Enter the last name"

    })
    // const vl = data && data.message
    // // var prof = data.allUserAddresses ? data.allUserAddresses.nodes[0] : ""
    // var prof = data && data.message
    // // alert(JSON.stringify(data))
    const clear = () => {
        setValues({
            password: "",
            email: "",
            errortext: {
                emerr: "",
                passerr: "",
            },
            error: {
                passerr: false,
                emerr: false,
            }
        })
        props.change()
    }
    const responseFacebook = response => {
        // console.log(response, 'facebook');
        // alert(JSON.stringify(response))
        if (response.accessToken) {
            let body = {
                fbid: response.id
            }
            const opts = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            };
            fetch(`${url}/fbsignin`, opts)
                .then(res => res.json())
                .then(fetchValue => {
                    if (fetchValue.accessToken) {
                        localStorage.setItem('accessToken', fetchValue.accessToken);
                        localStorage.setItem('user_id', fetchValue.user.id)
                        localStorage.setItem('email', fetchValue.user.email)
                        localStorage.setItem('true', false)
                        localStorage.setItem('panel', 2);
                        let navlogin = localStorage.getItem('navfblogin');
                        if (navlogin === "true") {
                            props.history.push('/')
                        } else {
                            props.history.push('/Checkout')

                        }
                    } else {
                        if (typeof response.email === "undefined") {
                            setLoginInfo({
                                ...loginInfo,
                                first_name: response.first_name,
                                last_name: response.last_name,
                                userId: response.id
                            })
                            setopen(true)
                        } else {
                            let body = {
                                email: response.email,
                                firstname: response.first_name,
                                lastname: response.last_name,
                                fbid: response.id
                            }
                            const opts = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(body)
                            };
                            fetch(`${url}/fbsignup`, opts)
                                .then(res => res.json())
                                .then(fetchValue1 => {
                                    if (fetchValue1.accessToken) {
                                        localStorage.setItem('accessToken', fetchValue1.accessToken);
                                        localStorage.setItem('user_id', fetchValue1.user_profile.id)
                                        localStorage.setItem('email', fetchValue1.user_profile.email)

                                        localStorage.setItem('panel', 2);
                                        localStorage.setItem('isedit', 1);
                                        localStorage.setItem('true', false)
                                        let navlogin = localStorage.getItem('navfblogin');
                                        if (navlogin === "true") {
                                            props.history.push('/')
                                        } else {
                                            props.history.push('/Checkout')

                                        }
                                    }
                                })
                                .catch(console.error)
                        }
                    }
                })
                .catch(console.error)

            // console.log(response,"facebook")
            // props.history.push('/')
        }
    }
    function handleUserInfo(e, type) {
        setLoginInfo({
            ...loginInfo,
            [type]: e.target.value
        })
    }
    function handleButton(type) {
        if (type === 'save') {
            if (loginInfo.email === "") {
                let error = loginInfo.error;
                error.email = true;
                loginInfo["email_error_msg"] = "Enter the Email id"
                setLoginInfo({
                    ...loginInfo,
                    loginInfo,
                    error
                })
            } else if (loginInfo.email && !loginInfo.email.match(email_regex)) {
                let error = loginInfo.error;
                error.email = true;
                loginInfo['email_error_msg'] = "Email Id is invalid"
                setLoginInfo({
                    ...loginInfo,
                    loginInfo,
                    error

                })
            }
            else {
                let error = loginInfo.error;
                error.email = false;
                setLoginInfo({
                    ...loginInfo,
                    error
                })
            }
            if (loginInfo.first_name === "") {
                let error = loginInfo.error;
                error.first_name = true;
                setLoginInfo({
                    ...loginInfo,
                    error
                })
            } else {
                let error = loginInfo.error;
                error.first_name = false;
                setLoginInfo({
                    ...loginInfo,
                    error
                })
            }
            if (loginInfo.last_name === "") {
                let error = loginInfo.error;
                error.last_name = true;
                setLoginInfo({
                    ...loginInfo,
                    error
                })
            } else {
                let error = loginInfo.error;
                error.last_name = false;
                setLoginInfo({
                    ...loginInfo,
                    error
                })
            }
            if (loginInfo.last_name !== "" && loginInfo.first_name !== "" && loginInfo.email !== "" && loginInfo.email && loginInfo.email.match(email_regex)) {
                let error = {
                    email: false,
                    first_name: false,
                    last_name: false
                }
                setLoginInfo({
                    ...loginInfo,
                    error
                });
                let body = {
                    "fbid": loginInfo.userId,
                    "firstname": loginInfo.first_name,
                    "lastname": loginInfo.last_name,
                    "email": loginInfo.email,
                    "mobile": loginInfo.phone_no
                }
                const opts = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                };
                fetch(`${url}/fbsignup`, opts)
                    .then(res => res.json())
                    .then(fetchValue => {
                        if (fetchValue.accessToken) {
                            localStorage.setItem('accessToken', fetchValue.accessToken);
                            localStorage.setItem('user_id', fetchValue.user_profile.id)
                            localStorage.setItem('email', fetchValue.user_profile.email)
                            localStorage.setItem('panel', 2);
                            localStorage.setItem('isedit', 1);

                            localStorage.setItem('true', false)
                            let navlogin = localStorage.getItem('navfblogin');
                            if (navlogin === "true") {
                                props.history.push('/')
                            } else {
                                props.history.push('/Checkout')

                            }
                        }
                    })
                    .catch(console.error)
            }
        } else {
            setLoginInfo({
                ...loginInfo,
                first_name: "",
                last_name: "",
                userId: "",
                email: "",
                phone_no: ""
            })
            setopen(false);
        }
    }
    return (
        <>
            <div className='pt-sm'>
                <form action="javascript:void(0)" onSubmit={(e) => { handlers.handelSubmit(e, props.history.push) }}>
                    <Grid container item xs={12} lg={window.location.pathname === "/login" ? 12 : 6}>
                        <h5 className={`title ${classes.normalfonts}`}>
                            {window.location.pathname === "/login" ? "Login" : "I already have an account"}
                        </h5>
                        <Input
                            margin="normal"
                            // variant="outlined"
                            // type="email"
                            name="email"
                            value={values.email}
                            error={values.error && values.error.emerr ? true : false}
                            helperText={values.errortext && values.errortext.emerr}
                            onChange={e => handlers.handleChange('email', e.target.value)}
                            placeholder="Enter your email Id"
                        />
                        <label className='errtext'> {values.error.emerr && values.errortext.emerr}</label>
                        <Input
                            margin="normal"
                            // variant="outlined"
                            type="password"
                            name="password"
                            value={values.password}
                            error={values.error && values.error.passerr ? true : false}
                            helperText={values.errortext && values.errortext.passerr}
                            placeholder="Enter your password"
                            onChange={e => handlers.handleChange('password', e.target.value)}
                        />
                        <label className='errtext'> {values.error.passerr && values.errortext.passerr}</label>
                        <div className='log-pas'>
                            <span onClick={() => { window.location.href = '/forgotPassword' }} className={`pas-fr ${classes.normalfonts}`} style={{ cursor: "pointer" }}>Forgot Password ?</span>
                            <div className={`pas-fb ${classes.normalfonts}`} style={{ cursor: "pointer" }}>
                                <FacebookLogin
                                    appId="183747199380935"
                                    // autoLoad={true}
                                    fields="name,email,id,first_name,last_name"
                                    callback={responseFacebook}
                                    cssClass="my-facebook-button-class"
                                    icon="fab fa-facebook-square fb"
                                    disableMobileRedirect={true}
                                />
                                {/* <InstagramLogin
                                clientId="508169029820675"
                                buttonText="Login"
                                onSuccess={responseInstagram}
                                onFailure={responseInstagram}
                        /> */}
                                {/* <img class="pull-left1" alt="" src="https://assets.stylori.com/images/static/icon-fb.png"></img> */}
                            </div >
                        </div>
                        <div className='login-butn'>
                            {window.location.pathname === "/login" ? "" : <Button className='back-b' onClick={() => clear()} >Back</Button>}
                            <Button className='apply-b' type="submit"> {window.location.pathname === "/login" ? "Login" : "Login"}</Button>
                        </div>
                    </Grid>
                </form>
            </div>

            <div>
                <Dialog
                    open={open}

                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">We Need Some More of Your Details to Log you in</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    className={classes1.helperinput}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    defaultValue={loginInfo.email}
                                    id="email"
                                    error={loginInfo && loginInfo.error && loginInfo.error.email}
                                    onChange={(e) => handleUserInfo(e, 'email')}
                                    name="email"
                                    label="Email*"
                                    helperText={loginInfo.error && loginInfo.error.email && loginInfo.email_error_msg}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    className={classes1.helperinput}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    defaultValue={loginInfo.first_name}
                                    id="first_name"
                                    error={loginInfo && loginInfo.error && loginInfo.error.first_name}
                                    onChange={(e) => handleUserInfo(e, 'first_name')}
                                    name="first_name"
                                    label="First Name*"
                                    helperText={loginInfo.error && loginInfo.error.first_name && loginInfo.first_name_invalid}


                                />
                                {/* <label className='errtext'> {values.error.passerr && values.errortext.passerr}</label> */}
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    className={classes1.helperinput}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    defaultValue={loginInfo.last_name}
                                    id="last_name"
                                    error={loginInfo && loginInfo.error && loginInfo.error.last_name}
                                    onChange={(e) => handleUserInfo(e, 'last_name')}
                                    name="last_name"
                                    label="Last Name*"
                                    helperText={loginInfo.error && loginInfo.error.last_name && loginInfo.last_name_invalid}
                                />
                                {/* <label className='errtext'> {values.error.passerr && values.errortext.passerr}</label> */}
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    className={classes1.helperinput}
                                    type="tel"
                                    variant="outlined"
                                    margin="dense"
                                    maxLength="10"
                                    fullWidth
                                    defaultValue={loginInfo.phone_no}
                                    id="phone_no"
                                    // error={productCtx && productCtx.error_message && productCtx.error_message.productname}
                                    onChange={(e) => handleUserInfo(e, 'phone_no')}
                                    name="phone_no"
                                    label="Phone Number"

                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={() => handleButton("save")} color="primary">
                            Save
             </Button>
                        <Button variant="contained" onClick={() => handleButton("cancel")} color="default">
                            Cancel
             </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>

    )
}
export default withStyles(styles)(withRouter(Login));