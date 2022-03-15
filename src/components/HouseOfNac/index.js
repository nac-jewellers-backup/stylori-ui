import React from "react";
import HouseOfNac from "assets/houseOfNAC.png";
import HouseOfNac2x from "assets/houseOfNAC@2x.png";
import HouseOfNac3x from "assets/houseOfNAC@3x.png";
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
    paddingTop: `clamp(calc(201 / 377 * 82%), calc(201 / 377 * 66%), calc(201 / 377 * 56%))` /* (img-height / img-width * container-width) */,
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. malesuada
          lacus ex, sit amet blandit leo lobortis
        </Typography>
      </div>
    </div>
  );
}

export default NACSection;
