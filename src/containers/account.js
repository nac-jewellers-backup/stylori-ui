import {
    Hidden,
    Grid
} from '@material-ui/core';
import React from 'react';
import 'components/product-image-slider/product-images.css'
import 'screens/screens.css';
import Header from 'components/SilverComponents/Header'
// import Header from "components/SilverComponents/Header";
import Accountdetails from "../components/accounts/accountdetails"
import { CartContext } from 'context'
import cart from 'mappers/cart'
// const Accounts = (props) => {
//     return <Componentz {...props} />
// }
class Accounts extends React.Component {
    render() {
        return (
            <div>
                <Hidden smDown>
                    <Grid container spacing={12}>
                        <Grid item xs={12} >
                            <Header />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Accountdetails data={this.props.data} wishlistdata={this.props.wishlistdata} allorderdata={this.props.allorderdata} />
                    </Grid>
                </Hidden>


                <Hidden mdUp>
                    {/* <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                <Grid item xs={12} >
                  <Header />
                </Grid> 
              </Grid>
  
              <Grid item xs={12}>
              </Grid> */}
                    <Grid container spacing={12}>
                        <Grid item xs={12} >
                            <Header />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Accountdetails data={this.props.data} wishlistdata={this.props.wishlistdata} allorderdata={this.props.allorderdata} />
                    </Grid>
                </Hidden>

            </div>
        )
    }
}
const Components = props => {
    let { CartCtx: { cartFilters, data, loading, error, allorderdata, wishlistdata } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <Accounts {...props} data={mapped} allorderdata={allorderdata} wishlistdata={wishlistdata} />
    // localStorage.setItem("a__w_l", wishlistdata && wishlistdata.length)
    return content
}

export default (Components);
