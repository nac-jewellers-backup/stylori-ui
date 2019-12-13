import React from 'react';
import { Grid } from '@material-ui/core'
import './faqs.css'
import Typography from '@material-ui/core/Typography';

class faqsHelp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Grid>
                 <Grid>
                    <Grid item xs={12} class="submain">
                    <Typography style={{fontWeight:"bold",fontSize:"18px"}} gutterBottom>We're Here To Help?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <span item xs={3} class="phone" >

                        </span>

                        <a href="#" style={{color:'#337ab7',fontSize:"0.8em"}}>1800 102 0330</a>

                    </Grid>
                    <Grid item xs={12} >
                        <span item xs={3} class="whatsapp">

                        </span>
                        <p style={{color:"#394578",fontSize:"0.8em"}}>+91 99526 25252</p>
                    </Grid>
                    <Grid item xs={12} >
                        <span item xs={3} class="mail">

                        </span>
                        <a href="#" style={{color:"red",fontSize:"0.8em"}}>hello@stylori.com</a>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} >
                        <span item xs={3} class="chat">

                        </span>
                        <a href="#" style={{color:"red",fontSize:"0.8em"}}>Start live chat </a>
                    </Grid>
                    
                </Grid>
            </Grid>
        )
    }
}
export default faqsHelp;