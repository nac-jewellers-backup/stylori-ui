import React from 'react';
import './loginRegisters.css'
import { Container, Grid, Button, Card, CardContent } from '@material-ui/core';
import { LogRegData } from './loginregisterData'
import { NavLink } from 'react-router-dom'
import Login from './login';
import Register from './register';
import Continues from './continues';
class LoginRegisterIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            Register: false,
            Continue: false,
            Login: false
        };
    }
    toggle(name, value) {

        this.setState({
            show: !this.state.show,
            [name]: !value
        });
        debugger
    }
    render() {
        return (
            <Container>
                <div className='pt-sm' style={{ display: this.state.show == true ? "block" : "none" }}>
                    <>
                        <h5 className='title'>  Please click to choose an action</h5>
                        <Grid container spacing={12}>
                            {LogRegData.map(val =>
                                <Grid item xs={12} lg={4}>
                                    <Card className='form-card'>
                                        <CardContent>
                                            <div>
                                                <p className='card-reg'> {val.title}</p>
                                                <b className='card-reg blt'>{val.dis}</b>
                                            </div>
                                        </CardContent>
                                        <div className='login-butn'>
                                            <Button className='apply-b'
                                                onClick={() => { this.toggle(val.button) }}>{val.buttonval}</Button>
                                        </div>

                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                    </>
                </div>

                <div style={{ display: this.state.Login == true ? "block" : "none" }}>
                    <Login />
                </div>
                <div style={{ display: this.state.Register == true ? "block" : "none" }}>
                    <Register />
                </div>
                <div style={{ display: this.state.Continue == true ? "block" : "none" }}>
                    <Continues />
                </div>


            </Container>
        )
    }
}
export default LoginRegisterIndex;