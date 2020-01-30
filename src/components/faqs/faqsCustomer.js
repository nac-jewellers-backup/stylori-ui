import React from 'react';
import { Grid } from '@material-ui/core'
import './faqs.css'
import Typography from '@material-ui/core/Typography';
class FaqsCustomer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Grid>
                <Grid>
                    <Grid className="submain">
                    <Typography style={{fontSize:"17px",fontWeight:"600"}}  gutterBottom>Customer Care</Typography>
                    </Grid>
                    <Grid className="main">
                <p style={{lineHeight:"0.2em",color:"#394578"}}>Monday to Saturday</p>
                <p style={{color:"#394578"}}>10 A.M to 7 P.M IST</p>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}
export default FaqsCustomer;    