import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles(theme => ({
  buttons: {
    backgroundColor: "#5a854f",
    padding: "3px 14px !important",
    color: "#fff",
    fontSize: "0.85rem !important",
    textTransform: "capitalize",
    '&:hover': {
      backgroundColor: "#436c38",
    }
  },
  buttons1: {
    backgroundColor: "#cf2d30",
    padding: "3px 14px !important",
    color: "#fff",
    fontSize: "0.85rem !important",
    textTransform: "capitalize",
    '&:hover': {
      backgroundColor: "#a62325",
    }
  },
  title: {
    color: "rgba(58, 69, 120, 1)"
  },
  titleTypo: {
    background: "#f84e88",
    color: "#fff",
    padding: "8px 20px",
    fontSize: "1.0rem !important",
    fontFamily: "Roboto"
  },
  valued: {
    fontSize: "0.85rem !important",
    fontFamily: "Roboto"
  },
  mapped: {
    minWidth: "400px"
  },
  [theme.breakpoints.down('sm')]: {
    mapped: {
      minWidth: "auto"
    },
  }
}));



export default function PineDialog(props) {
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
      PaperProps={{
        classes: { root: classes.mapped },
        style: {
          height: "auto",
          width: "auto"
        },
      }}
      className={classes.mapped}
      fullScreen={fullScreen}
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Typography id="responsive-dialog-title" className={classes.titleTypo}>{props.title}</Typography>
      <Divider />
      <DialogContent >
        <Typography className={classes.valued} style={{ marginTop: "20px" }}>
          {props.content}<br />
          {props.verifycontent}
        </Typography>
      </DialogContent>

      <DialogActions style={{ padding: "14px" }}>
    {props.negativeBtn ? <Button onClick={() => handleClose()} className={classes.buttons1} style={{ backgroundColor: "gray" }}>{props.logout?"":<i class="fa fa-close" aria-hidden="true" style={{ marginRight: "7px", color: "#ffa0a0" }}></i>}{props.negativeBtn}
        </Button> : ''}
        {props.positiveBtn ? <Button className={classes.buttons} style={{ backgroundColor: "#f84e88" }} onClick={() => handleSuccess()} >{props.logout?"":<i class="fa fa-check " aria-hidden="true" style={{ marginRight: "7px", color: "#92d049" }}></i>} {props.positiveBtn}
        </Button> : ''}
      </DialogActions>
    </Dialog>
  );
}
