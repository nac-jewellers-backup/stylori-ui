import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    height: "20vh",
    margin: "auto",
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    width: "100%"
  },
  content: {
    flex: "1 0 auto",
    padding: 0
  },
  cover: {
    width: "30vw"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& button": {
      padding: "2.1px 13.8px"
    },
    [theme.breakpoints.down("sm")]: {
      "& button": {
        padding: "1.1px 1.8px"
      }
    }
  },

  playIcon: {
    height: 38,
    width: 38
  },
  contents: {
    fontSize: "0.8rem",
    color: "#394578"
  },
  labelPrice: {
    display: "flex"
  },
  labelPriceDel: {
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center"
  },
  labelPriceOff: {
    fontSize: "1.1rem"
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div style={{ width: "195px" }}>
        <img
          src="https://www.udaipurblog.com/wp-content/uploads/2018/12/My-Gold-Guide.jpg"
          width="100%"
          height="100%"
          alt=""
        />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="div"
            variant="subtitle1"
            className={classes.contents}
          >
            Sunkissed Splendour Diamond Earrings
          </Typography>
          <label className={classes.labelPrice}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.labelPriceDel}
            >
              <del>Rs 12,0003</del>
            </Typography>
            &nbsp;
            <Typography
              variant="subtitle1"
              style={{ color: "#ed1165" }}
              className={classes.labelPriceOff}
            >
              Rs 123,000
            </Typography>
          </label>
        </CardContent>
        <div className={classes.controls}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f36e23",
              color: "white",
              fontSize: "0.7rem"
            }}
          >
            Buy Now
          </Button>
          <label
            variant="contained"
            style={{ color: "#394578", cursor: "pointer", fontSize: "0.9rem" }}
          >
            <i style={{ fontSize: "16px" }} class="fa">
              &#xf014;
            </i>
            &nbsp;
            <span style={{ borderBottom: "1px solid #394578" }}>Remove</span>
          </label>
        </div>
      </div>
    </Card>
  );
}
