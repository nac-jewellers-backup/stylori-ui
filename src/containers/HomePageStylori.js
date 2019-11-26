import React from 'react';
import Header from 'components/Header/header'
import { Grid, Hidden, Typography } from '@material-ui/core';
import Footer from "components/Footer/Footer"
import { withRouter } from "react-router"
import 'index.css';
import Slideshow from '../components/Carousel/carosul'
import StaticView from '../components/CarouselLazyer/StaticView'
import GridList from '../components/GridList/GridList'
import { homePageStylori } from './dummydatahome'
import Testimony from '../components/Testimony/Testimony'
import Feedes from '../components/Feedes/Index'
import Stories from '../components/Stories/Index'

class HomeStylori extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.slider = React.createRef();
        this.state = {
            loading: false,
            count: ""
        };
    }
    next = () => {
        this.slider.current.slickNext();
    }
    previous = () => {
        this.slider.current.slickPrev();
    }
    render() {

        const dataCarousel = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: false,
            autoplaySpeed: 5000,
            arrows: false,

        }
        const productsubHead = [
            {
                name: "From the House of NAC",
                icon: 'https://assets-cdn.stylori.com/images/static/sprite-images.png',
                class: "image1"
            },
            {
                name: "Certified Jewellery",
                icon: 'https://assets-cdn.stylori.com/images/static/sprite-images.png',
                class: "image2"
            },
            {
                name: "Free Shipping",
                icon: 'https://assets-cdn.stylori.com/images/static/sprite-images.png',
                class: "image3"
            },
            {
                name: "Diverse Styles",
                icon: 'https://assets-cdn.stylori.com/images/static/sprite-images.png',
                class: "image4"
            },
            {
                name: "Easy Returns",
                icon: 'https://assets-cdn.stylori.com/images/static/sprite-images.png',
                class: "image5"
            },
        ]

        return (
            <Grid container >
                <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                    <Header />
                </Grid>

                <Grid item xs={12} alignItems="center">
                    <Hidden smDown>
                        {homePageStylori.carouselTopSetting.arrowsImg && <>
                            <Grid onClick={this.previous} className={"imagePrevios"}>
                            </Grid>
                            <Grid onClick={this.next} className={"imagenext"}>
                            </Grid>
                        </>
                        }
                    </Hidden >
                    <Slideshow sliderRef={this.slider} fadeImages={homePageStylori.fadeImages} dataCarousel={homePageStylori.carouselTopSetting} imgClass={`classforimage`} />
                </Grid>
                <Hidden mdUp>
                    <Grid container >
                        <Grid item xs={12} alignItems="center" style={{ paddingTop: "6px" }}>
                            <Typography style={{ height: "40px", width: "100%", textAlign: "center" }}>
                                <Slideshow dataCarousel={dataCarousel}>
                                    {productsubHead.map((val, index) => <>
                                        <Grid container style={{ display: "flex !important", marginBottom: "6px" }} key={"From the House of NAC"} className="wrappercustomer">
                                            <Grid item style={{ alignItems: "center", display: "flex" }} className={val.class} src={val.icon} >
                                            </Grid>
                                            <Grid item style={{ fontSize: "12px", alignItems: "center", display: "flex" }}>{val.name} </Grid>
                                        </Grid>
                                    </>)}
                                </Slideshow>
                                <Grid style={{ width: "100%" }}>
                                    <div className="loaders"></div>
                                </Grid>
                            </Typography>
                        </Grid></Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid Container item style={{ padding: "10px 15px", width: "100%", borderBottom: "1px solid #eeeeee" }}>
                        <StaticView />
                    </Grid>
                </Hidden>

                <Grid Container className="GridConatiner">
                    <Grid item className="GridListImg">
                        <GridList GridImage={homePageStylori.tileData} />
                    </Grid>
                </Grid>
                <Testimony dataCarousel={homePageStylori.datacaroTestimony} GridImage={homePageStylori.bangleGrid} carosolData={homePageStylori.testimonycarodata} />
                <Hidden smDown>
                    <Feedes fadeImages={homePageStylori.NewsContainer} dataCarousel={homePageStylori.NewsdataCarousel} />
                </Hidden>
                <Grid Container style={{ width: "100%" }}>
                    <Grid item className="selectionHead">
                        <em className="LeftImage"></em>
                        <Grid className="headerTestimony">
                            <span className="Typograpytestimony">Stories</span>
                        </Grid>
                        <em className="rightImage"></em>
                    </Grid>
                </Grid >
                <Stories dataCarousel={homePageStylori.carosolStories} carosolData={homePageStylori.carosolStoriesData} />
                <Grid item xs={12} >
                    <Footer />
                </Grid>
            </Grid>
        )
    }
}

const Components = () => {
    let content = <HomeStylori />
    return content
}


export default withRouter(Components);