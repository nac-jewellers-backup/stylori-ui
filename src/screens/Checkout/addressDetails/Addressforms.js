import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CheckForCod } from 'queries/productdetail';
import { ADDRESSDETAILS } from 'queries/productdetail';
import { CartContext } from '../../../context/CartContext';

// window.cache = {}
var obj = {}
var delet = {}
var addObjall = {}
let adars1 = []
let adars2 = []
const Addressforms = (changePanel) => {
    // var regid = localStorage.getItem('regid') ? localStorage.getItem('regid') : ""
    const valuegust = localStorage.getItem("gustaddres") ? JSON.parse(localStorage.getItem("gustaddres")).address : ""
    let value11 = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressOne : {}
    var cont = localStorage.getItem('true') ? localStorage.getItem('true') : ""
    var con_gust = localStorage.getItem('gut_lg') ? JSON.parse(localStorage.getItem('gut_lg')) : ""
    let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : ""
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
    let check_dlt = localStorage.getItem("check_dlt") ? localStorage.getItem("check_dlt") : ""
    const [address, setAddress] = React.useState({})
    const [pincods, setpincod] = React.useState({ pincod: "" })
    const { loading: userloading, error: usererror, data: userdata, makeFetch: makeFetch } = useNetworkRequest('/adduseraddress', {}, false);
    const { loading: addresloading, error: addreserror, data: addresData, makeRequestCod: addresmakeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        addressOne: {
            salutation: "",
            firstname: "",
            lastname: "",
            addressline1: "",
            addressline2: "",
            pincode: "",
            city: "",
            state: "",
            country: "India",
            country_code: "+91",
            contactno: "",
            addresstype: 1,
            errortext: {
                pinerr: "", pinerr1: "",
            },
        },
        addressTwo: {
            salutation: "",
            firstname: "",
            lastname: "",
            addressline1: "",
            addressline2: "",
            pincode: "",
            city: "",
            state: "",
            country: "India",
            country_code: "+91",
            contactno: "",
            addresstype: 2,
            errortext: { pinerr: "", pinerr1: "" },
        },
        addrs: valuegust && valuegust.length > 0 ? false : true,
        // addrs: true,
        checkValue: true,
        checkValue1: true,
        addressvalues: null,
        edit_addresId: false,
        Id: "",
        Id2: "",
        addres_id: null,
        index: null,
        update_clear: false,
        log_addrs: false,
        selest_my_address: null
    });
    // alert(JSON.stringify(values&&values.addressOne&&values.addressOne.salutation))

    var addObj = {};

    var addObjgust = {};
    addObjall["isguestlogin"] = cont ? false : true
    const { data, error, loading, makeFetch: makeFetchall, mapped, status } = useNetworkRequest('/addaddress', {}, false);
    const { error: remee, loading: remlod, data: removedata, makeFetch: deleteaddress, } = useNetworkRequest('/removeaddress', {}, false);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    const pathnames = window.location.pathname.split("-")[0] === "/account"
    // var stst = values.ref ? values.ref : ""
    const addressva = values && values.addressvalues && values.addressvalues.length > 0
    const update_clear = values && values.update_clear

    let { CartCtx: { setCartFilters } } = React.useContext(CartContext);
    useEffect(() => {
        // var alladrs = addresData ? addresData && addresData.data && addresData.data.allUserAddresses && addresData.data.allUserAddresses.nodes && addresData.data.allUserAddresses.nodes[0] && addresData.data.allUserAddresses.nodes[0].firstname : ""
        if (con_gust !== true) {
            var adrs = addresData ? addresData && addresData.data && addresData.data.allUserAddresses && addresData.data.allUserAddresses.nodes : null
            if (adrs !== undefined && adrs.length > 0) {
                values["addressvalues"] = addresData
                values["addrs"] = false
                setValues({
                    values,
                    ...values
                })
            } else {
                if (values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length < 0) {
                    values["addrs"] = true
                    setValues({
                        values,
                        ...values,
                    })
                    localStorage.removeItem('bil_isactive')
                    localStorage.removeItem('ship_isactive')
                }

            }
        }
    }, [addresData, userdata, addressva, values.log_addrs])
    React.useEffect(() => {
        if (user_id.length > 0) {
            obj['userprofileId'] = user_id
            addresmakeRequestCod(obj);
        }
    }, [userdata, addressva, update_clear, values.log_addrs])
    React.useEffect(() => {
        if (user_id.length > 0) {
            obj['userprofileId'] = user_id
            addresmakeRequestCod(obj);
        }
    }, [])
    React.useEffect(() => {
        // alert("0",JSON.stringify(values && values.addressvalues && values.addressvalues.data ))
        // if (values && values.addressvalues && values.addressvalues.data === null) {
        //     localStorage.removeItem('bil_isactive')
        //     localStorage.removeItem('ship_isactive')
        // }
        if (JSON.parse(localStorage.getItem('gustaddres')) && JSON.parse(localStorage.getItem('gustaddres')).address < 0) {
            localStorage.removeItem('bil_isactive')
            localStorage.removeItem('ship_isactive')
        }
    }, [])

    React.useEffect(() => {
        if (removedata && removedata.message && removedata.message.length > 0) {
            window.location.reload()
        }
    }, [removedata])
    useEffect((event) => {
        const a = CodData.data ? CodData.data.allPincodeMasters : "";
        // alert(JSON.stringify(CodData)) 
        if (a) {
            var res = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].state : ''
            var res1 = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].country : ''
            var res2 = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].district : ''
            if (res2.length > 0) {
                if (pincods.pincod === "pincode1") {
                    values['addressOne']['state'] = res
                    values['addressOne']['country'] = res1
                    values['addressOne']['city'] = res2

                } if (pincods.pincod === "pincode2") {
                    values['addressTwo']['state'] = res
                    values['addressTwo']['country'] = res1
                    values['addressTwo']['city'] = res2
                }
                if (pincods.pincod === "pincode1") {
                    if (res2 === "" || values["addressOne"] && values["addressOne"]['errortext']) {
                        values["addressOne"]['errortext']['pinerr'] = ""
                    }
                } else {
                    if (res2 === "" || values["addressOne"] && values["addressOne"]['errortext']) {
                        values["addressTwo"]['errortext']['pinerr1'] = ""
                    }
                }
            } else {
                if (pincods.pincod === "pincode1") {
                    if (res2.length < 0 || res2 === "" || (values["addressOne"] && values["addressOne"]['errortext'] && values["addressOne"]['errortext']['pinerr'])) {
                        values["addressOne"]['errortext']['pinerr'] = "Your pincode is Invalid!"
                    }
                } else {
                    if (res2.length < 0 || res2 === "" || (values["addressOne"] && values["addressOne"]['errortext'] && values["addressTwo"]['errortext']['pinerr1'])) {
                        values["addressTwo"]['errortext']['pinerr1'] = "Your pincode is Invalid!"
                    }
                }
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
        pincods["pincod"] = pincod
        setpincod({ ...pincods, pincods })
        setValues({ ...values, values })
    }
    // const handleChange_selsect = (e) => {
    //     values['addressOne']['salutation'] =
    //         setValues({ ...values, values })
    // };

    const handleSubmit = (e) => {

        if (values && values.addressOne && values.addressOne.pincode === "") {
            values["addressOne"]['errortext']['pinerr'] = "Pin Code is required"
            setValues({ ...values, values })
            return false
        }
        // if (values && values.addressOne && values.addressOne.errortext && values.addressOne.errortext.pinerr !== "") {
        //     return false
        // }
        // if (values && values.addressTwo && values.addressTwo.errortext && values.addressTwo.errortext.pinerr1 !== "") {
        //     return false
        // }

        if (values && values.addressOne && values.addressOne.pincode && values.addressOne.pincode.length < 6 ||
            (values["addressOne"] && values["addressOne"]['errortext'] && values["addressOne"]['errortext']['pinerr'])) {
            // if (values["addressOne"] && values["addressOne"]['errortext'] && values["addressOne"]['errortext']['pinerr']) {
            values["addressOne"]['errortext']['pinerr'] = "Your pincode is Invalid!"
            setValues({ ...values, values })
            // }
            return false
        }
        if (values && values.addressTwo && values.addressTwo.pincode && values.addressTwo.pincode.length < 5 ||
            (values["addressTwo"] && values["addressTwo"]['errortext'] && values["addressTwo"]['errortext']['pinerr1'])) {
            // if (values["addressOne"] && values["addressOne"]['errortext'] && values["addressTwo"]['errortext']['pinerr1']) {
            values["addressTwo"]['errortext']['pinerr1'] = "Your pincode is Invalid!"
            setValues({ ...values, values })
            // }
            return false
        } else {
            var addObjgust_local = localStorage.getItem('gustaddres') ? JSON.parse(localStorage.getItem('gustaddres')) : "";
            if (con_gust !== true) {
                
                var addressOne = values.addressOne
                var addressTwo = values.addressTwo
                if (addressOne.addressline1 === addressTwo.addressline1 && addressOne.firstname === addressTwo.firstname && addressOne.pincode === addressTwo.pincode) {
                    values["addressOne"]["addresstype"] = 3
                    setValues({
                        values,
                        ...values,
                    })
                    addObj['address'] = [addressOne];
                } else {
                    if (values.checkValue === true) {
                        addObj['address'] = [addressOne];
                    } if (values.checkValue === false) {
                        if (values.edit_addresId === true) {
                            addObj['address'] = [addressOne];
                        } if (values.edit_addresId === false) {
                            addObj['address'] = [addressOne, addressTwo];
                        }
                    }
                }
                if (values.edit_addresId === true) {
                    addObj["id"] = values && values.addres_id
                    delet["id"] = values && values.addres_id
                } else {
                    addObj["id"] = ""
                }
                addObj["user_id"] = user_id
                obj['userprofileId'] = user_id
                if (values.checkValue === true) {
                    if (values && values.addressOne && values.addressOne.firstname.length > 0) {
                        makeFetch(addObj);
                    }
                }
                if (values.checkValue === false) {
                    if ((values && values.addressOne && values.addressOne.firstname.length > 0) && (values && values.addressTwo && values.addressTwo.firstname.length > 0)) {
                        makeFetch(addObj);
                    }
                }
            } if (con_gust === true) {
                if (values.checkValue == true) {
                    if ((values.addressOne) && (addObjgust_local && addObjgust_local.address.length > 0)) {
                        addObjgust_local && addObjgust_local.address.push(values.addressOne);
                        localStorage.setItem("gustaddres", JSON.stringify(addObjgust_local))
                        if (values && values.index !== null || values && values.index && values.index.lenght >= 0) {
                            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
                            // local_storage.address.splice(values.index, 1);
                            local_storage.address[values.index] = values.addressOne
                            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
                        }
                    } else if (values && values.addressOne) {
                        addObjgust["address"] = [values.addressOne]
                        if (values && values.index !== null || values && values.index && values.index.lenght >= 0) {
                            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
                            local_storage.address[values.index] = values.addressOne
                            // local_storage.address.splice(values.index, 1);
                            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
                        }
                        localStorage.setItem("gustaddres", JSON.stringify(addObjgust))
                    }
                } if (values.checkValue == false) {
                    if ((values.addressTwo) && (addObjgust_local && addObjgust_local.address.length > 0)) {
                        addObjgust_local && addObjgust_local.address.push(values.addressOne, values.addressTwo);
                        localStorage.setItem("gustaddres", JSON.stringify(addObjgust_local))
                        if (values && values.index !== null || values && values.index && values.index.lenght >= 0) {
                            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
                            local_storage.address[values.index] = values.addressOne
                            // local_storage.address.splice(values.index, 1);
                            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
                        }
                    } else if (values.addressTwo) {
                        addObjgust["address"] = [values.addressOne, values.addressTwo]
                        if (values && values.index !== null || values && values.index && values.index.lenght >= 0) {
                            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
                            local_storage.address[values.index] = values.addressOne
                            // local_storage.address.splice(values.index, 1);
                            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
                        }
                        localStorage.setItem("gustaddres", JSON.stringify(addObjgust))
                    }
                }
                window.location.reload()
            }
            // values['checkValue1'] = true
            values["edit_addresId"] = false
            setValues({
                // checkValue1:!values.checkValue1,
                addrs: !values.addrs,
                values,
                ...values,
                update_clear: !values.update_clear,
            })
        }


        // }
        // else {
        //     if (values.edit_addresId === false) {
        //         alert("allowed the five address only")
        //     }
        //     // window.location.reload(); 
        // } 
        // window.location.reload();
        // values["edit_ref"] = true
        // window.location.reload(); 
    }
    const selectaddreses = (val_addrs, num, index, ship) => {
        

        var obj_user = {}
        let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
        let set_check = localStorage.getItem("set_check") ? localStorage.getItem("set_check") : ""
        obj_user["user_id"] = user_id
        // changePanel(3,values.selest_my_address)
        if (ship === "yes") {
            localStorage.setItem("select_addres", JSON.stringify(val_addrs))
            values["selest_my_address"] = val_addrs
            setValues({
                values,
                ...values,
            })
        }
        addObjall['address_id'] = val_addrs && val_addrs.id ? val_addrs.id : ""
        if (values.checkValue1 === true) {
            values["Id2"] = JSON.stringify(index)
            localStorage.setItem("ship_isactive", index)
            setValues({
                values,
                ...values,
            })
            addObjall["user_id"] = user_id
            addObjall["cart_id"] = cart_id
            if (val_addrs && val_addrs.firstname.length > 0) {
                
                adars1 = []
                adars1.push(val_addrs)
                addObjall['address'] = [adars1 && adars1[0]];
                val_addrs["addresstype"] = num
                makeFetchall(addObjall);
            }
            // alert("your address send on successful")
            if (!pathnames) {
                changePanel(3, values.selest_my_address)
                // window.location.reload()
            }
            return false
        }
        if (values.checkValue1 === false) {
            if ((localStorage.getItem("bil_isactive") || !localStorage.getItem("bil_isactive")) && num === 2) { localStorage.setItem("bil_isactive", index) }
            
            if ((!localStorage.getItem("ship_isactive") || !localStorage.getItem("bil_isactive")) && num === 2) {
                values["Id"] = JSON.stringify(index)
                localStorage.setItem("bil_isactive", index)
                if (val_addrs && val_addrs.firstname.length > 0) {
                    adars2 = []
                    adars2.push(val_addrs)
                    val_addrs["addresstype"] = num
                }
                setValues({
                    values,
                    ...values,
                })
                alert("please select your shipping address")
                return false
            } else {
                if (num === 2) {
                    values["Id"] = JSON.stringify(index)
                    localStorage.setItem("bil_isactive", index)
                    if (val_addrs && val_addrs.firstname.length > 0) {
                        adars2 = []
                        adars2.push(val_addrs)
                        val_addrs["addresstype"] = num
                    }
                    setValues({
                        values,
                        ...values,
                    })
                }

            } if (((!localStorage.getItem("ship_isactive") || !localStorage.getItem("bil_isactive")) && num === 2) !== true) {
                
                if ((localStorage.getItem("ship_isactive") || !localStorage.getItem("ship_isactive")) && num === 1) { localStorage.setItem("ship_isactive", index) }
                if ((!localStorage.getItem("ship_isactive") || !localStorage.getItem("bil_isactive")) && num === 1) {
                    values["Id2"] = JSON.stringify(index)
                    localStorage.setItem("ship_isactive", index)
                    if (val_addrs && val_addrs.firstname && val_addrs.firstname.length > 0) {
                        // alert("vada1")
                        adars1 = []
                        adars1.push(val_addrs)
                        val_addrs["addresstype"] = num
                    }
                    setValues({
                        values,
                        ...values,
                    })
                    alert("please select your billing address")
                    return false
                } else {
                    if (num === 1) {
                        values["Id2"] = JSON.stringify(index)
                        localStorage.setItem("ship_isactive", index)
                        if (val_addrs && val_addrs.firstname && val_addrs.firstname.length > 0) {
                            // alert("vada1")
                            adars1 = []
                            adars1.push(val_addrs)
                            val_addrs["addresstype"] = num
                        }
                        setValues({
                            values,
                            ...values,
                        })
                    }
                }

            }
            
            if (JSON.stringify(localStorage.getItem("bil_isactive")).length > 0 && JSON.stringify(localStorage.getItem("ship_isactive")).length > 0) {
                addObjall["user_id"] = user_id
                addObjall["cart_id"] = cart_id
                addObjall['address'] = [adars1 && adars1[0], adars2 && adars2[0]];
                val_addrs["addresstype"] = num
                // alert("your address send on successful")
                if (val_addrs && val_addrs.firstname && val_addrs.firstname.length > 0) {
                    makeFetchall(addObjall);
                }
                if (!pathnames) {
                    changePanel(3, values.selest_my_address)
                    // window.location.reload()
                }
            }
            // if (values.checkValue1 === true) {
            // }
        }

        // if (!set_check.length > 0) {
        //     localStorage.removeItem("cart_id")
        //     setCartFilters(obj_user)
        // }
    }
    var deletss = {}
    const Delete_address = (val_addrs, index) => {
        if (con_gust !== true) {
            if (check_dlt === false) {
                if (values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 1) {
                    deletss["address_id"] = val_addrs && val_addrs
                    deleteaddress(deletss)
                    // window.location.reload();
                } else {
                    alert('Address already in use')
                }
                return false
            } else {
                deletss["address_id"] = val_addrs && val_addrs
                deleteaddress(deletss)
                // window.location.reload();
            }

        } else {
            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
            local_storage.address.splice(index, 1);
            // window.localStorage.removeItem('gustaddres');
            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));

            if (valuegust.length < 0) {
                values["addrs"] = true
                setValues({
                    values,
                    ...values,
                })
            }

            window.location.reload();
        }

        // const DeleteLocalStorage_address = (e, num, isAdressOne) => {
        //     
        //     var local_storage = JSON.parse(localStorage.getItem('valuessetdata'))
        //     local_storage[isAdressOne ? 'addressOne' : 'addressTwo'].pop(num);
        //     window.localStorage.removeItem('valuessetdata');
        //     window.localStorage.setItem('valuessetdata', JSON.stringify(local_storage));
        // }


    }
    const handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };
    const redirectForm1 = (event) => {
        values["addressOne"] = ""
        values["addressTwo"] = ""
        value11 = {
            addressOne: {
                salutation: "",
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
                addresstype: "",
                errortext: {
                    pinerr: "",
                    pinerr1: "",
                },
            },
            addressTwo: {
                salutation: "",
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
                addresstype: "",
                errortext: {
                    pinerr: "",
                    pinerr1: "",
                },
            },
        }
        values["edit_addresId"] = true
        values["addrs"] = true
        setValues({
            values,
            ...values,
            ...value11,
            // addrs: !values.addrs
        })
    }
    const redirectFormss = () => {
        values["addrs"] = false
        values["edit_addresId"] = false
        // values["update_clear"] = false
        setValues({
            values,
            ...values,
            update_clear: !values.update_clear,
        })
    }
    const redirectForm = (val_addrs, num, isAdressOne, isAdressTwo, index) => {

        var add = {}
        if (con_gust !== true) {
            if (val_addrs && val_addrs.id && val_addrs.id.length > 0) {
                values["addres_id"] = val_addrs && val_addrs.id
                setValues({
                    values,
                    ...values,
                })
            }
            // values["addressOne"]["errortext"]["pinerr"] = ""
            add["pinerr"] = ""
            values["addressOne"] = val_addrs
            values["addressTwo"] = ""
            values["checkValue"] = isAdressTwo
            values["number"] = num
            values["edit_addresId"] = isAdressOne
            if (values && values["addressOne"]) {
                values["addressOne"]["contactno"] = val_addrs && val_addrs.contactNumber && val_addrs.contactNumber
                values["addressOne"]["errortext"] = add
            }
        } if (con_gust === true) {
            values["edit_addresId"] = true
            values["addressOne"] = val_addrs
            values["addressTwo"] = ""
            values["index"] = index
            // valuegust
            // var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
            // local_storage.address.splice(index, 1);
            // window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
        }
        setValues({
            values,
            ...values,
            addrs: !values.addrs,
        })
        localStorage.setItem("isedit", !values.addrs ? 1 : 0)
        // localStorage.setItem('vale', JSON.stringify(values))
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handle = { handleOpen, handleClose, redirectFormss, Delete_address, handleChange, handleSubmit, handleKeyPress, redirectForm1, redirectForm, selectaddreses };
    return { values, setValues, handle, open, setOpen }
}
export default Addressforms;