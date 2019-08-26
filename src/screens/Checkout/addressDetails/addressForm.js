import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import Checkboxes from '../../../components/InputComponents/CheckBox/CheckBox';
import SimpleSelect from '../../../components/InputComponents/Select/Select'

class Addressform extends React.Component {
    state = {
        age: ''
    }

    render() {
        return (
            <Container>
                <div className='pt-sm'>
                    <h5 className='title'> Shipping Address</h5>
                    <p class="form-group tp" > <Checkboxes CheckBoxValues={['']} /> If your billing address is different from the shipping adress please uncheck the box to select billing address.</p>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={6}>

                            <Grid container spacing={12}>
                                <Grid item xs={4} lg={4}>
                                    <SimpleSelect selectData={['one', 'tow']} />
                                </Grid>
                                <Grid item xs={4} lg={4}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        value={'3'}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={4} lg={4}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        value={'23'}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={12}>
                                <Grid item xs={6} lg={6}>
                                    <SimpleSelect selectData={['India']} />
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        placeholder="Pin Code/Zip Code"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={12}>
                                <Grid item xs={12} lg={12}>
                                    <Input
                                        type="taxt"
                                        placeholder="Address *"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={12}>
                                <Grid item xs={6} lg={6}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        placeholder="State *"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        placeholder="City *"
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={12}>
                                <Grid item xs={3} lg={3}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        placeholder="+ 91"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={9} lg={9}>
                                    <Input
                                        className='text-f'
                                        type="taxt"
                                        placeholder="Phone *"
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className='login-butn'>
                        <Button className='apply-b'>Save and Review</Button>
                    </div>
                </div>
            </Container>
        )
    }
}
export default Addressform;