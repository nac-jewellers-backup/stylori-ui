import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, FormControlLabel, FormGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "calc(100% - 200px)",
    height: "calc(100vh - 200px)",
    overflowY:"auto",
    color:theme.palette.primary.main,
    // .arrow-chek, .MuiSvgIcon-root, .MuiExpansionPanelDetails-root, .MuiExpansionPanelDetails-root
    // "&.arrow-chek":{
    //     "&.MuiSvgIcon-root":{
    //         "&.MuiExpansionPanelDetails-root":{
    //             "&.MuiExpansionPanelDetails-root":{
    //                 fill:`${theme.palette.primary.main} important`            
    //             }
    //         }
    //     }
    // }
   
  },
  checkboxgrid:{
    "& span":{
        "& svg":{
            fill:`${theme.palette.primary.main} !important`
        }
    }
  },
  closeIcon:{
      position:"fixed",
      top:55,
      right:45,
      "& svg":{
        fill:`white !important`
    }
  }
}));

export default function MoreFilters(props) {
    console.log(props.subFilter)
  const classes = useStyles();
  return (
    <div>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={()=>{props.handleClose()}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Grid container item xs= {12}>
                <div className={classes.closeIcon} onClick={()=>{props.handleClose()}}>
                <CancelIcon/>
                </div>
                {props.filter.map((val)=>{
                    return(
                        <Grid item xs = {3} style={{marginBottom:"3%"}}>
                    <b>{val}</b>
                    <FormGroup row>
                   {props.subFilter[val].map((valsub)=>{
                       debugger
                       if(val){
                        return(
                            // <div>
                            // {val}
                            // </div>
                            <Grid item xs = {12}>
<FormControlLabel
                            control={
                              <Checkbox
                              className={classes.checkboxgrid}
                              checked={props.checked[val.replace(/\s/g, "")] && props.checked[val.replace(/\s/g, "")][valsub] !== undefined ?
                              props.checked[val.replace(/\s/g, "")] && props.checked[val.replace(/\s/g, "")][valsub] : false}
                              onChange={(e) => {
                                props.handleClose();
                                props.onchoosetype(valsub, props.checked[val && val.replace(/\s/g, "")][valsub] !== undefined ? !props.checked[val && val.replace(/\s/g, "")][valsub] : true, e,null,undefined, props.state, val ? val.replace(/\s/g, "") : "")}}
                                
                                name={val.replace(/\s/g, "")}
                                                                color={"secondary"}
                              />
                            }
                            label={valsub}
                          />
                            </Grid>
                            
                           )
                       }
                      
                   })
}

</FormGroup>
             </Grid>
                    )
                })}
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
