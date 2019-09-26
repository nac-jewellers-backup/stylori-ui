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
    const _format = mapperdata.map(k => ({
        offerPrice: "23000.10",
        price: "29000.0",
        title: k.productName,
        save: '5999.9',
        fadeImages: [
            'https://images7.alphacoders.com/421/421542.jpg ',
            'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg',
        ],
        image: {
            placeImage: injectUrl("/images/product/SE0262/SE0262-1Y.jpg", cdnUrl),
            hoverImage: injectUrl("/images/product/SE0262/HOVER-SE0262-2Y.jpg", cdnUrl)
        },

    }))
    return _format;
}
