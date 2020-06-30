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
    boxShadow: "0 0 5px #888 !important",
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
  const classes = useStyles();

  return (
   <>
   <Helmet>
      <script async src="//www.instagram.com/embed.js"></script>
    </Helmet>
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
            <Grid item container>
              <Typography className={classes.Title}>Instagram</Typography>
            </Grid>
            <Grid
              item
              container
              className={classes.photo}
              style={{ height: "390px" }}
            >
            <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CBkv4AjpH5Y/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version={12} style={{background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)'}}>
        <div style={{padding: '16px'}}>
         
          <a href="https://www.instagram.com/p/CBkv4AjpH5Y/?utm_source=ig_embed&utm_campaign=loading" style={{background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%'}} target="_blank">
           
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
             
              <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px'}} />
              <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}>
               
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px'}} />
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px'}} />
              </div>
            </div>
            <div style={{padding: '19% 0'}} />
            <div style={{display: 'block', height: '50px', margin: '0 auto 12px', width: '50px'}}>
              <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                    <g>
                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div style={{paddingTop: '8px'}}>
             
              <div style={{color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px'}}>
               
                View this post on Instagram
              </div>
            </div>
            <div style={{padding: '12.5% 0'}} />
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center'}}>
              <div>
               
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}} />
                <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px'}} />
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}} />
              </div>
              <div style={{marginLeft: '8px'}}>
               
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px'}} />
                <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}} />
              </div>
              <div style={{marginLeft: 'auto'}}>
               
                <div style={{width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}} />
                <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)'}} />
                <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}} />
              </div>
            </div>
          </a>
          <p style={{margin: '8px 0 0 0', padding: '0 4px'}}>
           
            <a href="https://www.instagram.com/p/CBkv4AjpH5Y/?utm_source=ig_embed&utm_campaign=loading" style={{color: '#000', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none', wordWrap: 'break-word'}} target="_blank">
              There is only one happiness in life: To love and to be
              loved ❤️ #Stylori #covid19
            </a>
          </p>
          <p style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
            A post shared by
            <a href="https://www.instagram.com/stylorilove/?utm_source=ig_embed&utm_campaign=loading" style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px'}} target="_blank">
              
              Stylori
            </a>
            (@stylorilove) on
            <time style={{fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px'}} dateTime="2020-06-18T11:07:52+00:00">
              Jun 18, 2020 at 4:07am PDT
            </time>
          </p>
        </div>
      </blockquote>
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
            <Grid item container>
              <Typography className={classes.Title}>Facebook</Typography>
            </Grid>
            <Grid item container className={classes.photo}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstylori&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=true&amp;hide_cta=false&amp;adapt_container_width=false&amp;hide_cover=true&amp;show_facepile=false&amp;appId"
                style={{
                  border: "none",
                  overflow: "hidden",
                  paddingTop: "-200px",
                  paddingTop: "60px",
                  marginTop: "-131px",
                  height: "512px",
                  width: "345px",
                }}
              ></iframe>
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
            <Grid item container>
              <Typography className={classes.Title}>Twitter</Typography>
            </Grid>
            <Tweeterfeed />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
 </>
 );
}
