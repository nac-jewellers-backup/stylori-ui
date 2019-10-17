import React from 'react';
import { useNetworkRequest } from 'hooks/index';


const Addressforms = () => {
    // let valuesData = localStorage.getItem("valuessetdata") ?  JSON.parse(localStorage.getItem("valuessetdata")) :{}
    const errorMessages = {
        firstname: 'someerror'
    }
    const [errors, setError] = React.useState({})
    const handleError = e => {
        e.preventDefault();
        setError({
            ...errors,
            [e.target.name]: true,
        })
    }
    let cart_id = localStorage.getItem("addtocart") ? JSON.parse(localStorage.getItem("addtocart")).cart_id : {}
    let user_id = localStorage.getItem("response") ? JSON.parse(localStorage.getItem("response")).user.id : {}
    var address = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
    delete address['addrs'];
    let obj = {}
    obj['cart_id'] = cart_id
    obj['user_id'] = user_id
    obj['address'] = [address]
    const [values, setValues] = React.useState({
        cart_id,
        user_id,
        address: [
            {

                address,
                // cart_id, user_id,
                // firstname: '',
                // lastname: '',
                // country: '',
                // pincode: '',
                // addressline1: '',
                // addressline2: '',
                // state: '',
                // city: '',
                // contactno: '',
                // country_code: '',
                addresstype: 1
            }
        ],
        // bill_firstname: null,
        // bill_lastname: null,
        // bill_selectcountry: null,
        // bill_zipcode: null,
        // bill_address: null,
        // bill_state: null,
        // bill_City: null,
        // bill_phonenumber: null,
        // bill_numcode: null,
        // bill_isNumber: false,
        addrs: localStorage.getItem("valuessetdata") ? false : true,
        checkValue: true,
        checkValue1: true,
    });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addaddress', obj, () => []);

    const handleChange = (type, value) => {
        setValues({
            ...values,
            [value]: type.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        makeFetch();
        return false;
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
    return { values, handle, setValues, errors, handleError, errorMessages }
}
export default Addressforms;