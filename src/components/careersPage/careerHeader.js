import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CareersPageStyles from "./style";
import parse from "html-react-parser";

const CareersHeaderComp = (props) => {
  const classes = CareersPageStyles();
  return (
    <Grid container className={classes.root}>
      {props?.data?.map((val) => {
        return (
          <>
            <Typography variant="h2" className={classes.contact_uss}>
              {val?.title}
            </Typography>
            <Typography>{parse(val?.description)}</Typography>
          </>
        );
      })}
    </Grid>
  );
};

export default CareersHeaderComp;
