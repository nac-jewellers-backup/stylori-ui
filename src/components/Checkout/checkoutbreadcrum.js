// import checkoutbreadcrum
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './checkout.css'
import { Grid } from '@material-ui/core';
import { breadlist } from './checkoutData'
import { breadlistsub } from './checkoutData'
class Checkoutbreadcrum extends React.Component {

    render() {
        return (
            <div>

                <Grid container className="bread-header" spacing={12}>
                    <Grid item xs={7}>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" className='ico' />}
                            className="bread-header-content">
                            {breadlist.map(val => (
                                <Link color="inherit" href="" >{val}</Link>
                            ))}
                        </Breadcrumbs>

                    </Grid>
                    <Grid item xs={5}>
                        <div style={{ padding: "5px 0px 3px 50px " }}>
                            <Grid container spacing={12}>
                                {breadlistsub.map(val => (
                                    <Grid item xs={2} >
                                        <Typography className="bread-header-list"><i class="fa fa-star"></i> {val}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}
export default Checkoutbreadcrum;