import React from "react";
import Header from "components/Header/header";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import FaqsTitle from 'components/faqs/faqsTitle';
import FaqsHelp from "components/faqs/faqsHelp";
import FaqsCustomer from 'components/faqs/faqsCustomer'
import Accordian from 'components/faqs/accordian'
import ProductCareComp from 'components/ProductCare/productCare'
import PropTypes from 'prop-types';
import { faqs, ProductCare } from "./dummydatafaqs";


class FaqsBlock extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000" }}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Slideshow sliderRef={this.slider} dataCarousel={faqs.carouselTop.setting}>
                        {faqs.carouselTop.data.map((val, index) => (
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
                        <Grid item class="mainWidth">
                            <Grid container>
                                <Hidden smDown>
                                    <Grid item class="sideContent" lg={3} xl={3}>
                                        <FaqsTitle />
                                        <FaqsHelp />
                                        <FaqsCustomer />
                                    </Grid>
                                </Hidden>

                                <Grid item class="mainContent" lg={9} xl={9} >
                                    <Grid >
                                        {this.props.titleUrl === '/faqs' && <Accordian faqs={faqs} />}
                                        {this.props.titleUrl === '/productcare' && <ProductCareComp ProductCare={ProductCare} />}
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

const Components = (props) => {
    let content = <FaqsBlock  {...props} />;
    return content;
};

export default withRouter(Components);
