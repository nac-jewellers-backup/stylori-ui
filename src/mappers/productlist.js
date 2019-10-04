import { resolutions } from "utils";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))

export default function (data, cdnUrl) {
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k =>  ({
        price: k.transSkuListsByProductId.nodes.markupPrice ? k.transSkuListsByProductId.nodes.markupPrice : "989.90890",
        offerPrice: k.transSkuListsByProductId.nodes.sellingPrice ? k.transSkuListsByProductId.nodes.sellingPrice : "78878.90890",
        title: k.productName,
        save: '5999.9',
        image: {
            placeImage: injectUrl("/images/product/SE0262/SE0262-1Y.jpg", cdnUrl),
            hoverImage: injectUrl("/images/product/SE0262/HOVER-SE0262-2Y.jpg", cdnUrl)
        },
        productId:k.productId
        

    }))
    return _format;
}

