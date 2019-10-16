import React from 'react';
import { useNetworkRequest } from 'hooks/index';

const OtpLogin = () => {
    // var a = localStorage.getItem("email")?localStorage.getItem("email"):{}
    // var email = JSON.parse(a).email?JSON.parse(a).email:{};
    let email = localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")).email : {}
    const [values, setValues] = React.useState({ otp: null, email });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/verifyotp', values, () => []);
    const handleChange = (event, name) => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        makeFetch();
        return false;
    }
    const handleKeyPress = (event, isNumber) => {
        if (isNumber) {
            if (!(event.which >= 48 && event.which <= 57)) event.preventDefault();
        }
    };
    const handle = { handleChange, handleSubmit, handleKeyPress };
    return { values, handle, data }
}

export default OtpLogin;