import { resolutions, lambda_func_front_end } from "utils";

var colSize = null
const  screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
       colSize = 6; 
    }
    else if (width > 1440) {
       colSize= 4; 
    }
    else if (width > 1024) {
       colSize= 4; 
    }
    else if (width > 960) {
       colSize= 3; 
    }
    else if (width > 760) {
       colSize= 4; 
    }
    else if (width < 760) {
       colSize= 2; 
    }
  }
var screen_width_type = () =>{ 
    return new Promise(async (resolve,reject)=>{
        const screenData = await lambda_func_front_end();
    screenWidth()
    var _calc = async() =>{
         var width_of_filters_20_percentage = ((screenData.window_width-(screenData.window_width * 0.2))/colSize)
         var subtracting_spacesaroundcard =  width_of_filters_20_percentage - (width_of_filters_20_percentage*0.1)
         return subtracting_spacesaroundcard 
        }
        var img_resolution = _calc()
    resolve(img_resolution, screenData.browser_type)
    })
    
}
// console.log('screen_width_type()',screen_width_type())
// const baseUi = "https://assets-cdn.stylori.com/";
// const injectUrl = (url, baseUi) => url ? resolutions.map(k => ({ ...k, img: `${baseUi}${url.imageUrl===undefined  ? url : url.imageUrl}` })) : [];
const injectUrl = async (url, baseUi) => {
    console.log('_____url_____', url)
    var resolution =    await screen_width_type()
    var _resolutions = `${resolution}X${resolution}`
    console.log('_____resolutions_____', resolutions)
    debugger
    var url_split = url.imageUrl.split('/')
    console.log('_____url_split_____', url_split)
     url_split.splice(2, 0, _resolutions);
     var url_construct = url_split.join().replace(/\,/g,'/')
    var img_url = {img:`${baseUi}${url_construct}`}
    return img_url

}

// const valuesinjectUrl = (imageUrl, cdnUrl) => injectUrl(imageUrl, cdnUrl);in
const placeImages = (placeImage) => placeImage.find(fd => !fd.ishover);
const hoverImage = (placeImage) =>  placeImage.find(fd => fd.ishover); 


    export default function (data, cdnUrl) {
        
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => {
        console.log(injectUrl(placeImages(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl).then(r=>r.img),'injectUrl')
        debugger
        let _d;
        try {
            _d = {
                totalCount: data.data.allProductLists.length> 0 ? data.length : data.data.allProductLists.totalCount ,
                price:(k.transSkuListsByProductId.nodes[0] === undefined  )? 15343 : k.transSkuListsByProductId.nodes[0].discountPrice,
                offerPrice: k.transSkuListsByProductId.nodes[0] === undefined   ? 13203 : k.transSkuListsByProductId.nodes[0].markupPrice,
                title: k.productName,
                save: '5999.9',
                image: {
                    placeImage: injectUrl(placeImages(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl).then(r=>r.img),
                    hoverImage: injectUrl(hoverImage(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl).then(r=>r.img),

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
            debugger
        } catch (error) {
        }

        return _d;
    })
    // console.info('_format', _format);
    return _format;
    


}

// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)