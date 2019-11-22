import React from 'react';
import Header from 'components/Header/header'
// import ProductDescription from 'components/productDescription';
import { Grid, Hidden, Typography } from '@material-ui/core';
// import Filter from 'components/Filter/filter'
import Footer from "components/Footer/Footer"
import { ChatHelp } from 'components/ChatHelp';
// import { FilterOptionsContext } from 'context'
// import productList from 'mappers/productlist'
// import { CDN_URL } from 'config';
import { withRouter } from "react-router"
import 'index.css';
// import filterData from 'mappers/filterData'
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

    componentDidUpdate(prevProps) {
        // console.log(this.props.mappedFilters, prevProps.mappedFilters, this.props.data, 'prevProps.mappedFiltersprevProps.mappedFilters')
        // if (this.props.mappedFilters !== prevProps.mappedFilters) {

        //     this.props.setloadingfilters(false)
        // }

    }

    next = () => {
        this.slider.current.slickNext();
    }
    previous = () => {
        this.slider.current.slickPrev();
    }
    render() {

        const { data, dataFilter } = this.props
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
            <>

                <Grid container >
                    {/* {this.props.loadingfilters && <div className="overlayloadingfilter">
                        <div className="text">Filters updating...</div>
                    </div>} */}
                    <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                        <Header />
                    </Grid>

                    <Grid item xs={12} alignItems="center">
                        <Hidden smDown>
                            {homePageStylori[0].carouselTopSetting.arrowsImg && <>
                                <Grid onClick={this.previous} className={"imagePrevios"}>
                                </Grid>
                                <Grid onClick={this.next} className={"imagenext"}>
                                </Grid>
                            </>
                            }
                        </Hidden >
                        <Slideshow sliderRef={this.slider} fadeImages={homePageStylori[1].fadeImages} dataCarousel={homePageStylori[0].carouselTopSetting} imgClass={`classforimage`} />
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
                            <GridList GridImage={homePageStylori[2].tileData} />
                        </Grid>
                    </Grid>
                    <Testimony dataCarousel={homePageStylori[3].datacaroTestimony} GridImage={homePageStylori[5].bangleGrid} carosolData={homePageStylori[4].testimonycarodata} />
                    <Hidden smDown>
                        <Feedes fadeImages={homePageStylori[7].NewsContainer} dataCarousel={homePageStylori[6].NewsdataCarousel} />
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
                    <Stories dataCarousel={homePageStylori[8].carosolStories} carosolData={productsubHead} />
                    <Grid item xs={12} >
                        <Footer />
                    </Grid>
                </Grid>
            </>
        )
    }
}
// const history = (props, aa) => props.history.push(`/stylori?${aa}`);

const Components = props => {
    // let { FilterOptionsCtx: { data, loading, error, dataArr, mappedFilters, loadingfilters}, setloadingfilters } = React.useContext(FilterOptionsContext);
    // let content, mapped = [];

    // var arrFilters = Array(mappedFilters)
    // let mappedFiltersList = filterData(arrFilters)
    // // let mappedFilter = filterData(mappedFilters)
    // if (!loading && !error) {
    //   if (Object.keys(data).length !== 0) {
    //     mapped = productList(data, CDN_URL);
    //   }
    // }
    // if (Object.keys(data).length === 0) content =  <div className="overall-loader"><div id="loading"></div></div>

    let content = <HomeStylori />
    return content
}


export default withRouter(Components);



// export default HomeStylori;