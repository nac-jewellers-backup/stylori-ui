import React from "react";
import Header from "components/SilverComponents/Header";
import { Grid, Container } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ProductModal from 'components/SilverComponents/ProductModal'


class HomeStylori extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Grid container>
                <Grid item style={{ width: "100%", position: 'sticky', top: 0, zIndex: 10000 }}>
                    <Header />
                </Grid>
                <Container maxWidth="md">
                    <ProductModal />
                    {/* <MultipleSections /> */}
                </Container>
            </Grid>
        );
    }
}

const Components = () => {
    let content = <HomeStylori />;
    return content;
};

export default withRouter(Components);
