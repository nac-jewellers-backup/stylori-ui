import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { resetWarningCache } from 'prop-types';
import { CartContext } from 'context';
import { USERPROFILE } from 'queries/cart';

let user_ids = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
const salutation = localStorage.getItem("m") ? localStorage.getItem("m") : '';
// let addres_Ids = localStorage.getItem("addres_Id") && localStorage.getItem("addres_Id").length > 0 && localStorage.getItem("addres_Id") !== 'undefined' ? localStorage.getItem("addres_Id") : ""
// let namesOf_first = localStorage.getItem("namesOf_first") && localStorage.getItem("namesOf_first").length > 0 && localStorage.getItem("namesOf_first") !== 'undefined' && localStorage.getItem("namesOf_first") !== 'null' ? JSON.parse(localStorage.getItem("namesOf_first")) : ""
// let namesOf_last = localStorage.getItem("namesOf_last") && localStorage.getItem("namesOf_last").length > 0 && localStorage.getItem("namesOf_last") !== 'undefined' && localStorage.getItem("namesOf_last") !== 'null' ? JSON.parse(localStorage.getItem("namesOf_last")) : ""
// let pin_cod = localStorage.getItem("pin_cod") && localStorage.getItem("pin_cod").length > 0 && localStorage.getItem("pin_cod") !== 'undefined' && localStorage.getItem("pin_cod") !== 'null' ? JSON.parse(localStorage.getItem("pin_cod")) : ""
// let co_num = localStorage.getItem("co_num") && localStorage.getItem("co_num").length > 0 && localStorage.getItem("co_num") !== 'undefined' && localStorage.getItem("co_num") !== 'null' ? JSON.parse(localStorage.getItem("co_num")) : ""
var Profile_DATAS = {};
var obj_profile = {};
const useRegister = (changePanel, props) => {
    const [values, setValues] = React.useState({
        email: "",
        password: "",
        confirmpassword: "",
        roles: ["user"],
        firstname: "",
        lastname: "",
        salutation: salutation,
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
    // const [valuesedit, setValuesedit] = React.useState({

    // });
    const name = Profile_DATAS && Profile_DATAS.User_Profile && Profile_DATAS.User_Profile.firstName.length > 0 ? Profile_DATAS.User_Profile.firstName : ""
    // alert(JSON.stringify(name))
    const [valuesadrees, setvaluesadrees] = React.useState({
        user_id: user_ids,
        firstname: "",
        lastname: "",
        contactno: "",
        pincode: "",
        country_code: "+91",
        country: "India",
        salutation: "",
    });


    const pathnames = window.location.pathname.split("-")[0] === "/account"
    const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
    // const { makeFetch: makeFetchedit } = useNetworkRequest('/api/auth/signup', {}, false);
    const { data: reg_update_data, makeFetch: makeFetcheditAddress } = useNetworkRequest('/api/updateuserprofile', {}, false);
    const { data, error, loading, makeFetch } = useNetworkRequest('/api/auth/signup', {}, false);
    const { setCartFilters } = React.useContext(CartContext);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    const pathnamelog = window.location.pathname === "/registers"

    const { loading: Profile_loading, error: Profile_error, data: Profile_Data, makeRequestCod: propfile_fetch } = useCheckForCod(USERPROFILE, () => { }, {});
    React.useEffect(() => {
        if (user_ids && user_ids.length > 0) {
            obj_profile["id"] = user_ids
            propfile_fetch(obj_profile)
        }
    }, [])
    React.useEffect(() => {
        if (Profile_Data && Profile_Data.data && Profile_Data.data.userProfileById && Profile_Data.data.userProfileById.firstName && Profile_Data.data.userProfileById.firstName.length > 0) {
            valuesadrees["firstname"] = Profile_Data.data.userProfileById.firstName && Profile_Data.data.userProfileById.firstName
            valuesadrees["lastname"] = Profile_Data.data.userProfileById.lastName && Profile_Data.data.userProfileById.lastName
            valuesadrees["contactno"] = Profile_Data.data.userProfileById.mobile && Profile_Data.data.userProfileById.mobile
            valuesadrees["pincode"] = Profile_Data.data.userProfileById.pincode && Profile_Data.data.userProfileById.pincode
            valuesadrees["salutation"] = Profile_Data.data.userProfileById.salutation && Profile_Data.data.userProfileById.salutation
            setvaluesadrees({
                ...valuesadrees,
                valuesadrees
            })
        }
    }, [Profile_Data])
    const clear = () => {
        setValues({
            email: "",
            password: "",
            confirmpassword: "",
            firstname: "",
            lastname: "",
            salutation: salutation,
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
        })
        // props.change()
    }
    useEffect(() => {

        if (reg_update_data && reg_update_data === "Profile Updated Successfully") {
            alert("Profile Updated Successfully")
        }
    }, [reg_update_data])

    useEffect(() => {
        var ms = data && data.message
        if (ms && values['error'] && values['errortext']) {
            values['error']['emerr'] = true
            values['errortext']['emerr'] = 'Your email is already exists'
            setValues({
                ...values,
                values,
            })
            // return false
        } else {
            var v = data.user_profile_id ? data.user_profile_id : ""
            if (v.length > 0 && values['error'] && values['errortext']) {
                localStorage.setItem("true", false)
                values['error']['emerr'] = false
                values['errortext']['emerr'] = ''
                var user_id = data && data.user_profile_id
                setValues({
                    ...values,
                    values,
                })
                var obj = {}
                obj['userprofileId'] = bb
                var bb = data.user_profile_id ? data.user_profile_id : "";
                // if(bb.length > 0){
                localStorage.setItem("isedit", 1)
                // }
                clear()
                localStorage.setItem("email", data.user.email)
                localStorage.setItem("user_id", data.user_profile_id)
                localStorage.setItem('accessToken', data.accessToken)
                // localStorage.setItem("set_check", "123")
                // localStorage.setItem("addres_id", data.user.id)
                setValues({ user_id: data.user_profile_id })
                setCartFilters({ user_id })
                makeRequestCod(obj);
                if (!pathnamelog) {
                    changePanel(2)
                    // return false
                } else {
                    if (localStorage.getItem('review_location') && localStorage.getItem('review_location').length > 0) {
                        window.location.href = localStorage.getItem('review_location')
                        return false
                    } else {
                        window.location.href = "/"
                        return false
                    }
                }
            }
        }

        //     obj['id'] = bb
        //     makeRequestCod(obj);
    }, [data])
    // useEffect(() => {
    //     var resin = CodData.data ? JSON.stringify(CodData.data) : ""
    //     if (resin.length > 30) {
    //         localStorage.setItem('regaddr', JSON.stringify(CodData.data.allUserAddresses.nodes[0]))
    //     }
    // }, [CodData])
    const errmsg = data.message ? data.message : ""
    const handleChange = (type, value) => {
        if (values.email !== "" && type === 'email' && values['error'] && values['errortext']) {
            values['error']['emerr'] = false
            values['errortext']['emerr'] = ""
        }
        if (values.password !== "" && values['error'] && values['errortext']) {
            values['error']['passerr'] = false
            values['errortext']['passerr'] = ""

        } if (values.firstname !== "" && values['error'] && values['errortext']) {
            values['error']['firstname'] = false
            values['errortext']['firstname'] = ""
        } if (values.confirmpassword !== "" && values['error'] && values['errortext']) {
            values['error']['cnfpasserr'] = false
            values['errortext']['cnfpasserr'] = ""
        } if (values.lastname !== "" && values['error'] && values['errortext']) {
            values['error']['lastname'] = false
            values['errortext']['lastname'] = ""
        }
        setValues({
            ...values,
            [type]: value,
        })
        // makeFetch(values)
    }

    const handlesetvaluesadrees = (type, value) => {
        setvaluesadrees({
            ...valuesadrees,
            [type]: value,
        })
        // makeFetch(values)
    }
    const user = data.user_profile_id ? data.user_profile_id : ""

    const handleSubmit = (e) => {

        if (!pathnames) {
            if (values.email === "" && values['error'] && values['errortext']) {
                values['error']['emerr'] = true
                values['errortext']['emerr'] = 'Email is required'
                setValues({
                    ...values,
                    values,
                })
            }

            if (values.password === "" && values['error'] && values['errortext']) {
                values['error']['passerr'] = true
                values['errortext']['passerr'] = 'Password is required'
                setValues({
                    ...values,
                    values,
                })
            }
            if (values.confirmpassword === "" && values['error'] && values['errortext']) {
                values['error']['cnfpasserr'] = true
                values['errortext']['cnfpasserr'] = 'Confirm password is required'
                setValues({
                    ...values,
                    values,
                })
            }
            if (values.firstname === "" && values['error'] && values['errortext']) {
                values['error']['firstname'] = true
                values['errortext']['firstname'] = 'First Name is required'
                setValues({
                    ...values,
                    values,
                })
            }
            if (values.lastname === "" && values['error'] && values['errortext']) {
                values['error']['lastname'] = true
                values['errortext']['lastname'] = 'Last Name is required'
                setValues({
                    ...values,
                    values,
                })
                return false
            }
            if (values.email === "" && values['error'] && values['errortext']) {
                values['error']['emerr'] = true
                values['errortext']['emerr'] = 'Email is required'
                setValues({
                    ...values,
                    values,
                })
                return false
            }
            if (!pathnames) {
                if (values.password !== values.confirmpassword && values['error'] && values['errortext']) {
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
            }
            var emailvld = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailvld.test(values.email)) {
                values['error']['emerr'] = true
                values['errortext']['emerr'] = 'An email address must contain a single @/.'
                setValues({
                    ...values,
                    values,
                })
                return false
            }
            // localStorage.setItem("namesOf_first", JSON.stringify(values.firstname))
            // localStorage.setItem("namesOf_last", JSON.stringify(values.lastname))
            makeFetch(values);
            // reset();
            return false
        } else {
            // localStorage.setItem("namesOf_first", JSON.stringify(valuesadrees.firstname))
            // localStorage.setItem("namesOf_last", JSON.stringify(valuesadrees.lastname))
            // localStorage.setItem("pin_cod", JSON.stringify(valuesadrees.pincode))
            // localStorage.setItem("co_num", JSON.stringify(valuesadrees.contactno))
            // makeFetchedit();
            makeFetcheditAddress(valuesadrees);
        }
    }
    const handlers = { handleSubmit, handleChange, handlesetvaluesadrees, clear };

    return { values, setValues, handlers, data, valuesadrees }
}

export default useRegister;