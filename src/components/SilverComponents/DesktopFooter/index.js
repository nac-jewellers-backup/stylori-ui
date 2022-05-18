import {
  makeStyles,
  Typography,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { shopByCategory, aboutUs, customerService, contactUs } from "utils";
import Input from "@material-ui/core/Input";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0px auto",
    padding: "60px 60px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative", // To make payment mode image stick to this container
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
  },
  categoryItemContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  categoryTitle: {
    fontFamily: `'Playfair Display', serif !important`,
    fontSize: 18,
    color: "white",
    opacity: 0.9,
  },
  categoryItem: {
    // textAlign: "center",
    color: "white",
    fontSize: 12,
    opacity: 0.9,
  },
  paymentModeContainer: {
    position: "absolute",
    width: "fit-content",
    // margin: "40px auto 0px",
    bottom: "0px",
    "& img": {
      width: "400px",
    },
  },
  copyright: {
    textAlign: "center",
    // margin: "0px 0px 40px",
    padding: "40px 40px 0px",
    color: "white",
    fontSize: "12px",
    opacity: 0.9,
  },
}));

function DesktopFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <div className={classes.categoryContainer}>
          <Typography className={classes.categoryTitle}>
            Shop By Categories
          </Typography>
          <div className={classes.categoryItemContainer}>
            {shopByCategory.map((item) => (
              <Typography className={classes.categoryItem}>
                {item.title}
              </Typography>
            ))}
          </div>
        </div>
        <div className={classes.categoryContainer}>
          <Typography className={classes.categoryTitle}>About Us</Typography>
          <div className={classes.categoryItemContainer}>
            {aboutUs.map((item) => (
              <Typography className={classes.categoryItem}>
                {item.title}
              </Typography>
            ))}
          </div>
        </div>
        <div className={classes.categoryContainer}>
          <Typography className={classes.categoryTitle}>
            Customer Service
          </Typography>
          <div className={classes.categoryItemContainer}>
            {customerService.map((item) => (
              <Typography className={classes.categoryItem}>
                {item.title}
              </Typography>
            ))}
          </div>
        </div>
        <div className={classes.categoryContainer}>
          <Typography className={classes.categoryTitle}>Contact Us</Typography>
          <div className={classes.categoryItemContainer}>
            {contactUs.map((item) => (
              <Typography className={classes.categoryItem}>
                {item.title}
              </Typography>
            ))}
          </div>
        </div>
        <ContactStylori />
        <div className={classes.paymentModeContainer}>
          <img
            src={"https://assets.stylori.com/banners/web/footer.webp"}
            alt="Payment Modes"
            loading="lazy"
          />
        </div>
      </div>
      <Typography className={classes.copyright}>
        &#169;&nbsp;2021&nbsp;Stylori&nbsp;Silver
      </Typography>
    </footer>
  );
}

export default DesktopFooter;

const useContactEmailStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  inputRoot: {
    color: "white",
  },
  underline: {
    "&:before": {
      borderBottom: "2px solid rgba(255, 255, 255, 0.62)",
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: "2px solid rgba(255, 255, 255, 0.72)",
    },
    "&:after": {
      borderBottom: "3px solid rgba(255, 255, 255, 1)",
    },
  },
  disabled: {},
  focused: {},
  error: {},
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const ContactStylori = () => {
  const classes = useContactEmailStyles();
  const [email, setEmail] = React.useState("");
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Input
          id="contact-email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          endAdornment={
            <InputAdornment position="end">
              <MailOutlineRoundedIcon />
            </InputAdornment>
          }
          className={classes.input}
          classes={{
            root: classes.inputRoot,
            underline: classes.underline,
            disabled: classes.disabled,
            focused: classes.focused,
            error: classes.error,
          }}
        />
      </ThemeProvider>
      <div></div>
    </div>
  );
};
