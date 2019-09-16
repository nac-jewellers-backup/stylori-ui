import React from 'react';
import './loginRegisters.css'
import { Container, Grid, Button, Card, CardContent } from '@material-ui/core';
import Login from './login';
import Register from './register';
import Continues from './continues';
import { useDummyRequest } from '../../../hooks';
import { checkoutloginRegs } from '../../../mappers';
class LoginRegisterIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            Register: false,
            Continue: false,
            Login: false,
            isActive: ""
        };
    }
    toggle(name, value) {
        this.setState({
            show: !this.state.show,
            [name]: !value
        });
    }
    render() {
        const { LogRegData } = this.props.data
        return (
            <Container>
                <div className='pt-sm' style={{ display: this.state.show == true ? "block" : "none" }}>
                    <>
                        <h5 className='title'>  Please click to choose an action</h5>
                        <Grid container spacing={12}>
                            {LogRegData.map(val =>
                                <Grid item xs={12} lg={4}>
                                    <Card className='form-card'>
                                        <CardContent style={{ height: "70px" }}>
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
                    <Register back={this.state.Register} />
                </div>
                <div style={{ display: this.state.Continue == true ? "block" : "none" }}>
                    <Continues />
                </div>

            </Container>
        )
    }
}
export default (props => {
    const { mapped } = useDummyRequest(checkoutloginRegs);
    if (Object.keys(mapped).length === 0) return ''

    return <LoginRegisterIndex {...props} data={mapped} />
});