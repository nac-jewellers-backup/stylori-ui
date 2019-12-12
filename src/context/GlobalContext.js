import React from 'react';

const initialCtx = {
    GLobalCtx: {
        loggedIn: false,
        browserType: 'jpg'
    },

    setGlobaCtx: () => null
}


export const GlobalContext = React.createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export const GlobalProvider = (props) => {

    const [Globalctx, setGlobalCtx] = React.useState(initialCtx.GLobalCtx);

    return (
        <GlobalContext.Provider value={{ Globalctx, setGlobalCtx }} >
            {props.children}
        </GlobalContext.Provider>
    )
}