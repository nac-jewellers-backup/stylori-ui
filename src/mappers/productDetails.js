import { resolutions } from "utils";
import { CDN_URL } from 'config'
import moment from "moment";





// 

var colSize = null
var colSize_like_view = null
var img_res_X_2 = null;
var my_actual_size = null;
const width = window.innerWidth;
const screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
        colSize = 2.1;
    }
    else if (width > 1440) {
        colSize = 2.1;
    }
    else if (width > 1024) {
        colSize = 2.1;
    }
    else if (width > 960) {
        colSize = 2.1;
    }
    else if (width > 760) {
        colSize = 2.1;
    }
    else if (width < 760) {
        colSize = 2.1;
    }
}

const screen_width_type_like_view = () => {

    if (width > 2555) {
        colSize_like_view = 4;
    }
    else if (width > 1440) {
        colSize_like_view = 4;
    }
    else if (width > 1024) {
        colSize_like_view = 4;
    }
    else if (width > 960) {
        colSize_like_view = 2;
    }
    else if (width > 760) {
        colSize_like_view = 1;
    }
    else if (width < 760) {
        colSize_like_view = 1;
    }
}

var img_res;
var screen_width_type = (screen_res, largeImageZoom) => {
    // const {window_width, browser_type} = await lambda_func_front_end()
    var window_width = JSON.parse(localStorage.getItem('browserDetails'))


    var _calc = () => {
        var width_of_filters_20_percentage = ((window_width.browser_width - (window_width.browser_width * 0.2)) / screen_res)
        var subtracting_spacesaroundcard = width_of_filters_20_percentage - (width_of_filters_20_percentage * 0.1)
        return subtracting_spacesaroundcard
    }
    var calc = _calc()
    console.log(calc+"sssss")
    // var img_res;
    var sizes = [275, 300, 350, 375, 400, 500, 600, 675, 700, 775, 800, 900, 975, 1000, 1100, 2400]
    // [50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]
    if (largeImageZoom) {
        img_res = 1000
    }
    else {
        for (var i = 0; i <= sizes.length; i++) {
            if (calc === sizes[i] || calc < sizes[i]) {

                img_res = sizes[i]
                my_actual_size= sizes[i]
                img_res_X_2 = sizes[i]
                break;
            }


            else {
                if (sizes.length - 1 === i) {
                    img_res = sizes[i]
                    my_actual_size= sizes[i]
                }
            }
        }
        for (var i = 0; i <= sizes.length; i++) {
            if (calc * 2 === sizes[i] || calc * 2 < sizes[i]) {

                img_res_X_2 = sizes[i]
                
                break;
            }


            else {
                if (sizes.length - 1 === i) {
                    img_res_X_2 = sizes[i]
                }
            }
        }
    }
    return img_res
}
screen_width_type_like_view()
screenWidth()
// console.log('screen_width_type()',screen_width_type())

// const baseUi = "https://assets-cdn.stylori.com/";
// const injectUrl = (url, baseUi) => url ? resolutions.map(k => ({ ...k, img: `${baseUi}${url.imageUrl===undefined  ? url : url.imageUrl}` })) : [];
const injectUrl_url_construct = (url, baseUi, screen_res, largeImageZoom) => {
    var browser_type = JSON.parse(localStorage.getItem('browserDetails'))
    if (browser_type !== undefined && url !== undefined && url && url.imageUrl.length > 0 && screen_res !== undefined && baseUi !== undefined) {
        var resolution = screen_width_type(screen_res, largeImageZoom)
        var _resolutions = width < 960 ? `${resolution * 2}X${resolution * 2}` : `${resolution}X${resolution}`
        var url_split = url && url.imageUrl.split('/')
        var extension_split = url_split && url_split[url_split.length - 1]
        var browser_type_append = extension_split && extension_split.split('\.')[0].concat(`${browser_type && browser_type.browser_type}`)

        url_split[url_split && url_split.length - 1] = browser_type_append
        url_split.splice(2, 0, _resolutions);
        var url_construct = url_split.join().replace(/\,/g, '/')
        var img_url = `${baseUi}${url_construct}`
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


    return img_url

}

// video validation

const handleVideoCheck = (url) => {
    var extensionVideoLists = ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'mp2', 'mpeg', 'mpe', 'mpv', 'ogg', 'm4p', 'wmv', 'mov', 'qt', 'flv', 'swf', 'avchd'];
    if (url) {
        if (url.length > 0) {
            var array_split = url.split(/\.(?=[^\.]+$)/);
            const found = extensionVideoLists.find(element => element.toLowerCase() === array_split[1]);
            if (found) {
                return true
            }
            else return false
        }
    }
    else {
        return false
    }
}





