import React from "react";
import Header from "components/SilverComponents/Header";
import { Grid, Container } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ProductModal from 'components/SilverComponents/ProductModal'
import MultipleSections from 'components/SilverComponents/MultipleSections'
import Footer from "components/Footer/Footer";
import CarosolTop from 'components/SilverComponents/SilvercarosolPhoto'

class HomeStylori extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Grid container>
                    <Header />
                <CarosolTop />
                <ProductModal />
                <MultipleSections />
                <Grid item>
                    <Footer silver={true} />
                </Grid>
            </Grid>
        );
    }
}

const Components = () => {
    let content = <HomeStylori />;
    return content;
};

export default withRouter(Components);
