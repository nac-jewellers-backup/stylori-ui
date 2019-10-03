import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from 'screens'
import PricingPage from 'screens/Stylori/PricingPage'
import Cart from 'screens/Stylori/Cart'
import Checkout from 'screens/Stylori/Checkout'
import Register from 'screens/Checkout/loginRegister/register';
import routes from "router/routes";
export const RouterApp = () => {

    return (
        <Switch>
            <Redirect key="stylori-redirect" from="/" exact to={routes.stylori} />
            <Route key="Checkout" component={Checkout} exact path={routes.Checkout} />
            <Route key="stylori" component={Stylori} exact path={routes.stylori/':search'} />
            <Route key="PricingPage" component={PricingPage} exact path={routes.PricingPage/':id'}  value/>
            <Route key="Cart" component={Cart} exact path={routes.Cart} />
            <Route key="Register" component={Register} exact path={routes.Register} />
        </Switch>
    );
};
export default RouterApp;