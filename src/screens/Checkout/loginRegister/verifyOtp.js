import React from 'react';
import { useNetworkRequest } from 'hooks/index';


const OtpLogin = () => {
    const [ values, setValues ] = React.useState({ otp:null});
    const [ invalids, setInvalids ] = React.useState({ otp:false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/verifyotp', values, () => []);

    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
    }

    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const handleSubmit = () => {
        
        makeFetch();
    }

    const handle = { handleChange, handleInvalid , handleSubmit};

    return { values, handle  }
}

export default OtpLogin;