import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Fade from "@material-ui/core/Fade";
import Collapse from '@material-ui/core/Collapse';
import Paper from "@material-ui/core/Paper";
import ChatIcon from "@material-ui/icons/Chat";
import CallIcon from "@material-ui/icons/Call";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Divider, Hidden } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: 500,
  //   },

  root: {
    // padding: theme.spacing(2),
  },
  popper: {
    minWidth: '35%',
    [theme.breakpoints.down("sm")]: {
      minWidth: 0,
    },
    "& .MuiPaper-root": {
      // padding: '16px 16px 16px 34px',
    },
    "& .MuiSvgIcon-root": {
      fill: `${theme.palette.secondary.main} !important`,
    },
  },
  needHelpText: {
    transform: 'rotate(-90deg)', /* Equal to rotateZ(45deg) */
  transformOrigin: 'right bottom',
    background: theme.palette.primary.main,
    "& span": {
      color: "white",
      fontWeight:"bold",
      fontSize:'1.1rem'
    },
  },
  needHelpTextWithoutRotate:{
      background: theme.palette.primary.main,
      "& span": {
        color: "white",
        fontWeight:"bold",
        fontSize:'1.5rem'
      },
  },
  noWidth:{
width:'auto !important'
  },
  number: {
    fontSize: 17,
    color:theme.palette.ternary.dark
  },
  chatNow: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 17,
    cursor:"pointer",
    textTransform:"uppercase"
  },
  closeIcon:{
    fill:"white !important"
  }
}));

export function NeedHelp(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        className={classes.popper}
      >
        {({ TransitionProps }) => (
          <Collapse {...TransitionProps} timeout={500} >
            <Paper>
              <Hidden mdUp>
                <Grid item xs={12} sm={4} style={{ padding: "5px 0px" }}>
                  <ChatIcon onClick={() => window.LC_API.open_chat_window()} />
                </Grid>
                <Grid item xs={12} sm={4} style={{ padding: "5px 0px" }}>
                  <a
                    href="tel:1800-102-0330"
                    style={{ textDecoration: "none" }}
                  >
                    <CallIcon />
                  </a>
                </Grid>
                <Grid item xs={12} sm={4} style={{ padding: "5px 0px" }}>
                  <HighlightOffIcon onClick={handleClick(props.position)} />
                </Grid>
              </Hidden>
              <Hidden smDown>
                <Grid container style={{padding:"10px 15px"}}>
                  <Grid item xs={12} sm={4} style={{ padding: "5px 0px" , borderRight:'1px solid rgb(166, 168, 171)' }}>
                    <Typography
                      variant="body1"
                      className={classes.chatNow}
                      onClick={() => window.LC_API.open_chat_window()}
                    >
                      Chat Now
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} style={{ padding: "5px 0px 0px 15px ", borderRight:'1px solid rgb(166, 168, 171)' }}>
                    <a
                      href="tel:1800-102-0330"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="body1" className={classes.number}>
                        1800-102-0330
                      </Typography>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={4} style={{ padding: "5px 0px 0px 15px " }}>
                    <a
                      href="tel:+91 99526 25252"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="body1" className={classes.number}>
                        +91 99526 25252
                      </Typography>
                    </a>
                  </Grid>
                  <Divider orientation="vertical" style={{ width: "1px" }} />
                </Grid>
              </Hidden>
            </Paper>
          </Collapse>
        )}
      </Popper>
      <Grid container justify="center">
        <Hidden smDown>
        <Grid item className={`${classes.needHelpTextWithoutRotate} ${open ? classes.noWidth : ''}`}>
          <Button onClick={handleClick(props.position)}>{open ? <CloseIcon className={classes.closeIcon}/> : 'Need Help ?'}</Button>
        </Grid>
        </Hidden>
        <Hidden mdUp>
        <Grid item className={classes.needHelpText}>
          <Button onClick={handleClick(props.position)}>Need Help ?</Button>
        </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
