import React, { useState } from 'react';
import './loginRegisters.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import OtpLogin from './verifyOtp';


const Otplog = (props) => {
    return <OtpComponent  {...props} />
}
const OtpComponent = (props) => {
    const { values, handle } = OtpLogin();
    const { classes } = props;
    return (
        <Container>
            <div className='pt-sm'>
                <form onSubmit={e => {
                    handle.handleSubmit(e)
                    props.submit(e)
                }}>
                    <Grid container spacing={12}>
                        <Grid item lg={1} />
                        <Grid item xs={12} lg={6}>
                            <h5 className={`title ${classes.normalfonts}`}>  Please enter your OTP Number </h5>
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="text"
                                name="otp"
                                value={values.otp}
                                // error={this.state.mail ? this.state.mail : "**"}
                                isNumber
                                maxLength={6}
                                minLength={6}
                                placeholder="Enetr your otp"
                                onChange={event => handle.handleChange(event, 'otp')}
                                onKeyPress={event => handle.handleKeyPress(event, 'isNumber')}
                                helperText="Please enter your otp"
                                required
                            />
                            <div className='login-butn'>
                                <Button className='back-b' onClick={props.onClick} >Back</Button>
                                <Button className='apply-b' type="submit">apply</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
// }
export default withStyles(styles)(Otplog);