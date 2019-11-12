import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';

const useLogin = (props) => {
    const [values, setValues] = React.useState({
        password: null,
        email: null,
        roles: ["user"],
        errortext: {
            emerr: "",
            passerr: "",
        },
        error: {
            passerr: false,
            emerr: false,
        }
    });
    const [invalids, setInvalids] = React.useState({ username: false, password: false });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/signin', {}, []);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});

    React.useEffect(() => {
        var a = data.userprofile ? data.userprofile : ""
        if (JSON.stringify(a).length > 10) {
            var bbn = data.userprofile.id ? data.userprofile.id : ""
            if (bbn || bbn !== undefined) {
                localStorage.setItem("email", data.userprofile.email)
                var obj = {}
                var bb = data.userprofile.id ? data.userprofile.id : ""
                obj['userprofileId'] = bb
                localStorage.setItem('user_id', bb)
                makeRequestCod(obj);
            }

        }
    }, [data])

    React.useEffect(() => {
        var a = CodData ? CodData : ""
        if (JSON.stringify(a).length > 10) {
            localStorage.setItem("vals", JSON.stringify(CodData))
        }
    }, [CodData])
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

    // const vl = data && data.message
    const handelSubmit = (e) => {
        debugger
        console.log('valuesvaluesstate', 'hey i have came in... handle submit')
        // e.preventDefault();
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
        // if (data.message > 5) {
        //     values['error']['emerr'] = true
        //     values['errortext']['emerr'] = 'your mail is already exists'
        //     setValues({
        //         emerr: "your mail is already exists"
        //     })
        // }
        makeFetch(values);
    }

    const handlers = { handleChange, handleInvalid, handelSubmit };

    return { values, handlers, data }
}

export default useLogin;