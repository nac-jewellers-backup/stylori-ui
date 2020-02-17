import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from "screens";
import PricingPage from "screens/Stylori/PricingPage";

import Cart from "screens/Stylori/Cart";
import Account from "screens/Stylori/accounts";
import Checkout from "screens/Stylori/Checkout";
import HomePageStylori from "screens/Stylori/HomePage";
import { GlobalContext } from "context";
import Faqs from "screens/Stylori/faqs";
import Register from "screens/Checkout/loginRegister/register";
import UserLogin from "../components/LoginAndRegister/Login";
import UserRegister from "../components/LoginAndRegister/Register";
import routes from "router/routes";
import { withRouter } from "react-router";
import { createBrowserHistory } from "history";
import Collection from "screens/Stylori/Collection";
import stories from "screens/Stylori/stories";
import AboutPage from "components/faqs/aboutPage";
import ResetPassword from "components/ForgotPassword/ConfirmPass";
import ForgotPassword from "components/ForgotPassword/ForgetPassword";
import PaymentHiddenForm from "../screens/Checkout/paymentOption/paymentHiddenForm";
import Success from "../screens/Stylori/success";
import Fail from "../screens/Stylori/fail";
import Contactus from "../screens/Stylori/contactUs";
import Careers from "../screens/Stylori/careers";

// const Tacos = ({ props }) => {
//     if (window.location.search !== null) {

// SILVER SCREENS

import Silver from "screens/SilverStylori";
import SilverListingPage from "screens/SilverStylori/listingpage";
import SilverProductDetail from "screens/SilverStylori/productDetail";
import ChangePassword from "screens/Checkout/loginRegister/ChangePassword";

// SILVER SCREENS ENDS

