import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from 'screens'
import PricingPage from 'screens/Stylori/PricingPage'
import Cart from 'screens/Stylori/Cart'
import Checkout from 'screens/Stylori/Checkout'
import Register from 'screens/Checkout/loginRegister/register';
import routes from "router/routes";
import { withRouter } from "react-router";
// const Tacos = ({ props }) => {
//     if (window.location.search !== null) {
      
//         return (
//             <Route
//                 path={`/stylori     ${window.location.search}`}
//                 component={Stylori}
//             />
//         )

//     }
//     else{
//         return(
//             <Route
//             path={routes.stylori}
//             component={Stylori}
//         />
//         )
//     }
// }

export const RouterApp = (props) => {
console.log('window.location.pathnamewindow.location.pathname', window.location.pathname, props.location.pathname)
    return (
        <Switch>
            <Redirect key="stylori-redirect" from="/" exact to={"/jewellery"} />
            <Route key="Checkout" component={Checkout} exact path={routes.Checkout} />
            
            {(props.location.pathname !== "/cart" && props.location.pathname !== "/checkout") &&
             <Route exact={true} component={Stylori}  path={"/:listingpage"} />}
            
            <Route  exact component={PricingPage}  path={`/:productCategory/:productType/:material/:productName`} />
             <Route key="cart" exact component={Cart}  path={routes.Cart} />
            <Route key="Register" component={Register} exact path={routes.Register} />
        </Switch>
    );
};
export default withRouter(RouterApp);