const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))
const generateImgurls = (PD, val, screen_res, tabsChange) => {


    var arrOfurls = []
    var arrOfurls_2X = []
    var imgurlsplit = null
    var metalcolor = null
    var metalcolor2 = null
    var largeImageZoom = true
    val.map(imgurl => {

        if (!handleVideoCheck(imgurl.imageUrl)) {
            if (imgurl.imageUrl.split('.')[0].split('-')[1].length > 2) {

                imgurlsplit = imgurl.imageUrl.split('.')[0].split('-')[1].substr(1)
            }
            else {
                imgurlsplit = imgurl.imageUrl.split('.')[0].charAt(imgurl.imageUrl.split('.')[0].length - 1)
            }
            // var imgurlsplit 
            if (PD.metalColor.split(' ').length > 1) {
                var colorOne = PD.metalColor.split(' ')[0].charAt(0)
                var colorTwo = PD.metalColor.split(' ')[1].charAt(0)
                metalcolor = colorOne.concat(colorTwo)
                metalcolor2 = colorTwo.concat(colorOne)
            }
            else {
                if (PD && PD.metalColor) metalcolor = PD.metalColor.charAt(0)
                else metalcolor = ''
            }

            // if (imgurlsplit === metalcolor) {

            // arrOfurls.push(injectUrl_url_construct(imgurl, CDN_URL, screen_res))

            // }
            if (!tabsChange) {

                if (imgurlsplit === metalcolor || imgurlsplit === metalcolor2) {

                    arrOfurls.push(injectUrl_url_construct(imgurl, CDN_URL, screen_res))
                    arrOfurls_2X.push(injectUrl_url_construct(imgurl, CDN_URL, screen_res, largeImageZoom))

                }
            }
            else {
                arrOfurls.push(injectUrl_url_construct(imgurl, CDN_URL, screen_res))
                arrOfurls_2X.push(injectUrl_url_construct(imgurl, CDN_URL, screen_res, largeImageZoom))
            }

            return { arrOfurls, arrOfurls_2X }
        }
        else {
            arrOfurls.push(`${CDN_URL}${imgurl.imageUrl}`)
            arrOfurls_2X.push(`${CDN_URL}${imgurl.imageUrl}`)
            return { arrOfurls, arrOfurls_2X }
        }
    }

    )

    return { arrOfurls, arrOfurls_2X }

}


