import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  buttons: {
    color: theme.palette.text.active,
    padding: "3px 14px !important"
  },
  title: {
    color: "rgba(58, 69, 120, 1)"
  }
}));



export default function PineDialog(props) {
  // const [open, setOpen] = React.useState(props.isOpen);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleClose() {
    if (props.handleClose) {
      props.handleClose(false)
    }
  }

  function handleSuccess() {
    props.handleSuccess();
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="responsive-dialog-title" style={{ padding: "8px 20px", fontSize: "1.1rem", fontFamily: "Roboto" }}>{props.title}</DialogTitle>
      <Divider />
      <DialogContent >
        <DialogContentText style={{ paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3), marginTop: "20px" }}>
          {props.content}<br />
          {props.verifycontent}
        </DialogContentText>
      </DialogContent>

      <DialogActions style={{ padding: "14px" }}>
        {props.negativeBtn ? <Button onClick={() => handleClose()} className={classes.buttons}>{props.negativeBtn}
        </Button> : ''}
        {props.positiveBtn ? <Button className={classes.buttons} style={{ backgroundColor: props.notesDialog ? "#c84f4b" : "" }} variant="contained" color="primary" onClick={() => handleSuccess()} >{props.positiveBtn}
        </Button> : ''}
      </DialogActions>
    </Dialog>
  );
}