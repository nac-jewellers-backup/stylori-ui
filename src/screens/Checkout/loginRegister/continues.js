import React, { useState } from 'react';
import './loginRegisters.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import Otplog from './otplog';
import ContinuesLogin from './ContinuesLogin';


const Continues = (props) => {
    return <ContinuesComponent  {...props} />
}
const ContinuesComponent = (props) => {
    const [isenterotp, setIsotp] = useState(false);
    const { classes } = props;
    const { values, handle } = ContinuesLogin();
    return (
        <Container>
            <div className='pt-sm'>
                <form onSubmit={e => {
                    localStorage.setItem("email", JSON.stringify(values))
                    handle.handleSubmit(e, setIsotp)
                }}>
                    <>
                        {!isenterotp && <Grid container spacing={12}>
                            <Grid item lg={1} />
                            <Grid item xs={12} lg={6}>
                                <h5 className={`title ${classes.normalfonts}`}>  Skip registration or login. continue as a guest  </h5>
                                <p className={`form-group tp ${classes.normalfonts}`} > (please note, you will need to login in to use a gift voucher) </p>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    // error={this.state.mail ? this.state.mail : "**"}
                                    required
                                    helperText="Please enter your mail Id"
                                    onChange={event => handle.handleChange(event, 'email')}
                                />
                                <p className={`form-group ${classes.normalfonts}`}> We don't share these with anybody. Your contact details are secure with us. </p>
                                <div className='login-butn'>
                                    <Button className='back-b' onClick={() => props.change()} >Back</Button>
                                    <Button className='apply-b' type='submit'
                                    >Apply</Button>
                                </div>
                            </Grid>
                        </Grid>}
                        {
                            isenterotp &&
                            <Otplog onClick={() => setIsotp(false)} submit={() => props.changePanel(2, values.email)} />
                        }
                    </>
                </form>
            </div>
        </Container>
    )
}
// }
export default withStyles(styles)(Continues);