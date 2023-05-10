import React from "react";
import "aos/dist/aos.css";
import "./Testimony.css";
import { Grid } from "@material-ui/core";
import Testimonycarosol from "./Testimonycarosol";
// import { API_URL } from "../../config";
// import { testimonials } from "queries/home";

export default function HomePageTestimonial(props) {
  const data = props;

  return (
    <Grid Container style={{ width: "100%" }}>
      <Grid item className="selectionHead">
        <em className="LeftImage"></em>
        <Grid className="headerTestimony">
          <span className="Typograpytestimony">Testimonial</span>
        </Grid>
        <em className="rightImage"></em>
      </Grid>
      <div>
        <Testimonycarosol
          carosolData={props.carosolData}
          dataCarousel={props.dataCarousel}
        />
      </div>
      <div></div>
    </Grid>
  );
}
