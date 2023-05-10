import { Grid, Hidden, Typography } from "@material-ui/core";
import { Slideshow } from "components";
import { HomePageStaticIcons } from "components/homePageStaticIcons";
import React from "react";
import HomePageStyles from "./style";

const HomePageIcons = (props) => {
  const classes = HomePageStyles();
  return (
    <>
      <Hidden mdUp>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              paddingTop: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography style={{ width: "100%", textAlign: "center" }}>
              <Slideshow dataCarousel={props?.dataCarousel}>
                {props?.data.map((val, index) => (
                  <>
                    <Grid
                      container
                      style={{
                        display: "flex !important",
                      }}
                      key={"From the House of NAC"}
                      className="wrappercustomer"
                    >
                      <Grid
                        item
                        container
                        key={index}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <img
                          style={{ width: "18%" }}
                          src={val.icon}
                          loading="lazy"
                          alt="...."
                        />
                      </Grid>
                    </Grid>
                  </>
                ))}
              </Slideshow>
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid
          Container
          item
          style={{
            padding: "10px 15px",
            width: "100%",
            // borderBottom: "1px solid #eeeeee"
          }}
        >
          <HomePageStaticIcons data={props?.data} />
        </Grid>
      </Hidden>
    </>
  );
};

export default HomePageIcons;
