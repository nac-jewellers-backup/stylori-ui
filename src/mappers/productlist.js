import { resolutions } from "utils";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${(url.imageUrl)}` }))
let valuesinjectUrl = (imageUrl, cdnUrl) => injectUrl(imageUrl, cdnUrl) 
let placeImages = (placeImage, cdnUrl) => placeImage.find(filterdata => {return filterdata.ishover === false ? valuesinjectUrl(filterdata.imageUrl, cdnUrl) : ''} );
let hoverImage = (placeImage, cdnUrl) => placeImage.find(filterdata => {return filterdata.ishover === true ? valuesinjectUrl(filterdata.imageUrl, cdnUrl) : ''} );
export default function (data, cdnUrl) {
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
            placeImage: injectUrl(placeImages(k.productImagesByProductId.nodes), cdnUrl),
            hoverImage: injectUrl(hoverImage(k.productImagesByProductId.nodes), cdnUrl)
        },
        productId:k.productId
        

    }))
    return _format;
}

// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)