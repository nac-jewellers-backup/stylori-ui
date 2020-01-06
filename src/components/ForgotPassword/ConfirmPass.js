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




const LoginComponent = (props) => {
    const [values, setValues] = React.useState({
        newpassword: "",
        confirmPassword: "",

        newpassword: {
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
        alert("cfbyu")
    }

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value })
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <Grid container>
            {/* <Grid container > */}
            <Grid></Grid>
            <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000", width: "100%" }}>
                <Header />
                {/* </Grid> */}
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
                                <div className={`${classes.normalfonts}`} style={{ fontSize: "18px" }}>Change Password </div>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    name="email"
                                    value={values.newpassword}
                                    error={values.newpassword && values.newpassword.emerr ? true : false}
                                    helperText={values.newpasswordText && values.newpasswordText.emerr}
                                    onChange={e => handleChange('newpassword', e.target.value)}
                                    placeholder="Enter new password"
                                />
                                <label className='errtext'> {values.errortext && values.errortext.emerr}</label>
                                {/* <br></br> */}
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    // label="Confirm Password"
                                    name="confirmPassword"
                                    value={values.email}
                                    error={values.confirmPassword && values.confirmPassword.emerr ? true : false}
                                    helperText={values.confirmPassword && values.confirmPassword.emerr}
                                    onChange={e => handleChange('confirmPassword', e.target.value)}
                                    placeholder="Enter confirm password"
                                />
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