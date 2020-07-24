import { resolutions } from "utils";
var colSize = null
const screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
        colSize = 6;
    }
    else if (width > 1440) {
        colSize = 4;
    }
    else if (width > 1024) {
        colSize = 4;
    }
    else if (width > 960) {
        colSize = 3;
    }
    else if (width > 760) {
        colSize = 4;
    }
    else if (width < 760) {
        colSize = 2;
    }
}
var img_res;
var calc_card_resolution;
var url_construct_1000x1000;
var url_construct_2400x2400


function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
}
const check_image_exists_in_server =  (url) =>{
    

    var _response = true

    return new Promise(async(resolve, reject) => {
        // create an XHR object
        await checkImage(url, ()=>{resolve(true)}, ()=>{resolve(false)}  )
     });
   


      
    // let promise = new Promise(function(resolve, reject) {
    //     setTimeout(() => reject(new Error("Whoops!")), 1000);
    //   });
      
    //   // reject runs the second function in .then
    //   promise.then(
    //     result => alert(result), // doesn't run
    //     error => alert(error) // shows "Error: Whoops!" after 1 second
    //   );
    
    

      // Sample usage
 
// return _response
    // return _response;
    //  fetch(url, { method: 'HEAD' })
    // .then(status)
    //     //   .then(json)
    // .then( res => {
    //     if ( res.ok) {
    //         _response = true
    //         // console.log('Image exists.');
    //     } else {
           
    //         _response = false
    //         // console.log('Image does not exist.');
    //     }
    // }).catch(err => {_response = false});

    // return _response
}

var screen_width_type = () => {
    // const {window_width, browser_type} = await lambda_func_front_end()
    var window_width = localStorage.browserDetails ? JSON.parse(localStorage.getItem('browserDetails')) : {}

    screenWidth()
    var _calc = () => {

        var width_of_filters_20_percentage = ((window_width.browser_width - (window_width.browser_width * 0.2)) / colSize)
        var subtracting_spacesaroundcard = width_of_filters_20_percentage - (width_of_filters_20_percentage * 0.1)
        return subtracting_spacesaroundcard

    }
    calc_card_resolution = _calc()

    // var sizes = [275, 300, 350, 375, 400, 500, 600, 675, 700, 775, 800, 900, 975, 1000, 1100, 2400]
    var sizes = [60,70,80,90,
        100,
        125,
        150,
        175,
        200,
        225,
        250,
        275,
        300,
        325,
        350,
        375,
        400,
        425,
        450,
        475,
        500,
        525,
        550,
        575,
        600,
        625,
        650,
        675,
        700,
        725,
        750,
        775,
        800,
        825,
        850,875,900,925,950,975,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400]
    // [50,60,70,80,90,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400]
    for (var i = 0; i <= sizes.length; i++) {
        if ((calc_card_resolution + calc_card_resolution) === sizes[i] || (calc_card_resolution + calc_card_resolution) < sizes[i]) {
            img_res = sizes[i]
            // check_image_exists_in_server()
            break;
        }
        else {
            if (sizes.length - 1 === i) {
                img_res = sizes[i]
            }
        }
    }
    return img_res
}
// console.log('screen_width_type()', screen_width_type())
// const baseUi = "https://assets-cdn.stylori.com/";
// const injectUrl = (url, baseUi) => url ? resolutions.map(k => ({ ...k, img: `${baseUi}${url.imageUrl===undefined  ? url : url.imageUrl}` })) : [];
const injectUrl = async (url, baseUi) => {
    
    var browser_type = JSON.parse(localStorage.getItem('browserDetails'))
    var resolution = screen_width_type()
    var _resolutions = `${resolution}X${resolution}`
    var _resolutions_1000x1000 = "1000X1000"
    var _resolutions_2400x2400 = "2400X2400"
    var url_split;
    var url_split_1000X1000;
    var url_split_2400X2400;
    var extension_split;
    var url_construct;
    var browser_type_append;
    var extension_split_1000x1000;
    var extension_split_2400x2400;
    var browser_type_append_1000x1000;
    var browser_type_append_2400x2400;

    if (url && url.imageUrl.length > 0) {

        url_split = url.imageUrl.split('/')
        url_split_1000X1000 = url.imageUrl.split('/')
        url_split_2400X2400 = url.imageUrl.split('/')
        extension_split = url_split[url_split.length - 1]
        extension_split_1000x1000 = url_split_1000X1000[url_split_1000X1000.length - 1]
        extension_split_2400x2400 = url_split_2400X2400[url_split_2400X2400.length - 1]
        browser_type_append = extension_split.split('\.')[0].concat(`${browser_type.browser_type}`)
        browser_type_append_1000x1000 = extension_split_1000x1000.split('\.')[0].concat(`${browser_type.browser_type}`)
        browser_type_append_2400x2400 = extension_split_2400x2400.split('\.')[0].concat(`${browser_type.browser_type}`)
        url_split[url_split.length - 1] = browser_type_append
        url_split_1000X1000[url_split_1000X1000.length - 1] = browser_type_append_1000x1000
        url_split_2400X2400[url_split_2400X2400.length - 1] = browser_type_append_2400x2400
        url_split.splice(2, 0, _resolutions);
        url_split_1000X1000[url_split_1000X1000.length - 1] = browser_type_append_1000x1000
        url_split_2400X2400[url_split_2400X2400.length - 1] = browser_type_append_2400x2400
        url_split_1000X1000.splice(2, 0, _resolutions_1000x1000);
        url_split_2400X2400.splice(2, 0, _resolutions_2400x2400);
        url_construct = url_split.join().replace(/\,/g, '/')
        url_construct_1000x1000 = url_split_1000X1000.join().replace(/\,/g, '/')
        url_construct_2400x2400 = url_split_2400X2400.join().replace(/\,/g, '/')
        
        url_construct = await check_image_exists_in_server(`${baseUi}${url_construct}`) ? url_construct : await check_image_exists_in_server(`${baseUi}${url_construct_1000x1000}`) ? url_construct_1000x1000 : url_construct_2400x2400
    }
    else {
        var img_not_found = "product/productnotfound.webp"
        url_split = img_not_found.split('/')
        extension_split = url_split[url_split.length - 1]
        browser_type_append = extension_split.split('\.')[0].concat(`${browser_type.browser_type}`)
        url_split[url_split.length - 1] = browser_type_append
        url_split.splice(1, 0, _resolutions);
        url_construct = url_split.join().replace(/\,/g, '/')
    }


    var img_url = { img: `${baseUi}${url_construct}` }
    return img_url
}
// const valuesinjectUrl = (imageUrl, cdnUrl) => injectUrl(imageUrl, cdnUrl);in
const placeImages = (placeImage) => placeImage.find(fd => !fd.ishover);
const hoverImage = (placeImage) => placeImage.find(fd => fd.ishover);


