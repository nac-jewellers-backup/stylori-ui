import { resolutions } from "utils";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => url ? resolutions.map(k => ({ ...k, img: `${baseUi}${url.imageUrl===undefined  ? url : url.imageUrl}` })) : [];
// const valuesinjectUrl = (imageUrl, cdnUrl) => injectUrl(imageUrl, cdnUrl);in
const placeImages = (placeImage) => placeImage.length === 0 ?'product/SR0662/SR0662-1Y.jpg' : placeImage.find(fd => !fd.ishover);
const hoverImage = (placeImage) => placeImage.length === 0 ?'product/SR0662/HOVER-SR0662-2Y.jpg' : placeImage.find(fd => fd.ishover); 


    export default function (data, cdnUrl) {
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => {
        let _d;
        try {
            _d = {
                totalCount: data.data.allProductLists.length> 0 ? data.length : data.data.allProductLists.totalCount ,
                price:(k.transSkuListsByProductId.nodes[0] === undefined  )? 15343 : k.transSkuListsByProductId.nodes[0].discountPrice,
                offerPrice: k.transSkuListsByProductId.nodes[0] === undefined   ? 13203 : k.transSkuListsByProductId.nodes[0].markupPrice,
                title: k.productName,
                save: '5999.9',
                image: {
                    placeImage: injectUrl(placeImages(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl),
                    hoverImage: injectUrl(hoverImage(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl),

                },
                productId: k.productId,
                
                diamondType:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].diamondType,
                metalColor:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].metalColor,
                purity:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].purity,
                skuSize:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].skuSize,
                material:k.productMaterialsByProductSku.nodes[0] === undefined ? '' : k.productMaterialsByProductSku.nodes[0].materialName,
                productType:k.productType,
                skuId:k.transSkuListsByProductId.nodes[0].generatedSku,
                oneDayShipping:k.transSkuListsByProductId.nodes[0].isReadyToShip

            }
        } catch (error) {
        }

        return _d;
    })
    // console.info('_format', _format);
    return _format;


}

// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)