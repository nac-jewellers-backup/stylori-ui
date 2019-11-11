import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { resetWarningCache } from 'prop-types';

const useRegister = () => {
    const [values, setValues] = React.useState({
        email: null,
        password: null,
        confirmpassword: null,
        roles: ["user"]
    });

    const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
    const { data, error, loading, makeFetch } = useNetworkRequest('/api/auth/signup', {}, false);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    useEffect(() => {
        // if(data.message=="Email ID Already Exist")
        var v = data.user_profile_id ? data.user_profile_id : ""
        if (v.length > 0) {
            var obj = {}
            obj['userprofileId'] = bb
            var bb = data.user_profile_id ? data.user_profile_id : ""
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("user_id", data.user_profile_id)
            makeRequestCod(obj);
        }
        //     obj['id'] = bb
        //     makeRequestCod(obj);
        localStorage.setItem("true", false)
    }, [data])
    // useEffect(() => {
    //     var resin = CodData.data ? JSON.stringify(CodData.data) : ""
    //     if (resin.length > 30) {
    //         localStorage.setItem('regaddr', JSON.stringify(CodData.data.allUserAddresses.nodes[0]))
    //     }
    // }, [CodData])
    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value,
        })
    }
    const handleSubmit = (e) => {
        // e.preventDefault();

        if (values.password !== values.confirmpassword) {
            alert("Passwords Don't Match");
            return false
        }
        else if (values.password == '') {
            alert("Passwords must not be empty");
            return false
        }
        else if (data.message) {
            return false
        }
        else {
            makeFetch(values);
        }

    }

    const handlers = { handleSubmit, handleChange };

    return { values, handlers, data }
}

export default useRegister;