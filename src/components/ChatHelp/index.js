import React from 'react'
import { Grid } from '@material-ui/core';
import './index.css'
import icon from '../../assets/icon_chat.png'

export const ChatHelp = () =>{
    return(
        <Grid container className="backgroundColor ChatPosition" alignItems="center">
            <Grid item>
                <img src={icon} alt="noImage" loading="lazy" width="30px"/>
            </Grid>
        </Grid>
    )
}