import React from 'react';
import { useNetworkRequest } from 'hooks/index';


const Addressforms = () => {
    const [values, setValues] = React.useState({
        adrs_firstname: null,
        adrs_lastname: null,
        adrs_selectcountry: null,
        adrs_zipcode: null,
        adrs_address: null,
        adrs_state: null,
        adrs_City: null,
        adrs_phonenumber: null,
        adrs_numcode: null,
        bill_firstname: null,
        bill_lastname: null,
        bill_selectcountry: null,
        bill_zipcode: null,
        bill_address: null,
        bill_state: null,
        bill_City: null,
        bill_phonenumber: null,
        bill_numcode: null,
        bill_isNumber: false,
        addrs: true,
        checkValue: false
    });
    const [invalids, setInvalids] = React.useState({
        adrs_firstname: false,
        adrs_lastname: false,
        adrs_selectcountry: false,
        adrs_zipcode: false,
        adrs_address: false,
        adrs_state: false,
        adrs_City: false,
        adrs_phonenumber: false,
        adrs_numcode: false,
        bill_firstname: false,
        bill_lastname: false,
        bill_selectcountry: false,
        bill_zipcode: false,
        bill_address: false,
        bill_state: false,
        bill_City: false,
        bill_phonenumber: false,
        bill_numcode: false,
    });
    const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/addaddress', values, () => []);

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

    const handleSubmit = () => {

        makeFetch();
    }
    const handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };
    const handle = { handleChange, handleInvalid, handleSubmit, handleKeyPress };

    return { values, handle }
}

export default Addressforms;