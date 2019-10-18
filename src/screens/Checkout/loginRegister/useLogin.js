import React from 'react';
import { useNetworkRequest } from 'hooks/index';


const useLogin = () => {
    const [ values, setValues ] = React.useState({ username:null, password: null});
    const [ invalids, setInvalids ] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/signin', values, () => []);

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

    const doLogin = () => {
        
        makeFetch();
    }

    const handlers = { handleChange, handleInvalid , doLogin};

    return { values, handlers  }
}

export default useLogin;