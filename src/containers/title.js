import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
// import ArrowLeft from "../../assets/arrowleft";
// import ArrowRight from "../../assets/arrowright";
import styles from "./titlestyle";

export const Title = (props) => {
  const classes = styles();
  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: "52px", overflow: "hidden" }}
    >
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Box>
            <ArrowRight />
          </Box> */}
          <Box>
            <Typography className={classes.title}>
              &nbsp;{props.title.toUpperCase()}&nbsp;
            </Typography>
          </Box>
          {/* <Box>
            <ArrowLeft />
          </Box> */}
        </Box>
      </Grid>
    </Grid>
  );
};
