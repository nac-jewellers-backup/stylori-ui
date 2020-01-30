import React from 'react';
// import './product-image-slider/loginRegisters.css'
import { Grid, Button, Container } from '@material-ui/core';
import { Input } from '../../components/InputComponents/TextField/Input'
// import SimpleSelect from '../../components/InputComponents/Select/Select'
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
// import useRegister from './useregister';
import useRegister from '../../screens/Checkout/loginRegister/useregister';
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import Register from 'screens/Checkout/loginRegister/register';

const UserRegister = (props) => {
    return <RegisterComponent  {...props} />
}

const RegisterComponent = (props) => {
    const { classes } = props;
    const { values, handlers } = useRegister();
    return (
        <Grid container  >
            <Header />
            <Grid spacing={12} container lg={12} style={{ padding: "3%" }}>
                <Grid item xs={6} lg={6} xs={12}>
                    <div >
                        <img width="100%" height="100%" src="https://assets.stylori.com/images/static/inner-page/banner.png" />
                    </div>
                </Grid>
                <Grid item xs={6} lg={6} xs={12}>
                    <Container>
                        {/* <div className='pt-sm' style={{ width: "90%", float: "right" }}>
                        <form action="javascript:void(0)" onSubmit={(e) => {
                            handlers.handleSubmit(e, props)
                        }}>
                            <Grid container spacing={12}>
                                <Grid item xs={12} lg={12}>
                                    <h5 className={`title ${classes.normalfonts}`}>  Register  </h5>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        error={values.error && values.error.emerr ? true : false}
                                        // helperText={values.errortext && values.errortext.emerr}
                                        placeholder="Enter your email Id"
                                        onChange={e => handlers.handleChange('email', e.target.value)}
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
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="password"
                                        name="confirmpassword"
                                        value={values.confirmpassword}
                                        error={values.error && values.error.cnfpasserr ? true : false}
                                        helperText={values.errortext && values.errortext.cnfpasserr}
                                        placeholder="Enter your Confirm password"
                                        onChange={e => handlers.handleChange('confirmpassword', e.target.value)}
                                    />
                                    <label className='errtext'> {values.errortext && values.errortext.cnfpasserr}</label>
                                    <Grid container spacing={12}>
                                        <Grid item lg={4} xs={4}>
                                            <SimpleSelect val={'1'} name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                        </Grid>
                                        <Grid item lg={4} xs={4}>
                                            <Input
                                                margin="normal"
                                                variant="outlined"
                                                type="text"
                                                name="firstname"
                                                value={values.firstname}
                                                error={values.error && values.error.firstname ? true : false}
                                                helperText={values.errortext && values.errortext.firstname}
                                                placeholder="Enter FirstName*"
                                                onChange={e => handlers.handleChange('firstname', e.target.value)}
                                                className='text-f'
                                            // helperText=""
                                            />
                                            <label className='errtext'> {values.errortext && values.errortext.firstname}</label>
                                        </Grid>
                                        <Grid item lg={4} xs={4}>
                                            <Input
                                                margin="normal"
                                                variant="outlined"
                                                type="text"
                                                name="lastname"
                                                value={values.lastname}
                                                error={values.error && values.error.lastname ? true : false}
                                                helperText={values.errortext && values.errortext.lastname}
                                                placeholder="Enter LastName*"
                                                onChange={e => handlers.handleChange('lastname', e.target.value)}
                                                className='text-f'
                                            // helperText=""
                                            />
                                            <label className='errtext'> {values.errortext && values.errortext.lastname}</label>
                                        </Grid>
                                    </Grid>
                                    <div className='login-butn'>
                                        <Button className='apply-b' type="submit" >Register</Button>
                                    </div> */}
                        <Register />
                        <div className={`${classes.normalfonts}`} style={{
                            cursor: "pointer", fontSize: "14px",
                            marginRight: "50%"
                        }} onClick={() => { window.location.pathname = "/login" }} >Back to login</div>

                    </Container>   </Grid>
                {/* </Grid> */}
                {/* </form>
                    </div> */}
                {/* </Grid> */}

            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(UserRegister); 