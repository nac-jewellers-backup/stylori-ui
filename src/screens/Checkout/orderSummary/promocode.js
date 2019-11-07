import React from 'react';
import '../loginRegister/loginRegisters.css'
import { Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import usePromo from './usepromo';

const Promo = (props) => {
    return <PromoComponent  {...props} />
}

const PromoComponent = (props) => {
    const { values, handlers } = usePromo();
    return (
        <div className='pt-sm'>
            <form action="javascript:void(0)" onSubmit={() => handlers.handleSubmit()}>
                <div style={{ width: "100%" }}>
                    <Grid container spacing={12}>
                        <Grid item xs={8} lg={8}>
                            <Input
                                helperText="Promocode is required"
                                placeholder='Enter Promocode'
                                name="promocode"
                                type="text"
                                value={values.promocode}
                                required
                                onChange={e => handlers.handleChange('promocode', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} lg={4}>
                            <Button type="sumbit" className='ship-promo-btn'>Apply</Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}


export default (Promo);



