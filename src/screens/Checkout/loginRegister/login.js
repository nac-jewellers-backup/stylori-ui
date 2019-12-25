import React from 'react';
import './loginRegisters.css'
import { Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import useLogin from './useLogin';
import FacebookLogin from 'react-facebook-login';
import  { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

const Login = (props) => {
    return <LoginComponent  {...props} />
}

const LoginComponent = (props) => {
    const { classes } = props;
    const { values, handlers, setValues, data } = useLogin(() => props.changePanel(2));
    // const vl = data && data.message
    // // var prof = data.allUserAddresses ? data.allUserAddresses.nodes[0] : ""
    // var prof = data && data.message
    // // alert(JSON.stringify(data))
    // console.log('valuesvaluesvalues', values)
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
        console.log(response)
        // window.location.href='/home';
        props.history.push('/home')
    }
    return (
        <div className='pt-sm'>
            <form action="javascript:void(0)" onSubmit={(e) => {
                handlers.handelSubmit(e)
            }}>
                <Grid container item xs={12} lg={window.location.pathname === "/login" ? 12 : 6}>
                    <h5 className={`title ${classes.normalfonts}`}>
                    {window.location.pathname === "/login" ? "Login" : "I already have an account"}
                           </h5>
                    <Input
                        margin="normal"
                        variant="outlined"
                        // type="email"
                        name="email"
                        value={values.email}
                        error={values.error && values.error.emerr ? true : false}
                        // helperText={values.errortext && values.errortext.emerr}
                        onChange={e => handlers.handleChange('email', e.target.value)}
                        placeholder="Enter your email Id"
                    />
                    <label className='errtext'> {values.errortext && values.errortext.emerr}</label>
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="password"
                        name="password"
                        value={values.password}
                        error={values.error && values.error.passerr ? true : false}
                        // helperText={values.errortext && values.errortext.passerr}
                        placeholder="Enter your password"
                        onChange={e => handlers.handleChange('password', e.target.value)}
                    />
                    <label className='errtext'> {values.errortext && values.errortext.passerr}</label>
                    <div className='log-pas'>
                        <span className={`pas-fr ${classes.normalfonts}`} style={{ cursor: "pointer" }}>Forgot Password ?</span>
                        <div className={`pas-fb ${classes.normalfonts}`} style={{ cursor: "pointer" }}>
                        <FacebookLogin
                            appId="2777718598973911"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                        />
                          {/* <InstagramLogin
                                clientId="508169029820675"
                                buttonText="Login"
                                onSuccess={responseInstagram}
                                onFailure={responseInstagram}
                        /> */}
                            <img class="pull-left1" alt="" src="https://assets-cdn.stylori.com/images/static/icon-fb.png"></img>
                        </div >
                    </div>
                    <div className='login-butn'>
                        {window.location.pathname === "/login" ? "" : <Button className='back-b' onClick={() => clear()} >Back</Button>}
                        <Button className='apply-b' type="submit"> {window.location.pathname === "/login" ? "Login" :"Apply"}</Button>
                    </div>

                </Grid>
            </form>
        </div>
    )
}


export default withStyles(styles)(withRouter(Login));