import { Box, Typography } from "@material-ui/core";
import LeftLine from "assets/leftLine";
import RightLine from "assets/rightLine";
import React from "react";
import SilverStyloriTitleStyles from "./style";

export default function SilverStyloriTitle(props) {
  const classes = SilverStyloriTitleStyles();
  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <>
      <Box
        className={classes.titleBox}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LeftLine className={classes.leftLine} />
        <Typography className={classes.titleText}>
          {props?.data?.title_Text}
        </Typography>
        <RightLine className={classes.rightLine} />
      </Box>
      {props?.data?.sub_Text && (
        <Typography
          className={classes.subText}
          style={{ cursor: props?.data?.url ? "pointer" : "initial" }}
          onClick={() => handleClick(props?.data?.url)}
        >
          {props?.data?.sub_Text}
        </Typography>
      )}
    </>
  );
}
