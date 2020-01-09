import React from 'react';
// import './product-image-slider/loginRegisters.css'
import { Grid, Button, Container, TextField } from '@material-ui/core';
import { Input } from '../../components/InputComponents/TextField/Input'
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import {
    Checkbox
} from '@material-ui/core';
import { useNetworkRequest } from '../../hooks/NetworkHooks'
import { async } from 'q';



const LoginComponent = (props) => {
    const params = props.match.params.id;
    const [values, setValues] = React.useState({
        newpassword: "",
        newPasswordError: false,
        newPasswordHelperText: "",
        confirmPassword: "",
        confirmPasswordError: false,
        confirmPasswordHelper: ""

    });
    const { loading, error, data, makeFetch } = useNetworkRequest('/resetpassword', {}, false, {})

    const { classes } = props;
    const handelSubmit = async () => {
        if (values.newpassword === "") {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "please enter some text!" })
        }
        else if (values.confirmPassword === "") {
            setValues({ ...values, confirmPasswordError: true, confirmPasswordHelper: "please enter some text!" })
        }
        else if (values.newpassword.length < 8) {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "please enter minimum 8 character" })
        }
        else if (values.newpassword !== values.confirmPassword) {
            setValues({ ...values, confirmPasswordError: true, confirmPasswordHelper: "Newpassword and confirm password or not same!" })
        }
        else {
            var body = { "password": values.newpassword }
            await makeFetch(body, params);
        }
    }

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value, newPasswordError: false, confirmPasswordError: false, newPasswordHelperText: "", confirmPasswordHelper: "" })
    }

    React.useEffect(() => {
        if (data && data.constructor !== Object) {
            try {
                setValues({ ...values, newpassword: "", confirmPassword: "" })
                props.history.push('/login')
            } catch (error) {
                alert(error)
            }
        }

    }, [data])
    return (
        <Grid container>
            <Header />
            <Grid spacing={12} container style={{ padding: "3%" }}>
                <Grid item xs={6} lg={6} xs={12}>
                    <div >
                        <img width="100%" height="100%" src="https://styloriimages.s3.ap-south-1.amazonaws.com/login_image.png" />
                    </div>
                </Grid>

                <Grid item xs={6} lg={6} xs={12}>
                    <Container className={classes._container}>
                        <div className='pt-sm' style={{ width: "100%", float: "right" }}>
                            <form action="javascript:void(0)" onSubmit={(e) => {
                                handelSubmit(e)
                            }}>
                                <div className={`${classes.normalfonts}`} style={{ fontSize: "18px" }}>Reset Password </div>
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    name="email"
                                    value={values.newpassword}
                                    error={values.newPasswordError ? true : false}
                                    onChange={e => handleChange('newpassword', e.target.value)}
                                    placeholder="Enter new password"
                                />
                                <label className='errtext'> {values.newPasswordHelperText && values.newPasswordHelperText}</label>
                                {/* <br></br> */}
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    error={values.confirmPasswordError ? true : false}
                                    // helperText={values.confirmPassword && values.confirmPassword.emerr}
                                    onChange={e => handleChange('confirmPassword', e.target.value)}
                                    placeholder="Enter confirm password"
                                />
                                <label className='errtext'> {values.confirmPasswordHelper && values.confirmPasswordHelper}</label>
                                <br></br>
                                <div style={{ float: "right" }}>
                                    <Button className='apply-b' type="submit">Apply</Button>
                                </div>

                                <Grid spacing={12} container>
                                    <Grid item xs={6} lg={12} style={{ float: "left", marginBottom: "9px" }}>

                                        <Link className={classes.normalfonts} style={{
                                            cursor: "pointer", fontSize: "14px",
                                            marginRight: "50%"
                                        }} to="/login">Click here to Login</Link>


                                    </Grid>

                                    <Grid item xs={6} lg={12} style={{ float: "left" }}>

                                        <Link className={classes.normalfonts} style={{
                                            cursor: "pointer", fontSize: "14px",
                                            marginRight: "50%", textDecoration: 'none'
                                        }} to="/registers">Register</Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>  </Grid>
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(withRouter(LoginComponent));