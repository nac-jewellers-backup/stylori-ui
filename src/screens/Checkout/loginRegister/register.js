import { Container, Grid ,Button} from '@material-ui/core';
import React from 'react';
import './loginRegisters.css'
import { Input } from '../../../components/InputComponents/TextField/Input'
import SimpleSelect from '../../../components/InputComponents/Select/Select';

class Register extends React.Component {


    render() {
        return (
            <Container>
                <div className='pt-sm'>
                    <h5 className='title'>  New user registration  </h5>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={6}>

                            <Input
                                type="taxt"
                                placeholder="Your Mail ID"
                                required
                            />
                            <Input
                                type="taxt"
                                name="Password"
                                placeholder="Password"
                                required
                            />
                            <Input
                                type="taxt"
                                placeholder="Confirm Password"
                                required
                            />
                            <Grid container spacing={12}>
                                <Grid item lg={4} xs={4}>
                                <SimpleSelect selectData={['one', 'tow']} />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        type="taxt"
                                        placeholder="Confirm Password"
                                        required
                                        className="sub-feld"
                                    />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        type="taxt"
                                        placeholder="Confirm Password"
                                        className="sub-feld"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <div className='login-butn'>
                                <Button className='back-b'>Back</Button>
                                <Button className='apply-b'>Apply</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }
}
export default Register;