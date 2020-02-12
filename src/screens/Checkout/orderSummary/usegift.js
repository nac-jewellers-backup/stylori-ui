import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { GIFTWRAPS } from 'queries/productdetail';
import { useCheckForCod } from 'hooks/CheckForCodHook';
const useGift = () => {
    const [values, setValues] = React.useState({
        gift_to: "",
        gift_from: "",
        message: "",
        haveAlready: false,
        cart_id: null
    });
    const [val, setval] = React.useState({
        expanded1: 1,
        expanded2: 1,
        expanded3: 1,
    });
    const { data, error, loading, makeFetch } = useNetworkRequest('/addgiftwrap', {}, false);
    const { loading: codloading, errors: coderror, data: CodData, makeRequestCod } = useCheckForCod(GIFTWRAPS, () => { }, {});
    useEffect(() => {
        var cardId = { "cardId": localStorage.getItem("cart_id") && JSON.parse(localStorage.getItem("cart_id")).cart_id }
        makeRequestCod(cardId)
        if (data && data.message === "Success") {
            alert("Your Gift wrap is added Successfully")
        }
    }, [data])
    useEffect(() => {
        var messageGift = CodData && CodData.data && CodData.data.allGiftwraps && CodData.data.allGiftwraps.nodes
        if (messageGift && messageGift.length > 0) {
            setValues({ ...values, gift_to: messageGift[0].giftTo, gift_from: messageGift[0].giftFrom, message: messageGift[0].message, haveAlready: true })
        }
    }, [CodData])

    const handleChange = (type, value) => {
        setValues({
            ...values,
            [type]: value
        })
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        const cart_id = { cart_id: JSON.parse(localStorage.getItem('cart_id')).cart_id }
        const Obj = { ...values, ...cart_id }
        // setValues({...values,cart_id:JSON.parse(localStorage.getItem('cart_id')).cart_id})

        makeFetch({ ...Obj });
    }

    const handlers = { handleSubmit, handleChange };

    return { values, handlers, val, data, setval }
}

export default useGift;