import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './index.css'
export const SnackBar = (props) =>{
    return (
        <Snackbar
        anchorOrigin={props.anchorOrigin}
        className={props.classNames}
        open={props.open}
        autoHideDuration={5000}
        onClose={props.handleClose}
        TransitionComponent={(props)=>{return <Slide {...props} direction="up" />}}
        message={props.message}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" className={props.classNameCloseIcon} onClick={props.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    )
}