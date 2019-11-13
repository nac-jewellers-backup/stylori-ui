import React, { useState } from 'react';
import './loginRegisters.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { useVerifyOtp } from './verifyOtp';

const ContinuesComponent = (props) => {
    const { handlers, values, status, enterotp } = useVerifyOtp(() => props.changePanel(2, values.email));
    const { classes } = props;
    const edata = status.data.edata.message ? status.data.edata.message : ""
    const MailForm = () => (
        <>
            <h5 className={`title ${classes.normalfonts}`}>  Skip registration or login. continue as a guest  </h5>
            <p className={`form-group tp ${classes.normalfonts}`} > (please note, you will need to login in to use a gift voucher) </p>
            <Input
                margin="normal"
                variant="outlined"
                type="email"
                name="email"
                value={values.email} 
                // error={edata ? true : false}
                required
                placeholder="please enetr your mail Id"
                helperText="Please enter your mail Id"
                onChange={e => handlers.setMail(e.target.value)}
            />
            <p className={`form-group ${classes.normalfonts}`}> We don't share these with anybody. Your contact details are secure with us. </p>
        </>
    )

    const OtpForm = () => (
        <>
            <h5 className={`title ${classes.normalfonts}`}>  Please enter your OTP Number </h5>
            <Input
                margin="normal"
                variant="outlined"
                type="text"
                name="otp"
                value={values.otp}
                isNumber
                maxLength={6}
                minLength={6}
                // error={edata ? true : false}
                helperText="Please enter your otp"
                placeholder="please enetr your otp"
                onChange={e => handlers.setOtp(e.target.value)}
                onKeyPress={e => {
                    if (!(e.which >= 48 && e.which <= 57)) e.preventDefault()
                }}
                required
            />
        </>
    )

    const handleSubmit = (e) => {
        if (enterotp) {
            handlers.otpFetch(values);
            // props.submit(e)
            props.changePanel(2)
        } else {
            handlers.mailFetch({ email: values.email });
        }
    }

    return (
        <Container>
            <div className='pt-sm'>
                <form action="javascript:void(0)" onSubmit={(e) => handleSubmit(e)}>
                    <Grid container spacing={12}>
                        <Grid item lg={1} />
                        <Grid item xs={12} lg={6}>
                            {enterotp ? <OtpForm /> : <MailForm />}
                            <div className='login-butn'>
                                <Button className='back-b' onClick={() => props.change()} >Back</Button>
                                {enterotp ? <Button className='apply-b' type='submit'>Apply</Button>
                                    : <Button className='apply-b' type='submit' >Apply</Button>}
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
// }
export default withStyles(styles)(ContinuesComponent);