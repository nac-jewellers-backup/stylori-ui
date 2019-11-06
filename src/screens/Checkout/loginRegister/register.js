import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import './loginRegisters.css'
import { Input } from '../../../components/InputComponents/TextField/Input'
import SimpleSelect from '../../../components/InputComponents/Select/Select';
import useRegister from './useregister';

const Register = (props) => {
    return <RegisterComponent  {...props} />
}

const RegisterComponent = (props) => {
    const { values, handlers } = useRegister();
    return (
        <div className='pt-sm'>
            <form action="javascript:void(0)" onSubmit={() => handlers.handleSubmit()}>
                <Grid container spacing={12}>
                    <Grid item lg={1} />
                    <Grid item xs={12} lg={6}>
                        <h5 className='title'>  New user registration  </h5>
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="email"
                            name="email"
                            value={values.email}
                            // error={this.state.mail ? this.state.mail : "**"}
                            placeholder="Your Mail ID"
                            onChange={e => handlers.handleChange('email', e.target.value)}
                        />
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="password"
                            name="password"
                            value={values.password}
                            // error={this.state.password ? this.state.password : "**"}
                            placeholder="Your password"
                            onChange={e => handlers.handleChange('password', e.target.value)}
                        />
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="password"
                            name="confirmpassword"
                            value={values.confirmpassword}
                            // error={this.state.confirmpassword ? this.state.confpassword : "**"}
                            placeholder="Confirm password"
                            onChange={e => handlers.handleChange('confirmpassword', e.target.value)}
                        />
                        {/* <Grid container spacing={12}>
                                <Grid item lg={4} xs={4}>
                                    <SimpleSelect name={'Mr'} selectData={['Mr', 'Mrs', 'Miss']} />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="Password"
                                        name="confPassword"
                                        value={values.confPassword}
                                        // error={this.state.confPassword ? this.state.confPassword : "**"}
                                        placeholder="Confirm Password"
                                        onChange={event => this.handleChange(event, 'confPassword')}
                                        className='text-f'
                                    />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="Password"
                                        name="confPassword"
                                        value={values.confPassword}
                                        // error={this.state.confPassword ? this.state.confPassword : "**"}
                                        placeholder="Confirm Password"
                                        onChange={event => this.handleChange(event, 'confPassword')}
                                        className='text-f'
                                    />
                                </Grid>
                            </Grid> */}
                        <div className='login-butn'>
                            <Button className='back-b' onClick={() => props.change()} >Back</Button>
                            <Button className='apply-b' type="submit"
                                onClick={() => props.changePanel(2)}>Apply</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default (Register);