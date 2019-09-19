import React from 'react';
import './loginRegisters.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import { Form } from '../../../components/Form/Form';

class Login extends React.Component {
    initialValues = {
        mail: "",
        password: "",
    };

    state = {
        expanded: null,
        values: this.initialValues,
        errors: this.initialValues,
    };
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    }
    Logforms = (err, errorhandle, errors) => {
        const { values } = this.state;
        return (
            <div className='pt-sm'>
                <form onSubmit={this.handleSubmit()}>
                    <Grid container item xs={12} lg={6} >
                        <h5 className='title'>  I already have an account </h5>
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="email"
                            name="mail"
                            value={this.state.mail}
                            // error={this.state.mail ? this.state.mail : "**"}
                            onChange={event => this.handleChange(event, 'mail')}
                            placeholder="your-id@email.com"
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
                        <div className='log-pas'>
                            <span className='pas-fr'>Forgot Password ?</span>
                            <div className='pas-fb'>
                                <span >Sign me in using</span>
                                <img class="pull-left1" alt="" src="https://assets-cdn.stylori.com/images/static/icon-fb.png"></img>
                            </div >
                        </div>
                        <div className='login-butn'>
                            <Button className='back-b' href="/Checkout">Back</Button>
                            <Button className='apply-b' type="submit">Apply</Button>
                        </div>

                    </Grid>
                </form>
            </div>
        )
    }
    render() {
        return (
            <Container>
                {/* <Form children={this.Logforms} inputvalues={this.state.values} /> */}
                {this.Logforms()}
            </Container>
        )
    }
}
export default Login;