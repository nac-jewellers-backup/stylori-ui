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
import {
    Checkbox
} from '@material-ui/core';




const LoginComponent = (props) => {
    const [values, setValues] = React.useState({
        email: "",
        password: "",
        confirmpassword: "",
        roles: ["user"],
        firstname: "",
        lastname: "",
        errortext: {
            emerr: "",
            passerr: "",
            cnfpasserr: "",
            firstname: "",
            lastname: ""
        },
        error: {
            passerr: false,
            emerr: false,
            cnfpasserr: false,
            firstname: false,
            lastname: false
        }
    });
    const { classes } = props;
    const handelSubmit = () => {

    }

    const handleChange = () => {

    }

    React.useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <>
            <Grid container spacing={12}>
                <Grid item xs={12} >
                    <Header />
                </Grid>
            </Grid>
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
                                <div className={`${classes.normalfonts}`} style={{ fontSize: "18px" }}>  Forgot Password </div>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    error={values.error && values.error.emerr ? true : false}
                                    helperText={values.errortext && values.errortext.emerr}
                                    onChange={e => handleChange('email', e.target.value)}
                                    placeholder="Enter your email Id"
                                />
                                <label className='errtext'> {values.errortext && values.errortext.emerr}</label>
<br></br>
                                <div style={{ float: "right" }}>
                                    <Button className='apply-b' type="submit">Apply</Button>
                                </div>

                                <Grid spacing={12} container>
                                    <Grid item xs={6} lg={12} style={{ float: "left", marginBottom:"9px" }}>

                                        <Link className={classes.normalfonts} style={{
                                            cursor: "pointer", fontSize: "14px",
                                            marginRight: "50%"
                                        }} to="/login">Click here to Login</Link>


                                    </Grid>
                                    
                                    <Grid item xs={6} lg={12} style={{ float: "left" }}>

                                        <Link className={classes.normalfonts} style={{
                                            cursor: "pointer", fontSize: "14px",
                                            marginRight: "50%", textDecoration:'none'
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
        </>
    )
}


export default withStyles(styles)(withRouter(LoginComponent));