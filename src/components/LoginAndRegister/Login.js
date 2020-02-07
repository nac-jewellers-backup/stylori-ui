import React from 'react';
// import './product-image-slider/loginRegisters.css'
import { Grid, Button, Container } from '@material-ui/core'; 
import { Input } from '../../components/InputComponents/TextField/Input'
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import useLogin from '../../screens/Checkout/loginRegister/useLogin';
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import { withRouter } from "react-router";
import {
    Checkbox
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Login from 'screens/Checkout/loginRegister/login';
import { CartContext } from 'context'
import { FilterOptionsContext } from 'context'

const UserLogin = (props) => {
    return <LoginComponent  {...props} />
}

const LoginComponent = (props) => {
    localStorage.setItem('navfblogin',true)
    let { CartCtx: { allorderdata, wishlistdata,setratingcountsclear } } = React.useContext(CartContext);
  let { FilterOptionsCtx: {  loading, error, dataArr, mappedFilters, cartcount, loadingfilters, wishlist_count }, setloadingfilters } = React.useContext(FilterOptionsContext);
  const { classes } = props;
    const { values, handlers, data } = useLogin(() => props.changePanel(3));
    // const vl = data && data.message
    // var prof = data.allUserAddresses ? data.allUserAddresses.nodes[0] : ""
    // var prof = data.userprofile ? data.userprofile.email : ""

    React.useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return ( 
        <Grid container>
            <Header wishlist={wishlistdata} cartcount={cartcount}/>
            <Grid spacing={12} container style={{ padding: "3%" }}>
                <Grid item xs={6} lg={6} xs={12}>
                    <div >
                        <img width="100%" height="100%" src="https://assets.stylori.com/login_image.png" />
                    </div>
                </Grid>

                <Grid item xs={6} lg={6} xs={12}>
                    <Container>
                        {/* <div className='pt-sm' style={{ width: "90%", float: "right" }}>
                            <form action="javascript:void(0)" onSubmit={(e) => {
                                handlers.handelSubmit(e)
                            }}>
                                <div className={`${classes.normalfonts}`} style={{ fontSize: "18px" }}>  Login </div>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    error={values.error && values.error.emerr ? true : false}
                                    helperText={values.errortext && values.errortext.emerr}
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
                                    helperText={values.errortext && values.errortext.passerr}
                                    placeholder="Enter your password"
                                    onChange={e => handlers.handleChange('password', e.target.value)}
                                />
                                <label className='errtext'> {values.errortext && values.errortext.passerr}</label>
                                <div className='log-pas'>
                                    <span className={` ${classes.normalfonts}`} style={{ cursor: "pointer", fontSize: "14px" }}>
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />
                                        Remember Me </span>
                                    <div className={`pas-fb ${classes.normalfonts}`} style={{ cursor: "pointer" }}>
                                        <span>Sign me in using</span>
                                        <img class="pull-left1" alt="" src="https://assets.stylori.com/images/static/icon-fb.png"></img>
                                    </div >
                                </div>
                                <br /> */}
                        <Login />
                        <br />
                        <span className={` ${classes.normalfonts}`} style={{ cursor: "pointer", fontSize: "14px" }}>
                            <input type="checkbox"
                            />
                            Remember Me </span>

                        <Grid spacing={12} container style={{ padding: "6px 0px 0px 4px" }}>
                            <Grid item xs={6} lg={6} style={{ float: "left" }}>
                                {/* <div className={`${classes.normalfonts}`} style={{ cursor: "pointer", fontSize: "14px" }}>Forgot password?</div>
                                <br /> */}
                                <div className={classes.normalfonts} style={{
                                    cursor: "pointer", fontSize: "14px",
                                    marginRight: "50%"
                                }} onClick={() => { window.location.href = "/registers" }} >Click here to Register</div>
                            </Grid>
                            {/* <Grid item xs={6} lg={6} style={{ float: "right", marginLeft: "80%" }}>
                                        <Button className='apply-b' type="submit">Login</Button>
                                    </Grid> */}
                        </Grid>
                        <br />

                        {/* <div style={{float:"right"}}>
                                <Button className='back-b' onClick={() => props.change()} >Back</Button>
                                <Button className='apply-b' type="submit">Apply</Button>
                            </div> */}

                        {/* </form> */}
                        {/* </div> */}
                    </Container>  </Grid>
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(withRouter(UserLogin));