const browserHistory = createBrowserHistory();
let user_id = localStorage.getItem("user_id")
  ? localStorage.getItem("user_id")
  : {};

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});
export const RouterApp = props => {
  const { Globalctx } = React.useContext(GlobalContext);
  const func_location_silver = () => {
    var loc = window.location.pathname
      .split("/")[1]
      .split("-")
      .filter(val => {
        if (val === "silver") return val;
      });
    return loc[0];
  };

  const paths = [
    "/:params1/:params2",
    "/:params1/:params2/:params3",
    "/:params1/:params2/:params3/:params4"
  ];
  var loc_PD = window.location.pathname.split("/").filter(val => {
    if (val === "silverjewellery") return val;
  });
  // condition()
  // console.log('window.location.pathnamewindow.location.pathname', window.location.pathname, props.location.pathname)
  return (
    <Switch history={browserHistory}>
      {/* <Redirect key="stylori-redirect" from="/" exact to={"/"} /> */}
      <Route
        key="HomePageStylori"
        component={HomePageStylori}
        exact
        path={routes.HomePageStylori}
      />
      <Route key="Silver" component={Silver} exact path={routes.Silver} />
      <Route key="Faqs" component={Faqs} exact path={routes.Faqs} />
      <Route
        key="ProductCare"
        component={Faqs}
        exact
        path={routes.ProductCare}
      />
      <Route key="Shipping" component={Faqs} exact path={routes.Shipping} />
      <Route
        key="PrivacyPolicy"
        component={Faqs}
        exact
        path={routes.PrivacyPolicy}
      />
      <Route
        key="TermsConditions"
        component={Faqs}
        exact
        path={routes.TermsConditions}
      />
      <Route key="Checkout" component={Checkout} exact path={routes.Checkout} />
      <Route key="AboutUs" component={AboutPage} exact path={routes.AboutUs} />
      <Route
        key="ContactUs"
        component={Contactus}
        exact
        path={routes.ContactUs}
      />
      <Route key="Careers" component={Careers} exact path={routes.Careers} />
      <Route
        key="forgotpassword"
        component={ForgotPassword}
        exact
        path={routes.ForgotPassword}
      />
      <Route
        key="resetPassword"
        component={ResetPassword}
        exact
        path={`${routes.ResetPassword}/:id`}
      />
      <Route
        key="ChangePassword"
        component={ChangePassword}
        exact
        path={routes.ChangePassword}
      />
      <Route
        key="paymenthidden"
        component={PaymentHiddenForm}
        exact
        path={routes.paymenthidden}
      />
      <Route
        key="paymentsuccess"
        component={Success}
        exact
        path={`${routes.paymentsuccess}/:id`}
      />
      <Route
        key="paymentfail"
        component={Fail}
        exact
        path={`${routes.paymentfail}/:id`}
      />
      {props.location.pathname !== "/cart" &&
        props.location.pathname !==
          `/account${"-" + window.location.pathname.split("-")[1]}` &&
        props.location.pathname !== "/registers" &&
        props.location.pathname !== "/login" &&
        props.location.pathname !== "/checkout" &&
        props.location.pathname !== "/forgotpassword" &&
        props.location.pathname !== "/careers" &&
        props.location.pathname !== "/resetpassword/:id" &&
        props.location.pathname !== "/changepassword" &&
        props.location.pathname !== "/collections" &&
        props.location.pathname !== "/education" &&
        props.location.pathname !== "/stories" &&
        props.location.pathname !== "/paymentfail" &&
        props.location.pathname !== "/paymentsuccess/:id" &&
        props.location.pathname !== "/contactus" &&
        Globalctx &&
        Globalctx.pathName === false && (
          <Route exact={true} component={Stylori} path={"/:listingpage"} />
        )}
      {Globalctx &&
        Globalctx.pathName &&
        loc_PD.length !== "silverjewellery" && (
          <Route
            key="silverListingpage"
            component={SilverListingPage}
            path={window.location.pathname}
          />
        )}
      <Route key="sto" component={stories} exact path={routes.Stories} />
      <Route key="sto" component={stories} exact path={routes.Education} />
      <Route
        key="Collection"
        component={Collection}
        exact
        path={routes.Collection}
      />
      {props.location.pathname !== "/cart" &&
        props.location.pathname !==
          `/account${"-" + window.location.pathname.split("-")[1]}` &&
        props.location.pathname !== "/registers" &&
        props.location.pathname !== "/login" &&
        props.location.pathname !== "/checkout" &&
        props.location.pathname !== "/careers" &&
        props.location.pathname !== "/forgotpassword" &&
        props.location.pathname !== "/resetpassword/:id" &&
        props.location.pathname !== "/changepassword" &&
        props.location.pathname !== "/paymentfail" &&
        props.location.pathname !== "/contactus" &&
        props.location.pathname !== "/paymentsuccess/:id" && (
          <Route exact={true} component={Stylori} path={"/:listingpage"} />
        )}

      {Globalctx && Globalctx.pathName && loc_PD.length > 0 ? (
        <Route exact component={SilverProductDetail} path={paths} />
      ) : (
        <Route exact component={PricingPage} path={paths} />
      )}
      <Route key="cart" exact component={Cart} path={routes.Cart} />
      <Route key="Register" component={Register} exact path={routes.Register} />
      {localStorage.getItem("user_id") &&
      Boolean(localStorage.getItem("gut_lg")) ? (
        <Route
          key="login"
          component={UserLogin}
          exact
          path={routes.UserLogin}
        />
      ) : (
        <Redirect key="stylori-redirect" from="/login" exact to={"/"} />
      )}

      {Boolean(localStorage.getItem("user_id")) &&
      Boolean(localStorage.getItem("gut_lg")) ? (
        <Redirect
          key="stylori-redirect"
          from={routes.Account}
          exact
          to={"/login"}
        />
      ) : (
        <Route key="Account" component={Account} exact path={routes.Account} />
      )}
      <Route
        key="registers"
        component={UserRegister}
        exact
        path={routes.UserRegister}
      />
    </Switch>
  );
};
export default withRouter(RouterApp);