export  const _mainFunc = async (data, cdnUrl) => {
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists;
    } catch (error) {
        mapperdata = [];
    }
    return new Promise(async (resolve, reject) => {
        const calls = mapperdata.map(async k => {
        
            let a = await injectUrl(placeImages(k.productImagesByProductId), cdnUrl)
            let b = await injectUrl(hoverImage(k.productImagesByProductId), cdnUrl) 
            
            let _d;
            try {
                _d = {
                    totalCount: data.data.totalCount,
                    price: (k.trans_sku_lists[0] === undefined) ? 15343 : k.trans_sku_lists[0].discountPrice,
                    offerPrice: k.trans_sku_lists[0] === undefined ? 13203 : k.trans_sku_lists[0].markupPrice,
                    title: k.productName,
                    save: '5999.9',
                    image: {
                        placeImage: a,
                        hoverImage: b,
    
                    },
                    productId: k.productId,
    
                    diamondType: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].diamondType,
                    metalColor: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].metalColor,
                    purity: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].purity,
                    skuSize: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].skuSize,
                    // material:k.productMaterialsByProductSku[0] === undefined ? '' : k.productMaterialsByProductSku[0].materialName,
                    productType: k.productType,
                    skuId: k.trans_sku_lists[0].generatedSku,
                    oneDayShipping: k.trans_sku_lists[0].isReadyToShip,
                    imageResolution: { img_res: img_res, url_1000x1000: url_construct_1000x1000 },
                    skuUrl: k.trans_sku_lists[0].skuUrl,
                    skuID:  k.trans_sku_lists[0].skuID,
                    discount:k.trans_sku_lists[0].discount
    
                }
            } catch (error) {
            }
            return _d;
        })
       Promise.all(calls).then(data => {
           debugger
       resolve(data);
     })
       .catch(err => {
        debugger
         console.log(err);
       })
    })
}

export default function (data, cdnUrl) {
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(async k => {
        
        let a = await injectUrl(placeImages(k.productImagesByProductId), cdnUrl)
        let b = await injectUrl(hoverImage(k.productImagesByProductId), cdnUrl) 
        
        let _d;
        try {
            _d = {
                totalCount: data.data.totalCount,
                price: (k.trans_sku_lists[0] === undefined) ? 15343 : k.trans_sku_lists[0].discountPrice,
                offerPrice: k.trans_sku_lists[0] === undefined ? 13203 : k.trans_sku_lists[0].markupPrice,
                title: k.productName,
                save: '5999.9',
                image: {
                    placeImage: a,
                    hoverImage: b,

                },
                productId: k.productId,

                diamondType: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].diamondType,
                metalColor: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].metalColor,
                purity: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].purity,
                skuSize: k.trans_sku_lists[0] === undefined ? '' : k.trans_sku_lists[0].skuSize,
                // material:k.productMaterialsByProductSku[0] === undefined ? '' : k.productMaterialsByProductSku[0].materialName,
                productType: k.productType,
                skuId: k.trans_sku_lists[0].generatedSku,
                oneDayShipping: k.trans_sku_lists[0].isReadyToShip,
                imageResolution: { img_res: img_res, url_1000x1000: url_construct_1000x1000 },
                skuUrl: k.trans_sku_lists[0].skuUrl,
                skuID:  k.trans_sku_lists[0].skuID,
                discount:k.trans_sku_lists[0].discount

            }
        } catch (error) {
        }
        return _d;
    })
    // console.info('_format', _format);
    
    return _format;
}
// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)