import React from 'react';

const initialCtx = {
    GLobalCtx: {
        loggedIn: false,
        browserType: 'jpg',
        productId:[]
    },

    setGlobaCtx: () => null
}


export const GlobalContext = React.createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export const GlobalProvider = (props) => {

    const [Globalctx, setGlobalCtx] = React.useState(initialCtx.GLobalCtx);

    React.useEffect(()=>{
        var loc = window.location.pathname.split('/')[1].split('-').filter(val=>{if(val==='silver') return val})
        if(loc.length=== 0) setGlobalCtx({...Globalctx, pathName:false})
        else setGlobalCtx({...Globalctx, pathName:true})
    },[])
    return (
        <GlobalContext.Provider value={{ Globalctx, setGlobalCtx }} >
            {props.children}
        </GlobalContext.Provider>
    )
}