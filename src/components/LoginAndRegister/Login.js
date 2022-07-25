import React from 'react';
// import './product-image-slider/loginRegisters.css'
import { Grid, Container } from '@material-ui/core'; 
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import { withRouter } from "react-router";
import Login from 'screens/Checkout/loginRegister/login';
import { CartContext } from 'context'
import { FilterOptionsContext } from 'context'

const UserLogin = (props) => {
    return <LoginComponent  {...props} />
}

const LoginComponent = (props) => {
    localStorage.setItem('navfblogin',true)
    let { CartCtx: { wishlistdata} } = React.useContext(CartContext);
  let { FilterOptionsCtx: { cartcount }, setloadingfilters } = React.useContext(FilterOptionsContext);
  const { classes } = props;
    // const vl = data && data.message
    // var prof = data.allUserAddresses ? data.allUserAddresses.nodes[0] : ""
    // var prof = data.userprofile ? data.userprofile.email : ""

    React.useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return ( 
        <Grid container>
            <Header wishlist={wishlistdata} cartcount={cartcount}/>
            <Grid spacing={12} container style={{ padding: "3%",marginTop:"10px" }}>
                <Grid item xs={6} lg={6}>
                    <div >
                        <img width="100%" height="100%" src="https://assets.stylori.com/login_image.png" loading="lazy" alt="...."/>
                    </div>
                </Grid>

                <Grid item xs={6} lg={6}>
                    <Container>
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