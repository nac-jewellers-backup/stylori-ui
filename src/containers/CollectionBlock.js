import React from "react";
import Header from "components/SilverComponents/Header";
// import Header from "components/SilverComponents/Header";
import { Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import CollectionItem from '../components/CollectionTemplate/CollectionItem';
import { CartContext } from 'context'
import { FilterOptionsContext } from 'context'



class CollectionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container>
        <Header  cartcount={this.props.cartcount}
            wishlist={this.props.wishlistdata}/>
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

const Components = (props) => {

  let {
    CartCtx: { allorderdata, wishlistdata },
  } = React.useContext(CartContext);
  let {
    FilterOptionsCtx: { data, loading, error, dataArr, mappedFilters, cartcount, loadingfilters},
    setloadingfilters,
  } = React.useContext(FilterOptionsContext);

  let content = <CollectionBlock allorderdata={allorderdata}
  wishlistdata={wishlistdata}
  cartcount={cartcount}/>;
  return content;
};

export default withRouter(Components);
