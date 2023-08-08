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
import { API_URL } from "config";
import { SnackBar } from "components/snackbarAlert/SnackBar";

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
    cursor: "pointer",
  },
  paymentModeContainer: {
    position: "absolute",
    width: "fit-content",
    // margin: "40px auto 0px",
    bottom: "0px",
    [theme.breakpoints.down("sm")]: {
      bottom: "-35px",
    },
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
              <Typography
                className={classes.categoryItem}
                onClick={() => {
                  window.location.href = item?.url;
                }}
                href="#"
              >
                {item.title}
              </Typography>
            ))}
          </div>
        </div>
        <div className={classes.categoryContainer}>
          <Typography className={classes.categoryTitle}>About Us</Typography>
          <div className={classes.categoryItemContainer}>
            {aboutUs.map((item) => (
              <Typography
                className={classes.categoryItem}
                onClick={() => {
                  window.location.href = item?.url;
                }}
                href="#"
              >
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
              <Typography
                className={classes.categoryItem}
                onClick={() => {
                  window.location.href = item?.url;
                }}
                href="#"
              >
                {item.title}
              </Typography>
            ))}
          </div>
        </div>
        <div className={classes.categoryContainer}>
          <Typography className={classes.categoryTitle}>Contact Us</Typography>
          <div className={classes.categoryItemContainer}>
            {contactUs.map((item) => (
              <Typography
                className={classes.categoryItem}
                onClick={() => {
                  window.location.href = item?.url;
                }}
                href="#"
              >
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
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [stateClassname, setStateClassname] = React.useState("snackBar");

  const status = (response) => {
    if (
      (response.status >= 200 && response.status < 300) ||
      response.status === 409
    ) {
      if (response.status === 409) setStateClassname("snackBarError");
      else setStateClassname("snackBar");
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const json = (response) => {
    return response.json();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = () => {
    var emailvld =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

    if (email.match(emailvld)) {
      fetch(`${API_URL}/addemailsubscription`, {
        method: "post",
        // body: {query:seoUrlResult,variables:splitHiphen()}
        // body: JSON.stringify({query:seoUrlResult}),

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(status)
        .then(json)
        .then(async (val) => {
          setMessage(val.message);
          setOpen(true);
        });
    } else {
      if (email.trim() === "") {
        status(409);
        setMessage("Email cannot be empty");
      } else {
        status(409);
        setMessage("Invalid Email");
      }
      setOpen(open);
    }
    // else{
    //
    //   setMessage("Email is Invalid")
    //   setOpen(true)
    // }
  };

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
              <MailOutlineRoundedIcon onClick={() => handleEmail()} />
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

      <SnackBar
        handleClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        classNameCloseIcon={"closeIcon"}
        classNames={stateClassname}
        message={message}
        open={open}
      />
    </div>
  );
};
