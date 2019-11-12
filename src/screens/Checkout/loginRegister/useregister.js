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
        roles: ["user"],
        errortext: {
            emerr: "",
            passerr: "",
            cnfpasserr: "",
        },
        error: {
            passerr: false,
            emerr: false,
            cnfpasserr: false
        }
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
        debugger
        if (values.email === null) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Mail is Required'
            setValues({
                ...values,
                values,
            })
        }
        if (values.password === null) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'password is Required'
            setValues({
                ...values,
                values,
            })

        }
        if (values.confirmpassword === null) {
            values['error']['cnfpasserr'] = true
            values['errortext']['cnfpasserr'] = 'Confirm password is Required'
            setValues({
                ...values,
                values,
            })
        }
        if (values.password !== values.confirmpassword) {
            values['error']['passerr'] = true
            values['error']['cnfpasserr'] = true
            values['errortext']['passerr'] = "Passwords Don't Match"
            values['errortext']['cnfpasserr'] = "Passwords Don't Match"
            setValues({
                ...values,
                values,
            })
            return false 
        }

        //  if (data.message > 5) {
        //     values['error']['emerr'] = true
        //     values['errortext']['emerr'] = 'your mail is already exists'
        //     setValues({
        //         emerr: "your mail is already exists"
        //     })
        // }
        makeFetch(values);
        // setValues({
        //     err
        // })
    }

    const handlers = { handleSubmit, handleChange };

    return { values, handlers, data }
}

export default useRegister;