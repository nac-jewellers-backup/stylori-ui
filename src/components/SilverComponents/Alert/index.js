import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";



export function SimpleSnackbar(props) {
     
    return (
      <div>
          <Snackbar
      id="main_alert_snackbar"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'top',
      }}
      style={{
          position:"absolute",
          top:0,
          left:0,
          right:0,
      }}
      open={props.open}
      autoHideDuration={3000}
      onClose={props.handleClose}
    >
      <Alert
        id="main_alert"
        severity={props.severity}
        elevation={6}
        variant="filled"
        {...props}
      >
        {props.message}
      </Alert>
    </Snackbar>
       
      </div>
    );
  }