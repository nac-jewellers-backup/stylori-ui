import React from "react";
import { routes } from "router/routes";

const initialCtx = {
  GLobalCtx: {
    loggedIn: false,
    browserType: "jpg",
    productId: [],
    pathName: false,
    tabsChange: false,
  },

  setGlobaCtx: () => null,
};

export const GlobalContext = React.createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export const GlobalProvider = (props) => {
  const [Globalctx, setGlobalCtx] = React.useState(initialCtx.GLobalCtx);

  React.useEffect(() => {
    var loc = window.location.pathname
      .split("/")[1]
      .split("-")
      .filter((val) => {
        if (val === "silver") return val;
      });
    var locsilverStaticPage = window.location.pathname.split("/")[1];
    console.log("locsilverStaticPage", routes.Silver, `/${locsilverStaticPage}`);
    var loc_PD = window.location.pathname.split("/").filter((val) => {
      if (val === "silverjewellery") return val;
    });
    if (`/${locsilverStaticPage}` === routes.Silver) setGlobalCtx({ ...Globalctx, pathName: true });
    else if (`/${locsilverStaticPage}` === routes.styloriSilverCollections) setGlobalCtx({ ...Globalctx, pathName: true });
    else if (loc_PD.length > 0) setGlobalCtx({ ...Globalctx, pathName: true });
    else if (loc.length > 0) setGlobalCtx({ ...Globalctx, pathName: true });
    else setGlobalCtx({ ...Globalctx, pathName: false });
  }, []);
  return <GlobalContext.Provider value={{ Globalctx, setGlobalCtx }}>{props.children}</GlobalContext.Provider>;
};
