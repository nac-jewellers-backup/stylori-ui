import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Fade from "@material-ui/core/Fade";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import ChatIcon from "@material-ui/icons/Chat";
import CallIcon from "@material-ui/icons/Call";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Divider, Hidden } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import WhatsappPNG from "../assets/Icons/whatsapp.png";
const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: 500,
  //   },

  root: {
    // padding: theme.spacing(2),
  },
  popper: {
    // minWidth: "200px",
    minWidth: 60,
    marginBottom: 5,
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      minWidth: 0,
    },
    "& .MuiPaper-root": {
      // padding: '16px 16px 16px 34px',
    },
    "& .MuiSvgIcon-root": {
      fill: `${theme.palette.secondary.main} !important`,
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: 20,
    },
  },
  needHelpText: {
    transform: "rotate(-90deg)" /* Equal to rotateZ(45deg) */,
    transformOrigin: "right bottom",
    background: theme.palette.primary.main,
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
  },
  needHelpTextWithoutRotate: {
    background: theme.palette.primary.main,
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
  },
  noWidth: {
    width: "auto !important",
  },
  number: {
    fontSize: 17,
    color: theme.palette.ternary.dark,
  },
  chatNow: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 17,
    cursor: "pointer",
    textTransform: "uppercase",
  },
  closeIcon: {
    fill: "white !important",
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: 8,
    },
  },
  close: {
    [theme.breakpoints.only("xs")]: {
      marginBottom: 20,
    },
  },
}));

export default function NeedHelp(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    // debugger;
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Collapse {...TransitionProps} timeout={500}>
              <Paper className={classes.paper}>
                {/* <Hidden mdUp> */}
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  {/* <a href="https://direct.lc.chat/5807571/" target="_blank"> */}
                  <ChatIcon onClick={() => window.LC_API.open_chat_window()} />
                  {/* </a> */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="tel:1800-102-0330"
                    style={{ textDecoration: "none" }}
                  >
                    <CallIcon />
                  </a>
                </Grid>
                {/* <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="mailto:hello@stylori.com"
                    style={{ textDecoration: "none" }}
                  >
                    <EmailIcon />
                  </a>
                </Grid> */}
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="https://wa.me/919952625252?text=Hi"
                    style={{ textDecoration: "none" }}
                  >
                    <WhatsAppIcon />
                  </a>
                </Grid>
              </Paper>
            </Collapse>
          )}
        </Popper>
      </Hidden>
      <Grid container justify="center">
        <Hidden smDown>
          <Grid
            item
            className={`${classes.needHelpTextWithoutRotate} ${
              open ? classes.noWidth : ""
            }`}
          >
            <Button onClick={handleClick(props.position)}>
              {open ? (
                <CloseIcon className={classes.closeIcon} />
              ) : (
                <div>
                  <div style={{ fontSize: "1rem" }}>
                    Help
                    <i
                      style={{ fontSize: "1.2rem", paddingLeft: 3 }}
                      class="fa"
                    >
                      &#xf128;
                    </i>
                  </div>
                </div>
              )}
            </Button>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item>
            <Grid
              item
              xs={12}
              sm={12}
              style={{ padding: "5px 0px", margin: "auto" }}
            >
              <a
                href="https://wa.me/919952625252?text=Hi"
                style={{ textDecoration: "none" }}
              >
                {/* <WhatsAppIcon /> */}
                <img
                  src="https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Whatsapp-silver+jewellery.png"
                  style={{ width: "63px", height: "auto" }}
                ></img>
              </a>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
