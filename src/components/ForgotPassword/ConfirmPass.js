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
import CommenDialog from '.././Common/Dialogmodel'


const LoginComponent = (props) => {
    const params = props.match.params.id;
    const [values, setValues] = React.useState({
        newpassword: "",
        newPasswordError: false,
        newPasswordHelperText: "",
        confirmPassword: "",
        confirmPasswordError: false,
        confirmPasswordHelper: "",
        modelOpen: false

    });
    const { loading, error, data, makeFetch } = useNetworkRequest('/resetpassword', {}, false, {})
    const canceldeletechecklist = () => {
        setValues({
            ...values, modelOpen: false,
        })
        props.history.push('/login')
    }

    const { classes } = props;
    const handelSubmit = async () => {
        if (values.newpassword === "") {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "Field can't be empty!" })
        }
        else if (values.confirmPassword === "") {
            setValues({ ...values, confirmPasswordError: true, confirmPasswordHelper: "Field can't be empty!" })
        }
        else if (values.newpassword.length < 8) {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "Password must be at least 8 characters!" })
        }
        else if (values.newpassword !== values.confirmPassword) {
            setValues({ ...values, confirmPasswordError: true, confirmPasswordHelper: "New password and Confirm password does not match!" })
        }
        else {
            var body = { "password": values.newpassword }
            await makeFetch(body, params);
            // setValues({ ...values, newpassword: "", confirmPassword: "", confirmPasswordHelper: data.message })
        }
    }

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value, newPasswordError: false, confirmPasswordError: false, newPasswordHelperText: "", confirmPasswordHelper: "" })
    }

    React.useEffect(() => {
        if (data && data.constructor !== Object) {
            try {
                setValues({ ...values, newpassword: "", confirmPassword: "", confirmPasswordHelper: data.message, modelOpen: true })
            } catch (error) {
                // console.log(error)
            }
        }
        if (data && data.constructor === Object) {
            try {
                setValues({ ...values, newpassword: "", confirmPassword: "", confirmPasswordHelper: data.message })
            } catch (error) {
                // console.log(error)
            }
        }

    }, [data])
    return (
        <Grid container>
            <Header />
            <Grid spacing={12} container style={{ padding: "3%" }}>
                <Grid item xs={6} lg={6} xs={12}>
                    <div >
                        <img width="100%" height="100%" src="https://assets.stylori.com/login_image.png" />
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
                                    autoComplete='off'
                                    value={values.newpassword}
                                    error={values.newPasswordError ? true : false}
                                    onChange={e => handleChange('newpassword', e.target.value)}
                                    placeholder="Enter new password"
                                />
                                <label className='errtext'> {values.newPasswordHelperText && values.newPasswordHelperText}</label>
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    autoComplete='off'
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    error={values.confirmPasswordError ? true : false}
                                    onChange={e => handleChange('confirmPassword', e.target.value)}
                                    placeholder="Enter confirm password"
                                />
                                <label className='errtext'> {values.confirmPasswordHelper && values.confirmPasswordHelper}</label>
                                <br></br>
                                <div style={{ float: "right" }}>
                                    <Button className='apply-b' type="submit">Reset</Button>
                                </div>


                            </form>
                        </div>
                    </Container>  </Grid>
                <CommenDialog isOpen={values.modelOpen} content={data} handleSuccess={canceldeletechecklist} positiveBtn="ok" title="Message" />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(withRouter(LoginComponent));