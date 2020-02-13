import React, { useState } from 'react';
import './loginRegisters.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { useVerifyOtp } from './verifyOtp';

const ContinuesComponent = (props) => {
    const { handlers, email, otp, status, otpdata, enterotp, setMail } = useVerifyOtp();
    const { classes } = props;
    const values = { email: email.email, otp: otp.otp }
    const [state, setState] = React.useState(null)
    const edata = status.data.edata.message ? status.data.edata.message : ""
    // const MailForm = () => (
    // )
    // const OtpForm = () => (
    // )
    const clear = () => {
        setMail({
            email: "",
        })
        props.change()
    }
    React.useEffect(()=>{
        if(Object.entries(otpdata).length>0 && otpdata.constructor === Object){
            if(otpdata.message){
            setState(otpdata.message)
            localStorage.setItem("_mail_", "wrong")
           
        } 
        else{
             if(localStorage.getItem("_mail_")) localStorage.removeItem("_mail_")
            // props.changePanel(2)
            
        }
    }
        


    }, [otpdata])
    const handleSubmit = (e) => {

        if (enterotp) {
            handlers.otpFetch(values);
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
                            {enterotp &&
                                <>
                                    <h5 className={`title ${classes.normalfonts}`}> OTP Number </h5>
                                    <Input
                                        margin="normal"
                                        // variant="outlined"
                                        type="text"
                                        name="otp"
                                        value={otp.otp}
                                        isNumber
                                        maxLength={6}
                                        minLength={6}
                                        // error={edata ? true : false}
                                        helperText="Please enter your OTP"
                                        placeholder="Please enter your OTP"
                                        onChange={e => handlers.handleChange("otp", e.target.value)}
                                        onKeyPress={e => {
                                            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault()
                                        }}
                                        required
                                    />
                                    <label style={{ color: "red" }}>{state}</label>
                                </>}
                            {!enterotp &&
                                <>
                                    <h5 className={`title ${classes.normalfonts}`}>  Skip registration or login. continue as a guest  </h5>
                                    <p className={`form-group tp ${classes.normalfonts}`} > (please note, you will need to login in to use a gift voucher) </p>
                                    <Input
                                        margin="normal"
                                        // variant="outlined"
                                        type="email"
                                        name="email"
                                        value={email.email}
                                        onChange={e => handlers.handleChange("email", e.target.value)}
                                        // error={edata ? true : false}
                                        placeholder="Please enter your email id"
                                        helperText="Please enter your email id"
                                        required
                                    />
                                    <p className={`form-group ${classes.normalfonts}`}> We don't share these with anybody. Your contact details are secure with us. </p>
                                </>}
                            {/* <MailForm/> */}
                            <div className='login-butn'>
                                <Button className='back-b' onClick={() => clear()} >Back</Button>
                                {enterotp ? <Button className='apply-b' type='submit'>Verify</Button>
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