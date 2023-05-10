import { Typography } from "@material-ui/core";
import React from "react";
import StyloriSilverStyles from "./style";

export default function StyloriSilver(props) {
  const classes = StyloriSilverStyles();
  return (
    <div className={classes.styloriSilver}>
      <div className={classes.title}>
        <Typography>{props?.data?.title}</Typography>
      </div>
      <div className={classes.text}>
        <Typography>{props?.data?.content}</Typography>
      </div>
    </div>
  );
}
