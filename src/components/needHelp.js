import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import ChatIcon from "@material-ui/icons/Chat";
import CallIcon from "@material-ui/icons/Call";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Divider, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: 500,
  //   },

  root: {
    padding: theme.spacing(2),
  },
  popper: {
    minWidth: 320,
    [theme.breakpoints.down("sm")]: {
      minWidth: 0,
    },
    "& .MuiPaper-root": {
      padding: theme.spacing(2),
    },
    "& .MuiSvgIcon-root": {
      fill: `${theme.palette.secondary.main} !important`,
    },
  },
  needHelpText: {
    "-ms-transform": "rotate(270deg)" /* IE 9 */,
    transform: "rotate(270deg)",
    position: "absolute",
    right: 0,
    background: theme.palette.primary.main,
    "& span": {
      color: "white",
    },
  },
  number: {
    fontSize: 12,
  },
  chatNow: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 14,
  },
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
          <Fade {...TransitionProps} timeout={350}>
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
                <Grid container>
                  <Grid item xs={12} sm={4} style={{ padding: "5px 0px" }}>
                    <Typography
                      variant="body1"
                      className={classes.chatNow}
                      onClick={() => window.LC_API.open_chat_window()}
                    >
                      Chat Now
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" />
                  <Grid item xs={12} sm={4} style={{ padding: "5px 0px" }}>
                    <a
                      href="tel:1800-102-0330"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography variant="body1" className={classes.number}>
                        1800-102-0330
                      </Typography>
                    </a>
                  </Grid>
                  <Divider orientation="vertical" />
                  <Grid item xs={12} sm={4} style={{ padding: "5px 0px" }}>
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
          </Fade>
        )}
      </Popper>
      <Grid container justify="center">
        <Grid item className={classes.needHelpText}>
          <Button onClick={handleClick(props.position)}>Need Help ?</Button>
        </Grid>
      </Grid>
    </div>
  );
}
