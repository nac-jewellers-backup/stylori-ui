import React from 'react';
import './product-images.css'
import { Grid } from '@material-ui/core';

class PriceCertification extends React.Component {

    render() {
        return (
            <div>
                <h4 className="product-details">Certification</h4>
                <hr class="bottom-line"></hr>
                <Grid container spacing={12} >
                    <Grid  item xs={6} style={{padding:"0px 33px"}}>
                        <Grid item xs={6} >
                            <img src="https://assets-cdn.stylori.com/images/static/Logo1.png" />
                        </Grid>
                        <Grid item xs={6} style={{padding:"12px"}}>
                            <img src="https://assets-cdn.stylori.com/images/static/Logo3.png" />
                        </Grid>
                    </Grid>
                    <Grid item xs={6} style={{padding:"0px 33px"}}>
                        <Grid item xs={6}>
                            <img src="https://assets-cdn.stylori.com/images/static/Logo2.png" />

                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://assets-cdn.stylori.com/images/static/Logo4.png" />

                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid  spacing={12}>
                        <Grid item xs={12} className='certification-img'>
                            <img width='85%' height='100%' src="https://assets-cdn.stylori.com/images/static/certificate4.jpg" />
                        </Grid>
                    </Grid> 
            </div>
        )
    }

}
export default PriceCertification;