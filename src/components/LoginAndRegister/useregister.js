import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { resetWarningCache } from 'prop-types';

const useRegister = (changePanel, props) => {
    const [values, setValues] = React.useState({
        email: null,
        password: null,
        confirmpassword: null,
        roles: ["user"],
        firstname: null,
        lastname: null,
        errortext: {
            emerr: "",
            passerr: "",
            cnfpasserr: "",
            firstname: "",
            lastname: ""
        },
        error: {
            passerr: false,
            emerr: false,
            cnfpasserr: false,
            firstname: false,
            lastname: false
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
            var bb = data.user_profile_id ? data.user_profile_id : "";
            // if(bb.length > 0){
            localStorage.setItem("isedit", 1)
            // }
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
    const errmsg = data.message ? data.message : ""
    const handleChange = (type, value) => {
        if (values.email !== null || errmsg.length < 0) {
            values['error']['emerr'] = false
            values['errortext']['emerr'] = ''
        }
        if (values.password !== null) {
            values['error']['passerr'] = false
            values['errortext']['passerr'] = ''

        } if (values.firstname !== null) {
            values['error']['firstname'] = false
            values['errortext']['firstname'] = ''
        } if (values.confirmpassword !== null) {
            values['error']['cnfpasserr'] = false
            values['errortext']['cnfpasserr'] = ''
        } if (values.lastname !== null) {
            values['error']['lastname'] = false
            values['errortext']['lastname'] = ''
        }
        setValues({
            ...values,
            [type]: value,
        })
        makeFetch(values)
    }

    const user = data.user_profile_id ? data.user_profile_id : ""
    const handleSubmit = (e) => {
        if (values.email === null) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Mail is required'
            setValues({
                ...values,
                values,
            })
        }

        if (values.password === null) {
            values['error']['passerr'] = true
            values['errortext']['passerr'] = 'Password is required'
            setValues({
                ...values,
                values,
            })
        }
        if (values.confirmpassword === null) {
            values['error']['cnfpasserr'] = true
            values['errortext']['cnfpasserr'] = 'Confirm password is required'
            setValues({
                ...values,
                values,
            })
        }
        if (values.firstname === null) {
            values['error']['firstname'] = true
            values['errortext']['firstname'] = 'FirstName is required'
            setValues({
                ...values,
                values,
            })
        }
        if (values.lastname === null) {
            values['error']['lastname'] = true
            values['errortext']['lastname'] = 'LastName is required'
            setValues({
                ...values,
                values,
            })
            return false
        }

        if (values.password !== values.confirmpassword) {
            // values['error']['passerr'] = true
            values['error']['cnfpasserr'] = true
            // values['errortext']['passerr'] = "password doesn't match"
            values['errortext']['cnfpasserr'] = "Password doesn't match"
            setValues({
                ...values,
                values,
            })
            return false
        }
        makeFetch(values);
        if (errmsg.length > 0) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'your mail is already exists'
            setValues({
                ...values,
                values,
            })
            return false
        }
        if (errmsg.length < 0) {
            values['error']['emerr'] = false
            values['errortext']['emerr'] = ''
            setValues({
                ...values,
                values,
            })
            return false
        }

        // changePanel(3)
    }
    const handlers = { handleSubmit, handleChange };

    return { values, handlers, data }
}

export default useRegister;