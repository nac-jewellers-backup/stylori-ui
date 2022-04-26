import React from "react";
import Header from "components/SilverComponents/Header";
// import Header from "components/SilverComponents/Header";
import { Grid, Hidden } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import FaqsTitle from 'components/faqs/faqsTitle';
import FaqsHelp from "components/faqs/faqsHelp";
import FaqsCustomer from 'components/faqs/faqsCustomer'
import Accordian from 'components/faqs/accordian'
import ProductCareComp from 'components/ProductCare/productCare'
import { faqs, ProductCare, deliveryreturns, privacypolicy, termsconditions } from "./dummydatafaqs";


function FaqsBlock(props) {
    const values = () => {
        if (props.titleUrl === '/faqs') {
            return faqs
        }
        else if (props.titleUrl === '/deliveryreturns') {
            return deliveryreturns
        }
        else if (props.titleUrl === '/productcare') {
            return ProductCare
        }
        else if (props.titleUrl === '/privacypolicy') {
            return privacypolicy
        }
        else if (props.titleUrl === '/termsconditions') {
            return termsconditions
        }
    }

    return (
        <Grid container>
                <Header />
            <Grid item xs={12}>
                <Slideshow dataCarousel={values().carouselTop.setting}>
                    {values().carouselTop.data.map((val, index) => (
                        <Grid container key={index}>
                            <img
                                src={val.img}
                                style={{ width: "100%", height: "100%" }}
                                loading="lazy" alt="...."
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

                                    {props.titleUrl === '/productcare' ? <ProductCareComp ProductCare={ProductCare} />
                                        :
                                        <>{<Accordian faqs={values()} />}</>
                                    }

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


export default withRouter(FaqsBlock);
