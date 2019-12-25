// import React, { useEffect } from 'react';
// import { useNetworkRequest } from 'hooks/index';
// import { useCheckForCod } from 'hooks/CheckForCodHook';
// import { ADDRESSDETAILS } from 'queries/productdetail';
// import { resetWarningCache } from 'prop-types';
// import { CartContext } from 'context'
// const useRegister = (changePanel, props) => {
//     const [values, setValues] = React.useState({
//         email: "",
//         password: "",
//         confirmpassword: "",
//         roles: ["user"],
//         firstname: "",
//         lastname: "",
//         errortext: {
//             emerr: "",
//             passerr: "",
//             cnfpasserr: "",
//             firstname: "",
//             lastname: ""
//         },
//         error: {
//             passerr: false,
//             emerr: false,
//             cnfpasserr: false,
//             firstname: false,
//             lastname: false
//         }
//     });

//     const [invalids, setInvalids] = React.useState({ username: false, confirmpassword: false, });
//     const { data, error, loading, makeFetch } = useNetworkRequest('/api/auth/signup', {}, false);
//     const { setCartFilters } = React.useContext(CartContext);
//     const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
//     useEffect(() => {
//         var ms = data && data.message
//         if (ms && values['error'] && values['errortext']) {
//             values['error']['emerr'] = true
//             values['errortext']['emerr'] = 'Your email is already exists'
//             setValues({
//                 ...values,
//                 values,
//             })
//             // return false
//         } else {
//             var v = data.user_profile_id ? data.user_profile_id : ""
//             if (v.length > 0 && values['error'] && values['errortext']) {
//                 localStorage.setItem("true", false)
//                 values['error']['emerr'] = false
//                 values['errortext']['emerr'] = ''
//                 var user_id = data && data.user_profile_id
//                 setValues({
//                     ...values,
//                     values,
//                 })
//                 var obj = {}
//                 obj['userprofileId'] = bb
//                 var bb = data.user_profile_id ? data.user_profile_id : "";
//                 // if(bb.length > 0){
//                 localStorage.setItem("isedit", 1)
//                 // }
//                 localStorage.setItem("email", data.user.email)
//                 localStorage.setItem("user_id", data.user_profile_id)
//                 // localStorage.setItem("addres_id", data.user.id)
//                 setValues({ user_id: data.user_profile_id })
//                 setCartFilters({ user_id })
//                 makeRequestCod(obj);
//                 window.location.href = localStorage.getItem('review_location')
//             }
//         }

//         //     obj['id'] = bb
//         //     makeRequestCod(obj);
//     }, [data])
//     // useEffect(() => {
//     //     var resin = CodData.data ? JSON.stringify(CodData.data) : ""
//     //     if (resin.length > 30) {
//     //         localStorage.setItem('regaddr', JSON.stringify(CodData.data.allUserAddresses.nodes[0]))
//     //     }
//     // }, [CodData])
//     const errmsg = data.message ? data.message : ""
//     const handleChange = (type, value) => {
//         if (values.email !== "" && type === 'email' && values['error'] && values['errortext']) {
//             values['error']['emerr'] = false
//             values['errortext']['emerr'] = ""
//         }
//         if (values.password !== "" && values['error'] && values['errortext']) {
//             values['error']['passerr'] = false
//             values['errortext']['passerr'] = ""

//         } if (values.firstname !== "" && values['error'] && values['errortext']) {
//             values['error']['firstname'] = false
//             values['errortext']['firstname'] = ""
//         } if (values.confirmpassword !== "" && values['error'] && values['errortext']) {
//             values['error']['cnfpasserr'] = false
//             values['errortext']['cnfpasserr'] = ""
//         } if (values.lastname !== "" && values['error'] && values['errortext']) {
//             values['error']['lastname'] = false
//             values['errortext']['lastname'] = ""
//         }
//         setValues({
//             ...values,
//             [type]: value,
//         })
//         // makeFetch(values)
//     }

//     const user = data.user_profile_id ? data.user_profile_id : ""
//     const handleSubmit = (e) => {
//         if (values.email === "" && values['error'] && values['errortext']) {
//             values['error']['emerr'] = true
//             values['errortext']['emerr'] = 'Email is required'
//             setValues({
//                 ...values,
//                 values,
//             })
//         }

//         if (values.password === "" && values['error'] && values['errortext']) {
//             values['error']['passerr'] = true
//             values['errortext']['passerr'] = 'Password is required'
//             setValues({
//                 ...values,
//                 values,
//             })
//         }
//         if (values.confirmpassword === "" && values['error'] && values['errortext']) {
//             values['error']['cnfpasserr'] = true
//             values['errortext']['cnfpasserr'] = 'Confirm password is required'
//             setValues({
//                 ...values,
//                 values,
//             })
//         }
//         if (values.firstname === "" && values['error'] && values['errortext']) {
//             values['error']['firstname'] = true
//             values['errortext']['firstname'] = 'First Name is required'
//             setValues({
//                 ...values,
//                 values,
//             })
//         }
//         if (values.lastname === "" && values['error'] && values['errortext']) {
//             values['error']['lastname'] = true
//             values['errortext']['lastname'] = 'Last Name is required'
//             setValues({
//                 ...values,
//                 values,
//             })
//             return false
//         }

//         if (values.password !== values.confirmpassword && values['error'] && values['errortext']) {
//             // values['error']['passerr'] = true
//             values['error']['cnfpasserr'] = true
//             // values['errortext']['passerr'] = "password doesn't match"
//             values['errortext']['cnfpasserr'] = "Password doesn't match"
//             setValues({
//                 ...values,
//                 values,
//             })
//             return false
//         }
//         let lastAtPos = values.email.lastIndexOf('@');
//         let lastDotPos = values.email.lastIndexOf('.');
//         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && values.email.indexOf('@@') == -1 && lastDotPos > 2 && (values.email.length - lastDotPos) > 2)) {
//             values['error']['emerr'] = true
//             values['errortext']['emerr'] = 'An email address must contain a single @/.'
//             setValues({
//                 ...values,
//                 values,
//             })
//             return false
//         }
//         makeFetch(values);
//     }
//     const handlers = { handleSubmit, handleChange };

//     return { values, setValues, handlers, data }
// }

// export default useRegister;