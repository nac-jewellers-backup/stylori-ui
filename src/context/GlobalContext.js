import React from 'react';

const initialCtx = {
    GLobalCtx: {
        loggedIn: false,
        browserType: 'jpg',
        pathName:false
    },

    setGlobaCtx: () => null
}


export const GlobalContext = React.createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export const GlobalProvider = (props) => {

    const [Globalctx, setGlobalCtx] = React.useState(initialCtx.GLobalCtx);

    React.useEffect(()=>{
        var loc = window.location.pathname.split('/')[1].split('-').filter(val=>{if(val==='silver') return val})
        if(loc[0].length>0)  setGlobalCtx({pathName:true})
        else setGlobalCtx({pathName:false})
    })
    return (
        <GlobalContext.Provider value={{ Globalctx, setGlobalCtx }} >
            {props.children}
        </GlobalContext.Provider>
    )
}