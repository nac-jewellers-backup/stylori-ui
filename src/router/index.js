import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from 'screens'
import PricingPage from 'screens/Stylori/PricingPage'
import Cart from 'screens/Stylori/Cart'
import Account from 'screens/Stylori/accounts'
import Checkout from 'screens/Stylori/Checkout'
import HomePageStylori from 'screens/Stylori/HomePage'
import { GlobalContext } from 'context'
import Faqs from 'screens/Stylori/faqs'
import Register from 'screens/Checkout/loginRegister/register';
import UserLogin from '../components/LoginAndRegister/Login';
import UserRegister from '../components/LoginAndRegister/Register';
import routes from "router/routes";
import { withRouter } from "react-router";
import { createBrowserHistory } from "history";
import Collection from 'screens/Stylori/Collection';
import stories from 'screens/Stylori/stories';
import AboutPage from "components/faqs/aboutPage";
// const Tacos = ({ props }) => {
//     if (window.location.search !== null) {

// SILVER SCREENS
            
import Silver from 'screens/SilverStylori'
import SilverListingPage from 'screens/SilverStylori/listingpage'
            
// SILVER SCREENS ENDS


const browserHistory = createBrowserHistory();

browserHistory.listen((location, action) => {
    window.scrollTo(0, 0);
});
export const RouterApp = (props) => {

    const { Globalctx } = React.useContext(GlobalContext)
    const func_location_silver = () =>{
        var loc = window.location.pathname.split('/')[1].split('-').filter(val=>{if(val==='silver') return val})
        return loc[0]
    }
    console.log('window.location.pathnamewindow.location.pathname', window.location.pathname, props.location.pathname)
    return (
        <Switch history={browserHistory}>
            <Redirect key="stylori-redirect" from="/" exact to={"/jewellery"} />
            <Route key="HomePageStylori" component={HomePageStylori} exact path={routes.HomePageStylori} />
            <Route key="Silver" component={Silver} exact path={routes.Silver} />
            <Route key="Faqs" component={Faqs} exact path={routes.Faqs} />
            <Route key="ProductCare" component={Faqs} exact path={routes.ProductCare} />
            <Route key="Shipping" component={Faqs} exact path={routes.Shipping} />
            <Route key="PrivacyPolicy" component={Faqs} exact path={routes.PrivacyPolicy} />
            <Route key="TermsConditions" component={Faqs} exact path={routes.TermsConditions} />
            <Route key="Checkout" component={Checkout} exact path={routes.Checkout} />
            <Route key="AboutUs" component={AboutPage} exact path={routes.AboutUs} />

            {(props.location.pathname !== "/cart" && props.location.pathname !== "/account" && props.location.pathname !== "/registers" && props.location.pathname !== "/login" && props.location.pathname !== "/checkout" && (Globalctx && Globalctx.pathName === false)  ) && 
                <Route exact={true} component={Stylori} path={"/:listingpage"} />
                
                }
             {
                 (Globalctx.pathName) &&
                 <Route key="silverListingpage" component = {SilverListingPage}  path={props.location.pathname} />
                 }
            <Route key="sto" component={stories} exact path={routes.Stories} />
            <Route key="Collection" component={Collection} exact path={routes.Collection} />
            {(props.location.pathname !== "/cart" && props.location.pathname !== "/account" && props.location.pathname !== "/registers" && props.location.pathname !== "/login" && props.location.pathname !== "/checkout") &&
                <Route exact={true} component={Stylori} path={"/:listingpage"} />}

            <Route exact component={PricingPage} path={`/:productCategory/:productType/:material/:productName`} />
            <Route key="cart" exact component={Cart} path={routes.Cart} />
            <Route key="Register" component={Register} exact path={routes.Register} />
            <Route key="login" component={UserLogin} exact path={routes.UserLogin} />
            <Route key="Account" component={Account} exact path={routes.Account} />
            <Route key="registers" component={UserRegister} exact path={routes.UserRegister} />
        </Switch>
    );
};
export default withRouter(RouterApp);