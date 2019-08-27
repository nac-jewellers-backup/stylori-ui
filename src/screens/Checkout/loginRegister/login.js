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

    Logforms = (err, errorhandle, errors) => {
        const { values } = this.state;
        return (
            <div className='pt-sm'>
                <Grid container item xs={12} lg={6} >
                    <h5 className='title'>  I already have an account </h5>
                    <Input
                        type="email"
                        name="mail"
                        value={values.mail}
                        error={err.mail}
                        // helperText={err.mailId ? errors.mailId.required : ""}
                        error={values.mail ? errors.mail.required : errors.mail.invalid}
                        placeholder="your-id@email.com"
                    />
                    <Input
                        type="taxt"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <div className='log-pas'>
                        <span className='pas-fr'>Forgot Password ?</span>
                        <div className='pas-fb'>
                            <span >Sign me in using</span>
                            <img class="pull-left1" alt="" src="https://assets-cdn.stylori.com/images/static/icon-fb.png"></img>
                        </div >
                    </div>
                    <div className='login-butn'>
                        <Button className='back-b' >Back</Button>
                        <Button className='apply-b' type="submit">Apply</Button>
                    </div>

                </Grid>

            </div>
        )
    }
    render() {
        return (
            <Container>
                <Form children={this.Logforms} inputvalues={this.state.values} />
            </Container>
        )
    }
}
export default Login;