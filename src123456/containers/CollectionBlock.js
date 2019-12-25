import React from "react";
import Header from "components/Header/header";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import { CollectionPageStylori } from "../components/CollectionTemplate/CollectionData";
import CollectionItem from '../components/CollectionTemplate/CollectionItem';



class CollectionBlock extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000" }}  >
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CollectionItem />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <CollectionBlock />;
  return content;
};

export default withRouter(Components);
