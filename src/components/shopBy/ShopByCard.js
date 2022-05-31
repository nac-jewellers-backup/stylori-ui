import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Slideshow from "../Carousel/carosul";
import { injectUrl_url_construct } from "common/index";
import { Grid, Hidden } from "@material-ui/core";
import { CDN_URL } from "../../config";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: (props) => (props.width ? props.width : "auto"),
    borderRadius: "unset",
    boxShadow: "6px 7px 6px rgba(208, 210, 211, 1)",
    [theme.breakpoints.up('sm')]: {
      width: 450,
    },
  },
  ls: {
    [theme.breakpoints.up('sm')]: {
      float: "right"
    },
  },
  media: {
    // height:160,
    height: (props) => (props.height ? props.height : 160),
  },
  label: {
    display: "flex",
    justifyContent: "center",
    "& span": {
      color: theme.palette.secondary.dark2,
    },
  },
  image: {
    opacity: 1,
    display: "block",
    width: "100%",
    height: "auto",
    transition: ".5s ease",
    backfaceVisibility: false,
  },
  middle: {
    transition: ".5s ease",
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "-ms-transform": "translate(-50%, -50%)",
    textAlign: "center",
  },

  container: {
    position: "relative",
    "&:hover": {
      // "& $image": {
      //   filter:'blur(6px)'
      //   // opacity: 0.3,
      // },
      "& $middle": {
        opacity: 1,
        height: "100%",
        width: "100%",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        background: "rgb(126 124 124 / 68%)",
      },
    },
  },
  text: {
    // backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "1.7rem",
    letterSpacing: 3,
    padding: "16px 32px",
    textTransform: "uppercase"
  },
}));

export default function MediaCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={`${(props.i % 2 === 0) && classes.ls} ${classes.root}`}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        /> */}
        <Slideshow dataCarousel={props.settingSilver}>
          {props.image.map((val, index) => (
            <>
              <Hidden smDown>
                <Grid
                  container
                  key={index}
                  className={`${classes.media} ${classes.container}`}
                >
                  <a
                    href={`/silver-${props.label.toLowerCase()}-jewellery`}
                    style={{ width: "100%" }}
                  >
                    <img
                      src={injectUrl_url_construct(val)}
                      // style={{ width: "100%", height: "100%" }}
                      className={classes.image}
                      onError={(e) => {
                        e.target.src = `${CDN_URL}product/575X575/productnotfound.jpg`;
                      }}
                      loading="lazy" alt="...."
                    />
                    <div className={classes.middle}>
                      <div className={classes.text}>{props.label}</div>
                    </div>
                  </a>
                </Grid>
              </Hidden>
              {/* <Hidden mdUp>
                  <Grid container key={index}   className={classes.media}>
                    <a href={val.navigateUrl}>
                      <img
                        src={val.mobileImg}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Grid>
                </Hidden> */}
            </>
          ))}
        </Slideshow>
      </CardActionArea>
      {!props.showtitle && (
        <a
          href={`/silver-${props.label.toLowerCase()}-jewellery`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <CardActions className={classes.label}>
            <Button size="small" color="primary">
              <b>{props.label}</b>
            </Button>
          </CardActions>
        </a>
      )}
    </Card>
  );
}
