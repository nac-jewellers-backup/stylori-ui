import React from 'react';
import './loginRegisters.css'
import { Container, Grid,Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'

class Continues extends React.Component {
    state = {
        age: ''
    }

    render() {
        return (
            <Container>
                <div className='pt-sm'>
                    <h5 className='title'>  Skip registration or login. continue as a guest  </h5>
                    <p class="form-group tp" > (please note, you will need to login in to use a gift voucher) </p>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={6}>

                            <Input
                                type="taxt"
                                placeholder="Your Mail ID"
                                required
                            />
                           <p class="form-group"> We don't share these with anybody. Your contact details are secure with us. </p>
                            
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
export default Continues;