import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    maxWidth: 345
  },
  textDel: {
    color: "#828282"
  },
  priceClass: {
    // boxShadow: "0px 0px 5px #F699A3 inset",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    opacity: "1.2",
    "&:hover": {
      boxShadow: "40 0 11px rgba(33,33,33,.2)",
      cursor: "pointer"
      // opacity: "2"
    }
    // border: "1px solid #F699A3"
  },
  offerMainPrice: {
    color: "#ed1165"
  },
  offerPrice: {
    fontSize: "0.8rem",
    lineHeight: 0,
    color: "#828282",
    fontWeight: "bold",
    "&:span": {
      margin: 0
    }
  },
  youSave: {
    fontSize: "0.8rem",
    color: "#828282",
    "&:span": {
      margin: 0,
      marginBottom: 0
    }
  },
  textPriceCardGrid: {
    marginTop: "10%"
  },
  youSavePrice: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#ed1165",
    borderRadius: "20px",
    width: "40%"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActions>
          <Grid container xs={12}>
            <Grid container item xs={6} justify="flex-start">
              <i
                style={{ fontSize: "18px" }}
                className={`fa ${classes.colorLight}`}
              >
                &#xf0d1;
              </i>
            </Grid>

            <Grid container item xs={6} justify="flex-end">
              <i
                style={{ fontSize: "18px" }}
                className={`fa ${classes.colorLight}`}
              >
                &#xf08a;
              </i>
            </Grid>
          </Grid>
        </CardActions>
        <CardActionArea>
          <img
            src="https://assets-cdn.stylori.com/276x276/images/product/SR0480/SR0480-1W.jpg"
            alt="welcome"
          />
        </CardActionArea>
        <Card className={classes.priceClass}>
          <CardContent>
            <Grid
              container
              item
              xs={12}
              className={classes.textPriceCardGrid}
              alignItems="center"
            >
              <Grid container item xs={7} alignItems="center">
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.offerMainPrice}
                >
                  <i
                    style={{ fontSize: "26px", paddingRight: "5px" }}
                    className="fa"
                  >
                    &#xf156;
                  </i>
                  17,000
                </Typography>
              </Grid>
              {/*  */}
              <Grid item xs={5}>
                <Grid container item xs={12} alignItems="center">
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="span"
                    className={classes.offerPrice}
                  >
                    <del>
                      <i style={{ fontSize: "12px" }} className="fa">
                        &#xf156;
                      </i>
                      &nbsp; 20,000
                    </del>
                  </Typography>
                </Grid>
                <Grid container item xs={12}>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="span"
                    className={classes.youSave}
                  >
                    you save &nbsp;
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="span"
                    className={`${classes.youSave} ${classes.youSavePrice}`}
                  >
                    20000
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
