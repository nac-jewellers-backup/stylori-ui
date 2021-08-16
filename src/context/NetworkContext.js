import React from "react";
import { API_URL, HOME_PAGE_URL, CDN_URL } from "../config";

const initialCtx = {
  NetworkCtx: {
    apiUrl: API_URL,
    token: null,
    homePage: HOME_PAGE_URL,
    graphqlUrl: `${API_URL}/graphql`,
    cdnUrl: CDN_URL,
    LoginCtx: { email: "", password: "" },
  },

  setNetworkCtx: () => null,
};

export const NetworkContext = React.createContext(initialCtx);

export const NetworkConsumer = NetworkContext.Consumer;

export const NetworkProvider = (props) => {
  const [NetworkCtx, setNetworkCtx] = React.useState(initialCtx.NetworkCtx);

  return <NetworkContext.Provider value={{ NetworkCtx, setNetworkCtx }}>{props.children}</NetworkContext.Provider>;
};
