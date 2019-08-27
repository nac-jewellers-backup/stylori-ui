import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import Checkboxes from '../../../components/InputComponents/CheckBox/CheckBox';
import SimpleSelect from '../../../components/InputComponents/Select/Select'

class Addressform extends React.Component {
    constructor(props) {
        super(props)
        this.myDIV = React.createRef()
    }
    state = {
        age: ''
    }
    showHideDiv = (ele) => {
        var srcElement = document.getElementById(ele);
        if (srcElement != null) {
            if (srcElement.style.display == "block") {
                srcElement.style.display = 'none';
            }
            else {
                srcElement.style.display = 'block';
            }
            return false;
        }
    }
    render() {
        return (
            <Container>
                <div className='pt-sm'>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={5}>
                            <h5 className='title'> Shipping Address</h5>
                            <p class="form-group tp" > <Checkboxes onChange={this.showHideDiv('divMsg')} CheckBoxValues={['0']} /> If your billing address is different from the shipping adress please uncheck the box to select billing address.</p>

                            <Grid container spacing={12}>
                                <Grid item xs={4} lg={4}>
                                    <SimpleSelect name={['Select']} selectData={['one', 'tow']} />
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
                                    <SimpleSelect name={['India']} selectData={['India']} />
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
                                        style={{ float: "left" }}
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
                        {/*  */}
                        {/*  */}
                        {/* <div value="Show/Hide" id='divMsg' style={{display:"none"}}> */}
                        <Grid container item lg={1} />
                        <Grid item xs={12} lg={5} style={{ marginTop: "8%", float: "right" }}>
                            <div style={{ float: "right" }}>
                                <h5 className='title'>  Billing  address </h5>
                                <Grid container spacing={12}>
                                    <Grid item xs={4} lg={4}>
                                        <SimpleSelect name={['Select']} selectData={['one', 'tow']} />
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
                                        <SimpleSelect name={['India']} selectData={['India']} />
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
                                            style={{ float: "left" }}
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
                            </div> </Grid>
                        {/* </div> */}
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