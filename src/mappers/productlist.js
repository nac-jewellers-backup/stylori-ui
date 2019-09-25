import React from "react";
import { resolutions } from "../utils";
import { NetworkContext } from "../context/NetworkContext";


const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))


export default function (data) {
    const { NetworkCtx:{ cdnUrl } } = React.useContext(NetworkContext);
    const { data: { allProductLists: { nodes } } } = data;
    const _format = nodes.map(k => ({
        offerPrice: "23000.10",
        price: "29000.0",
        title: k.productName,
        save: '5999.9',
        image: {
            placeImage: injectUrl("/images/product/SE0262/SE0262-1Y.jpg", cdnUrl),
            hoverImage: injectUrl("/images/product/SE0262/HOVER-SE0262-2Y.jpg", cdnUrl)
        },

    }))
    return _format;
}