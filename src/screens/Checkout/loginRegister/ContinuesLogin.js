import React from 'react';
import { useNetworkRequest } from 'hooks/index';

const ContinuesLogin = () => {
    const [values, setValues] = React.useState({ email: null });
    // const [invalids, setInvalids] = React.useState({ email: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/guestlogin', values, () => []);
    const handleChange = (event, name) => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }
    const handleSubmit = (e, handleOtp) => {
        e.preventDefault()
        makeFetch();
        handleOtp(true);
        return false;
    }
    const handle = { handleChange, handleSubmit };
    return { values, handle, data }
}

export default ContinuesLogin;