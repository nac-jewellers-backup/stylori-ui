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
                    <Typography style={{fontSize:"17px",fontWeight:"600"}} gutterBottom>We're Here To Help?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <span item xs={3} class="phone" >

                        </span>

                        <a href="tel:18001020330" style={{color:'#337ab7',fontSize:"13px",paddingLeft:"6px"}}>1800 102 0330</a>

                    </Grid>
                    <Grid item xs={12} >
                        <span item xs={3} class="whatsapp">

                        </span>
                        <p style={{color:"#394578",fontSize:"13px"}}><span style={{paddingLeft:"6px",paddingTop:"14px"}}>+91 99526 25252</span></p>
                    </Grid>
                    <Grid item xs={12} >
                        <span item xs={3} class="mail">

                        </span>
                        <a href="mailto:hello@stylori.com" style={{color:"red",fontSize:"13px",paddingLeft:"6px"}}>hello@stylori.com</a>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} >
                        <span item xs={3} class="chat">

                        </span>
                        <a href="#" style={{color:"red",fontSize:"13px",paddingLeft:"6px"}}>Start live chat </a>
                    </Grid>
                    
                </Grid>
            </Grid>
        )
    }
}
export default faqsHelp;