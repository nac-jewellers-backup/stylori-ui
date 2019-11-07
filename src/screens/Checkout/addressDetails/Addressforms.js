import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CheckForCod } from 'queries/productdetail';

const Addressforms = () => {
    let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : {}
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {}
    const [address, setAddress] = React.useState({})
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
            contactno: "",
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
            contactno: "",
            addresstype: 2
        },
        addrs: localStorage.getItem("valuessetdata") ? false : true,
        // addrs: true,
        checkValue: true,
        checkValue1: true,
    });
    var addObj = {};
    console.log('debugger', addObj)
    addObj[JSON.stringify("user_id")] = user_id
    addObj[JSON.stringify("cart_id")] = cart_id
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addaddress', {}, false);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    useEffect(() => {
        debugger
        const a = CodData.data ? CodData.data : ""
        if (a) {
            var res = CodData.data.allPincodeMasters.nodes[0].state
            var res1 = CodData.data.allPincodeMasters.nodes[0].country
            var res2 = CodData.data.allPincodeMasters.nodes[0].district
            values['addressOne']['state'] = res
            values['addressOne']['country'] = res1
            values['addressOne']['city'] = res2

            values['addressTwo']['state'] = res
            values['addressTwo']['country'] = res1
            values['addressTwo']['city'] = res2
            setValues({ ...values, values })
        }
    }, [CodData])
    const handleChange = (type, field, value) => {
        values[type][field] = value;
        if (field === 'pincode') {
            values[type]['pincode'] = value;
            const val = values.addressOne.pincode
            var variab = {}
            variab["pincode"] = val
            if (val.length > 5) {
                if (Object.entries(variab).length !== 0 && variab.constructor === Object) {
                    makeRequestCod(variab);
                }
            }
        }
        setValues({ ...values, values })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var a1 = values.addressOne
        var a2 = values.addressTwo
        if (values.checkValue == true) {
            // setAddress(a1)
            addObj[JSON.stringify('address')] = [a1];
        } if (values.checkValue == false) {
            // setAddress({ a1, a2 })
            addObj[JSON.stringify('address')] = [a1, a2];
        }
        makeFetch(addObj);
    }
    const handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };
    const redirectForm = () => {
        setValues({ addrs: !values.addrs })
    }
    const handle = { handleChange, handleSubmit, handleKeyPress, redirectForm };
    return { values, handle, setValues }
}
export default Addressforms;