const calculatetotalms = (arr, name, price) => {

    var a = 0;
    var filtering = arr.map(val => {
        var nameValidator = () => {
            if (name === "gemstone") {
                return val.component.slice(0, 8)
            }
            else {
                return val.component.split('_')[0].slice(0, 7)
            }
        }
        if (nameValidator() === name) {

            return val[price]
        }
        else {
            return 0
        }

    })

    a = filtering.reduce((a, b) => a + b, 0)
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a));
}
const generatedDiamondType = (PD, valProductDiamond, type) => {
    var arrOfdiamondType = []
    valProductDiamond.map(val => { if (val.diamondType === PD.diamondType) { arrOfdiamondType.push(val[type]) } return arrOfdiamondType })
    return arrOfdiamondType
}
const gemstoneType = (PD, valGemstoneType, type) => {
    var arrOfGemstoneType = []
    valGemstoneType.map(val => {
        PD.map(valPD => {
            if (val.gemstoneType === valPD.gemstoneType) { arrOfGemstoneType.push(val[type]) } return arrOfGemstoneType
        })
    })
    return arrOfGemstoneType
}
// if (val.gemstoneType === PD.gemstoneType) { arrOfGemstoneType.push(val[type]) } return arrOfGemstoneType })
const generatedimondClarity = (val) => {
    var a = [...new Set(val.map(P => P.diamondType))]

    return a.map(P => ({
        name: P,
        icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
    }))
}
const generateShipsBy = (readytoship, vendorDeliveryTime) => {
    var isReadytoShip = readytoship
    var numberOfDays = vendorDeliveryTime
    var date = moment().format(' h a')
    if (isReadytoShip) {
        if (JSON.stringify(date) > " 1 pm") {
            return 'Ships by' + ' ' + moment().add(1, 'days').format('Do MMMM YYYY');
        }
    }

    else {
        return 'Ships by' + ' ' + moment().add(numberOfDays, 'days').format('Do MMMM YYYY');
    }
}
const sorting = (val) => {

    if (val.sizeVarient) {
        var a = val.sizeVarient.split(',')
        var b = a.map(val => {

            if (isNaN(Number(val))) {
                return val
            }
            else {
                return Number(val)
            }

        })

        var c = function myFunction() {
            b.sort(function (a, b) { return a - b });
            return b
        }
        return c()
    }
    else {
        return null
    }

}
const handle_mapper = (val) => {
    var _obj = {}
    if (val) {
        var _split = val.split(',')
        _split.map((val, i) => { _obj[`img${i}`] = val })
        return [_obj]
    }
    else {
        return null
    }

}
// icon: "https://img.icons8.com/color/48/000000/gold-bars.png"})
export default function (data, like_data, viewedddatas, rating, tabsChange) {

    let mapperdata = [];
    try {
        // mapperda = ;
        mapperdata = data.data.allTransSkuLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(PD => {

        let _d;
        try {
            _d = {
                message: rating && rating.CodData && rating.CodData.data && rating.CodData.data.allCustomerReviews.nodes,
                // title: rating.CodData.data.allCustomerReviews.nodes[0].title,
                // ratings: rating.CodData.data.allCustomerReviews.nodes[0].rating,
                productId: PD.productListByProductId ? PD.productListByProductId.productId : '',
                title: PD && PD.productListByProductId && PD.productListByProductId.productName ? PD.productListByProductId.productName : '',
                skuId: PD && PD === undefined ? '' : PD.generatedSku,
                price: PD && PD.discountPrice ? PD.discountPrice : '',
                offerPrice: PD && PD.markupPrice ? PD.markupPrice : '',
                save: '5999.9',
                offerDiscount: PD && PD.discount ? `${PD.discount}% OFF` : null,
                dis: PD && PD !== undefined && PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription !== '' ? PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription : '',
                productType: PD.productListByProductId.productType && PD.productListByProductId.productType,
                fadeImages: (PD &&
                    PD.productListByProductId &&
                    PD.productListByProductId.productImagesByProductId) &&
                    PD.productListByProductId.productImagesByProductId.nodes.length > 0 ?
                    generateImgurls(PD, PD.productListByProductId.productImagesByProductId.nodes, colSize, tabsChange) : { arrOfurls: [`${CDN_URL}product/575X575/productnotfound.webp`, `${CDN_URL}product/575X575/productnotfound.webp`, `${CDN_URL}product/575X575/productnotfound.webp`], arrOfurls: [`${CDN_URL}product/575X575/productnotfound.webp`, `${CDN_URL}product/575X575/productnotfound.webp`, `${CDN_URL}product/575X575/productnotfound.webp`] },
                image_resolution: img_res ? img_res : 1000,
                image_resolution_two: img_res_X_2 ? img_res_X_2 : 1000,
                    size: my_actual_size ?  my_actual_size : 500,
                size_guide: PD && PD.transSkuDescriptionsBySkuId && PD.transSkuDescriptionsBySkuId.nodes &&
                    PD.transSkuDescriptionsBySkuId.nodes.length > 0 && PD.transSkuDescriptionsBySkuId.nodes[0] &&
                    PD.transSkuDescriptionsBySkuId.nodes[0].ringsizeImage ? PD.transSkuDescriptionsBySkuId.nodes[0].ringsizeImage : null,
                certificates: PD && PD.transSkuDescriptionsBySkuId && PD.transSkuDescriptionsBySkuId.nodes &&
                    PD.transSkuDescriptionsBySkuId.nodes.length > 0 && PD.transSkuDescriptionsBySkuId.nodes[0] &&
                    PD.transSkuDescriptionsBySkuId.nodes[0].certificate ? handle_mapper(PD.transSkuDescriptionsBySkuId.nodes[0].certificate) : null,

                productsubHeaderlist: [{
                    name: "From the House of NAC",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Quality Assurance",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Easy Returns",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Diverse Styles",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Secure Payments",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Gold Coins",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                }],

                productTabs: [{
                    tab1: {
                        header: `${PD.productListByProductId.productType ? PD.productListByProductId.productType : null} Size`,
                        headerBangle: `${PD.productListByProductId.productType ? PD.productListByProductId.productType : null} Size`,
                        Children: PD.productListByProductId && sorting(PD.productListByProductId)
                    },
                    tab2: {
                        header: "Metal Purity",
                        // purity: PD.transSkuListsByProductId.nodes!==undefined?(PD.transSkuListsByProductId.nodes).map(P => (P.purity)):"",
                        // metalColor: (PD.transSkuListsByProductId.nodes).map(P => (P.metalColor)),
                        Children: PD.productListByProductId && PD.productListByProductId.colourVarient,
                    },
                    tab3: {
                        header: "Diamond Clarity",
                        Children:
                            PD.productListByProductId.productDiamondsByProductSku.nodes &&
                            generatedimondClarity(PD.productListByProductId.productDiamondsByProductSku.nodes)
                        // var c = [...new Set(temp1.map(bill => bill.name))]

                    }
                }],

                ProductContactNum: [{
                    telephone: '1800-102-0330',
                    phonenum: "+91 99526 25252",
                    chat: "Chat",
                    shipby: generateShipsBy(PD.isReadyToShip, PD.vendorDeliveryTime),
                    isReadyToShip: PD.isReadyToShip
                }],
                // //////////////////////////     productsDetails    ////////////////////////////////////////////
                productsDetails: [{
                    header: "Product Details",
                    namedetail: [{
                        name: "Product Code",
                        details: PD && PD.generatedSku !== '' ? PD.generatedSku : ''
                    },
                    {
                        name: "Metal Type",
                        details: PD && PD.purity + ' ' + PD.metalColor
                    }, {
                        name: "Approx Metal Weight (in gm)",
                        details: PD && PD.skuWeight ? PD.skuWeight : null
                    },

                    {

                        name: PD && PD.skuSize ? "Size" : '',
                        details: PD && PD.generatedSku !== '' ? PD.skuSize : ''
                    },
                    {

                        name: PD && PD.productListByProductId.width ? "Height (in mm)" : '',
                        details: PD && PD.productListByProductId.width !== '' ? PD.productListByProductId.width : ''
                    },
                    {

                        name: PD && PD.productListByProductId.height ? "Width (in mm)" : '',
                        details: PD && PD.productListByProductId.height !== '' ? PD.productListByProductId.height : ''
                    }
                    ],
                },

                {
                    header: "Diamond Details",
                    namedetail:
                        PD && PD.productListByProductId && PD.productListByProductId.productDiamondsByProductSku &&
                            PD.productListByProductId.productDiamondsByProductSku.nodes && PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0 ?
                            [
                                {
                                    name: "Total No of Diamonds",
                                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'stoneCount')
                                },

                                {
                                    name: "Color",
                                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) && generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondColour')

                                },

                                {
                                    name: "Clarity",
                                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondClarity')
                                },
                                {
                                    name: "Total Weight (in Carat)",
                                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'stoneWeight')
                                },
                                {
                                    name: "Setting Type",
                                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondSettings')
                                },
                                {
                                    name: "Shape",
                                    details: PD.productListByProductId.productDiamondsByProductSku.nodes &&
                                        (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondShape')
                                }]
                            :
                            []
                },
                {
                    header: "Gemstone Details",
                    namedetail:
                        PD && PD.productListByProductId && PD.productListByProductId.productGemstonesByProductSku &&
                            PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length > 0
                            ?
                            [{
                                name: "Stone Type",
                                details: PD.productListByProductId.productGemstonesByProductSku.nodes &&
                                    PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                                    gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                                        PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneType')
                            },
                            {
                                name: "Shape",
                                details: PD.productListByProductId.productGemstonesByProductSku.nodes &&
                                    PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                                    gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                                        PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneShape')

                            },
                            {
                                name: "Total No of Stones",
                                details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                                    gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                                        PD.productListByProductId.productGemstonesByProductSku.nodes, 'stoneCount')
                            },
                            {
                                name: "Size (in mm)",
                                details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                                    gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                                        PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneSize')
                            },

                            {
                                name: "Setting",
                                details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                                    gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                                        PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneSetting')
                            },
                            {
                                name: "Weight (Carat)",
                                details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                                    gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                                        PD.productListByProductId.productGemstonesByProductSku.nodes, 'stoneWeight')
                            }
                            ]
                            :
                            []
                },

                {
                    header: "Price Breakup",
                    namedetail: [{
                        name: "Metal",
                        details: [calculatetotalss(PD.pricingSkuMetalsByProductSku.nodes, "goldprice"), calculatetotalm(PD.pricingSkuMetalsByProductSku.nodes, "goldprice")]

                    },
                    {
                        name: "Diamond",
                        details:
                            PD && PD.productListByProductId && PD.productListByProductId.productDiamondsByProductSku &&
                                PD.productListByProductId.productDiamondsByProductSku.nodes && PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0 ?
                                [

                                    PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                                        calculatetotalms(PD.pricingSkuMaterialsByProductSku.nodes, "diamond", "discountPrice"
                                        ) : 0,
                                    PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                                        calculatetotalms(PD.pricingSkuMaterialsByProductSku.nodes, "diamond", "markup") : 0
                                ]
                                :
                                []

                    },
                    {
                        name: "Gemstone",
                        details:
                            PD && PD.productListByProductId && PD.productListByProductId.productGemstonesByProductSku &&
                                PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length > 0 ?

                                [PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                                    calculatetotalms(PD.pricingSkuMaterialsByProductSku.nodes, "gemstone", "discountPrice") : 0,
                                PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                                    calculatetotalms(PD.pricingSkuMaterialsByProductSku.nodes, "gemstone", "markup") : 0
                                ]
                                :
                                []
                    },
                    {
                        name: "Making Charges",
                        details: [calculatetotal(PD.pricingSkuMetalsByProductSku.nodes, "makingcharge"), calculatetotals(PD.pricingSkuMetalsByProductSku.nodes, "makingcharge")]
                    },
                    {
                        name: "GST",
                        details:
                            [new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.discountPriceTax)), new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.markupPriceTax))]
                    },
                    {
                        name: "Total",
                        details:
                            [new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.discountPrice)), new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.markupPrice))],
                    }],
                },
                ],
                productsubHead: [
                    {
                        name: "From the House of NAC",
                        icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                        url: "/#/",
                    },
                    {
                        name: "Quality Assurance",
                        icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                        url: "/#/",
                    },
                    {
                        name: "Easy Returns",
                        url: "/#/",
                        icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                    },
                    {
                        name: "Diverse Styles",
                        url: "/#/",
                        icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                    },
                    {
                        name: "Secure Payments",
                        url: "/#/",
                        icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                    },
                    {
                        name: "Gold Coins",
                        url: "/#/",
                        icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                    },
                ],
                productsPendants: [{
                    header: PD && PD !== undefined && PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription !== '' ? PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription : '',
                    name: [
                        '#EveryDay', '#Female', '#THree Stone', '#Spots', '#Special Occasion', '#Designer', '#Essentails', '#EveryDay', '#Female', '#THree Stone', '#Spots', '#Special Occasion', '#Designer', '#Essentails',]
                }],
                // like_data.data.youMayalsolike1.nodes
                fadeImageSublist:
                    like_data && like_data.data && Object.entries(like_data.data).length > 0 && like_data.data.youMayalsolike1 && (like_data.data.youMayalsolike1.nodes.length !== 0 || like_data.data.youMayalsolike2.nodes.length !== 0) ?
                        like_data.data.youMayalsolike1 && like_data.data.youMayalsolike1.nodes.length > 0 ?
                            like_data.data.youMayalsolike1.nodes.map(
                                val => {

                                    return ({
                                        img: `${CDN_URL}${val && val.productImagesByProductId && val.productImagesByProductId.nodes}` &&
                                            injectUrl_url_construct(val.productImagesByProductId.nodes[0] && val.productImagesByProductId.nodes[0], CDN_URL, colSize_like_view),

                                        title: val && val.productName && val.productName,
                                        price: val && val.transSkuListsByProductId && val.transSkuListsByProductId.nodes && val.transSkuListsByProductId.nodes.length > 0 && val.transSkuListsByProductId.nodes[0] && val.transSkuListsByProductId.nodes[0].discountPrice && val.transSkuListsByProductId.nodes[0].discountPrice ? Math.round(val.transSkuListsByProductId.nodes[0].discountPrice) : 0,
                                        url: val && val.transSkuListsByProductId && val.transSkuListsByProductId.nodes && val.transSkuListsByProductId.nodes.length > 0 && val.transSkuListsByProductId.nodes[0] && val.transSkuListsByProductId.nodes[0].skuUrl ? val.transSkuListsByProductId.nodes[0].skuUrl : ''
                                    })
                                }
                            )
                            :
                            like_data && like_data.data && like_data.data.youMayalsolike2 && like_data.data.youMayalsolike2.nodes ?

                                like_data.data.youMayalsolike2.nodes.map(

                                    val => {

                                        return ({
                                            img: `${CDN_URL}${val && val.productImagesByProductId && val.productImagesByProductId.nodes}` ?
                                                injectUrl_url_construct(val.productImagesByProductId.nodes[0] && val.productImagesByProductId.nodes[0], CDN_URL, colSize_like_view) : [],
                                            title: val && val.productName ? val.productName : '',
                                            price: val && val.transSkuListsByProductId && val.transSkuListsByProductId.nodes && val.transSkuListsByProductId.nodes.length > 0 && val.transSkuListsByProductId.nodes[0].discountPrice && val.transSkuListsByProductId.nodes[0].discountPrice ? Math.round(val.transSkuListsByProductId.nodes[0].discountPrice) : 0,
                                            url: val && val.transSkuListsByProductId && val.transSkuListsByProductId.nodes && val.transSkuListsByProductId.nodes.length > 0 && val.transSkuListsByProductId.nodes[0] && val.transSkuListsByProductId.nodes[0].skuUrl ? val.transSkuListsByProductId.nodes[0].skuUrl : ''
                                        })
                                    }
                                )
                                :
                                []
                        :
                        [],
                fadeImageSublistRecentlyViewed: viewedddatas && viewedddatas.data && Object.entries(viewedddatas.data).length > 0 && viewedddatas.constructor === Object && viewedddatas.data.allTransSkuLists.nodes.length > 0 ?

                    viewedddatas.data.allTransSkuLists.nodes.map(val => {
                        return ({
                            img: `${CDN_URL}${val && val.productListByProductId && val.productListByProductId.productImagesByProductId.nodes}` &&
                                injectUrl_url_construct(val.productListByProductId.productImagesByProductId.nodes[0] && val.productListByProductId.productImagesByProductId.nodes[0], CDN_URL, colSize_like_view),
                            title: val.productListByProductId.productName,
                            price: Math.round(val.discountPrice),
                            url: val && val.skuUrl ? val.skuUrl : ''
                        })
                    })
                    :
                    []

            }
        }
        catch (e) {
            // console.log("product detail page error", "-----", e)
        }

        return _d
    })
    return _format;
}


const calculatetotal = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.discountPrice))
        }
    }
    );
    return a;
}
const calculatetotals = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.markup))
        }
    });
    return a;
}
const calculatetotalm = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.discountPrice))
        }
    });
    return a;
}
const calculatetotalss = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.markup))
        }
    });
    return a;
}
