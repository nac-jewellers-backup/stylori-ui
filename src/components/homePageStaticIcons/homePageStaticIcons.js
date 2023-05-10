import React from "react";
import { Box, Grid } from "@material-ui/core";
import HomePageStaticIconsStyles from "./style";

export default function HomePageStaticIcons(props) {
  const classes = HomePageStaticIconsStyles();
  const path = window.location.pathname === "/home";
  return (
    <Grid container className={classes.containItems}>
      {props?.data?.map((val) => {
        return (
          <Box
            className={path ? classes.styloritags : classes.styloritags_PD_page}
          >
            <Box
              className={path ? classes.fullWidth : classes.fullWidth_PD_page}
            >
              <img
                src={val?.icon}
                style={{ width: "40%", height: "100%" }}
              ></img>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
}
