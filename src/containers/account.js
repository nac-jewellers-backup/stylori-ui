import {
    Hidden,
    Grid
} from '@material-ui/core';
import React from 'react';
import 'components/product-image-slider/product-images.css'
import 'screens/screens.css';
import Header from 'components/Header/header'
import Accountdetails from "../components/accounts/accountdetails"
import cart from '../mappers/cart';
import { CartContext } from '../context/CartContext';
const Accounts = (props) => {
    return <Componentz {...props} />
}
class Componentz extends React.Component {
    render() {
        return (
            <div>
                <Hidden smDown>
                    <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                        <Grid item xs={12} >
                            <Header />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Accountdetails data={this.props.data} />
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

                </Hidden>

            </div>
        )
    }
}
const Components = props => {
    let { CartCtx: { data, loading, error } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <Accounts {...props} data={mapped} />

    return content
}
export default (Components);
