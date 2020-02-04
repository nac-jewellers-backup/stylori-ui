import React from 'react';
// import './product-image-slider/loginRegisters.css'
import { Grid, Button, Container } from '@material-ui/core';
import { Input } from '../../components/InputComponents/TextField/Input'
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
// import {
//     Checkbox
// } from '@material-ui/core';
// import { API_URL } from '../../config'
import { useNetworkRequest } from '../../hooks/NetworkHooks'
// import { async } from 'q';
import CommenDialog from '.././Common/Dialogmodel'


const LoginComponent = (props) => {
    const [values, setValues] = React.useState({
        email: "",
        roles: ["user"],
        firstname: "",
        lastname: "",
        error: false,
        errorText: "",
        modelOpen: false

    });
    const { classes } = props;
    const {
        // loading: ntx, 
        // error: ntxerr,
        data: ntxdata, makeFetch } = useNetworkRequest('/forgotpassword', {}, false, {})
    const canceldeletechecklist = () => {
        setValues({
            ...values, modelOpen: false,
        })
    }
    const handelSubmit = async () => {
        // let regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        // let email = values.email;
        if (values.email === "") {
            setValues({ ...values, error: true, errorText: "Please enter email!" })
        }
        else {
            let emails = { "email": values.email }
            await makeFetch(emails);
        }
    }
    React.useEffect(() => {
        if (ntxdata && Object.entries(ntxdata).length > 0 && ntxdata.constructor === Object) {
            try {
                if (ntxdata.status === "failure") {
                    setValues({ ...values, error: true, errorText: ntxdata.message })
                }
                else if (ntxdata.status === "success") {
                    setValues({ ...values, email: "", modelOpen: true })
                }
            } catch (error) {
                // console.log(error)
            }
        }

    }, [ntxdata])
    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value, error: false, errorText: "" })
    }
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
                                <div className={`${classes.normalfonts}`} style={{ fontSize: "18px" }}>  Forgot Password </div>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    autoComplete='off'
                                    name="email"
                                    value={values.email}
                                    error={values.error ? true : false}
                                    onChange={e => handleChange('email', e.target.value)}
                                    placeholder="Enter your email Id"
                                />
                                <label className='errtext'> {values.errorText && values.errorText}</label>
                                <br></br>
                                <div style={{ float: "right" }}>
                                    <Button className='apply-b' type="submit">Reset</Button>
                                </div>

                                <Grid spacing={12} container>
                                    <Grid item xs={12} lg={12} style={{ float: "left", marginBottom: "9px" }}>

                                        <Link className={classes.normalfonts} style={{
                                            cursor: "pointer", fontSize: "14px",
                                            marginRight: "50%"
                                        }} to="/login">Click here to Login</Link>


                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>  </Grid>
                <CommenDialog isOpen={values.modelOpen} content={ntxdata.message} handleSuccess={canceldeletechecklist} positiveBtn="ok" title="Forgot password" />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(withRouter(LoginComponent));