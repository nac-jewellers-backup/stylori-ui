import React from "react";
import Header from "components/Header/header";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import { faqsStylori } from "./dummydatafaqs";
import FaqsTitle from 'components/faqs/faqsTitle';
import FaqsHelp from "components/faqs/faqsHelp";
import FaqsCustomer from 'components/faqs/faqsCustomer'
import Accordian from 'components/faqs/accordian'
import ProductCare from 'components/ProductCare/productCare'

class FaqsBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid container>
                <Grid
                    item
                    xs={12}
                    style={{ position: "sticky", top: "0", zIndex: "1000" }}
                >
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Slideshow
                        sliderRef={this.slider}
                        dataCarousel={faqsStylori.carouselTop.setting}
                    >
                        {faqsStylori.carouselTop.data.map((val, index) => (
                            <Grid container key={index}>
                                <img
                                    src={val.img}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Grid>
                        ))}
                    </Slideshow>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 15, display: "flex", justifyContent: "center" }}>
                    <Grid container class="menuqans">
                        <Grid item style={{ width: "100%" }}>
                            <Grid container>
                                <Grid item style={{ borderRight: "1px solid #e8e8e8 ", width: "18%",marginTop:"5px" }}>
                                    <FaqsTitle />
                                    <FaqsHelp />
                                    <FaqsCustomer />
                                </Grid>
                      
                                <Grid item style={{ width: "82%"}}>
                                    <Grid style={{marginLeft:"4%" }}>
                            {/* <Accordian /> */}
                            <ProductCare />
                                    </Grid>
                    </Grid>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <Footer />
                </Grid>
            </Grid>
        );
    }
}

const Components = () => {
    let content = <FaqsBlock />;
    return content;
};

export default withRouter(Components);
