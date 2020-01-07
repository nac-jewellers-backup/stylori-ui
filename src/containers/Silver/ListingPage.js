import React from "react";
import Header from "components/SilverComponents/Header";
import { Grid, Container, Hidden } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Footer from "components/Footer/Footer";
import FilterData from "mappers/silverListingPage"
import productList from 'mappers/productlist'
import Filter from 'components/SilverComponents/ListingPage/Filters'
import ProductLayout from 'components/SilverComponents/ProductCard/ProductLayout'
import { ListingPageContext } from 'context'
import { CDN_URL } from 'config';
import ProductDescription from 'components/SilverComponents/productDescription';
class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    // https://img-static.tradesy.com/item/13076758/clear-crystal-and-silver-rhodium-elegant-rhinestone-sunflower-droplet-earrings-0-1-960-960.jpg
    render() {
        const {dataFilters } = this.props
        return (
            <Grid container>
                    <Header />
                <Container>
                    <Grid item xs={12}>
                    <ProductDescription title="Jewellery" data={dataFilters} wishlist={this.props.wishlistdata} />
                        <Filter data={this.props.dataFilters} />
                    </Grid>
                    <Grid item xs={12}>
                        <ProductLayout data={this.props.data} />
                    </Grid>
                </Container>
                <Hidden smDown>
                    <Grid item>
                        <Footer silver={true} />
                    </Grid>
                </Hidden>
            </Grid>
        );
    }
}


const Components = (props) => {

    let { ListingPageCtx: { data,filters, loading, error, dataArr, mappedFilters, cartcount, loadingfilters }, setloadingfilters } = React.useContext(ListingPageContext);
    let content;
    var arrFilters = Array(mappedFilters)
    const mappedFiltersList = FilterData(arrFilters)
    var mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = async () => await productList(data, CDN_URL);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    // content = <div>Loading...</div>;
    else content = <ListingPage data={dataArr} dataFilters={mappedFiltersList} />;
    return content;
};

export default withRouter(Components);
