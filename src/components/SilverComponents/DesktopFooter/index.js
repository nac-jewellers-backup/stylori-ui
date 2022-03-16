import { makeStyles, Typography, Grid } from "@material-ui/core";
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
  middleItemCategoryContainer: {
    display: "flex",
    justifyContent: "space-between",
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

  //   New classes
  container: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative", // To make payment mode image stick to this container
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
        <div>
          <ContactEmail />
          <div>{/* Icons Section */}</div>
        </div>
        <div className={classes.paymentModeContainer}>
          <img
            src={"https://assets.stylori.com/images/static/footer.png"}
            alt="Payment Modes"
          />
        </div>
      </div>

      {/* <Grid container spacing={2}>
        <Grid item>
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
        </Grid>
        <Grid item xs>
          <div className={classes.middleItemCategoryContainer}>
            <div className={classes.categoryContainer}>
              <Typography className={classes.categoryTitle}>
                About Us
              </Typography>
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
              <Typography className={classes.categoryTitle}>
                Contact Us
              </Typography>
              <div className={classes.categoryItemContainer}>
                {contactUs.map((item) => (
                  <Typography className={classes.categoryItem}>
                    {item.title}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.paymentModeContainer}>
            <img
              src={"https://assets.stylori.com/images/static/footer.png"}
              alt="Payment Modes"
            />
          </div>
        </Grid>
        <Grid item>
          <div>
            <ContactEmail />
            <div></div>
          </div>
        </Grid>
      </Grid> */}
      <Typography className={classes.copyright}>
        &#169;&nbsp;2021&nbsp;Stylori&nbsp;Silver
      </Typography>
    </footer>
  );
}

export default DesktopFooter;

const ContactEmail = () => {
  const [email, setEmail] = React.useState("");
  return (
    <form>
      <Input
        id="contact-email"
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <MailOutlineRoundedIcon />
          </InputAdornment>
        }
      />
    </form>
  );
};
