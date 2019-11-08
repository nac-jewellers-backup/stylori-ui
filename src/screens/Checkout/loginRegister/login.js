import React from 'react';
import './loginRegisters.css'
import { Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import useLogin from './useLogin';

const Login = (props) => {
    return <LoginComponent  {...props} />
}

const LoginComponent = (props) => {
    const { classes } = props;
    const { values, handlers, data } = useLogin();
    const vl = data.message ? data.message : ""
    var cc = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ""
    // alert(JSON.stringify(data))

    return (
        <div className='pt-sm'>
            <form action="javascript:void(0)" onSubmit={() => {
                // if (cc) {
                    props.changePanel(2)
                // }
                handlers.doLogin()
            }}>
                <Grid container item xs={12} lg={6}>
                    <h5 className={`title ${classes.normalfonts}`}>  I already have an account </h5>
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={values.email}
                        // error={data.message ? true : false}
                        onChange={e => handlers.handleChange('email', e.target.value)}
                        required
                        helperText="Username is Required"
                        placeholder="your-id@email.com"
                    />
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="password"
                        name="password"
                        required
                        value={values.password}
                        // error={this.state.Password ? this.state.Password : "**"}
                        helperText="Password is Required"
                        placeholder="enter your password"
                        onChange={e => handlers.handleChange('password', e.target.value)}
                    />
                    <div className='log-pas'>
                        <span className={`pas-fr ${classes.normalfonts}`} style={{ cursor: "pointer" }}>Forgot Password ?</span>
                        <div className={`pas-fb ${classes.normalfonts}`} style={{ cursor: "pointer" }}>
                            <span>Sign me in using</span>
                            <img class="pull-left1" alt="" src="https://assets-cdn.stylori.com/images/static/icon-fb.png"></img>
                        </div >
                    </div>
                    <div className='login-butn'>
                        <Button className='back-b' onClick={() => props.change()} >Back</Button>
                        <Button className='apply-b'  type="submit">Apply</Button>
                    </div>

                </Grid>
            </form>
        </div>
    )
}


export default withStyles(styles)(Login);