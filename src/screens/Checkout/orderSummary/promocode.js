import React from 'react';
import '../loginRegister/loginRegisters.css'
import { Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import usePromo from './usepromo';

const Promo = (props) => {
    return <PromoComponent  {...props} />
}

const PromoComponent = (props) => {
    var con_gust = localStorage.getItem('gut_lg') ? JSON.parse(localStorage.getItem('gut_lg')) : ""
    const myStorage = sessionStorage.getItem("user_id");
    const localvalues_check = JSON.parse(localStorage.getItem('gut_lg')) === true ? true : false
    React.useEffect(() => {
        if (localvalues_check === true) {
            if (con_gust === true) {
                if (!myStorage) {
                    localStorage.clear();
                    sessionStorage.clear();

                }
            }
        }
    }, [])

    const { values, handlers, data } = usePromo();
    return (
        <div className='pt-sm'>
            <form action="javascript:void(0)" onSubmit={() => handlers.handleSubmit()}>
                <div style={{ width: "100%" }}>
                    <Grid container spacing={12}>
                        <Grid item xs={8} lg={8}>
                            <Input
                                helperText="Promocode is required"
                                placeholder='Enter Promo code'
                                name="vouchercode"
                                type="text"
                                value={values.vouchercode}
                                required
                                disabled={data.status === "200" ? true : false}
                                onChange={e => handlers.handleChange('vouchercode', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} lg={4}>
                            {data.status === "200" ?
                                <Button style={{ filter: "grayscale(1)" }} disabled type="sumbit" className='ship-promo-btn'>Applied</Button> :
                                <Button type="sumbit" className='ship-promo-btn'>Apply</Button>}

                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}


export default (Promo);



