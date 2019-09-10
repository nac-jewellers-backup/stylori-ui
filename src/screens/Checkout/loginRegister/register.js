import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import './loginRegisters.css'
import { Input } from '../../../components/InputComponents/TextField/Input'
import SimpleSelect from '../../../components/InputComponents/Select/Select';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Register: false,
            mail: "",
            confPassword: "",
            Password: "",
        };
    }
    toggle(name, value) {
        this.setState({
            Register: !this.state.Register,
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            Register: props.back,
        });
    }
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    }
    Registerform = (props) => {
        return (
            <div className='pt-sm'>
                <form onSubmit={this.handleSubmit()}>
                    <Grid container spacing={12}>
                        <Grid item lg={1} />
                        <Grid item xs={12} lg={6}>
                            <h5 className='title'>  New user registration  </h5>
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="email"
                                name="mail"
                                value={this.state.mail}
                                // error={this.state.mail ? this.state.mail : "**"}
                                placeholder="Your Mail ID"
                                onChange={event => this.handleChange(event, 'mail')}
                            />
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="password"
                                name="Password"
                                value={this.state.Password}
                                // error={this.state.Password ? this.state.Password : "**"}
                                placeholder="Your password"
                                onChange={event => this.handleChange(event, 'Password')}
                            />
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="Password"
                                name="confPassword"
                                value={this.state.confPassword}
                                // error={this.state.confPassword ? this.state.confPassword : "**"}
                                placeholder="Confirm Password"
                                onChange={event => this.handleChange(event, 'confPassword')}
                            />
                            <Grid container spacing={12}>
                                <Grid item lg={4} xs={4}>
                                    <SimpleSelect  name={'Mr'} selectData={['Mr', 'Mrs', 'Miss']} />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="Password"
                                        name="confPassword"
                                        value={this.state.confPassword}
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
                                        value={this.state.confPassword}
                                        // error={this.state.confPassword ? this.state.confPassword : "**"}
                                        placeholder="Confirm Password"
                                        onChange={event => this.handleChange(event, 'confPassword')}
                                        className='text-f'
                                    />
                                </Grid>
                            </Grid>
                            <div className='login-butn'>
                                <Button className='back-b' oncl>Back</Button>
                                <Button className='apply-b' type="submit">Apply</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.Registerform()}
            </div>
        )
    }
}
export default Register;