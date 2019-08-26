import React from 'react';
import './loginRegisters.css'
import { Container, Grid, Button, Card, CardContent } from '@material-ui/core';
import { LogRegData } from './loginregisterData'
class LoginRegisterIndex extends React.Component {
    state = {
    }

    render() {
        return (
            <Container>
                <div className='pt-sm'>
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
                                        <Button className='apply-b'>{val.button}</Button>
                                    </div>
                                </Card>
                            </Grid>
                        )}
                    </Grid>

                </div>
            </Container>
        )
    }
}
export default LoginRegisterIndex;