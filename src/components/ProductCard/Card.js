import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    minWidth: "100%",
    maxWidth: "100%"
  },
  textDel: {
    color: "#828282"
  },
  priceClass: {
    // boxShadow: "0px 0px 5px #F699A3 inset",
    display: "flex",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderTopLeftRadius: "20%",
    borderTopRightRadius: "20%",
    opacity: "1.2",
    "&:hover": {
      boxShadow: "40 0 11px rgba(33,33,33,.2)",
      cursor: "pointer"
      // opacity: "2"
    }
    // border: "1px solid #F699A3"
  },
  cardActionsIcon: {
    padding: "0 !important",
    paddingTop: "8px !important",
    paddingRight: "8px !important",
    paddingLeft: "8px !important"
  },
  cardContentImage: {
    padding: "0 !important",
    paddingTop: "8px !important",
    paddingRight: "8px !important",
    paddingLeft: "8px !important",
    paddingBottom: "8px !important"
  },
  offerMainPrice: {
    color: "#ed1165",
    fontSize:'1.3rem'
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
    fontSize: "0.7rem",
    color: "#828282",
    "&:span": {
      margin: 0,
      marginBottom: 0
    }
  },
  cardContent: {
    margin: "auto"
  },
  textPriceCardGrid: {
    width: "260px",
    padding: "2px"
  },
  youSavePrice: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#ed1165",
    borderRadius: "20px",
    width: "auto",
    paddingLeft: "5px",
    paddingRight: "5px"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const imgbef =
    "https://assets-cdn.stylori.com/276x276/images/product/SE0223/SE0223-1Y.jpg";
    
  const imgaft =
    "https://assets-cdn.stylori.com/296x296/images/product/SP0185/HOVER-SP0185-2Y.jpg";
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActions className={classes.cardActionsIcon}>
          <Grid container xs={12}>
            <Grid container item xs={6} justify="flex-start">
              <i
                style={{ fontSize: "18px",color: "#f69cad", }}
                className={`fa ${classes.colorLight}`}
              >
                &#xf0d1;
              </i>
            </Grid>

            <Grid container item xs={6} justify="flex-end">
              <i
                style={{ fontSize: "18px",color: "#f69cad", }}
                className={`fa ${classes.colorLight}`}
              >
                &#xf08a;
              </i>
            </Grid>
          </Grid>
        </CardActions>
        <CardContent className={classes.cardContentImage}>
          <img
            onMouseOver={() => setState(true)}
            onMouseOut={() => setState(false)}
            src={state ? imgaft : imgbef}
            alt="welcome"
            style={{ width: "100%" }}
          />
        </CardContent>
        <Card className={classes.priceClass}>
          <CardContent className={classes.cardContent}>
            <Grid
              container
              item
              xs={12}
              className={classes.textPriceCardGrid}
              alignItems="center"
            >
              <Grid container item xs={6} alignItems="center">
                <Typography
                  variant="subtitle1"
                  component="div"
                  className={classes.offerMainPrice}
                >
                  <i
                    style={{ paddingRight: "5px" }}
                    className="fa"
                  >
                    &#xf156;
                  </i>
                  17,000000
                </Typography>
              </Grid>
              {/*  */}
              <Grid item xs={6}>
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
                      &nbsp; 20,00000
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
                    2000000
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
