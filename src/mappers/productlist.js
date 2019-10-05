import { resolutions } from "utils";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))

export default function (data, cdnUrl) {
    debugger
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k =>  ({
        price: k.transSkuListsByProductId.nodes[0].discountPrice === null ? 15343 : k.transSkuListsByProductId.nodes[0].discountPrice,
        offerPrice: k.transSkuListsByProductId.nodes[0].markupPrice === null ? 13223 : k.transSkuListsByProductId.nodes[0].markupPrice ,
        title: k.productName,
        save: '5999.9',
        image: {
            placeImage: injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl),
            hoverImage: injectUrl("/images/product/SE0775/HOVER-SE0775-2Y.jpg", cdnUrl)
        },
        productId:k.productId
        

    }))
    return _format;
}

