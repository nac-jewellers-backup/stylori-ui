import React from 'react';
import { useNetworkRequest } from 'hooks/index';
import { FlashAuto } from '@material-ui/icons';


const ContinuesLogin = () => {
    const [ values, setValues ] = React.useState({ mail:null});
    const [ invalids, setInvalids ] = React.useState({ mail:false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/guestlogin', values, () => []);
    const handleChange = (event, name) => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }

    const handleInvalid = (type, status) => {
        setInvalids({
            ...invalids,
            [type]: status
        })
    }

    const handleSubmit = async (e, handleOtp) => {
        e.preventDefault()
        await makeFetch();
        handleOtp(true);
        return false;
    }

    const handle = { handleChange, handleInvalid , handleSubmit};

    return { values, handle  }
}

export default ContinuesLogin;