import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { GlobalContext } from 'context';
import { CartContext } from 'context'


export const useVerifyOtp = (changePanel) => {
    const [email, setMail] = React.useState(null)
    const [otp, setOtp] = React.useState(null);
    const { loading: eload, error: mailerr, data: edata, makeFetch: mailFetch } = useNetworkRequest('/api/auth/guestlogin', { email }, false);
    const { loading: otpload, error: otperr, data: otpdata, makeFetch: otpFetch } = useNetworkRequest('/api/auth/verifyotp', { email, otp }, false);
    const { setGlobalCtx } = React.useContext(GlobalContext);
    const { setCartFilters } = React.useContext(CartContext);
    const [enterotp, setEnterOtp] = React.useState(false);
    const handlers = { setMail, setOtp, mailFetch, otpFetch }
    const values = { email, otp }
    const err = Boolean(mailerr || otperr);
    const loading = Boolean(eload || otpload);
    const data = { edata, otpdata }

    React.useEffect(() => {
        console.info('MAILERR', Boolean(!mailerr && Object.keys(edata).length), mailerr, edata);
        if (!mailerr && Object.keys(edata).length) {
            // setGlobaCtx({
            //     ...GLobalCtx,
            //     mailId: email,
            //     userId: edata.id
            // })
            setEnterOtp(true)
        }
    }, [edata, mailerr])

    React.useEffect(() => {
        const verifiedMail = Boolean(!otpload && Object.keys(edata).length > 0)
        if (verifiedMail) {
            var user_id = edata.user.id;
            
            setGlobalCtx(
                localStorage.setItem('email', email),{
                email,
                user_id,
            })
            setCartFilters({
                user_id,
            })
        }
    }, [otpload])

    return { handlers, values, status: { err, loading, data }, enterotp }
}


