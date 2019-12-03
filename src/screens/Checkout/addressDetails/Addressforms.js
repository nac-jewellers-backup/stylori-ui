import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CheckForCod } from 'queries/productdetail';
// window.cache = {}

const Addressforms = () => {
    // var regid = localStorage.getItem('regid') ? localStorage.getItem('regid') : ""
    let lgn = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
    let lgn1 = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[1] : ""
    let value = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
    let value11 = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressOne : {}
    let value12 = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressTwo : {}
    var cont = localStorage.getItem('true') ? localStorage.getItem('true') : ""
    let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : {}
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {}
    let changeaddr = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
    const [address, setAddress] = React.useState({})
    const [pincods, setpincod] = React.useState({
        pincod: ""
    })
    const [values, setValues] = React.useState({
        addressOne: {
            firstname: "",
            lastname: "",
            addressline1: "",
            addressline2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            country_code: "",
            contactNumber: "",
            addresstype: 1
        },
        addressTwo: {
            firstname: "",
            lastname: "",
            addressline1: "",
            addressline2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            country_code: "",
            contactNumber: "",
            // addresstype: 2
        },
        addrs: (localStorage.getItem("valuessetdata") || changeaddr) ? false : true,
        // addrs: true,
        checkValue: true,
        checkValue1: true,
        // changeaddr:false
    });
    // useEffect(() => {
    //     if (localStorage.getItem("valuessetdata") || changeaddr.length > 0) {
    //         const stat = values.addrs
    //         setValues({
    //             stat: false,
    //             ...values,
    //         })
    //     }
    // }, [])
    var addObj = {};
    addObj["user_id"] = user_id
    addObj["cart_id"] = cart_id
    addObj["isguestlogin"] = cont ? false : true
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addaddress', {}, false);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    useEffect((event) => {
        const a = CodData.data ? CodData.data.allPincodeMasters : "";
        // alert(JSON.stringify(CodData))
        if (a) {
            var res = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].state : ''
            var res1 = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].country : ''
            var res2 = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].district : ''
            if (pincods.pincod === "pincode1") {
                values['addressOne']['state'] = res
                values['addressOne']['country'] = res1 
                values['addressOne']['city'] = res2

            } else {
                values['addressTwo']['state'] = res
                values['addressTwo']['country'] = res1
                values['addressTwo']['city'] = res2
            }
            setValues({ ...values, values })
        }
    }, [CodData])
    const handleChange = (type, field, value, pincod) => {
        values[type][field] = value;
        if (field === 'pincode') {
            values[type]['pincode'] = value;
            const val = values.addressOne.pincode || values.addressTwo.pincode
            var variab = {}
            variab["pincode"] = value
            if (value.length > 5) {
                // alert(JSON.stringify(value))
                if (Object.entries(variab).length !== 0 && variab.constructor === Object) {
                    makeRequestCod(variab);
                }
            }
        } 
        // window.cache[type] = true
        pincods["pincod"] = pincod
        setpincod({ ...pincods, pincods })
        setValues({ ...values, values })
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        var a1 = values.addressOne
        var a2 = values.addressTwo
        // if (a1 == a1) {
        //     addObj['address'] = [a1];
        // } else {
        if (values.checkValue == true) {
            // setAddress(a1)
            addObj['address'] = [a1];
        } if (values.checkValue == false) {
            // setAddress({ a1, a2 })
            addObj['address'] = [a1, a2];
            // }
        }
        makeFetch(addObj);
        // window.location.reload()
    }

    const handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };
    const redirectForm = (event) => {
        value11 = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressOne : {}
        value12 = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressTwo : {}
        lgn = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
        if (Object.keys(lgn).length > 0) {
            lgn = {
                addressOne: lgn ? lgn : lgn1,
                addressTwo: lgn1 ? lgn1 : lgn
            }
        }
        // if (Object.keys(value11&&value12).length > 0) {
        value11 = {
            addressOne: value11 ? value11 : value12,
            addressTwo: value12 ? value12 : value11
            // }
        }
        setValues({
            ...value11,
            ...lgn,
            // values,
            addrs: !values.addrs
        })
        localStorage.setItem("isedit", !values.addrs ? 1 : 0)
        // localStorage.setItem('vale', JSON.stringify(values))
    }
    const handle = { handleChange, handleSubmit, handleKeyPress, redirectForm };
    return { values, setValues, handle }
}
export default Addressforms;