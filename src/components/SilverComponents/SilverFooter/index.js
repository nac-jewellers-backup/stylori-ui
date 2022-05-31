import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FooterAccordion from "../FooterAccordion";

import { shopByCategory, aboutUs, customerService, contactUs } from "utils";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: "40px 16px",
  },
  itemsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
  },
  item: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
    opacity: 0.9,
  },
  paymentModes: {
    display: "flex",
    gap: "16px",
    margin: "50px 0px",
    "& img": {
      //   height: 32,
      width: "100%",
    },
  },
  copyrightContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      color: "white",
      fontSize: "12px",
      opacity: 0.9,
    },
  },
}));

function SilverFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FooterAccordion title="Shop By Categories">
        <div className={classes.itemsContainer}>
          {shopByCategory.map((item) => (
            <Typography className={classes.item} align="center">
              {item.title}
            </Typography>
          ))}
        </div>
      </FooterAccordion>
      <FooterAccordion title="About Us">
        <div className={classes.itemsContainer}>
          {aboutUs.map((item) => (
            <Typography className={classes.item} align="center">
              {item.title}
            </Typography>
          ))}
        </div>
      </FooterAccordion>
      <FooterAccordion title="Customer Service">
        <div className={classes.itemsContainer}>
          {customerService.map((item) => (
            <Typography className={classes.item} align="center">
              {item.title}
            </Typography>
          ))}
        </div>
      </FooterAccordion>
      <FooterAccordion title="Contact Us">
        <div className={classes.itemsContainer}>
          {contactUs.map((item) => (
            <Typography className={classes.item} align="center">
              {item.title}
            </Typography>
          ))}
        </div>
      </FooterAccordion>

      <div className={classes.paymentModes}>
        {/* <img src={visa} alt="visa" />
        <img src={mastercard} alt="mastercard" />
        <img src={AmericanExpress} alt="AmericanExpress" />
        <img src={DinersClub} alt="DinersClub" />
        <img src={Netbanking} alt="Netbanking" /> */}
        <img
          src={"https://assets.stylori.com/banners/web/footer.webp"}
          alt="Payment Modes"
          loading="lazy" 
        />
      </div>

      <div className={classes.copyrightContainer}>
        <Typography>&#169;&nbsp;2021&nbsp;Stylori&nbsp;Silver</Typography>
      </div>
    </div>
  );
}

export default SilverFooter;
