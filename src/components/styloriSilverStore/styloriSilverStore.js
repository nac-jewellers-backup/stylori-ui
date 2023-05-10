import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import StyloriSilverStoreStyles from "./style";

export default function StyloriSilverStore(props) {
  const classes = StyloriSilverStoreStyles();
  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  }
  return (
    <>
      <div className={classes.styloriStore}>
        <Grid
          container
          direction={props?.data?.button_Text ? "row" : "row-reverse"}
          className={props?.name === "StyloriYarns" ? classes.columnAlign : classes.columnAlignStore}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${
                props?.data?.button_Text
                  ? ""
                  : "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-23901.webp"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className={props?.name === "StyloriYarns" ? classes.location : classes.locationStore}>
              <Typography className={classes.title}>
                {props?.data?.title}
              </Typography>
              <Typography className={classes.subText}>
                {props?.data?.subText}
              </Typography>
              {props?.data?.button_Text && (
                <Button fullWidth className={classes.getButton} onClick={()=>handleClick(props?.data?.button_Text)}>
                  GET DIRECTIONS
                </Button>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div className={classes.storeImage}>
              <img alt="Store Image" src={props?.data?.image} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
