import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { GlobalContext } from 'context';
import { CartContext } from 'context'

 
export const useVerifyOtp = (changePanel) => {
    const [email, setMail] = React.useState({ email: "" })
    const [otp, setOtp] = React.useState({ otp: "" });
    const [invalids, setInvalids] = React.useState({ email: false, otp: false });
    const { loading: eload, error: mailerr, data: edata, makeFetch: mailFetch } = useNetworkRequest('/api/auth/guestlogin', { email: email.email }, false);
    const { loading: otpload, error: otperr, data: otpdata, makeFetch: otpFetch } = useNetworkRequest('/api/auth/verifyotp', { email: email.email, otp: otp.otp }, false);
    const { setGlobalCtx } = React.useContext(GlobalContext);
    const { setCartFilters } = React.useContext(CartContext);
    const [enterotp, setEnterOtp] = React.useState(false);
    // const values = { email, otp }
    const err = Boolean(mailerr || otperr);
    const loading = Boolean(eload || otpload);
    const data = { edata, otpdata }
    React.useEffect(() => {
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
            // localStorage.setItem("true", false)
            const mail = email ? email.email : ""
            setGlobalCtx(
                localStorage.setItem("isedit", 1),
                localStorage.setItem("gut_lg", true),
                localStorage.setItem('email', mail), {
                    email,
                    user_id,
                })
            setCartFilters({
                user_id,
            })
        }
    }, [otpload])
    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const handleChange = (type, value) => {
        if (type === "email") {
            setMail({
                ...email,
                [type]: value
            })
        } else {
            setOtp({
                ...otp,
                [type]: value
            })
        }
    }

    const handlers = { handleChange, mailFetch, otpFetch, handleInvalid, setEnterOtp }

    return { handlers, otp, email, status: { err, loading, data },otpdata, enterotp ,setMail}
}


