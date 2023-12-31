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
import ReactPixel from "react-facebook-pixel";
// const Tacos = ({ props }) => {
//     if (window.location.search !== null) {
 
// SILVER SCREENS

import Silver from "screens/silverHomePage/silverHomePage";
import SilverProductDetail from "screens/SilverStylori/productDetail";
import ChangePassword from "screens/Checkout/loginRegister/ChangePassword";
import CMSPages from "screens/CMSPages";
import { ReadMore } from "components/BlogImageCard/readMore";

// SILVER SCREENS ENDS

const browserHistory = createBrowserHistory();
// let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {};

browserHistory.listen(() => {
  window.scrollTo(0, 0);
  ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: true });
  ReactPixel.pageView();
});

export const RouterApp = (props) => {
  const { Globalctx } = React.useContext(GlobalContext);
 
  const paths = ["/:params1/:params2", "/:params1/:params2/:params3", "/:params1/:params2/:params3/:params4"];
  var loc_PD = window.location.pathname.split("/").filter((val) => {
    if (val === "silverjewellery") 
    return val;
  });
  // condition()
  const p1 = window.location.pathname
  const regex = /silver/i;
  const hasSubstring = regex.test(p1);
  var in_Path=(window.location.pathname.includes("Silver")||window.location.pathname.includes("silver"))


  if(hasSubstring) {
    localStorage.setItem("isCdnPage", "true")    
   
  }
  // else{
  //   localStorage.setItem("isCdnPage", "")   
  //   console.log("pathvicky")
  // }
  return (
    <>
      <Switch history={browserHistory}>
        {/* <Redirect key="stylori-redirect" from="/" exact to={"/"} /> */}
        <Route
          key="HomePageStylori"
          component={HomePageStylori}

          exact
          path={routes.HomePageStylori}
        />
        {/* <Route key="Silver" component={Silver} exact path={routes.Silver} /> */}
        {/* <Route key="SilverCollection" component={SilverCollection} exact path={routes.styloriSilverCollections} /> */}
        {/* <Route key="Faqs" component={Faqs} exact path={routes.Faqs} /> */}
        <Route
          key="ProductCare"
          component={Faqs}
          exact
          path={routes.ProductCare}
        />
        <Route key="Shipping" component={Faqs} exact path={routes.Shipping} />
        {/* <Route
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
        /> */}
        <Route
          key="Checkout"
          component={Checkout}
          exact
          path={routes.Checkout}
        />
        <Route
          key="AboutUs"
          component={AboutPage}
          exact
          path={routes.AboutUs}
        />
        <Route
          key="ContactUs"
          component={Contactus}
          exact
          path={routes.ContactUs}
        />
        {/* <Route key="Careers" component={Careers} exact path={routes.Careers} /> */}
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
        {
          props.location.pathname !== "/cart" &&
            props.location.pathname !==
              `/account${"-" + window.location.pathname.split("-")[1]}` &&
            props.location.pathname !== "/registers" &&
            props.location.pathname !== "/login" &&
            props.location.pathname !== "/checkout" &&
            props.location.pathname !== "/styloriBlog" &&
            props.location.pathname !== "/forgotpassword" &&
            // props.location.pathname !== "/careers" &&
            props.location.pathname !== "/resetpassword/:id" &&
            props.location.pathname !== "/changepassword" &&
            // props.location.pathname !== "/collections" &&
            props.location.pathname !== "/education" &&
            props.location.pathname !== "/stories" &&
            // props.location.pathname !== "/styloriSilver" &&
            props.location.pathname !== "/paymentfail" &&
            props.location.pathname !== "/paymentsuccess/:id" &&
            props.location.pathname !== "/contactus" && (
              // Globalctx &&
              // Globalctx.pathName === false && (
              <Route exact={true} component={Stylori} path={"/:listingpage"} />
            )
          // )
        }
        {/* {Globalctx &&
        Globalctx.pathName &&
        loc_PD.length !== "silverjewellery" && (
          <Route
            key="silverListingpage"
            component={SilverListingPage}
            path={window.location.pathname}
          />
        )} */}
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
          props.location.pathname !== "/styloriBlog" &&
          // props.location.pathname !== "/careers" &&
          props.location.pathname !== "/forgotpassword" &&
          props.location.pathname !== "/resetpassword/:id" &&
          props.location.pathname !== "/changepassword" &&
          props.location.pathname !== "/paymentfail" &&
          props.location.pathname !== "/contactus" &&
          // props.location.pathname !== "/styloriSilver" &&
          props.location.pathname !== "/paymentsuccess/:id" && (
            <Route exact={true} component={Stylori} path={"/:listingpage"} />
          )}

        {Globalctx && Globalctx.pathName && loc_PD.length > 0 ? (
          <Route exact component={SilverProductDetail} path={paths} />
        ) : (
          <Route exact component={PricingPage} path={paths} />
        )}
        <Route key="cart" exact component={Cart} path={routes.Cart} />
        <Route
          key="Register"
          component={Register}
          exact
          path={routes.Register}
        />

        {(localStorage.getItem("user_id") &&
          Boolean(localStorage.getItem("gut_lg"))) ||
        !localStorage.getItem("user_id") ? (
          <Route
            key="login"
            component={UserLogin}
            exact
            path={routes.UserLogin}
          />
        ) : (
          <Redirect key="stylori-redirect" from="/login" exact to={"/"} />
        )}

        {(localStorage.getItem("user_id") &&
          Boolean(localStorage.getItem("gut_lg"))) ||
        !localStorage.getItem("user_id") ? (
          <Redirect
            key="stylori-redirect"
            from={routes.Account}
            exact
            to={"/login"}
          />
        ) : (
          <Route
            key="Account"
            component={Account}
            exact
            path={routes.Account}
          />
        )}
        <Route
          key="registers"
          component={UserRegister}
          exact
          path={routes.UserRegister}
        />
        <Route
          key="static"
          component={CMSPages}
          exact
          path={routes.cmsRoutes}
        />
        <Route
          key="static"
          component={ReadMore}
          exact
          path={routes.styloriBlog}
        />
      </Switch>
    </>
  );
};
export default withRouter(RouterApp);
