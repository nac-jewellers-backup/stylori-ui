import React from "react";
import HouseOfNac from "assets/Stylori-NAC-View.jpg";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: `url(${HouseOfNac})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "0",
    // paddingTop: "66.64%",
    paddingTop: `clamp(calc(201 / 377 * 65%), calc(201 / 377 * 50%), calc(201 / 377 * 40%))` /* (img-height / img-width * container-width) */,
    backgroundPosition: "bottom",
  },

  overlay: {
    position: "absolute",
    maxWidth: 400,
    backgroundColor: "#f7e2bf",
    padding: 60,
    right: 0,
    // top: "12.5%",
    height: "calc(75%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: "400px",
    transform: "translateY(-50%)",
    top: "50%",
  },
  title: {
    fontSize: 36,
    fontFamily: `'Playfair Display', serif !important`,
    textAlign: "right",
    color: theme.palette.text.secondary,
    lineHeight: 1,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "right",
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));

function NACSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <Typography className={classes.title}>
          From the
          <br />
          House of Nac
        </Typography>
        <Typography className={classes.description}>
        NAC has a journey that began almost hundred years ago in 1973, 
        where a small store has now transformed into a chain of jewellery houses, 
        with 7 stores across Tamilnadu and Vijayawada.
        </Typography>
      </div>
    </div>
  );
}

export default NACSection;
