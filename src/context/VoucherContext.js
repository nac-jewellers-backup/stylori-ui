import React from 'react';
import { withRouter } from 'react-router-dom';

const initialCtx = {
    VoucherCtx: {
        value:'',
        type:''
    },

    setVoucherCtx: () => null
}


export const VoucherContext = React.createContext(initialCtx);

export const VoucherConsumer = VoucherContext.Consumer;

const Provider = (props) => {

    const [Voucherctx, setVoucherCtx] = React.useState(initialCtx.VoucherCtx)

    return (
        <VoucherContext.Provider value={{ Voucherctx,setVoucherCtx}} >
            {props.children}
        </VoucherContext.Provider>
    )
}

export const VoucherProvider = withRouter(Provider);
