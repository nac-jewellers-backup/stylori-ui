import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import parse from "html-react-parser";
import BlogImageCardStyles from "./style";
import { BannerComponent } from "components/BannerComponent";
import Header from "components/SilverComponents/Header";
import Footer from "components/Footer/Footer";


export function ReadMore(props) {
  const data = props?.location?.state ? props?.location?.state : [];
  const classes = BlogImageCardStyles();
  const buttonClick = () => {
    window.location.href = "/styloriSilver"
  }
  return (
    <div>
      <Header />
      <div style={{width:"80%",margin:"auto"}}>
        <div>
          <img
            className={classes.jewellImg}
            src={data?.image}
            alt="Nac Jewell"
          />
        </div>
        <div className={classes.heading}>
          <div className={classes.title}>
            <Typography>{data?.header}</Typography>
          </div>
          <div className={classes.subText}>
            <Typography>{parse(data?.header_Bottom)}</Typography>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.text1}>
            <Typography>{parse(data?.description_1)}</Typography>
          </div>
        </div>

        <div style={{ width: "80%", margin: "auto" }}>
          <BannerComponent
            // custom
            forBlog
            arrows={false}
            banners={data?.second_Image?.banners}
            dataCarousel={
              data?.second_Image?.banners.length > 1 ? "multiple" : "single"
            }
          />
        </div>
        <div className={classes.content2}>
          <div className={classes.text1}>
            <Typography>{parse(data?.description_2)}</Typography>
          </div>
        </div>
        <Grid
          direction={
            data?.third_Image?.align === "left" ? "row" : "row-reverse"
          }
          container
          spacing={4}
          style={{ marginTop: "30px", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.leftImage}>
              <img
                className={classes.leftImg}
                src={data?.third_Image?.image}
                alt="jewell"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.rightContent}>
              <Typography>{parse(data?.description_3)}</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid>
          <div className={classes.bottomText}>
            <Typography>{data?.end_Text}</Typography>
          </div>
        </Grid>
        <div className={classes.backBtn}>
          <Button onClick={() => buttonClick()} variant="outlined">
            Back
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
