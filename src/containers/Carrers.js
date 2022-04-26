import React from "react";
import Header from "components/SilverComponents/Header";
import { Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import CareersComponent from "components/CareersComponents/careers"


function FaqsBlock(props) {
    const carouselTop = {
        "setting": {
            dots: false,
            infinite: false,
            autoplay: false,
            speed: 1000,
            fade: false,
            arrows: false,
            arrowsImg: false,
            dotsClass: "slickdev",
            accessibility: false,
            centerMode: false,
            focusOnSelect: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            pauseOnFocus: false,
            swipe: false
        },
        "data": [
            {
                img: "https://assets.stylori.com/images/static/stylori_carrers.png",
            },
        ]
    }

    return (
        <Grid container>
            <Header />
            <Grid item xs={12}>
                <Slideshow dataCarousel={carouselTop.setting}>
                    {carouselTop.data.map((val, index) => (
                        <Grid container key={index}>
                            <img
                                src={val.img}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Grid>
                    ))}
                </Slideshow>
            </Grid>
            <Grid className="contactUsCompo">
                <CareersComponent />

            </Grid>
            <Grid item xs={12} style={{ marginTop: 20 }}>
                <Footer />
            </Grid>
        </Grid>
    );

}


export default withRouter(FaqsBlock);
