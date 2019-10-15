import React from 'react';
// import Checkoutbreadcrum from '../../components/Checkout/checkoutbreadcrum';
// import BreadCrumb from '../../components/BreadCrumb/index'
import CartCard from 'components/Checkout/CartCard';
import Footer from 'components/Footer/Footer'
import { Grid, Container, Hidden } from '@material-ui/core';
// import CustomSeparator from '../../components/BreadCrumb/index'
import Header from 'components/Header/header'
import 'screens/Stylori/index.css'
import {CartContext} from 'context'
import cart from 'mappers/cart'
import  'screens/screens.css';
// data.map(data=>{
    // return(
    //     <Grid item xs={12}>
    //     <CartCard data={data}/>
    //     </Grid>
    //         )
    //     })
        
class Cart extends React.Component {
    render() {
        const {data} = this.props 
        return (
            
                <div>

                    <Hidden smDown>
                        <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                            <Grid item xs={12} >
                                <Header />
                            </Grid>
                        </Grid>
                        <div className="cart-ovralldiv-media">
                            <Grid Container spacing={12}>
                                
                                <Grid item xs={12}>
                                    <CartCard data={data}/>
                                </Grid>
                            </Grid>
                        </div>
                        <Grid Container spacing={12}>
                            <Grid item xs={12}>
                                <Footer />
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Container>
                            <Grid Container spacing={12}>
                                <Grid item xs={12}>
                                    <CartCard data={data}/>
                                </Grid>
                            </Grid>
                        </Container>
                        <Grid Container spacing={12}>
                            <Grid item xs={12}>
                                <Footer />
                            </Grid>
                        </Grid>
                    </Hidden>
                </div>
            

        )
    }
}
// export default Checkout;


const Components = props => {
    let { CartCtx: { data, loading, error } } = React.useContext(CartContext);
    let content, mapped;

    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <Cart {...props} data={mapped} />

    return content
}


export default Components;