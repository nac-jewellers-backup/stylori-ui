import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Slideshow from "../../components/Carousel/carosul";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import StyloriNews from "./StyloriNews";
import Tweeterfeed from "../../components/storyTemplate/tweeterEmbedded";
import { Helmet } from "react-helmet";
import { InstagramFeed } from "./instagramfeed";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  containItems: {
    padding: "0px 15px",
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    containItems: {
      padding: "0px 15px",
      margin: "auto",
      width: " 1170px",
    },
  },
  containerRoot: {
    width: "100%",
    backgroundImage:
      "url(https://assets.stylori.com/images/static/home/box_bg.png)",
    boxShadow: (props) =>
      props?.style?.boxShadow
        ? props.style.boxShadow
        : "0 0 5px #888 !important",
    border: (props) => (props?.style?.border ? props.style.border : "none"),
    padding: "15px 0px 7px 0px",
    marginBottom: "25px",
  },
  threeContain: {
    padding: "0px 15px",
  },
  Title: {
    color: "#394578",
    marginBottom: "15px",
    float: "left",
    fontSize: "15px",
  },
  photo: {
    padding: "5px",
    overflow: "auto",
    // height: "390px",
    width: "100% !important",
    border: "1px solid #eee !important",
    borderRadius: "5px",
  },
  photonews: {
    padding: "5px",
    // overflow: 'auto',
    height: "390px",
    // width: "100% !important",
    border: "1px solid #eee !important",
    borderRadius: "5px",
  },
  newcontent: {
    color: "rgb(57, 69, 120)",
    margin: "10px 0px 10px 0px ",
    maxHeight: 26,
    minHeight: 26,
    maxWidth: "250px",
    overflow: "hidden",
  },
  newscontain: {
    padding: "4px 4px",
    margin: "0px",
    borderBottom: "1px dotted #555",
    display: "flex !important",
    backgroundColor: "#fff",
  },
  newstop: {
    // alignContent: "center",
    // alignItems: "center"
  },
  footerNews: {
    padding: "17px 15px !important",
    backgroundColor: "#f5f5f5",
    borderTop: "1px solid #ddd",
    borderBottomRightRadius: "3px",
    borderbottomleftRadius: "3px",
    height: "31px",
  },
  downArrow: {
    position: "relative",
    float: "left",
    padding: "3px 10px",
    marginLeft: "-1px",
    lineHeight: 1.42857143,
    color: "#3a4578",
    textDecoration: "none",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    marginLeft: 0,
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  glyphicon: {
    position: "relative",
    top: "1px",
    display: "inline-block",
    fontFamily: "Glyphicons Halflings",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 1,
  },
}));

export default function StaticView(props) {
  const location = useLocation();
  const classes = useStyles(props);
  const { isShowInsideDiv } = props;
  return (
    <>
      <Helmet>
        <script async src="//www.instagram.com/embed.js"></script>
      </Helmet>
      <Grid container justify="center">
        {isShowInsideDiv &&
          ["Instagram", "Facebook", "Twitter"].map((val) => {
            return (
              <Grid
                item
                xs={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  className={classes.Title}
                  style={{ fontWeight: "bold" }}
                >
                  {val}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
      <Grid container className={classes.containItems}>
        <Grid item className={classes.containerRoot}>
          <Grid container>
            <Grid
              item
              md={4}
              lg={4}
              sm={4}
              xs={4}
              className={classes.threeContain}
            >
              {!isShowInsideDiv && (
                <Grid item container>
                  <Typography className={classes.Title}>Instagram</Typography>
                </Grid>
              )}
              <Grid
                item
                container
                className={classes.photo}
                style={{ height: "390px" }}
              >
                <InstagramFeed />
              </Grid>
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              sm={4}
              xs={4}
              className={classes.threeContain}
            >
              {!isShowInsideDiv && (
                <Grid item container>
                  <Typography className={classes.Title}>Facebook</Typography>
                </Grid>
              )}
              <Grid item container className={classes.photo}>
                {location.pathname === "/" ? (
                  <>
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStylori%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2175392015888999"
                      style={{
                        border: "none",
                        overflow: "hidden",
                        paddingTop: "-200px",
                        paddingTop: "60px",
                        marginTop: "-131px",
                        height: "512px",
                        width: "345px",
                      }}
                    ></iframe>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStyloriSilver%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2175392015888999"
                      style={{
                        border: "none",
                        overflow: "hidden",
                        paddingTop: "-200px",
                        paddingTop: "60px",
                        marginTop: "-131px",
                        height: "512px",
                        width: "345px",
                      }}
                    ></iframe>{" "}
                  </>
                )}
              </Grid>
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              sm={4}
              xs={4}
              className={classes.threeContain}
            >
              {!isShowInsideDiv && (
                <Grid item container>
                  <Typography className={classes.Title}>Twitter</Typography>
                </Grid>
              )}
              <Tweeterfeed />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
